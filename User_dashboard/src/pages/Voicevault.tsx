import Headercard from "../components/voicevault/Headercard"
import Signagreement from "../components/voicevault/Signagreement"
const Voicevault = () => {
    return (
        <>
            <div className="flex-1 p-6 space-y-6 bg-neutral-900">
                <Headercard />
                <Signagreement />
            </div>
        </>
    )
}

export default Voicevault
