import { UserRound } from "lucide-react"
import { AudioLines } from "lucide-react"
import { FileStack } from "lucide-react"
const Sidebar = () => {
  return (
    <>
      <div className="w-72 bg-neutral-900 p-4">
        <h1 className="text-l font-sans mb-8 text-white">AUDIO REALITIES</h1><hr className="text-white" /><br />
        <nav className="space-y-3 text-sm text-gray-300">
          <a href="/userdashboard/profile" className=" flex flex-row gap-3 px-2 py-1 rounded text-white active:bg-neutral-600 hover:border-r-3 border-[#00FFA3]"><UserRound className="size-4" /> Profile</a>
          <a href="/userdashboard/voicevault" className="flex flex-row gap-3  px-2 py-1 rounded text-white active:bg-neutral-600 hover:border-r-3 border-[#00FFA3]"><AudioLines className="size-4" /> Voice Vault</a>
          <a href="/userdashboard/projectpage" className="flex flex-row gap-3  px-2 py-1 rounded text-white active:bg-neutral-600 hover:border-r-3 border-[#00FFA3]"><FileStack className="size-4" /> Project</a>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
