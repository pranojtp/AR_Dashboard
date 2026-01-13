// import { motion, AnimatePresence } from "framer-motion";
// import Agreementsign from "./Agreementsign";
// import { useState } from "react";

// const Signagreement = () => {
//     const [showModal, setShowModal] = useState<boolean>(false);
//     return (
//         <>
//             <div className="bg-black h-1/3 rounded-2xl flex flex-col gap-8 p-5 justify-center items-center ">
//                 <p className="text-l font-semibold text-white">Sign the agreement to upload the Voices</p>
//                 <button 
//                 onClick={() => setShowModal(true)}
//                 className="px-2 py-1 bg-[#00FFA3] text-xs text-black rounded-xl hover:bg-[#00e695] transition">
//                     SIGN THE AGREEMENT
//                 </button>
//                 <AnimatePresence>
//                 {showModal && (
//                     <>
//                         <motion.div
//                             className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             onClick={() => setShowModal(false)}
//                         />

//                         Modal Content
//                         <motion.div
//                             className="fixed inset-0 flex items-center justify-center z-50"
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.8 }}
//                             transition={{ duration: 0.25, ease: "easeOut" }}
//                         ></motion.div>
//                         <Agreementsign onClose={() => setShowModal(false)} />
//                     </>
//                 )}
//             </AnimatePresence>

//             </div>
//         </>
//     )
// }

// export default Signagreement

import { motion, AnimatePresence } from "framer-motion";
// import Agreementsign from "./Agreementsign";
import TermsAndCondition from "./Termsandcondition";
import { useState } from "react";

interface SignagreementProps {
    onAgree: () => void;
}

const Signagreement: React.FC<SignagreementProps> = ({ onAgree }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCloseModal = () => setShowModal(false);
    const handleAgree = () => {
        setShowModal(false);
        onAgree();
    };

    return (
        <>
            <div className="bg-black h-1/3 rounded-2xl flex flex-col gap-5 p-3 justify-center items-center">
                <p className="text-l font-semibold text-white">
                    Sign the agreement to upload the Voices
                </p>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-3 py-1 bg-[#00FFA3] text-xs font-semibold text-black rounded-xl hover:bg-[#00e695] transition"
                >
                    SIGN THE AGREEMENT
                </button>

                <AnimatePresence>
                    {showModal && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={handleCloseModal}
                            />

                            {/* Modal */}
                            <motion.div
                                className="fixed inset-0 flex items-center justify-center z-50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                {/* <Agreementsign onClose={handleCloseModal} onAgree={handleAgree} /> */}
                                <TermsAndCondition onClose={handleCloseModal} onAgree={handleAgree} />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Signagreement;
