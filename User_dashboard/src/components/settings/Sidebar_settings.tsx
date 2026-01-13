// import { User, Settings, Bell, Lock, Handshake } from 'lucide-react'; // import icons

// const iconMap = {
//     UserRound: User,
//     Settings: Settings,
//     Bell: Bell,
//     Lock: Lock,
//     Handshake: Handshake
// };

// const navigation = [
//     { name: 'Account Details', href: '/settings/account', icon: 'UserRound' },
//     { name: 'General', href: '/settings/general', icon: 'Settings' },
//     { name: 'Notifications', href: '/settings/notification', icon: 'Bell' },
//     // { name: 'Terms of Service', href: '/terms', icon: 'Handshake' },
//     // { name: 'Privacy & Policy', href: '/privacy', icon: 'Lock' },
// ];
// const Sidebar_settings = () => {
//     return (
//         <>
//             <div className="w-64 flex flex-col h-auto gap-y-5 overflow-y-auto border-r border-gray-200 bg-neutral-900 px-6 dark:border-white/10 dark:bg-neutral-900 p-4">
//                 <div className="relative flex flex-col h-16 shrink-0 mb-4">
//                     <h1 className="text-xl font-bold mb-4 text-white">Settings</h1>
//                     <p className="text-sm text-white">Manage your account preferences</p>
//                 </div>

//                 <hr className="border-white mb-4" />

//                 <nav className="flex flex-col gap-2 text-sm">
//                     {navigation.map((item) => {
//                         const IconComponent = iconMap[item.icon]; // get the icon component
//                         return (
//                             <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-[#00FFA3] text-white font-medium"
//                             >
//                                 {IconComponent && <IconComponent className="w-5 h-5" />}
//                                 {item.name}
//                             </a>
//                         );
//                     })}
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Sidebar_settings


import { useState } from "react";
import { motion } from "framer-motion";
// import { User, Settings, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

// const iconMap = {
//     UserRound: User,
//     Settings: Settings,
//     Bell: Bell,
// };

const navigation = [
    { name: "Account Details", href: "/userdashboard/settings/account", icon: "UserRound" },
    // { name: "General", href: "/userdashboard/settings/general", icon: "Settings" },
    // { name: "Notifications", href: "/userdashboard/settings/notification", icon: "Bell" },
];

const SidebarSettings = () => {
    const [activeTab, setActiveTab] = useState("Account Details");
    const navigate = useNavigate();

    return (
        <div className="h-fit w-full bg-neutral-900 text-white">
            {/* Header */}
            {/* <h1 className="text-lg font-bold">Settings</h1>
            <p className="text-sm text-neutral-400 mt-1">Manage your account preferences</p> */}

            {/* Tabs Section */}
            <div className="relative flex border-b border-neutral-800 mt-3">
                {navigation.map((item) => {
                    // const Icon = iconMap[item.icon];
                    const isActive = activeTab === item.name;

                    return (
                        <button
                            key={item.name}
                            onClick={() => {
                                setActiveTab(item.name);
                                navigate(item.href); // Navigate to route
                            }}
                            className={`relative flex items-center gap-2 px-4 pb-3 text-sm font-medium transition-all duration-300 ${isActive ? "text-[#00FFA3]" : "text-neutral-400 hover:text-gray-200"
                                }`}
                        >
                            {/* {Icon && <Icon className="w-4 h-4" />} */}
                            {item.name}

                            {/* Animated underline */}
                            {isActive && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FFA3]"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarSettings;

