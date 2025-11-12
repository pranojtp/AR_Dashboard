import Select from "react-select";
import { useState } from "react";
import type { StylesConfig } from "react-select";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";

const roleOptions = [
    { value: "Actor", label: "Actor" },
    { value: "Producer", label: "Producer" },
    { value: "Director", label: "Director" },
    { value: "Director of Audiography", label: "Director of Audiography" },
    { value: "Sound Designer", label: "Sound Designer" },
    { value: "Sound Mixer", label: "Sound Mixer" },
    { value: "Music Director", label: "Music Director" },
    { value: "Dubbing Director", label: "Dubbing Director" },
];

const customStyles: StylesConfig<any, true> = {
    control: (base, state) => ({
        ...base,
        backgroundColor: "#262626",
        borderColor: state.isFocused ? "#00FFA3" : "#737373",
        boxShadow: state.isFocused ? "0 0 0 1px #00FFA3" : "none",
        "&:hover": { borderColor: "#00FFA3" },
        color: "white",
        borderRadius: "0.5rem",
        padding: "2",
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#171717",
        color: "white",
        borderRadius: "0.5rem",
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
            ? "#00FFA3"
            : isFocused
                ? "#262626"
                : "transparent",
        color: isSelected ? "#000000" : "#ffffff",
        cursor: "pointer",
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: "white",
        color: "#000",
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: "#000",
    }),
    multiValueRemove: (base) => ({
        ...base,
        color: "#000",
        ":hover": { backgroundColor: "red", color: "#000" },
    }),
    placeholder: (base) => ({
        ...base,
        color: "#9CA3AF",
    }),
    singleValue: (base) => ({
        ...base,
        color: "white",
    }),
};

const Accountdetails = () => {
    const [image, setImage] = useState<string | null>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

    const avatars = [
        avatar1,
        avatar2,
        avatar1,
        avatar2,
        avatar1,
        avatar2,
        avatar1,
        avatar2,
        avatar1,
    ];

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
            setSelectedAvatar(null);
        };
        reader.readAsDataURL(file);
    };

    const handleRemove = () => {
        setImage(null);
        setSelectedAvatar(null);
    };

    const handleAvatarSelect = (index: number) => {
        setSelectedAvatar(index);
        setImage(avatars[index]);
    };

    return (
        <div className="h-auto bg-neutral-900 p-2 md:p-4">
            <div className="flex-1 text-white h-fit w-full rounded-xl">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-lg md:text-xl font-semibold">
                        Complete Your Profile
                    </h1>
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
                    {/* Left Section */}
                    <div className="flex flex-col lg:col-span-2 gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Left column */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your display name"
                                        className="w-full rounded-lg text-xs bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Legal Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your legal name"
                                        className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Role</label>
                                    <Select
                                        isMulti
                                        name="role"
                                        options={roleOptions}
                                        placeholder="Select roles..."
                                        styles={customStyles}
                                        className="text-xs"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Affiliation
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Company or organization affiliation"
                                        className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Industry
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Mollywood, Hollywood"
                                        className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="City, State/Country"
                                        className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="mt-3">
                            <label className="block mb-2 text-sm font-medium">Bio</label>
                            <textarea
                                placeholder="Maximum 200 characters"
                                maxLength={200}
                                className="w-full h-24 text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                            />
                        </div>

                        {/* Social Media */}
                        <div className="mt-3">
                            <h1 className="text-base font-semibold mb-4">
                                Social Media Links
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            Facebook
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="https://facebook.com/username"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            Instagram
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="https://instagram.com/username"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            X
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="https://x.com/username"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Profile Photo) */}
                    <div className="flex flex-col col-span-1 gap-6 items-center lg:items-start">
                        <div className="p-4 w-full max-w-xs">
                            <div className="flex flex-col gap-4">
                                <div className="h-28 w-28 rounded-full bg-neutral-800 border border-neutral-500 overflow-hidden flex items-center justify-center">
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

                                <label className="w-full md:w-40 py-2 bg-neutral-800 text-xs text-[#59fbf0] font-medium rounded-lg border border-[#59fbf0] text-center cursor-pointer transition hover:bg-[#59fbf0] hover:text-black">
                                    Upload Image
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
                                    className="w-fit rounded-lg text-xs text-neutral-400 bg-neutral-800 border border-neutral-500 px-3 py-1 hover:bg-neutral-700 transition"
                                >
                                    Remove Photo
                                </button>
                                <label className="w-fit rounded-lg text-xs text-neutral-400 bg-neutral-800 border border-neutral-500 px-3 py-1 text-center cursor-pointer hover:bg-neutral-700 transition">
                                    Change Photo
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>

                            <div className="mt-6">
                                <h2 className="block mb-3 text-white text-base font-medium text-center lg:text-left">
                                    Or Choose an Avatar
                                </h2>
                                <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                                    {avatars.map((avatar, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleAvatarSelect(index)}
                                            className={`h-14 w-14 flex items-center justify-center rounded-full border border-neutral-700 cursor-pointer transition ${selectedAvatar === index
                                                ? "ring-2 ring-neutral-500"
                                                : "hover:ring-1 hover:ring-neutral-500"
                                                }`}
                                        >
                                            <img
                                                src={avatar}
                                                alt={`Avatar ${index + 1}`}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center lg:justify-start gap-4 mt-6">
                                    <button className="px-4 py-2 bg-neutral-800 text-sm text-[#00e695] font-medium border border-[#00e695] rounded-lg hover:bg-[#00e695] hover:text-black transition">
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 bg-[#00FFA3] text-sm text-black font-medium rounded-lg hover:bg-[#00e695] transition">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accountdetails;
