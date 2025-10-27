import { useState } from "react";
import Headercard from "../components/voicevault/Headercard";
import Signagreement from "../components/voicevault/Signagreement";
import TermsCard from "../components/voicevault/Termscard"
import FileUpload from "../components/voicevault/Fileupload"

const Voicevault = () => {
  const [isAgreementSigned, setIsAgreementSigned] = useState(false);

  return (
    <div className="flex-1 space-y-6 px-3 sm:px-4 md:px-6 lg:px-8 pb-6">
      <Headercard />

      {!isAgreementSigned ? (
        <Signagreement onAgree={() => setIsAgreementSigned(true)} />
      ) : (
        <div className="w-full space-y-6">
          <TermsCard />
          <FileUpload />
        </div>
      )}
    </div>
  );
};

export default Voicevault;
