import Headercard from "../components/voicevault/Headercard";
import Signagreement from "../components/voicevault/Signagreement";

const Voicevault = () => {
    return (
        <>
            <div className="flex-1 space-y-6 px-3 sm:px-4 md:px-6 lg:px-8 pb-6">
                {/* Header Section */}
                <Headercard />

                {/* Agreement Section */}
                <div className="w-full">
                    <Signagreement />
                </div>
            </div>
        </>
    );
};

export default Voicevault;
