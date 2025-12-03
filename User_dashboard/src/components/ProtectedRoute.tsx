
import { useEffect, useState } from "react";
import { getUser, signInRedirect } from "../services/authService";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user && !user.expired) {
        setAuthed(true);
      } else {
        // not logged in -> start signin flow
        await signInRedirect();
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <div>Checking authentication...</div>;
  if (!authed) return <div>Redirecting to sign-in...</div>;
  return children;
}
