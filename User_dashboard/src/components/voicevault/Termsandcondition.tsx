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

// import React, { useState } from "react";
// import { motion, AnimatePresence,easeInOut } from "framer-motion";
// import Agreementsign from "./Agreementsign";

// interface TermsAndConditionProps {
//     onClose: () => void;
//     onAgree: () => void;
// }

// const TermsAndCondition: React.FC<TermsAndConditionProps> = ({
//     onClose,
//     onAgree,
// }) => {
//     const [showAgreement, setShowAgreement] = useState(false);
//     const [direction, setDirection] = useState(1);

//     // 🧭 Smooth sliding variants
//     const slideVariants = {
//         enter: (direction: number) => ({
//             x: direction > 0 ? "100%" : "-100%",
//             opacity: 0,
//         }),
//         center: {
//             x: 0,
//             opacity: 1,
//             transition: { duration: 0.45, ease: easeInOut},
//         },
//         exit: (direction: number) => ({
//             x: direction < 0 ? "100%" : "-100%",
//             opacity: 0,
//             transition: { duration: 0.4, ease: easeInOut },
//         }),
//     };

//     return (
//         <>
//             {/* Backdrop */}
//             <motion.div
//                 className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//             />

//             {/* Center Modal Container */}
//             <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6">
//                 {/* ✅ Responsive wrapper */}
//                 <div
//                     className="relative bg-neutral-950 border border-neutral-800 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-[900px] h-[90vh] sm:h-[665px]"
//                 >
//                     <AnimatePresence custom={direction} mode="wait">
//                         {!showAgreement ? (
//                             <motion.section
//                                 key="terms"
//                                 custom={direction}
//                                 variants={slideVariants}
//                                 initial="enter"
//                                 animate="center"
//                                 exit="exit"
//                                 className="absolute inset-0 p-6 flex flex-col gap-5 text-white"
//                             >
//                                 {/* Header */}
//                                 <div className="flex justify-between items-center">
//                                     <p className="text-sm sm:text-base font-bold text-white">
//                                         Agreement
//                                     </p>
//                                     <div className="text-xs text-gray-400">
//                                         Agreement code : <span>FRB1235476</span>
//                                     </div>
//                                 </div>

//                                 {/* Input fields */}
//                                 <div className="flex flex-col gap-3 text-sm mt-2 flex-grow overflow-y-auto">
//                                     <div>
//                                         <label className="block mb-1 text-xs font-medium">
//                                             Legal Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter your legal name"
//                                             className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block mb-1 text-xs font-medium">
//                                             Address
//                                         </label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter your address"
//                                             className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
//                                         />
//                                     </div>

