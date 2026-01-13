// import { UserRound } from "lucide-react"
// import { AudioLines } from "lucide-react"
// import { FileStack } from "lucide-react"
// import { Settings } from "lucide-react"
// import { NavLink } from "react-router-dom"
// import { LogOut } from "lucide-react"
// const Sidebar = () => {
//   return (
//     <>
//       <div className="w-72 h-screen bg-neutral-900 p-4 flex flex-col justify-between">

//         <div>
//           <h1 className="text-l font-sans mb-8 text-white">AUDIO REALITIES</h1>
//           <hr className="text-white mb-4" />
//           <nav className="space-y-3 text-sm text-gray-300">
//             <NavLink
//               to="/userdashboard/profile"
//               className={({ isActive }) =>
//                 `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
//                 ${isActive
//                   ? 'border-r-4 bg-neutral-700'
//                   : ''
//                 }`
//               }
//             >
//               <UserRound className="size-4" /> Profile
//             </NavLink>
//             <NavLink
//               to="/userdashboard/voicevault"
//               className={({ isActive }) =>
//                 `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
//                 ${isActive
//                   ? 'border-r-4 bg-neutral-700'
//                   : ''
//                 }`
//               }
//             >
//               <AudioLines className="size-4" /> Voice Vault
//             </NavLink>
//             <NavLink
//               to="/userdashboard/projectpage/createproject"
//               className={({ isActive }) =>
//                 `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
//                 ${isActive
//                   ? 'border-r-4 bg-neutral-700'
//                   : ''
//                 }`
//               }
//             >
//               <FileStack className="size-4" /> Project
//             </NavLink>
//           </nav>
//         </div>

//         <div>
//           <nav className="text-sm text-gray-300">            
//             <NavLink
//               to="/userdashboard/settings/account"        
//               className={({ isActive }) =>
//                 `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
//                 ${isActive
//                   ? 'border-r-4 bg-neutral-700'
//                   : ''
//                 }`
//               }
//             >
//               <Settings className="size-4" /> Settings
//             </NavLink>
//             <NavLink
//               to="/login"
//               className={({ isActive }) =>
//                 `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
//                 ${isActive
//                   ? 'border-r-4 bg-neutral-700'
//                   : ''
//                 }`
//               }
//             >
//               <LogOut className="size-4" />
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//     </>
//   )
// }

import { useLocation, useNavigate } from "react-router-dom";
import {
  UserRound,
  AudioLines,
  FileStack,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isProfileActive = location.pathname === "/userdashboard/profile";
  const isVoiceVaultActive = location.pathname === "/userdashboard/voicevault";
  const isProjectActive = location.pathname.startsWith("/userdashboard/projectpage");
  const isSettingsActive = location.pathname.startsWith("/userdashboard/settings");
  const isLoginActive = location.pathname === "/login";

  const handleLogout = () => {
    const cognitoDomain = import.meta.env.VITE_LOGOUT_COGNITO_DOMAIN;
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;

    const postLogoutRedirectUri = encodeURIComponent(window.location.origin)
    
    const logoutUrl = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${postLogoutRedirectUri}`;
 
    window.location.href = logoutUrl;
    window.location.replace(logoutUrl);
  };
  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="
          hidden md:flex 
          w-64 lg:w-72 
          bg-neutral-900 
          p-4 
          flex-col 
          justify-between 
          fixed 
          md:static 
          h-full 
          overflow-y-auto 
          custom-scroll
        "
      >
        {/* Top */}
        <div>
          <h1 className="text-lg font-medium mb-4 p-2 text-white tracking-wide">
            AUDIO REALITIES
          </h1>
          <hr className="text-white mb-4" />

          <nav className="space-y-3 text-sm text-gray-300">
            <button
              onClick={() => navigate("/userdashboard/profile")}
              className={`flex items-center gap-3 px-2 py-2 w-full text-left rounded text-white
                hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700 transition
                ${isProfileActive ? "border-r-4 bg-neutral-700" : ""}`}
            >
              <UserRound className="size-4" /> Profile
            </button>

            <button
              onClick={() => navigate("/userdashboard/voicevault")}
              className={`flex items-center gap-3 px-2 py-2 w-full text-left rounded text-white
                hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700 transition
                ${isVoiceVaultActive ? "border-r-4 bg-neutral-700" : ""}`}
            >
              <AudioLines className="size-4" /> Voice Vault
            </button>

            <button
              onClick={() => navigate("/userdashboard/projectpage/createproject")}
              className={`flex items-center gap-3 px-2 py-2 w-full text-left rounded text-white
                hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700 transition
                ${isProjectActive ? "border-r-4 bg-neutral-700" : ""}`}
            >
              <FileStack className="size-4" /> Project
            </button>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-6">
          <nav className="text-sm text-gray-300">
            <button
              onClick={() => navigate("/userdashboard/settings/account")}
              className={`flex items-center gap-3 px-2 py-2 w-full text-left rounded text-white
                hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700 transition
                ${isSettingsActive ? "border-r-4 bg-neutral-700" : ""}`}
            >
              <Settings className="size-4" /> Settings
            </button>

            <button
              onClick={handleLogout}
              className={`flex items-center gap-3 px-2 py-2 w-full text-left rounded text-white
                hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700 transition
                ${isLoginActive ? "border-r-4 bg-neutral-700" : ""}`}
            >
              <LogOut className="size-4" /> Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div
        className="
          md:hidden 
          fixed 
          bottom-0 
          left-0 
          right-0 
          bg-neutral-900 
          text-white 
          flex 
          justify-around 
          items-center 
          py-2 
          border-t 
          border-neutral-700 
          z-50 
          pb-[env(safe-area-inset-bottom)]
        "
      >
        <button
          onClick={() => navigate("/userdashboard/profile")}
          className={`flex flex-col items-center text-xs ${isProfileActive ? "text-[#00FFA3]" : "text-gray-400"}`}
        >
          <UserRound className="size-5" />
          <span>Profile</span>
        </button>

        <button
          onClick={() => navigate("/userdashboard/voicevault")}
          className={`flex flex-col items-center text-xs ${isVoiceVaultActive ? "text-[#00FFA3]" : "text-gray-400"}`}
        >
          <AudioLines className="size-5" />
          <span>Vault</span>
        </button>

        <button
          onClick={() => navigate("/userdashboard/projectpage/createproject")}
          className={`flex flex-col items-center text-xs ${isProjectActive ? "text-[#00FFA3]" : "text-gray-400"}`}
        >
          <FileStack className="size-5" />
          <span>Project</span>
        </button>

        <button
          onClick={() => navigate("/userdashboard/settings/account")}
          className={`flex flex-col items-center text-xs ${isSettingsActive ? "text-[#00FFA3]" : "text-gray-400"}`}
        >
          <Settings className="size-5" />
          <span>Settings</span>
        </button>

        <button
          onClick={handleLogout}
          className={`flex flex-col items-center text-xs ${isLoginActive ? "text-[#00FFA3]" : "text-gray-400"}`}
        >
          <LogOut className="size-5" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
