
import { useState } from "react";

const Generalsettings = () => {
    const [language, setLanguage] = useState("English");
    const [autoSave, setAutoSave] = useState(true);
    const [volume, setVolume] = useState(75);
    return (
        <>
            <div className="flex-1 p-10 h-fit bg-neutral-900">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl text-white font-semibold">General</h1>
                    <button
                        // onClick={handleSave}
                        className="px-4 py-1 bg-[#00FFA3] text-black font-medium rounded-lg hover:bg-[#00e695] transition"
                    >
                        Save Changes
                    </button>
                </div><br />
                <div className="flex flex-col gap-6">
                    {/* Language Selector */}
                    <div className="bg-neutral-800 border border-neutral-500 rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h3 className="text-m font-semibold text-white">Language</h3>
                            <p className="text-sm text-neutral-400">Choose your preferred language</p>
                        </div>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-transparent border border-[#00FFA3] text-[#00FFA3] px-2 py-1 rounded-lg focus:outline-none"
                        >
                            <option className="bg-black" value="English">English</option>
                            <option className="bg-black" value="Spanish">Spanish</option>
                            <option className="bg-black" value="French">French</option>
                        </select>
                    </div>

                    {/* Auto-save Toggle */}
                    <div className="bg-neutral-800 border border-neutral-500 rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h3 className="text-m font-semibold text-white">Auto-save</h3>
                            <p className="text-sm text-neutral-400">Automatically save your work</p>
                        </div>
                        <button
                            onClick={() => setAutoSave(!autoSave)}
                            className={`w-12 h-6 flex items-center rounded-full transition ${autoSave ? "bg-[#00FFA3]" : "bg-gray-600"
                                }`}
                        >
                            <div
                                className={`h-5 w-5 bg-white rounded-full shadow-md transform transition ${autoSave ? "translate-x-6" : "translate-x-1"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Volume Slider */}
                    <div className="bg-neutral-800 border border-neutral-500 rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                            <h3 className="text-m font-semibold text-white">Volume</h3>
                            <span className="text-sm text-neutral-400">{volume}%</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                            className="w-full accent-[#00FFA3]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Generalsettings
