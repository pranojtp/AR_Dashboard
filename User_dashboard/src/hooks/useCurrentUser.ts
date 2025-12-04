import { useEffect, useState } from "react";
import { getUser as getOidcUser } from "../services/authService";
import userService from "../services/userService";

export default function useCurrentUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);
      try {
        const oidcUser = await getOidcUser();

        if (!oidcUser) {
          setError("User not signed in");
          return;
        }

        const sub =
          oidcUser.profile?.sub ||
          oidcUser.profile?.["cognito:username"];

        if (!sub) {
          throw new Error("Could not read Cognito user ID");
        }

        const res = await userService.getSpecificUser(sub);

        if (mounted) setUser(res.data);

      } catch (err: any) {
        console.error("useCurrentUser error:", err);
        if (mounted) setError(err.message ?? "Failed to fetch user");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false };
  }, []);

  return { user, loading, error };
}
