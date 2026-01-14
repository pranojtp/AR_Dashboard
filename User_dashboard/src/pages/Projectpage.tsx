import Navbar_project from "../components/projects/Navbar_project";
import NavbarProjectWorkspace from "../components/projects/NavbarProjectWorkspace";
import { Outlet, useLocation } from "react-router-dom";

const Projectpage = () => {
  const location = useLocation();

  const isWorkspace =
    location.pathname.includes("/userdashboard/project/");

  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white">
      {/* Fixed top navigation bar */}
      <div className="flex-shrink-0 border-b border-neutral-800">
        {isWorkspace ? (
          <NavbarProjectWorkspace />
        ) : (
          <Navbar_project />
        )}
      </div>

      {/* Scrollable routed content */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4
                      scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Projectpage;
