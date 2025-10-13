import { useState } from "react";

interface Option {
    label: string;
    value: string;
}
interface sortOption {
    label: string;
    value: string;
}

const Teams = () => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");

    const options: Option[] = [
        { label: "All Roles", value: "allroles" },
        { label: "Frontend Developer", value: "frontend" },
        { label: "Backend Developer", value: "backend" },
        { label: "Full Stack Developer", value: "fullstack" },
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
    return (
        <>
            <div className="bg-black rounded-2xl p-4 text-white h-80">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Teams</h3>
                    <div className="flex justify-between gap-5 ">
                        <input
                            type="text"
                            // value={query}
                            // onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search ..."
                            className="p-1 border rounded-lg border-neutral-500 "
                        />
                        <select
                            value={selectedValue}
                            onChange={handleChange}
                            className="w-30 p-1 rounded-lg bg-amber-100 text-black"
                        >
                            {options.map((option) => (
                                <option key={option.value} value={option.value} disabled={!option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={sortBy}
                            onChange={sortChange}
                            className="w-fit p-1 rounded-lg bg-amber-100 text-black"
                        >
                            {sortoptions.map((sortOption) => (
                                <option key={sortOption.value} value={sortOption.value} disabled={!sortOption.value}>
                                    {sortOption.label}
                                </option>
                            ))}
                        </select>
                        <button
                            className="px-4 py-1 bg-[#00FFA3] text-black rounded-xl hover:bg-[#00e695] transition"
                        >
                            + Add Members
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams
