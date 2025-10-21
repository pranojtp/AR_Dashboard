import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navigation = [
    { name: "Create a Project", href: "/userdashboard/projectpage/createproject"},
    { name: "Project Details", href: "" },
    { name: "Project Team View", href: ""},
];
const Navbar_project = () => {
    const [activeTab, setActiveTab] = useState("Create a Project");
    const navigate = useNavigate();
  return (
    <>
    <div className="h-fit w-full bg-neutral-900 text-white">
                {/* Header */}
                {/* <h1 className="text-lg font-bold">Settings</h1>
                <p className="text-sm text-neutral-400 mt-1">Manage your account preferences</p> */}
    
                {/* Tabs Section */}
                <div className="relative flex border-b border-neutral-800 mt-6">
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
    
    </>
  )
}

export default Navbar_project
