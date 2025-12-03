import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleSigninCallback } from "../services/authService";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await handleSigninCallback(); // this will process the code and store user
        // after successful sign-in, redirect to dashboard
        navigate("/userdashboard/profile", { replace: true });
      } catch (err) {
        console.error("Error handling signin callback:", err);
        // on error send to landing or login page
        navigate("/", { replace: true });
      }
    })();
  }, [navigate]);

  return <div>Signing you in... (please wait)</div>;
}
