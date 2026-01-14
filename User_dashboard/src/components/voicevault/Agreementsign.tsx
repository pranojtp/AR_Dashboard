// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // import { X } from "lucide-react";

// interface AgreementsignProps {
//     onClose: () => void;
//     onAgree?: () => void; // ✅ new optional prop
// }

// const Agreementsign: React.FC<AgreementsignProps> = ({ onClose, onAgree }) => {
//     const [selectedSection, setSelectedSection] = useState<number>(1);

//     const sections: string[] = [
//         "General Terms and Conditions",
//         "Acceptable Use Policy",
//         "Cancellation Policy",
//         "Privacy Policy",
//     ];

//     const renderContent = () => {
//         switch (selectedSection) {
//             case 1:
//                 return (
//                     <>
//                         <h2 className="font-semibold text-sm">General Terms and Conditions</h2>
//                         <p className="text-xs leading-relaxed text-neutral-300">
//                             Pizza ipsum dolor amet lovers buffalo. String tomatoes Chicago pineapple extra onions
//                             pork onions hand. Red spinach crust Bianca ham sauce Aussie garlic. Ham rib black stuffed
//                             ipsum ricotta sausage pepperoni pepperoni. Pie red personal tomatoes platter broccoli.
//                         </p>
//                         <p className="text-xs leading-relaxed text-neutral-300">
//                             Mushrooms garlic roll meatball thin melted dolor ham. NY mouth lot pork party lasagna
//                             buffalo mouth platter pork. Pineapple lovers meat tomato white pepperoni Hawaiian red.
//                         </p>
//                         <p className="text-xs leading-relaxed text-neutral-300">
//                             Rib cheese meat Hawaiian anchovies Bianca. Hand banana meat steak spinach string
//                             personal pork lot Philly. Deep stuffed pie stuffed meatball bbq lasagna mushrooms.
//                         </p>
//                     </>
//                 );

//             case 2:
//                 return (
//                     <>
//                         <h2 className="font-semibold text-sm">Acceptable Use Policy</h2>
// <p className="text-xs leading-relaxed text-neutral-300">
//     Users must refrain from uploading offensive, copyrighted, or illegal voice content.
//     Data collected will be used only for approved purposes outlined by the company.
// </p>
// <p className="text-xs leading-relaxed text-neutral-300">
//     Violation of these rules may result in termination of access and legal action.
//     The organization reserves the right to monitor activity to ensure compliance.
// </p>
//                     </>
//                 );

//             case 3:
//                 return (
//                     <>
//                         <h2 className="font-semibold text-sm">Cancellation Policy</h2>
// <p className="text-xs leading-relaxed text-neutral-300">
//     You may cancel your agreement within 7 days of signing without penalty. After this
//     period, standard cancellation charges apply based on your subscription plan.
// </p>
// <p className="text-xs leading-relaxed text-neutral-300">
//     All cancellations must be confirmed via email. Any active projects or uploads
//     will be paused immediately upon cancellation.
// </p>
//                     </>
//                 );

//             case 4:
//                 return (
//                     <>
//                         <h2 className="font-semibold text-sm">Privacy Policy</h2>
// <p className="text-xs leading-relaxed text-neutral-300">
//     Your data and uploaded files are encrypted and stored securely. We do not share
//     personal or voice data with third parties without explicit consent.
// </p>
// <p className="text-xs leading-relaxed text-neutral-300">
//     You can request deletion of your personal information at any time, subject to
//     legal retention requirements.
// </p>
//                     </>
//                 );

//             default:
//                 return null;
//         }
//     };

//     return (
//         <AnimatePresence>
//             <motion.div
//                 key="modal"
//                 initial={{ opacity: 0, scale: 0.8, y: 40 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.8, y: 40 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="fixed inset-0 flex items-center justify-center z-50 p-4"
//             >
//                 <div className="flex items-center justify-center bg-neutral-900 text-white">
//                     <div className="h-fit w-[800px] bg-neutral-800 rounded-2xl shadow-lg overflow-hidden relative">
//                         {/* Header */}
//                         <div className="flex justify-between items-center px-8 py-5 border-b border-neutral-700">
//                             <h1 className="text-m font-semibold">Terms and Conditions</h1>
//                             <p className="text-sm text-neutral-400">
//                                 Agreement code: <span className="text-neutral-200">AG-001</span>
//                             </p>
//                         </div>

