import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Agreementsign from "./Agreementsign";
import { useState } from "react";

interface TermsCardProps {
  onView: () => void;
}


const TermsCard: React.FC<TermsCardProps> = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="bg-black p-6 rounded-xl flex justify-between items-center h-fit">
      <div>
        <h3 className="font-semibold text-white">Terms and Condition</h3>
        <p className="text-xs text-neutral-400">Agreement code : FRB1235476</p>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="border text-sm border-[#00FFA3] text-[#00FFA3] rounded-xl px-3 py-1 hover:bg-[#00FFA3] hover:text-black transition">
        View Now
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
              <Agreementsign onClose={handleCloseModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TermsCard;
