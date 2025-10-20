import { UserRound } from "lucide-react"
import { AudioLines } from "lucide-react"
import { FileStack } from "lucide-react"
import { Settings } from "lucide-react"
const Sidebar = () => {
  return (
    <>
      <div className="w-72 h-screen bg-neutral-900 p-4 flex flex-col justify-between">
        
        <div>
          <h1 className="text-l font-sans mb-8 text-white">AUDIO REALITIES</h1>
          <hr className="text-white mb-4" />
          <nav className="space-y-3 text-sm text-gray-300">
            <a
              href="/userdashboard/profile"
              className="flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] active:bg-neutral-600"
            >
              <UserRound className="size-4" /> Profile
            </a>
            <a
              href="/userdashboard/voicevault"
              className="flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] active:bg-neutral-600"
            >
              <AudioLines className="size-4" /> Voice Vault
            </a>
            <a
              href="/userdashboard/projectpage"
              className="flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] active:bg-neutral-600"
            >
              <FileStack className="size-4" /> Project
            </a>
          </nav>
        </div>

        <div>
          <nav className="text-sm text-gray-300">
            <a
              href="/userdashboard/settings/account"
              className="flex flex-row gap-3 px-2 py-1 rounded text-white hover:border-r-4 border-[#00FFA3] active:bg-neutral-600"
            >
              <Settings className="size-4" /> Settings
            </a>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Sidebar
