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
import { UserRound, AudioLines, FileStack, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Manual active checks
  const isProfileActive = location.pathname === "/userdashboard/profile";
  const isVoiceVaultActive = location.pathname === "/userdashboard/voicevault";
  const isProjectActive = location.pathname.startsWith("/userdashboard/projectpage");
  const isSettingsActive = location.pathname.startsWith("/userdashboard/settings");
  const isLoginActive = location.pathname === "/login";

  return (
    <div className="w-72 h-screen bg-neutral-900 p-4 flex flex-col justify-between">

      {/* Top section */}
      <div>
        <h1 className="text-l font-sans mb-8 text-white">AUDIO REALITIES</h1>
        <hr className="text-white mb-4" />

        <nav className="space-y-3 text-sm text-gray-300">
          <button
            onClick={() => navigate("/userdashboard/profile")}
            className={`flex flex-row gap-3 px-2 py-1 w-full text-left rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
              ${isProfileActive ? 'border-r-4 bg-neutral-700' : ''}`}
          >
            <UserRound className="size-4" /> Profile
          </button>

          <button
            onClick={() => navigate("/userdashboard/voicevault")}
            className={`flex flex-row gap-3 px-2 py-1 w-full text-left rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
              ${isVoiceVaultActive ? 'border-r-4 bg-neutral-700' : ''}`}
          >
            <AudioLines className="size-4" /> Voice Vault
          </button>

          <button
            onClick={() => navigate("/userdashboard/projectpage/createproject")}
            className={`flex flex-row gap-3 px-2 py-1 w-full text-left rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
              ${isProjectActive ? 'border-r-4 bg-neutral-700' : ''}`}
          >
            <FileStack className="size-4" /> Project
          </button>
        </nav>
      </div>

      {/* Bottom section */}
      <div>
        <nav className="text-sm text-gray-300">
          <button
            onClick={() => navigate("/userdashboard/settings/account")}
            className={`flex flex-row gap-3 px-2 py-1 w-full text-left rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
              ${isSettingsActive ? 'border-r-4 bg-neutral-700' : ''}`}
          >
            <Settings className="size-4" /> Settings
          </button>

          <button
            onClick={() => navigate("/login")}
            className={`flex flex-row gap-3 px-2 py-1 w-full text-left rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
              ${isLoginActive ? 'border-r-4 bg-neutral-700' : ''}`}
          >
            <LogOut className="size-4" /> Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
