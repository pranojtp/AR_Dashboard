import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar_project = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const path = location.pathname;

    // Tabs become visible progressively
    const navigation = [
        { name: "Create a Project", href: "/userdashboard/projectpage/createproject" },

        ...(path.includes("projectdetails")
            ? [{ name: "Project Details", href: "/userdashboard/projectpage/projectdetails" }]
            : []),

        ...(path.includes("projectteam")
            ? [{ name: "Project Team View", href: "/userdashboard/projectpage/projectteam" }]
            : []),
    ];

    return (
        <div className="w-full bg-neutral-900 text-white">
            <div className="relative flex border-b border-neutral-800 mt-6">
                {navigation.map((item) => {
                    const isActive = path === item.href;

                    return (
                        <button
                            key={item.name}
                            onClick={() => navigate(item.href)}
                            className={`relative px-4 pb-3 text-sm font-medium transition-all duration-300
                                ${isActive ? "text-[#00FFA3]" : "text-neutral-400 hover:text-gray-200"}
                            `}
                        >
                            {item.name}

                            {isActive && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FFA3]"
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar_project;
