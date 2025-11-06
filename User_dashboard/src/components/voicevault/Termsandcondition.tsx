// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Agreementsign from "./Agreementsign";

// interface TermsAndConditionProps {
//     onClose: () => void;
//     onAgree: () => void;
// }

// const TermsAndCondition: React.FC<TermsAndConditionProps> = ({
//     // onClose,
//     onAgree,
// }) => {
//     const [showAgreement, setShowAgreement] = useState(false);

//     return (
//         <>
//             {/* Main Terms Card */}            
//             <section className="bg-neutral-950 p-4 flex flex-col md:flex-col gap-5 h-auto border-1 border-neutral-800 rounded-2xl">
//                 <div className="flex flex-wrap gap-2 justify-between items-center ">
//                     <p className="text-sm sm:text-base font-bold text-white">Terms and Condition</p>
//                     <div className="text-xs text-gray-400">
//                         Agreement code : <span>FRB1235476</span>
//                     </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
//                     <div className="flex flex-col gap-2">
//                         <h2 className="text-sm sm:text-sm font-semibold text-white">
//                             Brief
//                         </h2>
//                         <p className="text-xs text-neutral-300 leading-relaxed max-w-lg">
//                             Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed
//                             anchovies personal party lovers. Onions beef broccoli ham personal
//                             white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and
//                             broccoli. Bell stuffed lovers mushrooms bbq roll pesto lovers.
//                             Chicken bacon banana pineapple Bianca anchovies broccoli pepperoni
//                             ranch thin.
//                         </p>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <h2 className="text-sm sm:text-sm font-semibold text-white">
//                             Key members
//                         </h2>
//                         <div className="text-xs text-neutral-300">
//                             <p>Production Studio: Viking Studio</p>
//                             <p>Director: Prithviraj Sukumaran</p>
//                         </div>
//                     </div>
//                     <div className="mt-20">
//                         <div className="flex gap-3">
//                             <button
//                                 onClick={() => setShowAgreement(true)}
//                                 className="px-6 py-2 rounded-lg text-xs text-[#00FFA3] border border-[#00FFA3] hover:bg-[#00e697] hover:text-black transition"
//                             >
//                                 READ
//                             </button>
//                             <button
//                                 onClick={onAgree}
//                                 className="px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#30e3a5] transition"
//                             >
//                                 I AGREE
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

//                     {/* <button className="px-4 py-2 rounded-3xl bg-black text-[#00FFA3] shadow-md hover:bg-gray-900 transition w-full sm:w-auto">                        
//                         </button> */}
//                 </div>
//             </section>

//             {/* AnimatePresence for Agreementsign */}
//             <AnimatePresence>
//                 {
//                     showAgreement && (
//                         <>
//                             {/* Backdrop */}
//                             <motion.div
//                                 className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 onClick={() => setShowAgreement(false)}
//                             />

//                             {/* Modal */}
//                             <motion.div
//                                 className="fixed inset-0 flex items-center justify-center z-50"
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.8 }}
//                                 transition={{ duration: 0.25, ease: "easeOut" }}
//                             >
//                                 <Agreementsign
//                                     onClose={() => setShowAgreement(false)}
//                                     onAgree={() => {
//                                         setShowAgreement(false);
//                                         onAgree();
//                                     }}
//                                 />
//                             </motion.div>
//                         </>
//                     )
//                 }
//             </AnimatePresence >
//         </>
//     );
// };

// export default TermsAndCondition;

import React, { useState } from "react";
import { motion, AnimatePresence,easeInOut } from "framer-motion";
import Agreementsign from "./Agreementsign";

interface TermsAndConditionProps {
    onClose: () => void;
    onAgree: () => void;
}

const TermsAndCondition: React.FC<TermsAndConditionProps> = ({
    onClose,
    onAgree,
}) => {
    const [showAgreement, setShowAgreement] = useState(false);
    const [direction, setDirection] = useState(1);

    // 🧭 Smooth sliding variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.45, ease: easeInOut},
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            transition: { duration: 0.4, ease: easeInOut },
        }),
    };

    return (
        <>
            {/* Backdrop */}
            <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* Center Modal Container */}
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6">
                {/* ✅ Responsive wrapper */}
                <div
                    className="relative bg-neutral-950 border border-neutral-800 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-[900px] h-[90vh] sm:h-[665px]"
                >
                    <AnimatePresence custom={direction} mode="wait">
                        {!showAgreement ? (
                            <motion.section
                                key="terms"
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 p-6 flex flex-col gap-5 text-white"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center">
                                    <p className="text-sm sm:text-base font-bold text-white">
                                        Agreement
                                    </p>
                                    <div className="text-xs text-gray-400">
                                        Agreement code : <span>FRB1235476</span>
                                    </div>
                                </div>

                                {/* Input fields */}
                                <div className="flex flex-col gap-3 text-sm mt-2 flex-grow overflow-y-auto">
                                    <div>
                                        <label className="block mb-1 text-xs font-medium">
                                            Legal Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your legal name"
                                            className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-xs font-medium">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your address"
                                            className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex-1">
                                            <label className="block mb-1 text-xs font-medium">
                                                Valid Proof ID
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Proof ID"
                                                className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-1 text-xs font-medium">
                                                D.O.B
                                            </label>
                                            <input
                                                type="date"
                                                className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 mt-auto">
                                    <button
                                        onClick={onClose}
                                        className="px-5 sm:px-6 py-2 rounded-lg text-xs text-[#00FFA3] border border-[#00FFA3] hover:border-[#ff0000] hover:text-[#ff0000] transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDirection(1);
                                            setShowAgreement(true);
                                        }}
                                        className="px-5 sm:px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#30e3a5] transition"
                                    >
                                        Next
                                    </button>
                                </div>
                            </motion.section>
                        ) : (
                            <motion.div
                                key="agreement"
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                <Agreementsign
                                    onClose={() => {
                                        setDirection(-1);
                                        setShowAgreement(false);
                                    }}
                                    onAgree={() => {
                                        setShowAgreement(false);
                                        onAgree();
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default TermsAndCondition;
