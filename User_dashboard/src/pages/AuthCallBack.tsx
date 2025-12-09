import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleSigninCallback } from "../services/authService";

export default function AuthCallback() {
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {    
    if (hasRun.current) return;
    hasRun.current = true;

    (async () => {
      try {
        await handleSigninCallback();
        navigate("/userdashboard/profile", { replace: true });
      } catch (err) {
        console.error("Error handling signin callback:", err);
        navigate("/", { replace: true });
      }
    })();
  }, [navigate]);

  return <div>Signing you in...</div>;
}
