import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Agreementsign from "./Agreementsign";

interface TermsAndConditionProps {
    onClose: () => void;
    onAgree: () => void;
}

const TermsAndCondition: React.FC<TermsAndConditionProps> = ({
    // onClose,
    onAgree,
}) => {
    const [showAgreement, setShowAgreement] = useState(false);

    return (
        <>
            {/* Main Terms Card */}            
            <section className="bg-neutral-950 p-4 flex flex-col md:flex-col gap-5 h-auto border-1 border-neutral-800 rounded-2xl">
                <div className="flex flex-wrap gap-2 justify-between items-center ">
                    <p className="text-sm sm:text-base font-bold text-white">Terms and Condition</p>
                    <div className="text-xs text-gray-400">
                        Agreement code : <span>FRB1235476</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm sm:text-sm font-semibold text-white">
                            Brief
                        </h2>
                        <p className="text-xs text-neutral-300 leading-relaxed max-w-lg">
                            Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed
                            anchovies personal party lovers. Onions beef broccoli ham personal
                            white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and
                            broccoli. Bell stuffed lovers mushrooms bbq roll pesto lovers.
                            Chicken bacon banana pineapple Bianca anchovies broccoli pepperoni
                            ranch thin.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm sm:text-sm font-semibold text-white">
                            Key members
                        </h2>
                        <div className="text-xs text-neutral-300">
                            <p>Production Studio: Viking Studio</p>
                            <p>Director: Prithviraj Sukumaran</p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowAgreement(true)}
                                className="px-6 py-2 rounded-lg text-xs text-[#00FFA3] border border-[#00FFA3] hover:bg-[#00e697] hover:text-black transition"
                            >
                                READ
                            </button>
                            <button
                                onClick={onAgree}
                                className="px-6 py-2 rounded-lg bg-[#00FFA3] text-xs text-black font-medium hover:bg-[#30e3a5] transition"
                            >
                                I AGREE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                    {/* <button className="px-4 py-2 rounded-3xl bg-black text-[#00FFA3] shadow-md hover:bg-gray-900 transition w-full sm:w-auto">                        
                        </button> */}
                </div>
            </section>
            
            {/* AnimatePresence for Agreementsign */}
            <AnimatePresence>
                {
                    showAgreement && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowAgreement(false)}
                            />

                            {/* Modal */}
                            <motion.div
                                className="fixed inset-0 flex items-center justify-center z-50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <Agreementsign
                                    onClose={() => setShowAgreement(false)}
                                    onAgree={() => {
                                        setShowAgreement(false);
                                        onAgree();
                                    }}
                                />
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence >
        </>
    );
};

export default TermsAndCondition;
