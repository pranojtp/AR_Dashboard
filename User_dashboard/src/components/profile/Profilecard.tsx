// // import { Settings, Bell } from "lucide-react";
// import DP from "../../assets/dq.jpg"
// // import { useNavigate } from "react-router-dom";

// const Profilecard = () => {
//     // const navigate = useNavigate();

//     // const handleSignOut = () => {
//     //     // Navigate back to login with state
//     //     navigate("/login", { state: { fromSignout: true } });
//     // };
//     return (
//         <>
//             <div className="flex flex-col gap-7 rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] w-full h-auto">
//                 {/* 🔹 Top Navbar */}
//                 <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4">
//                     {/* Left Side */}
//                     <h1 className="font-semibold text-black text-lg sm:text-xl mb-2 sm:mb-0">
//                         Profile
//                     </h1>
//                     {/* Right Side */}
//                     <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-black font-medium">
//                         {/* <UserRound size={18} className="cursor-pointer" /> */}
//                         {/* <a href="/login"> */}
//                             {/* <button onClick={handleSignOut} className="text-sm sm:text-sm text-black hover:underline">
//                                 Sign Out
//                             </button> */}
//                         {/* </a> */}
//                         {/* <a href="/userdashboard/settings/account"><Settings size={18} className="cursor-pointer" /></a>
//                         <a href="#"><Bell size={18} className="cursor-pointer" /></a> */}
//                     </div>
//                 </div>
//                 {/* 🔹 Profile Section */}
//                 <section className="rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mt-5 h-auto">
//                     <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
//                         <img
//                             src={DP}
//                             alt="Profile Picture"
//                             className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white"
//                         />
//                         <div>
//                             <h2 className="text-sm sm:text-lg font-semibold text-white">
//                                 Dulquer Salman
//                             </h2>
//                             <p className="text-sm sm:text-sm text-white max-w-md mt-1">
//                                 Dulquer Salmaan is an Indian actor, singer and producer who works in Malayalam films, besides few Tamil, Telugu and Hindi films. One of the highest paid Malayalam actor.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

//                         {/* <button className="px-4 py-2 rounded-3xl bg-black text-[#00FFA3] shadow-md hover:bg-gray-900 transition w-full sm:w-auto">                        
//                         </button> */}
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// export default Profilecard


// import { Settings, Bell } from "lucide-react";
import DP from "../../assets/dq.jpg"
import { UserRound, Facebook, Instagram, Twitter ,X,Pencil} from "lucide-react"
import { useState } from "react";

// import { useNavigate } from "react-router-dom";

const Profilecard = () => {
    const [languages, setLanguages] = useState<string[]>([
        "Malayalam",
        "Tamil",
        "Hindi",
        "Telugu",
    ]);

    const removeLanguage = (lang: string) => {
        setLanguages((prev) => prev.filter((l) => l !== lang));
    };

    const [roles, setRoles] = useState<string[]>([
        "Actor",
        "Producer",
        "Director",        
    ]);

    const removeROle = (role: string) => {
        setRoles((prev) => prev.filter((l) => l !== role));
    };
    // const navigate = useNavigate();

    // const handleSignOut = () => {
    //     // Navigate back to login with state
    //     navigate("/login", { state: { fromSignout: true } });
    // };
    return (
        <>
            <div className="flex flex-col gap-3 rounded-2xl bg-neutral-900 w-full h-auto">
                {/* 🔹 Top Navbar */}
                <div className="flex flex-row gap-2 px-4 sm:px-6 py-4 border-b border-neutral-700">
                    {/* Left Side */}
                    <UserRound className="size-4 text-[#00FFA3]" />
                    <h1 className="font-semibold text-[#00FFA3] text-xs sm:text-xs">
                        Profile Details
                    </h1>
                </div>
                <div className="flex flex-wrap justify-between items-center">
                    <p></p><Pencil className="size-6 px-1 hover:border-1 border-neutral-400 rounded-md"/>
                </div>
                
                {/* 🔹 Profile Section */}
                <section className=" bg-neutral-900 p-2 flex flex-col md:flex-row justify-between items-center gap-3 h-auto">                    
                    <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
                        <img
                            src={DP}
                            alt="Profile Picture"
                            className="w-20 h-20 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white"
                        />
                        <div className="mt-15">
                            <h2 className="text-sm sm:text-sm font-semibold text-white">
                                Dulquer Salman
                            </h2>
                            <div className="flex flex-wrap gap-2 bg-neutral-900 pt-2 rounded-md">
                                {roles.map((role) => (
                                    <div
                                        key={role}
                                        className="flex items-center gap-2 bg-neutral-600 text-gray-200 px-1 text-xs"
                                    >
                                        <span>{role}</span>
                                        <button
                                            onClick={() => removeROle(role)}
                                            className="text-white focus:outline-none hover:text-red-400 transition"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs sm:text-xs text-white font-extralight text-justify max-w-md mt-1">
                                Dulquer Salmaan is an Indian actor, singer and producer who works in Malayalam films, besides few Tamil, Telugu and Hindi films. One of the highest paid Malayalam actor.
                            </p>
                        </div>
                        <div className="mt-15">
                            <h2 className="text-sm sm:text-sm font-semibold text-white">
                                Industry
                            </h2>
                            <div className="flex flex-wrap gap-2 bg-neutral-900 pt-2 rounded-md">
                                {languages.map((lang) => (
                                    <div
                                        key={lang}
                                        className="flex items-center gap-2 bg-neutral-600 text-gray-200 px-1 text-xs"
                                    >
                                        <span>{lang}</span>
                                        <button
                                            onClick={() => removeLanguage(lang)}
                                            className="text-white focus:outline-none hover:text-red-400 transition"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-15">
                            <h2 className="text-sm sm:text-sm font-semibold text-white">
                                Social Media
                            </h2>
                            <div className="flex flex-row gap-2 text-white text-justify max-w-md mt-1">
                                <Facebook className="size-4" /><Instagram className="size-4" /> <Twitter className="size-4" />
                            </div>
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
