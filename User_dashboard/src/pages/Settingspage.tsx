import Sidebar_settings from "../components/settings/Sidebar_settings"
import { Outlet } from "react-router-dom"
const Settingspage = () => {
    return (
        <>
            <div className="flex h-screen bg-neutral-900">
                <Sidebar_settings />
                <div className="p-5 w-screen">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Settingspage
