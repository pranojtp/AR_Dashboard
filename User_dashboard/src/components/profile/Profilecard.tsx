import { Settings, Bell, UserRound } from "lucide-react";

const Profilecard = () => {
    return (
        <>
            <div className="rounded-2xl bg-gradient-to-r flex flex-col gap-7 from-[#00FFA3] to-[#00C4FF] w-full h-1/3">
                {/* 🔹 Top Navbar */}
                <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4">
                    {/* Left Side */}
                    <h1 className="font-semibold text-black text-lg sm:text-xl mb-2 sm:mb-0">
                        Profile
                    </h1>

                    {/* Right Side */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-black font-medium">
                        <UserRound size={18} className="cursor-pointer" />
                        <button className="text-sm sm:text-base text-black hover:underline">
                            Sign Out
                        </button>
                        <Settings size={18} className="cursor-pointer" />
                        <Bell size={18} className="cursor-pointer" />
                    </div>
                </div>
                {/* 🔹 Profile Section */}
                <section className="rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mt-15 h-1/2">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
                        <img
                            src=""
                            alt="Profile Picture"
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white"
                        />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-black">
                                Name
                            </h2>
                            <p className="text-sm sm:text-base text-black/80 max-w-md mt-1">
                                Bio
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        
                        {/* <button className="px-4 py-2 rounded-3xl bg-black text-[#00FFA3] shadow-md hover:bg-gray-900 transition w-full sm:w-auto">                        
                        </button> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profilecard
