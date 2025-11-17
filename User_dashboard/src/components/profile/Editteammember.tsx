import type { Member } from "./Teams";
import { useState } from "react";

interface EditTeamMemberProps {
    member: Member;
    onClose: () => void;
    onSave: (newRole: string) => void;
}

const Editteammember = ({ member, onClose, onSave }: EditTeamMemberProps) => {
    const [role, setRole] = useState(member.role);

    return (
        <div className="w-full max-w-md bg-neutral-950 p-6 rounded-2xl border border-neutral-700 mx-auto">

            <div className="flex flex-col border-b border-neutral-600 pb-3 mb-3">
                <h2 className="text-m font-semibold text-white">Team Member</h2>
                <p className="text-sm text-neutral-500 mt-1">
                    Manage the member
                </p>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-transparent pr-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-neutral-800 border border-neutral-600 rounded-md px-2 py-1 mb-4">
                    <span className="text-sm text-white">
                        {member.name}
                    </span>

                    <div className="flex items-center text-xs w-full sm:w-auto">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="p-2 w-full sm:w-auto focus:outline-none border border-neutral-700 rounded bg-neutral-800 text-white"
                        >
                            <option>Manager</option>
                            <option>Legal Head</option>
                            <option>Assistant</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm mt-3">
                <button
                    onClick={onClose}
                    className="px-3 py-1 border border-[#00FFA3] rounded-md text-[#00FFA3] hover:border-[#ff0000] hover:text-[#ff0000] transition w-full sm:w-auto"
                >
                    Cancel
                </button>

                <button
                    onClick={() => onSave(role)}
                    className="px-4 py-1 bg-[#00FFA3] text-black font-medium rounded-lg hover:bg-[#00e695] hover:text-white transition w-full sm:w-auto"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Editteammember;
