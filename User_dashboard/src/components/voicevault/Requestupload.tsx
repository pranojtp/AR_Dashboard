import { useState } from "react";
import { Link2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Member {
    email: string;
    role: "Admin" | "Editor" | "Viewer";
}

interface Props {
    onClose: () => void;
}
const Requestupload: React.FC<Props> = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [members, setMembers] = useState<Member[]>([]);
    const [copied, setCopied] = useState(false);

    const handleAddMember = () => {
        if (email.trim() && !members.find((m) => m.email === email)) {
            setMembers([...members, { email, role: "Viewer" }]);
            setEmail("");
        }
    };

    const handleRemove = (email: string) => {
        setMembers(members.filter((m) => m.email !== email));
    };

    const handleRoleChange = (email: string, role: Member["role"]) => {
        setMembers(members.map((m) => (m.email === email ? { ...m, role } : m)));
    };

    const handleCopyLink = async () => {
        await navigator.clipboard.writeText("https://example.com/invite");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <>
            <AnimatePresence>
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 40 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50 p-4"
                >
                    <div className="flex flex-col gap-4 bg-neutral-950 p-6 sm:p-6 rounded-2xl shadow-2xl w-fit max-w-md sm:max-w-lg lg:max-w-xl relative border border-neutral-700">
                        {/* Close Button (top-right) */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-400 hover:text-red-400 transition"
                        >
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="border-b border-neutral-600 pb-3 mb-3">
                            <h2 className="text-l sm:text-l font-semibold text-white">
                                Request Voice Upload
                            </h2>
                            <p className="text-sm sm:text-sm text-neutral-400 mt-1">
                                Ask a member/studio to upload your voice file to the vault.
                            </p>
                        </div>

                        {/* 🔗 Share Link Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 gap-3 sm:gap-3">
                            <div>
                                <p className="text-sm sm:text-sm text-white">
                                    Invite members via a sharable link
                                </p>
                                <p className="text-xs sm:text-sm text-gray-400">
                                    Request will expires in 14 days
                                </p>
                            </div>
                            <button
                                onClick={handleCopyLink}
                                className="flex items-center justify-center gap-1 text-neutral-300 border border-neutral-500 hover:bg-neutral-700 transition px-2 py-1 rounded-md text-sm"
                            >
                                <Link2 size={14} />
                                {copied ? "Copied" : "Copy Link"}
                            </button>
                        </div>

                        {/* 📨 Input Field */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-neutral-800 border border-neutral-600 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#00FFA3]"
                            />
                            <button
                                onClick={handleAddMember}
                                className="border border-[#00FFA3] text-[#00FFA3] text-base font-bold rounded-md px-2 py-1 sm:px-2 sm:py-1 hover:bg-[#00FFA3]/20 transition"
                            >
                                +
                            </button>
                        </div>

                        {/* 👥 Members List */}
                        {members.length > 0 && (
                            <div className="mb-2">
                                <p className="text-sm text-neutral-300 mb-2">
                                    Added {members.length} member{members.length > 1 ? "s" : ""}
                                </p>
                                <div className="space-y-2 max-h-fit overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-transparent">
                                    {members.map((member) => (
                                        <div
                                            key={member.email}
                                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-neutral-800 border border-neutral-600 rounded-md px-2 py-1"
                                        >
                                            <span className="text-sm text-neutral-300 break-all">
                                                {member.email}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <select
                                                    value={member.role}
                                                    onChange={(e) =>
                                                        handleRoleChange(
                                                            member.email,
                                                            e.target.value as Member["role"]
                                                        )
                                                    }
                                                    className="bg-neutral-800 border border-neutral-600 text-xs text-white rounded-md px-2 py-1 focus:outline-none"
                                                >
                                                    <option>Admin</option>
                                                    <option>Editor</option>
                                                    <option>Viewer</option>
                                                </select>
                                                <button
                                                    onClick={() => handleRemove(member.email)}
                                                    className="text-gray-400 hover:text-red-400 transition"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 🔘 Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm mt-2">
                            <button
                                onClick={onClose}
                                className="px-3 py-1 border border-[#00FFA3] rounded-md text-[#00FFA3] hover:bg-[#00FFA3]/20 transition w-full sm:w-auto"
                            >
                                Cancel
                            </button>
                            <button className="px-3 py-1 bg-[#00FFA3] text-black font-medium rounded-md hover:bg-[#00e695] transition w-full sm:w-auto">
                                {members.length > 0 ? "Request" : "Request"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Requestupload
