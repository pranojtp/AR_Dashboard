import Navbar_project from "../components/projects/Navbar_project"
import { Outlet } from "react-router-dom"

const Projectpage = () => {
    return (
        <>
            <div className="flex flex-col h-full bg-neutral-900 text-white">
                {/* Fixed top bar (tabs) */}
                <div className="flex-shrink-0 border-b border-neutral-800">
                    <Navbar_project />
                </div>

                {/* Scrollable bottom content */}
                <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-900">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Projectpage
