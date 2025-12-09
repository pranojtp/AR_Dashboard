// import { useEffect, useState } from "react";
// import { getUser as getOidcUser } from "../services/authService";
// import userService from "../services/userService";

// export default function useCurrentUser() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let mounted = true;

//     (async () => {
//       setLoading(true);

//       try {
//         // get user from Cognito (stored by oidc-client-ts)
//         const oidcUser = await getOidcUser();

//         if (!oidcUser) {
//           setError("User not signed in");
//           return;
//         }

//         // Cognito User ID (sub)
//         const sub =
//           oidcUser.profile?.sub ||
//           oidcUser.profile?.["cognito:username"];

//         if (!sub) {
//           throw new Error("Could not read Cognito user ID");
//         }

//         // Fetch user from your backend API
//         const res = await userService.getSpecificUser(sub);

//         // Adjust this line depending on your backend structure
//         if (mounted) {
//           setUser(res.data); // or res.data.data
//         }

//       } catch (err: any) {
//         console.error("useCurrentUser error:", err);

//         if (mounted) {
//           setError(err.message ?? "Failed to fetch user");
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     })();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return { user, loading, error };
// }

// useCurrentUser.ts
import { useEffect, useState } from "react";
import type { User } from "../types/AppUser";
import { userManager } from "../services/authService";
import userService from "../services/userService";

export default function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);

        const oidcUser = await userManager.getUser();
        if (!oidcUser) {
          setError("User not signed in.");
          return;
        }

        const sub =
          oidcUser.profile?.sub ||
          oidcUser.profile?.["cognito:username"] ||
          null;

        if (!sub) {
          setError("Could not retrieve user ID (sub) from id_token");
          return;
        }                          
        const response = await userService.getUserProfile();
        if (mounted) setUser(response.data);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load user");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { user, loading, error };
}
