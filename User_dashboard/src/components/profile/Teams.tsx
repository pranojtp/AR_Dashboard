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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Addteammember from "./Addteammember";

interface Option {
    label: string;
    value: string;
}

interface sortOption {
    label: string;
    value: string;
}

// interface Member {
//     id: number;
//     name: string;
//     role: string;
// }

const Teams = () => {
    const [selectedValue, setSelectedValue] = useState<string>("allroles");
    const [sortBy, setSortBy] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    // const [members, setMembers] = useState<Member[]>([]);
    // const [formData, setFormData] = useState({ name: "", role: "" });

    const options: Option[] = [
        { label: "All Roles", value: "allroles" },
        { label: "Sound Designer", value: "sounddesigner" },
        { label: "Sound Mixer", value: "soundmixer" },
        { label: "Producer", value: "producer" },
    ];

    const sortoptions: sortOption[] = [
        { label: "Sort By Name", value: "names" },
        { label: "Sort By Role", value: "role" },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const sortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     if (formData.name.trim() && formData.role.trim()) {
    //         const newMember: Member = {
    //             id: Date.now(),
    //             name: formData.name,
    //             role: formData.role,
    //         };
    //         setMembers([...members, newMember]);
    //         setFormData({ name: "", role: "" });
    //         setShowModal(false);
    //     }
    // };

    // Filtering + Sorting
    // const filteredMembers = members
    //     .filter((m) =>
    //         selectedValue === "allroles" ? true : m.role.toLowerCase() === selectedValue
    //     )
    //     .filter((m) => m.name.toLowerCase().includes(query.toLowerCase()));

    // const sortedMembers = [...filteredMembers].sort((a, b) => {
    //     if (sortBy === "names") return a.name.localeCompare(b.name);
    //     if (sortBy === "role") return a.role.localeCompare(b.role);
    //     return 0;
    // });

    return (
        <div className="bg-black rounded-2xl p-4 text-white relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
                <h3 className="text-lg font-semibold mb-2 md:mb-0">Teams</h3>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto">
                    <input
                        type="text"
                        value={query}
                        onChange={handleQueryChange}
                        placeholder="Search ..."
                        className="p-1 border rounded-lg border-neutral-500 text-white w-full sm:w-auto text-xs max-w-xs"
                    />

                    <select
                        value={selectedValue}
                        onChange={handleChange}
                        className="w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-xs"
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={sortChange}
                        className="w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-xs"
                    >
                        {sortoptions.map((sortOption) => (
                            <option key={sortOption.value} value={sortOption.value}>
                                {sortOption.label}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-1 bg-[#00FFA3] text-black rounded-xl hover:bg-[#00e695] transition w-full sm:w-auto text-xs font-medium"
                    >
                        + Add Members
                    </button>
                </div>
            </div>

            {/* Member List */}
            {/* {sortedMembers.length > 0 ? (
                <div className="space-y-2">
                    {sortedMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex justify-between items-center bg-neutral-800 p-3 rounded-lg"
                        >
                            <span className="font-medium">{member.name}</span>
                            <span className="text-gray-400 text-sm">{member.role}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-sm">No members added yet.</p>
            )} */}

            {/* Modal with Framer Motion */}
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />

                        Modal Content
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        ></motion.div>
                        <Addteammember onClose={() => setShowModal(false)} />
                    </>
                )}
            </AnimatePresence>
        </div >
    );
};

export default Teams;
