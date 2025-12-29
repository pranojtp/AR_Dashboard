import Select from "react-select";
import { useState } from "react";
import type { StylesConfig } from "react-select";
import { useNavigate } from "react-router-dom";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import userService from "../../services/userService";
import useCurrentUser from "../../hooks/useCurrentUser";

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

type RoleOption = {
    value: string;
    label: string;
};

const customStyles: StylesConfig<RoleOption, boolean> = {
    control: (base, state) => ({
        ...base,
        backgroundColor: "#262626", // bg-neutral-800
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

const Personaldetails = () => {
    const navigate = useNavigate();

    // --- Form State ---
    const [profile, setProfile] = useState({
        displayName: "",
        legalName: "",
        primaryJobRole: "",
        additionalJobRoles: [] as string[],
        affiliation: "",
        location: "",
        bio: "",
        facebook: "",
        instagram: "",
        x: "",
        profilePhoto: ""
    });


    const [errors, setErrors] = useState({
        displayName: "",
        legalName: "",
        primaryJobRole: "",
    });

    // --- Image Upload ---
    const [image, setImage] = useState<string | null>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

    const avatars = [
        avatar1,
        avatar2,
    ];

    // --- Handle Text Inputs ---
    // Handle input change for text fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    // Handle select change for roles
    // const handleRoleChange = (selected: any) => {
    //     const selectedRoles = selected.map((role: any) => role.value);
    //     setProfile((prevProfile) => ({
    //         ...prevProfile,
    //         otherRoles: selectedRoles
    //     }));
    // };


    // --- Handle Save with Validation ---
    const { user } = useCurrentUser();

    const handleSave = async () => {
        if (!user) {
            console.error("User not loaded");
            return;
        }

        const newErrors = {
            displayName: profile.displayName ? "" : "Display Name is required",
            legalName: profile.legalName ? "" : "Legal Name is required",
            primaryJobRole: profile.primaryJobRole ? "" : "Primary role is required",
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some(err => err !== "")) return;

        // Remove duplicate roles
        const uniqueRoles = Array.from(
            new Set([profile.primaryJobRole, ...profile.additionalJobRoles])
        );

        const payload = {
            ...user,

            displayName: profile.displayName,
            legalName: profile.legalName,

            primaryJobRole: {
                name: profile.primaryJobRole,
            },

            additionalJobRoles: profile.additionalJobRoles.map(role => ({
                name: role,
            })),

            roles: uniqueRoles.map(role => ({
                name: role,
            })),

            affiliation: profile.affiliation,
            location: profile.location,
            bio: profile.bio,
            facebook: profile.facebook,
            instagram: profile.instagram,
            x: profile.x,

            profilePhoto: image || undefined,
            newUser: false,
            active: true,
        };

        await userService.updateUser(user.id, payload);
        navigate("/userdashboard/profile");
    };



    // --- Image Upload Handler ---
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
        <>
            <div className="h-full pl-4 sm:pl-10 md:pl-20 lg:pl-20 pr-4 sm:pr-8 md:pr-20 lg:pr-20 pt-5 pb-5 bg-neutral-800">
                <div className="bg-black flex-1 text-white h-fit w-fit border-1 border-neutral-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-xl font-semibold">Complete Your Profile</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10">
                        <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-2 gap-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Left column */}
                                <div className="flex flex-col gap-6">
                                    {/* Display Name */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Display Name *</label>
                                        <input
                                            type="text"
                                            name="displayName"
                                            value={profile.displayName}
                                            onChange={handleChange}
                                            placeholder="Enter your display name"
                                            className="w-full rounded-lg text-xs bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                            required
                                        />
                                        {errors.displayName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.displayName}</p>
                                        )}
                                    </div>

                                    {/* Legal Name */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Legal Name *</label>
                                        <input
                                            type="text"
                                            name="legalName"
                                            value={profile.legalName}
                                            onChange={handleChange}
                                            placeholder="Enter your legal name"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                        {errors.legalName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.legalName}</p>
                                        )}
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            Additional Roles
                                        </label>

                                        <Select<RoleOption, true>
                                            isMulti
                                            name="additionalJobRoles"
                                            options={roleOptions.filter(
                                                opt => opt.value !== profile.primaryJobRole
                                            )}
                                            placeholder="Select roles..."
                                            styles={customStyles}
                                            className="text-xs"
                                            value={roleOptions.filter(opt =>
                                                profile.additionalJobRoles.includes(opt.value)
                                            )}
                                            onChange={(selected) =>
                                                setProfile({
                                                    ...profile,
                                                    additionalJobRoles: selected.map(opt => opt.value),
                                                })
                                            }
                                        />

                                    </div>
                                </div>


                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Affiliation</label>
                                        <input
                                            type="text"
                                            name="affiliation"
                                            value={profile.affiliation}
                                            onChange={handleChange}
                                            placeholder="Company or organization affiliation"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            Primary Role
                                        </label>

                                        <Select<RoleOption, false>
                                            name="primaryJobRole"
                                            options={roleOptions}
                                            placeholder="Select primary role..."
                                            styles={customStyles}
                                            className="text-xs"
                                            value={
                                                roleOptions.find(opt => opt.value === profile.primaryJobRole) || null
                                            }
                                            onChange={(selected) =>
                                                setProfile({
                                                    ...profile,
                                                    primaryJobRole: selected?.value || "",
                                                })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={profile.location}
                                            onChange={handleChange}
                                            placeholder="City, State/Country"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="mt-2">
                                <label className="block mb-2 text-sm font-medium">Bio</label>
                                <input
                                    name="bio"
                                    placeholder="Maximum 200 characters"
                                    value={profile.bio}
                                    onChange={handleChange}
                                    maxLength={300}
                                    className="w-full h-20 text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                />
                            </div><br />

                            {/* Social Media */}
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-m font-semibold">Social Media Links</h1>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Facebook</label>
                                        <input
                                            type="text"
                                            name="facebook"
                                            value={profile.facebook}
                                            onChange={handleChange}
                                            placeholder="https://facebook.com/username"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Instagram</label>
                                        <input
                                            type="text"
                                            name="instagram"
                                            value={profile.instagram}
                                            onChange={handleChange}
                                            placeholder="https://instagram.com/username"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">X</label>
                                        <input
                                            type="text"
                                            name="x"
                                            value={profile.x}
                                            onChange={handleChange}
                                            placeholder="https://x.com/username"
                                            className="w-full text-xs rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Upload + Avatar Section */}
                        <div className="flex flex-col col-span-1 gap-6">
                            <div className="p-6 w-full max-w-sm">
                                <div className="flex flex-col gap-4">
                                    <div className="h-22 w-22 rounded-full bg-neutral-800 border border-neutral-500 overflow-hidden flex items-center justify-center">
                                        {image ? (
                                            <img src={image} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-neutral-500 text-sm text-center">No Image</div>
                                        )}
                                    </div>

                                    <label className="w-fit px-4 py-2 bg-neutral-800 text-xs text-[#59fbf0] font-medium rounded-lg border border-[#59fbf0] text-center cursor-pointer transition hover:bg-[#59fbf0] hover:text-black">
                                        Upload Image
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                        />
                                    </label>

                                    <p className="text-xs text-neutral-400 mb-5">
                                        Max size 5 MB JPG or PNG Format
                                    </p>
                                </div>

                                <div className="flex space-x-4">
                                    <button
                                        onClick={handleRemove}
                                        className="w-fit rounded-lg text-xs text-neutral-400 bg-neutral-800 border border-neutral-500 px-2 py-1 hover:bg-neutral-700 transition"
                                    >
                                        Remove Photo
                                    </button>
                                    <label className="w-fit rounded-lg text-xs text-neutral-400 bg-neutral-800 border border-neutral-500 px-2 py-1 text-center cursor-pointer hover:bg-neutral-700 transition">
                                        Change Photo
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                </div>

                                <div className="mt-8">
                                    <h2 className="block mb-2 text-white text-m font-medium">
                                        Or Choose an Avatar
                                    </h2>
                                    <div className="p-2">
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2 max-w-xs mx-auto">
                                            {avatars.map((avatar, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleAvatarSelect(index)}
                                                    className={`h-22 w-22 flex items-center justify-center rounded-full p-1 cursor-pointer transition ${selectedAvatar === index
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

                                        <div className="flex gap-5 mt-5">
                                            {/* <button className="px-4 py-2 bg-neutral-800 text-sm text-[#00e695] font-medium w-35 border border-[#00e695] rounded-lg hover:bg-[#00e695] hover:text-black transition">
                                                Cancel
                                            </button> */}
                                            <button
                                                onClick={handleSave}
                                                className="px-4 py-2 bg-[#00FFA3] text-sm text-black font-medium w-full rounded-lg hover:bg-[#00e695] transition"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Personaldetails;
