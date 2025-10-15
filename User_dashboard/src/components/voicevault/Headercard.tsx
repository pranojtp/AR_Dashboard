
import { Settings, Bell,} from "lucide-react";
import VaultImage from "../../assets/vault.png";

const Headercard = () => {
    return (
        <>
            <div className="lg:h-1/3 rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF]">
                {/* 🔹 Top Navbar */}
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Left side */}
                    <h1 className="font-semibold text-black text-lg">Voice Vault</h1>

                    {/* Right side */}
                    <div className="flex items-center gap-4 text-black font-medium">
                        {/* <UserRound size={18} /> */}
                        <button className="flex items-center gap-1 text-sm sm:text-sm hover:underline">
                            Sign Out
                        </button>
                        <Settings size={18} className="cursor-pointer hover:text-gray-700" />
                        <Bell size={18} className="cursor-pointer hover:text-gray-700" />
                    </div>
                </div>

                {/* 🔹 Header Card */}
                <div className="bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] p-6 flex flex-row md:flex-row justify-between items-center gap-5 mx-6 mt-6 h-1/2">
                    {/* Left Section - Text */}
                    <div>
                        <p className="max-w-xl text-sm text-black">
                            Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed
                            anchovies personal party lovers. Onions beef broccoli ham personal
                            white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and
                            broccoli. Bell stuffed lovers mushrooms bbq roll pesto lovers.
                            Chicken bacon banana pineapple Bianca anchovies broccoli pepperoni
                            ranch thin.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex flex-col items-end">
                        <img src={VaultImage} alt="Vault" className="w-60 h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headercard
