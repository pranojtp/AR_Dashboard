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
    const [image, setImage] = useState<string | null>(null);

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

    return (
        <>
            <div className="h-auto bg-neutral-900 p-3">                
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-m font-medium mb-2">Select the type of Project</h1>
                    
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 w-full">
                        <div className="w-full sm:w-auto">
                            <label className="block mb-2 text-xs font-medium">Project Name</label>
                            <input
                                type="text"
                                name="displayName"
                                placeholder="Enter your project name"
                                className="w-full sm:w-64 rounded-lg text-xs bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-auto">
                            <label className="block mb-2 text-xs font-medium">Type of project</label>
                            <input
                                type="text"
                                name="legalName"
                                placeholder="Company or organization affiliation"
                                className="w-full sm:w-64 text-xs rounded-lg bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>
                    </div>

                    <h1 className="text-m font-medium mt-3">Talents Involved</h1>

                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 w-full">
                        <div className="w-full sm:w-auto">
                            <label className="block mb-2 text-xs font-medium">Source Voice 1</label>
                            <input
                                type="text"
                                name="affiliation"
                                className="w-full sm:w-64 text-xs rounded-lg bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>
                        <div className="w-full sm:w-auto">
                            <label className="block mb-2 text-xs font-medium">Source Voice 2</label>
                            <input
                                type="text"
                                name="industry"
                                className="w-full sm:w-64 text-xs rounded-lg bg-neutral-950 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>
                        <div className="sm:mt-7">
                            <button className="text-xs rounded-lg border-1 px-3 py-1 border-[#00FFA3] text-[#00FFA3]">Add more+</button>
                        </div>
                    </div>

                    <h1 className="text-m font-medium mt-3">Add Project Managers</h1>

                    <div className="bg-neutral-950 rounded-2xl p-4 w-full sm:w-fit border border-neutral-700 text-white relative">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-5 w-full">
                            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 w-full">
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
                                    className="w-full sm:w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-xs"
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
                                    className="w-full sm:w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-xs"
                                >
                                    {sortoptions.map((sortOption) => (
                                        <option key={sortOption.value} value={sortOption.value}>
                                            {sortOption.label}
                                        </option>
                                    ))}
                                </select>

                                <button
                                    className="px-4 py-1 border-1 border-[#00FFA3] text-[#00FFA3] rounded-lg hover:bg-[#00e695] transition w-full sm:w-auto text-xs"
                                >
                                    + Add User
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 gap-6 items-center lg:items-start">
                        <div className="p-4 w-full max-w-xs">
                            <div className="flex flex-col gap-4">
                                <div className="h-35 w-35 rounded-xl bg-neutral-950 border border-neutral-500 overflow-hidden flex items-center justify-center">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />

                                    ) : (
                                        <div className="text-neutral-500 text-xs text-center">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <label className="w-fit px-4 py-2 bg-neutral-950 text-xs text-[#59fbf0] font-medium rounded-lg border border-[#59fbf0] text-center cursor-pointer transition hover:bg-[#59fbf0] hover:text-black">
                                    Upload Cover
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </label>

                                <p className="text-xs text-neutral-400">
                                    Max size 5 MB JPG or PNG Format
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-3">
                                <button
                                    onClick={handleRemove}
                                    className="w-fit rounded-lg text-xs text-neutral-400 bg-neutral-900 border border-neutral-500 px-3 py-1 hover:bg-neutral-700 transition"
                                >
                                    Remove Photo
                                </button>
                                <label className="w-fit rounded-lg text-xs text-neutral-400 bg-neutral-900 border border-neutral-500 px-3 py-1 text-center cursor-pointer hover:bg-neutral-700 transition">
                                    Change Photo
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projectdetails;
