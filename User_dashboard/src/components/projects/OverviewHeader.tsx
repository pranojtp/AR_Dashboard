import { useState } from "react";
import { AudioLines } from "lucide-react";


const OverviewHeader = () => {
    const [, setImage] = useState<string | null>(null);
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
    return (
        <>
            <div className="flex flex-col gap-3 rounded-2xl bg-neutral-900 w-full h-auto">

                {/* 🔹 Profile Section */}
                <section className="bg-gradient-to-b from-neutral-950 to-neutral-800 p-4 flex flex-col gap-15 md:flex-col h-auto rounded-2xl border border-neutral-800">
                    <div className="flex flex-wrap gap-2 justify-end ">
                        <label className="px-2 py-1 bg-neutral-900 text-xs text-white font-medium rounded-lg border border-neutral-400 text-center cursor-pointer transition hover:bg-[#00FFA3] hover:text-black">
                            CHANGE COVER
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1 pl-2">
                            <div className="flex flex-row gap-2">
                                <p className="font-semibold text-lg  text-white">Empuraan - A Lal -Raj Movie</p>
                                <div className="px-1 bg-neutral-800 text-[0.625rem] text-[#00FFA3]  rounded-sm border border-[#00FFA3] content-center cursor-pointer transition">In Progress</div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <AudioLines className="size-4" />
                                <p className="max-w-xl text-xs italic text-white text-justify">
                                    Voice Conversion
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div>
                                    <p className="text-xs text-white/60">Created On</p>
                                    <p className="text-sm font-semibold text-white">12 Jun 2025</p>
                                </div>

                                <div>
                                    <p className="text-xs text-white/60">Original Language</p>
                                    <p className="text-sm font-semibold text-white">Malayalam</p>
                                </div>

                                <div>
                                    <p className="text-xs text-white/60">Localisation Languages</p>
                                    <p className="text-sm font-semibold text-white">
                                        Hindi, Tamil, Telugu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OverviewHeader