//                                     <div className="flex flex-col sm:flex-row gap-3">
//                                         <div className="flex-1">
//                                             <label className="block mb-1 text-xs font-medium">
//                                                 Valid Proof ID
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Proof ID"
//                                                 className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
//                                             />
//                                         </div>
//                                         <div className="flex-1">
//                                             <label className="block mb-1 text-xs font-medium">
//                                                 D.O.B
//                                             </label>
//                                             <input
//                                                 type="date"
//                                                 className="w-full text-xs rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Buttons */}
//                                 <div className="flex justify-end gap-3 mt-auto">
//                                     <button
//                                         onClick={onClose}
//                                         className="px-5 sm:px-6 py-2 rounded-lg text-xs text-[#00FFA3] border border-[#00FFA3] hover:border-[#ff0000] hover:text-[#ff0000] transition"
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         onClick={() => {
//                                             setDirection(1);
//                                             setShowAgreement(true);
//                                         }}
//                                         className="px-5 sm:px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#30e3a5] transition"
//                                     >
//                                         Next
//                                     </button>
//                                 </div>
//                             </motion.section>
//                         ) : (
//                             <motion.div
//                                 key="agreement"
//                                 custom={direction}
//                                 variants={slideVariants}
//                                 initial="enter"
//                                 animate="center"
//                                 exit="exit"
//                                 className="absolute inset-0"
//                             >
//                                 <Agreementsign
//                                     onClose={() => {
//                                         setDirection(-1);
//                                         setShowAgreement(false);
//                                     }}
//                                     onAgree={() => {
//                                         setShowAgreement(false);
//                                         onAgree();
//                                     }}
//                                 />
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TermsAndCondition;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [selectedSection, setSelectedSection] = useState<number>(1);

    const sections = [
        "AUDIO COLLABORATION AND VOICE PROCESSING AGREEMENT",
        "Acceptable Use Policy",
        "Cancellation Policy",
        "Privacy Policy",
    ];

    // 🧭 Smooth slide animation
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.45, ease: "easeInOut" as any },
        },
        exit: (dir: number) => ({
            x: dir < 0 ? "100%" : "-100%",
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" as any },
        }),
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 1:
                return (
                    <>
                        <h2 className="font-semibold text-sm mb-2">
                            AUDIO COLLABORATION AND VOICE PROCESSING AGREEMENT
                        </h2>
                        <p className="text-sm leading-relaxed text-neutral-300">
                            This Audio Collaboration and Voice Processing Agreement (hereinafter referred to as “Agreement”) is executed at ___ on this the ___ day of __, 2025 (in words) and shall be effective from ____, which shall be the “Effective Date” of this Agreement. <br />

                            BY AND BETWEEN <br />

                            1.	[Name of the Actor], aged ___, residing at ______, who is an actor/actress/ media personality/sportsperson by profession and hereinafter referred to as “Party A” or “the Artist,” which expression shall, unless repugnant to the context or meaning thereof, include his/her heirs, successors, and permitted assigns.

                            2.	Audio Realities Pvt. Ltd., a company incorporated under the Companies Act, 2013, having its registered office at “Karotte Maliyeckal, Chathamattom PO,  Ernakulam, Kerala 686671, represented by its authorized signatory ______, hereinafter referred to as “Party B” or “the Company,” which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns.

                            Party A and Party B may be collectively referred to as the “Parties” and individually as a “Party.”

                            WHEREAS, the Artist is a well-known actor/actress/media personality/sportsperson and is desirous of creating AI-generated versions of his/her voice for purposes including but not limited to dubbing in other languages, voice-overs, commercials, and other artistic or commercial/non-commercial artistic or visual media projects;

                            WHEREAS, the Company is engaged in the business of procuring voice samples or voice recordings, storing, processing, and utilizing such voice-based data of artists for generating synthetic voice-based content using artificial intelligence, tailored for use in films, advertisements, and/or  other commercial or non-commercial artistic works or visual media projects, as per the requirements of third party users including Producers and/or Project Creators as defined in this Agreement;

                            WHEREAS, the Artist wishes to store his/her voice in digital format with the Company, for the purpose of enabling the creation of synthetic voice content, thereby facilitating efficient production workflows and reducing the need for manual dubbing or repeated voice-over performances;

                            WHEREAS, the Company agrees to store the Artist’s voice in its secured Voice Vault as defined in this Agreement, and make use of the same, as and when required by third - parties identified herein, for approved applications in accordance with the terms of this Agreement;

                            WHEREAS, the Company has accepted the Artist’s proposal and shall provide the services of voice storage and AI-based voice processing upon requirement raised by third - parties identified in this Agreement;

                            AND WHEREAS, both Parties mutually agree and acknowledge that this Agreement constitutes a legal and valid authorization for the Company to utilize the Artist’s voice to generate AI-based versions, and that such processing and usage shall not, in any manner, infringe upon or prejudice the Artist’s personality rights, publicity rights, or any other moral or proprietary rights.

                            NOW, THEREFORE, in consideration of the mutual covenants and undertakings herein contained, the Parties agree as follows: <br />


                            01.	DEFINITIONS
                            For the purposes of this Agreement, unless the context otherwise requires, the following terms shall have the meanings ascribed to them below:
                            a)	“Applicable Laws” :  Means and includes all applicable statutes, enactments, acts of legislature, laws, ordinances, rules, bye-laws, regulations, guidelines, policies, directions, directives, notifications, and orders of any governmental or regulatory authority (whether central, state, or local), and all applicable international treaties and conventions, as may be in force and effect from time to time.
                            b)	"Algorithm": Means the digital construct developed by the Company through artificial intelligence model training and algorithmic processing utilizing the Artist’s Voice Data. The Algorithm operates as a technical tool to generate synthetic voice outputs as permitted under this Agreement. The Algorithm may be retained and used by the Company for internal research and development, provided such use does not result in the direct recreation of the Artist’s recognizable voice, persona, or any other personally identifiable characteristics. For clarity, the Algorithm exists as code and mathematical models, distinct from the Artist’s unique vocal qualities or personality traits, and cannot, in itself, reproduce or represent the Artist’s identity without the application of the associated Voice Data;

                            c)	“Business Day”: Means any day other than a Saturday, Sunday, or any public holiday declared by the Government of India or the applicable local government. <br />

                            02.	MUTUAL OBLIGATIONS:
                            Each Party agrees to not knowingly do any act or knowingly make any statement, oral or written, which would injure the other party’s business, its interest, or its reputation, unless required to do so in a legal proceeding by a competent court with proper jurisdiction. <br />

                            03.	COUNTERPARTS
                            This Agreement may be executed in any number of counterparts, each of which when executed and delivered shall be deemed an original, and all of which together shall constitute one and the same instrument. Execution and exchange of counterparts by electronic means, including via scanned PDF or digital signature platforms, shall be valid and binding upon the Parties to the same extent as delivery of an original executed counterpart. <br />


                            IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first above written. <br />

                            Party	A (Actor): <br />
                            Signature: _________________________ <br />
                            Name: ____________________________ <br />
                            Date: _____________________________ <br />
                            <br />
                            Party	B (Company): <br />
                            Signature: _________________________ <br />
                            Name: ____________________________ <br />
                            Designation: _______________________ <br />
                            Date: _____________________________ 
                        </p>
                    </>
                );
            default:
                return null;
        }
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

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6">
                <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-[900px] h-[90vh] sm:h-[665px] flex flex-col text-white">
                    {/* Header (Stable) */}
                    <div className="flex justify-between items-center p-6 border-b border-neutral-800">
                        <p className="text-sm sm:text-base font-bold text-white">Agreement</p>
                        <div className="text-xs text-gray-400">
                            Agreement code : <span>FRB1235476</span>
                        </div>
                    </div>

                    {/* Animated body */}
                    <div className="relative flex-grow overflow-hidden">
                        <AnimatePresence custom={direction} mode="wait">
                            {!showAgreement ? (
                                // Step 1: Form
                                <motion.section
                                    key="form"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 p-6 flex flex-col gap-5"
                                >
                                    <div className="flex flex-col gap-3 text-sm mt-2 flex-grow overflow-y-auto pr-2">
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
                                // Step 2: Agreement
                                <motion.section
                                    key="agreement"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 flex flex-col"
                                >
                                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                                        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-700">
                                            {/* Sidebar */}
                                            <aside className="bg-black md:col-span-1 p-4 md:p-6">
                                                <ul className="space-y-3 md:space-y-4">
                                                    {sections.map((item, index) => (
                                                        <li
                                                            key={item}
                                                            onClick={() => setSelectedSection(index + 1)}
                                                            className={`cursor-pointer text-xs md:text-sm ${selectedSection === index + 1
                                                                    ? "text-[#00FFA3] font-medium"
                                                                    : "text-neutral-400 hover:text-white"
                                                                }`}
                                                        >
                                                            {index + 1}. {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </aside>

                                            {/* Content */}
                                            <main className="p-4 md:p-6 col-span-1 md:col-span-3 bg-black space-y-3">
                                                {renderContent()}
                                            </main>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 md:px-8 py-4 border-t border-neutral-700">
                                        <button className="text-xs md:text-xs text-neutral-400 hover:text-[#00FFA3]">
                                            Send a copy to my email
                                        </button>
                                        <div className="flex gap-3 md:gap-4 w-full md:w-auto justify-end">
                                            {/* 🟡 New Back Button */}
                                            <button
                                                onClick={() => {
                                                    setDirection(-1);
                                                    setShowAgreement(false);
                                                }}
                                                className="px-4 py-2 rounded-lg bg-neutral-800 text-xs text-[#00FFA3] border border-[#00FFA3] hover:border-[#ff0000] hover:text-[#ff0000] transition"
                                            >
                                                Back
                                            </button>

                                            {/* <button
                                                onClick={onClose}
                                                className="px-4 py-2 rounded-lg bg-neutral-800 text-xs text-[#ff0000] border border-[#ff0000] hover:bg-[#ff0000] hover:text-white transition"
                                            >
                                                Decline
                                            </button> */}
                                            <button
                                                onClick={onAgree}
                                                className="px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#00e697] transition"
                                            >
                                                Agree
                                            </button>
                                        </div>
                                    </footer>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndCondition;
