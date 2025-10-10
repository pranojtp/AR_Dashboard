import { UserRound } from "lucide-react"
import { AudioLines } from "lucide-react"
import { FileStack } from "lucide-react"
const Sidebar = () => {
  return (
    <>
    <div className="w-72 bg-neutral-900 p-4">
      <h1 className="text-xl font-sans mb-8 text-white">AUDIO REALITIES</h1><hr /><br />
      <nav className="space-y-3 text-gray-300">
        <a href="/profile" className=" flex flex-row gap-3 block px-2 py-1 rounded text-white active:bg-neutral-500"><UserRound className="size-5" /> Profile</a>
        <a href="/files" className="flex flex-row gap-3  px-2 py-1 rounded text-white active:bg-neutral-500"><AudioLines className="size-5"/> Voice Vault</a>
        <a href="/project" className="flex flex-row gap-3  px-2 py-1 rounded text-white active:bg-neutral-500"><FileStack className="size-5" /> Project</a>
      </nav>
    </div>
    </>
  )
}

export default Sidebar
