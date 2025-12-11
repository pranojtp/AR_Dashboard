// import { useState } from "react";

// interface Option {
//     label: string;
//     value: string;
// }
// interface sortOption {
//     label: string;
//     value: string;
// }

// const Teams = () => {
//     const [selectedValue, setSelectedValue] = useState<string>("");
//     const [sortBy, setSortBy] = useState<string>("");
//     const [query, setQuery] = useState<string>(""); // Added state for search query

//     const options: Option[] = [
//         { label: "All Roles", value: "allroles" },
//         { label: "Sound Designer", value: "sounddesigner" },
//         { label: "Sound Mixer", value: "soundmixer" },
//         { label: "Producer", value: "producer" },
//     ];
//     const sortoptions: sortOption[] = [
//         { label: "Sort By Name", value: "names" },
//         { label: "Sort By Role", value: "role" },
//     ];

//     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedValue(event.target.value);
//     };

//     const sortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSortBy(event.target.value);
//     };

//     // Updated search change handler
//     const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setQuery(event.target.value);
//     };

//     return (
//         <>
//             {/* Removed h-80 to allow content to dictate height, making it more flexible */}
//             <div className="bg-black rounded-2xl p-4 text-white">
//                 {/* Header */}
//                 {/* On small screens, title and controls stack (flex-col). On medium screens and up, they go side-by-side (md:flex-row). */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
//                     <h3 className="text-lg font-semibold mb-2 md:mb-0">Teams</h3>

//                     {/* Controls Container: Uses flex-wrap to allow items to wrap to the next line on small screens. */}
//                     <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto">

//                         {/* Search Input: Takes full width on small screens (w-full sm:w-auto) */}
//                         <input
//                             type="text"
//                             value={query}
//                             onChange={handleQueryChange}
//                             placeholder="Search ..."
//                             // Added w-full on mobile, and a max-w-xs to cap its size on larger screens
//                             className="p-1 border rounded-lg border-neutral-500 text-white w-full sm:w-auto max-w-xs"
//                         />

//                         {/* Selects: Made them a fixed, smaller width on small screens to fit better */}
//                         <select
//                             value={selectedValue}
//                             onChange={handleChange}
//                             // Added w-fit for content width
//                             className="w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-sm"
//                         >
//                             {options.map((option) => (
//                                 <option key={option.value} value={option.value}>
//                                     {option.label}
//                                 </option>
//                             ))}
//                         </select>

//                         <select
//                             value={sortBy}
//                             onChange={sortChange}
//                             // Added w-fit for content width
//                             className="w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-sm"
//                         >
//                             {sortoptions.map((sortOption) => (
//                                 <option key={sortOption.value} value={sortOption.value}>
//                                     {sortOption.label}
//                                 </option>
//                             ))}
//                         </select>

//                         {/* Button: Takes up remaining width on smaller screens */}
//                         <button
//                             // Uses w-full on small screens for better click area
//                             className="px-4 py-1 bg-[#00FFA3] text-black rounded-xl hover:bg-[#00e695] transition w-full sm:w-auto text-sm font-medium"
//                         >
//                             + Add Members
//                         </button>
//                     </div>
//                 </div>                                
//             </div>
//         </>
//     )
// }

// export default Teams

import { useState, useMemo } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Addteammember from "./Addteammember";
import Editteammember from "./Editteammember";

export interface Member {
    name: string;
    role: string;
}

