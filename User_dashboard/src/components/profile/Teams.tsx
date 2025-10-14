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
    const [query, setQuery] = useState<string>(""); // Added state for search query

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

    // Updated search change handler
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <>
            {/* Removed h-80 to allow content to dictate height, making it more flexible */}
            <div className="bg-black rounded-2xl p-4 text-white">
                {/* Header */}
                {/* On small screens, title and controls stack (flex-col). On medium screens and up, they go side-by-side (md:flex-row). */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
                    <h3 className="text-lg font-semibold mb-2 md:mb-0">Teams</h3>

                    {/* Controls Container: Uses flex-wrap to allow items to wrap to the next line on small screens. */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto">

                        {/* Search Input: Takes full width on small screens (w-full sm:w-auto) */}
                        <input
                            type="text"
                            value={query}
                            onChange={handleQueryChange}
                            placeholder="Search ..."
                            // Added w-full on mobile, and a max-w-xs to cap its size on larger screens
                            className="p-1 border rounded-lg border-neutral-500 text-white w-full sm:w-auto max-w-xs"
                        />

                        {/* Selects: Made them a fixed, smaller width on small screens to fit better */}
                        <select
                            value={selectedValue}
                            onChange={handleChange}
                            // Added w-fit for content width
                            className="w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-sm"
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
                            // Added w-fit for content width
                            className="w-fit min-w-[100px] p-1 rounded-lg bg-amber-100 text-black text-sm"
                        >
                            {sortoptions.map((sortOption) => (
                                <option key={sortOption.value} value={sortOption.value}>
                                    {sortOption.label}
                                </option>
                            ))}
                        </select>

                        {/* Button: Takes up remaining width on smaller screens */}
                        <button
                            // Uses w-full on small screens for better click area
                            className="px-4 py-1 bg-[#00FFA3] text-black rounded-xl hover:bg-[#00e695] transition w-full sm:w-auto text-sm font-medium"
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