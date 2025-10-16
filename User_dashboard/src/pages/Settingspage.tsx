import Sidebar_settings from "../components/settings/Sidebar_settings"
import { Outlet } from "react-router-dom"
const Settingspage = () => {
    return (
        <>
            <div className="flex flex-col h-screen bg-neutral-900">
                <Sidebar_settings />
                <Outlet />
            </div>
        </>
    )
}

export default Settingspage
