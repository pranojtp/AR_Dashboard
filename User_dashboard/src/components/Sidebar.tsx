import { UserRound } from "lucide-react"
import { AudioLines } from "lucide-react"
import { FileStack } from "lucide-react"
import { Settings } from "lucide-react"
import { NavLink } from "react-router-dom"
const Sidebar = () => {
  return (
    <>
      <div className="w-72 h-screen bg-neutral-900 p-4 flex flex-col justify-between">

        <div>
          <h1 className="text-l font-sans mb-8 text-white">AUDIO REALITIES</h1>
          <hr className="text-white mb-4" />
          <nav className="space-y-3 text-sm text-gray-300">
            <NavLink
              to="/userdashboard/profile"
              className={({ isActive }) =>
                `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
                ${isActive
                  ? 'border-r-4 bg-neutral-700'
                  : ''
                }`
              }
            >
              <UserRound className="size-4" /> Profile
            </NavLink>
            <NavLink
              to="/userdashboard/voicevault"
              className={({ isActive }) =>
                `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
                ${isActive
                  ? 'border-r-4 bg-neutral-700'
                  : ''
                }`
              }
            >
              <AudioLines className="size-4" /> Voice Vault
            </NavLink>
            <NavLink
              to="/userdashboard/projectpage"
              className={({ isActive }) =>
                `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
                ${isActive
                  ? 'border-r-4 bg-neutral-700'
                  : ''
                }`
              }
            >
              <FileStack className="size-4" /> Project
            </NavLink>
          </nav>
        </div>

        <div>
          <nav className="text-sm text-gray-300">
            <NavLink
              to="/userdashboard/settings/account"
              className={({ isActive }) =>
                `flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] hover:bg-neutral-700
                ${isActive
                  ? 'border-r-4 bg-neutral-700'
                  : ''
                }`
              }
            >
              <Settings className="size-4" /> Settings
            </NavLink>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Sidebar
