import { useState } from "react";
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
    return (
        <>
            <div className="h-auto bg-neutral-900 p-3">
                <div className="flex flex-col gap-2">                    
                    <h1 className="text-m font-medium mb-2">Select the type of Project</h1>
                    <div className="flex flex-row gap-10">
                        <div>
                            <label className="block mb-2 text-xs font-medium">Project Name</label>
                            <input
                                type="text"
                                name="displayName"
                                // value={formData.displayName}
                                // onChange={handleChange}
                                placeholder="Enter your project name"
                                className="w-64 rounded-lg text-xs bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-xs font-medium">Type of project</label>
                            <input
                                type="text"
                                name="legalName"
                                // value={formData.legalName}
                                // onChange={handleChange}
                                placeholder="Company or organization affiliation"
                                className="w-64 text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>
                    </div>
                    <h1 className="text-m font-medium mt-5">Talents Involved</h1>
                    {/* Right column */}
                    <div className="flex flex-row gap-10">
                        <div>
                            <label className="block mb-2 text-xs font-medium">Source Voice 1</label>
                            <input
                                type="text"
                                name="affiliation"
                                // value={formData.affiliation}
                                // onChange={handleChange}
                                // placeholder="Enter your legal name"
                                className="w-64 text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-xs font-medium">Source Voice 2</label>
                            <input
                                type="text"
                                name="industry"
                                // value={formData.industry}
                                // onChange={handleChange}
                                // placeholder="e.g. Mollywood, Hollywood"
                                className="w-64 text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>
                        <div className="mt-7">
                            <button className="text-xs rounded-lg border-1 px-3 py-1 border-[#00FFA3] text-[#00FFA3]">Add more+</button>
                        </div>
                    </div>
                    <h1 className="text-m font-medium mt-6">User Involved</h1>
                    <div className="bg-neutral-950 rounded-2xl p-4 w-fit border border-neutral-700 text-white relative">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-5">                            
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
                                    // onClick={}
                                    className="px-4 py-1 border-1 border-[#00FFA3] text-[#00FFA3] rounded-lg hover:bg-[#00e695] transition w-full sm:w-auto text-xs"
                                >
                                    + Add User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projectdetails
