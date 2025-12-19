import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleSigninCallback } from "../services/authService";
import SignLoader from "../components/global/SignLoader";

export default function AuthCallback() {
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {    
    if (hasRun.current) return;
    hasRun.current = true;

    (async () => {
      try {
        const user = await handleSigninCallback();
        
        // Check if user is new
        if (user?.profile?.newUser) {
          navigate("/personaldetails", { replace: true });
        } else {
          navigate("/userdashboard/profile", { replace: true });
        }
      } catch (err) {
        console.error("Error handling signin callback:", err);
        navigate("/", { replace: true });
      }
    })();
  }, [navigate]);

  return <SignLoader />
}
