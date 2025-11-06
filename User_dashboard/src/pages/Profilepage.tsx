import Profilecard from "../components/profile/Profilecard";
import Teams from "../components/profile/Teams";
// import Notification from "../components/profile/Notification";
import Tasks from "../components/profile/Tasks";

const Profilepage = () => {
  return (
    <>
      <div className="flex-1 h-full space-y-5 px-2 sm:px-3 md:px-4 lg:px-5 pb-6">
        <Profilecard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div >
            <Teams />
          </div>
          <div>
            {/* <Notification /> */}
            <Tasks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilepage;