const Teams = () => {
    const [selectedValue, setSelectedValue] = useState<string>("allroles");
    const [sortBy, setSortBy] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);

    const [showPrevious, setShowPrevious] = useState(false);

    const [members, setMembers] = useState<Member[]>([
        { name: "Babychen Paul", role: "Assistant" },
        { name: "Biju Basil", role: "Legal Head" },
        { name: "Daniel de Bem", role: "Assistant" },
        { name: "Nithin Chand", role: "Manager" },
    ]);

    const [previousMembers] = useState<Member[]>([
        { name: "Arun Kumar", role: "Former Manager" },
        { name: "Sajan Thomas", role: "Former Assistant" },
    ]);

    const filteredAndSortedMembers = useMemo(() => {
        let filtered = members;

        if (selectedValue !== "allroles") {
            filtered = filtered.filter(
                (m) => m.role.toLowerCase() === selectedValue.toLowerCase()
            );
        }

        if (query.trim()) {
            filtered = filtered.filter((m) =>
                m.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (sortBy === "names") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        if (sortBy === "role") filtered = [...filtered].sort((a, b) => a.role.localeCompare(b.role));

        return filtered;
    }, [members, selectedValue, sortBy, query]);

    const options = [
        { label: "All Roles", value: "allroles" },
        { label: "Manager", value: "manager" },
        { label: "Legal Head", value: "legal head" },
        { label: "Assistant", value: "assistant" },
    ];

    const sortOptions = [
        { label: "Sort By Name", value: "names" },
        { label: "Sort By Role", value: "role" },
    ];

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

    const [direction, setDirection] = useState(1);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 120 : -120,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easeInOut
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -120 : 120,
            opacity: 0,
            transition: {
                duration: 0.35,
                ease: easeInOut
            }
        }),
    };

    const togglePrevious = () => {
        setDirection(showPrevious ? -1 : 1);
        setShowPrevious(!showPrevious);
    };

    return (
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4 sm:p-4 text-white w-full">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">

                <h3 className="text-base sm:text-lg font-semibold">Teams</h3>

                {/* Responsive Filters */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full md:w-auto">

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="p-2 sm:p-1.5 border rounded-lg border-neutral-700 bg-neutral-900 text-white text-sm sm:text-xs"
                    />

                    <select
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className="p-2 sm:p-1.5 rounded-lg bg-amber-100 text-black text-xs w-full sm:w-auto"
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-2 sm:p-1.5 rounded-lg bg-amber-100 text-black text-xs w-full sm:w-auto"
                    >
                        <option value="">-- Sort --</option>
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={() => setShowModal(true)}
                        className="p-2 sm:p-1.5 bg-[#00FFA3] text-black rounded-lg hover:bg-[#00e695] transition text-xs font-medium w-full sm:w-auto"
                    >
                        + Add Member
                    </button>

                </div>
            </div>

            {/* Responsive Animated List */}
            <div className="relative min-h-[220px] sm:min-h-[260px] overflow-hidden">
                <AnimatePresence mode="popLayout" custom={direction}>
                    {showPrevious ? (
                        <motion.div
                            key="previous"
                            custom={direction}
                            variants={slideVariants}
                            initial=""
                            animate="center"
                            exit="exit"
                            className="absolute w-full"
                        >
                            {previousMembers.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-neutral-800 px-2 gap-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-600 text-black font-bold">
                                            {getInitials(member.name)}
                                        </div>

                                        <div>
                                            <p className="text-neutral-400 font-medium text-sm">{member.name}</p>
                                            <p className="text-neutral-400 text-xs">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="active"
                            custom={direction}
                            variants={slideVariants}
                            initial=""
                            animate="center"
                            exit="exit"
                            className="absolute w-full"
                        >
                            {filteredAndSortedMembers.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-neutral-800 px-2 hover:bg-neutral-900 transition rounded-lg gap-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00FFA3] text-black font-bold">
                                            {getInitials(member.name)}
                                        </div>

                                        <div>
                                            <p className="font-medium text-sm">{member.name}</p>
                                            <p className="text-neutral-400 text-xs">{member.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 text-[#00FFA3] text-xs">
                                        <button
                                            className="px-2 py-1 hover:bg-[#00FFA3] hover:text-black hover:rounded-lg"
                                            onClick={() => {
                                                setMemberToEdit(member);
                                                setShowEditModal(true);
                                            }}
                                        >
                                            EDIT
                                        </button>

                                        <button className="hover:text-red-400">REMOVE</button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-neutral-800 mt-4 pt-3 text-xs text-neutral-400 gap-2">

                <button
                    className="hover:text-[#00FFA3]"
                    onClick={togglePrevious}
                >
                    {showPrevious ? "Show Active Members" : "Show Previous Members"}
                </button>

                <p>
                    Total Members:{" "}
                    <span className="ml-1 px-2 py-0.5 bg-[#00FFA3] text-black rounded-md font-semibold">
                        {showPrevious ? previousMembers.length : members.length}
                    </span>
                </p>
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />

                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-6"
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Addteammember onClose={() => setShowModal(false)} />
                        </motion.div>
                    </>
                )}

                {/* Edit Modal */}
                {showEditModal && memberToEdit && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowEditModal(false)}
                        />

                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-6"
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Editteammember
                                member={memberToEdit}
                                onClose={() => setShowEditModal(false)}
                                onSave={(newRole) => {
                                    setMembers((prev) =>
                                        prev.map((m) =>
                                            m.name === memberToEdit!.name
                                                ? { ...m, role: newRole }
                                                : m
                                        )
                                    );
                                    setShowEditModal(false);
                                }}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Teams;
