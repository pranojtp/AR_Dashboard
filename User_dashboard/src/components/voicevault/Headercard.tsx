
// import { Settings, Bell, } from "lucide-react";
import VaultImage from "../../assets/vault.png";
// import { useNavigate } from "react-router-dom";

const Headercard = () => {
    // const navigate = useNavigate();

    // const handleSignOut = () => {
    //     // Navigate back to login with state
    //     navigate("/login", { state: { fromSignout: true } });
    // };
    return (
        <>
            <div className="lg:h-1/3 rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF]">
                {/* 🔹 Top Navbar */}
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Left side */}
                    <h1 className="font-semibold text-[#02212a] text-lg">Voice Vault</h1>

                    {/* Right side */}
                    <div className="flex items-center gap-4 text-black font-medium">
                        {/* <UserRound size={18} /> */}
                        {/* <a href="/login"> */}
                        {/* <button onClick={handleSignOut} className="flex items-center gap-1 text-sm sm:text-sm hover:underline">
                                Sign Out
                            </button> */}
                        {/* </a> */}
                        {/* <a href="/userdashboard/settings/account"><Settings size={18} className="cursor-pointer hover:text-gray-700" /></a>
                        <Bell size={18} className="cursor-pointer hover:text-gray-700" /> */}
                    </div>
                </div>

                {/* 🔹 Header Card */}
                <div className="bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] p-4 flex flex-row md:flex-row justify-between items-center gap-3 mx-5">
                    {/* Left Section - Text */}
                    <div className="flex flex-col gap-2">
                        <p className="font-medium italic text-[#02212a]">Secure, Private and Compliant!</p>
                        <p className="max-w-xl text-sm italic text-[#02212a] text-justify">
                            Voice Vault is a secure digital platform where you can store, manage, and license your voice assets. Through transparent tracking and consent management, you maintain full control over your vocal assets while Audio Realities add value to it by leveraging the potential of AI for creative endeavours.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex flex-col items-end">
                        <img src={VaultImage} alt="Vault" className="w-72 h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headercard
