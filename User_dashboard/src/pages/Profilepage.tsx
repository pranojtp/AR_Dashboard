import Profilecard from "../components/profile/Profilecard";
import Teams from "../components/profile/Teams";
import Notification from "../components/profile/Notification";

const Profilepage = () => {
  return (
    <>
      <div className="flex-1 h-full space-y-5 px-3 sm:px-4 md:px-6 lg:px-8 pb-6">
        {/* Profile Card */}
        <Profilecard />

        {/* Teams + Notification Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Teams - spans two columns on large screens */}
          <div className="lg:col-span-2">
            <Teams />
          </div>

          {/* Notification - stacks below on mobile */}
          <div>
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilepage;