//                         {/* Main Body */}
//                         <div className="grid grid-cols-4 divide-x divide-neutral-700">
//                             {/* Sidebar */}
//                             <aside className="col-span-1 bg-black">
//                                 <ul className="p-6 space-y-4">
//                                     {sections.map((item, index) => (
//                                         <li
//                                             key={item}
//                                             onClick={() => setSelectedSection(index + 1)}
//                                             className={`cursor-pointer text-xs transition-colors duration-200 ${selectedSection === index + 1
//                                                     ? "text-[#00FFA3] font-medium"
//                                                     : "text-neutral-400 hover:text-white"
//                                                 }`}
//                                         >
//                                             {index + 1}. {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </aside>

//                             {/* Content */}
//                             <main className="bg-black col-span-3 p-6 space-y-4">
//                                 {renderContent()}
//                             </main>
//                         </div>

//                         {/* Footer */}
//                         <footer className="flex justify-between items-center px-8 py-4 border-t border-neutral-700">
//                             <button className="text-xs text-neutral-400 hover:text-[#00FFA3]">
//                                 Send a copy to my email
//                             </button>
//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={onClose}
//                                     className="px-3 py-1 rounded-lg bg-neutral-800 text-xs text-[#00FFA3] border border-[#00FFA3] transition"
//                                 >
//                                     DECLINE
//                                 </button>
//                                 <button
//                                     onClick={onAgree}
//                                     className="px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#00e697] transition"
//                                 >
//                                     AGREE
//                                 </button>
//                             </div>
//                         </footer>
//                     </div>
//                 </div>
//             </motion.div>
//         </AnimatePresence>
//     );
// };

// export default Agreementsign;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AgreementsignProps {
    onClose: () => void;    
}

const Agreementsign: React.FC<AgreementsignProps> = ({ onClose }) => {
    const [selectedSection, setSelectedSection] = useState<number>(1);

    const sections = [
        "AUDIO COLLABORATION AND VOICE PROCESSING AGREEMENT",
        "Acceptable Use Policy",
        "Cancellation Policy",
        "Privacy Policy",
    ];

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
            case 2:
                return (
                    <>
                        <h2 className="font-semibold text-sm mb-2">Acceptable Use Policy</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Users must refrain from uploading offensive, copyrighted, or
                            illegal voice content. Data collected will be used only for
                            approved purposes outlined by the company.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Violation of these rules may result in termination of access and
                            legal action. The organization reserves the right to monitor
                            activity to ensure compliance.
                        </p>
                    </>
                );
            case 3:
                return (
                    <>
                        <h2 className="font-semibold text-sm mb-2">Cancellation Policy</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            You may cancel your agreement within 7 days of signing without
                            penalty. After this period, standard cancellation charges apply
                            based on your subscription plan.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            All cancellations must be confirmed via email. Any active projects
                            or uploads will be paused immediately upon cancellation.
                        </p>
                    </>
                );
            case 4:
                return (
                    <>
                        <h2 className="font-semibold text-sm mb-2">Privacy Policy</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Your data and uploaded files are encrypted and stored securely. We
                            do not share personal or voice data with third parties without
                            explicit consent.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            You can request deletion of your personal information at any time,
                            subject to legal retention requirements.
                        </p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-neutral-900 text-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 px-6 md:px-8 py-5 border-b border-neutral-700">
                    <h1 className="text-base font-semibold">Agreement</h1>
                    <p className="text-xs md:text-sm text-neutral-400">
                        Agreement code:{" "}
                        <span className="text-neutral-200">FRB1235476</span>
                    </p>
                </div> */}
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-neutral-800">
                        <p className="text-sm sm:text-base font-bold">Agreement</p>
                        <div className="text-xs text-gray-400">
                            Agreement code : <span>FRB1235476</span>
                        </div>
                    </div>
                {/* Scrollable Content */}
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
                    <button className="text-sm md:text-xs text-neutral-400 hover:text-[#00FFA3]">
                        Send a copy to my email
                    </button>
                    <div className="flex gap-3 md:gap-4 w-full md:w-auto justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 rounded-lg bg-neutral-800 text-sm md:text-sm text-[#00FFA3] border border-[#00FFA3] hover:border-[#ff0000] hover:text-[#ff0000] transition w-full md:w-auto"
                        >
                            Back
                        </button>
                        {/* <button
                            onClick={onAgree}
                            className="px-6 py-2 rounded-lg bg-[#00FFA3] text-xs md:text-xs text-black font-medium hover:bg-[#00e697] transition w-full md:w-auto"
                        >
                            AGREE
                        </button> */}
                    </div>
                </footer>
            </motion.div>
        </AnimatePresence>
    );
};

export default Agreementsign;
