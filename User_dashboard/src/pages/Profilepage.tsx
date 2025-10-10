import Profilecard from "../components/profile/Profilecard"
import Teams from "../components/profile/Teams"
import Notification from "../components/profile/Notification"

const Profilepage = () => {
  return (
    <>
    <div className="flex-1 p-6 space-y-6 bg-neutral-900">
        <Profilecard />
        <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
            <Teams />
            </div>
            <div>
                <Notification />
            </div>
        </div>
    </div>
    </>
  )
}

export default Profilepage
