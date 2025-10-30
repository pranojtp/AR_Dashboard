import React from "react";

const TermsCard: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-xl flex justify-between items-center lg:h-30">
      <div>
        <h3 className="font-semibold text-white">Terms and Condition</h3>
        <p className="text-xs text-neutral-400">Agreement code : FRB1235476</p>
      </div>
      <button className="border text-sm border-[#00FFA3] text-[#00FFA3] rounded-xl px-3 py-1 hover:bg-[#00FFA3] hover:text-black transition">
        View Now
      </button>
    </div>
  );
};

export default TermsCard;
