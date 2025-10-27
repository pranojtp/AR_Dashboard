import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

interface AgreementsignProps {
    onClose: () => void;
    onAgree?: () => void; // ✅ new optional prop
}

const Agreementsign: React.FC<AgreementsignProps> = ({ onClose, onAgree }) => {
    const [selectedSection, setSelectedSection] = useState<number>(1);

    const sections: string[] = [
        "General Terms and Conditions",
        "Acceptable Use Policy",
        "Cancellation Policy",
        "Privacy Policy",
    ];

    const renderContent = () => {
        switch (selectedSection) {
            case 1:
                return (
                    <>
                        <h2 className="font-semibold text-sm">General Terms and Conditions</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Pizza ipsum dolor amet lovers buffalo. String tomatoes Chicago pineapple extra onions
                            pork onions hand. Red spinach crust Bianca ham sauce Aussie garlic. Ham rib black stuffed
                            ipsum ricotta sausage pepperoni pepperoni. Pie red personal tomatoes platter broccoli.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Mushrooms garlic roll meatball thin melted dolor ham. NY mouth lot pork party lasagna
                            buffalo mouth platter pork. Pineapple lovers meat tomato white pepperoni Hawaiian red.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Rib cheese meat Hawaiian anchovies Bianca. Hand banana meat steak spinach string
                            personal pork lot Philly. Deep stuffed pie stuffed meatball bbq lasagna mushrooms.
                        </p>
                    </>
                );

            case 2:
                return (
                    <>
                        <h2 className="font-semibold text-sm">Acceptable Use Policy</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Users must refrain from uploading offensive, copyrighted, or illegal voice content.
                            Data collected will be used only for approved purposes outlined by the company.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Violation of these rules may result in termination of access and legal action.
                            The organization reserves the right to monitor activity to ensure compliance.
                        </p>
                    </>
                );

            case 3:
                return (
                    <>
                        <h2 className="font-semibold text-sm">Cancellation Policy</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            You may cancel your agreement within 7 days of signing without penalty. After this
                            period, standard cancellation charges apply based on your subscription plan.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            All cancellations must be confirmed via email. Any active projects or uploads
                            will be paused immediately upon cancellation.
                        </p>
                    </>
                );

            case 4:
                return (
                    <>
                        <h2 className="font-semibold text-sm">Privacy Policy</h2>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            Your data and uploaded files are encrypted and stored securely. We do not share
                            personal or voice data with third parties without explicit consent.
                        </p>
                        <p className="text-xs leading-relaxed text-neutral-300">
                            You can request deletion of your personal information at any time, subject to
                            legal retention requirements.
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
                key="modal"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
                <div className="flex items-center justify-center bg-neutral-900 text-white">
                    <div className="h-fit w-[800px] bg-neutral-800 rounded-2xl shadow-lg overflow-hidden relative">
                        {/* Header */}
                        <div className="flex justify-between items-center px-8 py-5 border-b border-neutral-700">
                            <h1 className="text-m font-semibold">Terms and Conditions</h1>
                            <p className="text-sm text-neutral-400">
                                Agreement code: <span className="text-neutral-200">AG-001</span>
                            </p>
                        </div>

                        {/* Main Body */}
                        <div className="grid grid-cols-4 divide-x divide-neutral-700">
                            {/* Sidebar */}
                            <aside className="col-span-1 bg-black">
                                <ul className="p-6 space-y-4">
                                    {sections.map((item, index) => (
                                        <li
                                            key={item}
                                            onClick={() => setSelectedSection(index + 1)}
                                            className={`cursor-pointer text-xs transition-colors duration-200 ${selectedSection === index + 1
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
                            <main className="bg-black col-span-3 p-6 space-y-4">
                                {renderContent()}
                            </main>
                        </div>

                        {/* Footer */}
                        <footer className="flex justify-between items-center px-8 py-4 border-t border-neutral-700">
                            <button className="text-xs text-neutral-400 hover:text-[#00FFA3]">
                                Send a copy to my email
                            </button>
                            <div className="flex gap-4">
                                <button
                                    onClick={onClose}
                                    className="px-3 py-1 rounded-lg bg-neutral-800 text-xs text-[#00FFA3] border border-[#00FFA3] transition"
                                >
                                    DECLINE
                                </button>
                                <button
                                    onClick={onAgree}
                                    className="px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#00e697] transition"
                                >
                                    AGREE
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Agreementsign;
