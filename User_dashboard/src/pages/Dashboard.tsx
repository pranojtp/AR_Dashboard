import Sidebar from "../components/Sidebar"
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <div className="flex h-screen bg-neutral-900">
                <Sidebar />
                <div className="p-5 w-screen">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard
