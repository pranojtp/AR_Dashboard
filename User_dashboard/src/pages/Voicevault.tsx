import { useState } from "react";
import Headercard from "../components/voicevault/Headercard";
import Signagreement from "../components/voicevault/Signagreement";
import TermsCard from "../components/voicevault/Termscard";
import FileUpload from "../components/voicevault/Fileupload";

const Voicevault = () => {
  const [isAgreementSigned, setIsAgreementSigned] = useState(false);

  return (
    <div className="flex-1 space-y-5 px-2 sm:px-3 md:px-4 lg:px-5 pb-6">

      <Headercard />

      {!isAgreementSigned && (
        <Signagreement onAgree={() => setIsAgreementSigned(true)} />
      )}

      {isAgreementSigned && (
        <div className="w-full space-y-6">
          <TermsCard />
        </div>
      )}

      {/* Send agreement status to FileUpload */}
      <FileUpload isAgreementSigned={isAgreementSigned} />

    </div>
  );
};

export default Voicevault;
