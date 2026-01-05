import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AddProjectManagers from "./AddProjectManagers";

interface Option {
    label: string;
    value: string;
}

interface sortOption {
    label: string;
    value: string;
}

const Projectdetails = () => {
    const [selectedValue, setSelectedValue] = useState<string>("allroles");
    const [sortBy, setSortBy] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [image, setImage] = useState<string | null>(null);
    const [projectName, setProjectName] = useState("");
    const [showModal, setShowModal] = useState<boolean>(false);

    const navigate = useNavigate()

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

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            alert("Max size is 5 MB!");
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result as string);

        };
        reader.readAsDataURL(file);
    };

    const handleRemove = () => {
        setImage(null);

    };

    const handleCancel = () => {
        const isConfirmed = window.confirm("Confirm to discard the changes?");

        if (isConfirmed) {
            navigate("/userdashboard/projectpage/createproject"); // Navigate to the profile page
        } else {
            // Stay on the current page, no action required
        }
    };

    const handleSave = () => {
        if (!projectName.trim()) {
            alert("Project name is required");
            return;
        }

        const isConfirmed = window.confirm("Confirm to create the project?");
        if (!isConfirmed) return;

        const newProject = {
            id: crypto.randomUUID(), // unique id
            name: projectName,
            coverImage: image, // base64 image
            createdAt: Date.now(),
        };

        const existingProjects = JSON.parse(
            localStorage.getItem("projects") || "[]"
        );

        const updatedProjects = [newProject, ...existingProjects];

        localStorage.setItem("projects", JSON.stringify(updatedProjects));

        navigate("/userdashboard/projectpage/createproject");
    };

    return (
        <div className="bg-neutral-900 p-4">
            <h1 className="text-sm font-medium mb-4">Select the type of Project</h1>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN (Form + Managers) */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* PROJECT DETAILS */}
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div>
                                <label className="block mb-2 text-xs font-medium">Project Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your project name"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    className="w-full rounded-lg text-xs bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-xs font-medium">Type of Project</label>
                                <input
                                    type="text"
                                    placeholder="Eg. Voice coversion,Text to Speech"
                                    className="w-full rounded-lg text-xs bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div>
                                <label className="block mb-2 text-xs font-medium">Director</label>
                                <input
                                    type="text"
                                    placeholder="Enter director name"
                                    className="w-full rounded-lg text-xs bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-xs font-medium">Producer</label>
                                <input
                                    type="text"
                                    placeholder="Enter producer name"
                                    className="w-full rounded-lg text-xs bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TALENTS */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-sm font-medium">Talent Involved</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end">
                            <div>
                                <label className="block mb-2 text-xs font-medium">Source Voice 1</label>
                                <input className="w-full text-xs rounded-lg bg-neutral-950 border border-neutral-500 px-4 py-2" />
                            </div>

                            <div>
                                <label className="block mb-2 text-xs font-medium">Source Voice 2</label>
                                <input className="w-full text-xs rounded-lg bg-neutral-950 border border-neutral-500 px-4 py-2" />
                            </div>

                            <button className="w-fit px-4 py-2 text-xs border border-[#00FFA3] text-[#00FFA3] hover:bg-[#00FFA3] hover:text-black rounded-lg">
                                Add more +
                            </button>
                        </div>
                    </div>

                    {/* PROJECT MANAGERS */}
                    <h2 className="text-sm font-medium">Add Project Managers</h2>
                    <div className="bg-neutral-950 w-fit rounded-2xl p-4 border border-neutral-700">
                        <div className="flex flex-wrap gap-3">
                            <input
                                value={query}
                                onChange={handleQueryChange}
                                placeholder="Search..."
                                className="p-1 text-xs rounded-lg bg-neutral-900 border border-neutral-500"
                            />

                            <select
                                value={selectedValue}
                                onChange={handleChange}
                                className="p-1 text-xs rounded-lg bg-amber-100 text-black"
                            >
                                {options.map(o => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>

                            <select
                                value={sortBy}
                                onChange={sortChange}
                                className="p-1 text-xs rounded-lg bg-amber-100 text-black"
                            >
                                {sortoptions.map(s => (
                                    <option key={s.value} value={s.value}>{s.label}</option>
                                ))}
                            </select>

                            <button 
                            onClick={() => setShowModal(true)}
                            className="px-4 py-1 text-xs border border-[#00FFA3] text-[#00FFA3] hover:bg-[#00FFA3] hover:text-black rounded-lg">
                                + Add User
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (COVER IMAGE) */}
                <div className="flex flex-col gap-4">

                    <div className="h-40 w-40 rounded-xl bg-neutral-950 border border-neutral-500 flex items-center justify-center overflow-hidden">
                        {image ? (
                            <img src={image} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-xs text-neutral-500">No cover</span>
                        )}
                    </div>

                    <label className="block w-fit text-center px-4 py-2 text-xs border border-[#00FFA3] text-[#00FFA3] rounded-lg cursor-pointer hover:bg-[#00FFA3] hover:text-black">
                        Upload Cover
                        <input type="file" hidden accept="image/png, image/jpeg" onChange={handleImageUpload} />
                    </label>

                    <p className="text-xs text-neutral-400">
                        Max size 5 MB JPG or PNG Format
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={handleRemove}
                            className="text-xs px-3 py-1 border border-neutral-500 rounded-lg text-neutral-400"
                        >
                            Remove Image
                        </button>

                        <label className="text-xs px-3 py-1 border border-neutral-500 rounded-lg cursor-pointer text-neutral-400">
                            Change Image
                            <input type="file" hidden onChange={handleImageUpload} />
                        </label>
                    </div>
                    <div className="flex lg:justify-start gap-4 mt-6">
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-neutral-800 text-sm text-[#00e695] font-medium border border-[#00e695] rounded-lg hover:bg-[#00e695] hover:text-black transition">
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-[#00FFA3] text-sm text-black font-medium rounded-lg hover:bg-[#00e695] transition">
                            Create Project
                        </button>
                    </div>
                </div>

            </div>
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
                            <AddProjectManagers onClose={() => setShowModal(false)} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projectdetails;
