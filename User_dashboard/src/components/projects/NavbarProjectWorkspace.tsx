import { motion } from "framer-motion";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const NavbarProjectWorkspace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { projectId } = useParams();

  const base = `/userdashboard/project/${projectId}`;

  const navigation = [
    { name: "Project Overview", href: `${base}/overview` },
    { name: "Contracts", href: `${base}/contracts` },
    { name: "Audio Assets", href: `${base}/audio-assets` },
    { name: "Crew View", href: `${base}/crew` },
    { name: "Project Settings", href: `${base}/settings` },
  ];

  return (
    <div className="w-full bg-neutral-900 text-white">
      <div className="relative flex border-b border-neutral-800 mt-3">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              className={`relative px-4 pb-3 text-sm font-medium transition-all
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

export default NavbarProjectWorkspace;
