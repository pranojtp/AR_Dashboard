import { useState } from "react";

const Agreementsign = () => {
    const [selectedSection, setSelectedSection] = useState(1);

    const sections = [
        "General Terms and Conditions",
        "Acceptable Use Policy",
        "Cancellation Policy",
        "Privacy Policy",
    ];
    return (
        <>
            <div className="flex items-center justify-center bg-neutral-900 text-white">
                <div className="w-[900px] bg-neutral-800 rounded-2xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center px-8 py-5 border-b border-neutral-700">
                        <h1 className="text-xl font-semibold">Terms and Condition</h1>
                        <p className="text-sm text-neutral-400">
                            Agreement code : <span className="text-neutral-200"></span>
                        </p>
                    </div>

                    <div className="grid grid-cols-4 divide-x divide-neutral-700">
                        {/* Sidebar */}
                        <div className="col-span-1 bg-black">
                            <ul className="p-6 space-y-4">
                                {sections.map((item, index) => (
                                    <a href="">
                                    <li
                                        key={index}
                                        onClick={() => setSelectedSection(index + 1)}
                                        className={`cursor-pointer text-sm transition-colors duration-200 ${selectedSection === index + 1
                                            ? "text-[#00FFA3] font-medium"
                                            : "text-neutral-400 hover:text-white"
                                            }`}
                                    >
                                        {index + 1}. {item}
                                    </li>
                                    </a>
                                ))}
                            </ul>
                        </div>

                        {/* Main Content */}
                        <div className="bg-black col-span-3 p-6 space-y-4">
                            <h2 className="font-semibold text-lg">Summary</h2>
                            <p className="text-sm leading-relaxed text-neutral-300">
                                Pizza ipsum dolor amet lovers buffalo. String tomatoes Chicago pineapple extra onions
                                pork onions hand. Red spinach crust Bianca ham sauce Aussie garlic. Ham rib black
                                stuffed ipsum ricotta sausage pepperoni pepperoni. Pie red personal tomatoes platter
                                broccoli. Burnt lasagna mozzarella ranch banana wing pork. Black deep peppers sausage
                                beef bacon. Lovers garlic pesto tomato olives ranch anchovies.
                            </p>
                            <p className="text-sm leading-relaxed text-neutral-300">
                                Mushrooms garlic roll meatball thin melted dolor ham. NY mouth lot pork party lasagna
                                buffalo mouth platter pork. Pineapple lovers meat tomato white pepperoni Hawaiian red.
                                Spinach ricotta bell steak melted red dolor green. Steak pizza bacon ham ranch style
                                stuffed rib crust black. Peppers black tossed mushrooms meat red burnt. Chicago pork
                                rib crust tomatoes tomatoes red mouth deep. Ricotta white meatball beef mayo stuffed
                                lovers large. Bianca steak sausage garlic hand ricotta pork deep. NY tossed fresh black
                                black Bianca. Ricotta spinach Aussie burnt tomato NY. Tomatoes stuffed ranch thin
                                tossed meat. Crust Philly chicken onions large mushrooms lovers bacon. Green banana NY
                                lasagna stuffed parmesan pepperoni.
                            </p>
                            <p className="text-sm leading-relaxed text-neutral-300">
                                Rib cheese meat Hawaiian anchovies Bianca. Hand banana meat steak spinach string
                                personal pork lot Philly. Deep stuffed pie stuffed meatball bbq lasagna mushrooms
                                broccoli and. Tomatoes party lot thin string dolor broccoli Bianca. Chicago burnt
                                marinara steak bell Hawaiian spinach bacon melted style. Tomato broccoli mushrooms
                                ranch personal thin mouth sautéed NY. Pan ipsum and parmesan ipsum string ipsum.
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-8 py-4 border-t border-neutral-700">
                        <button className="text-sm text-neutral-400 hover:text-white">
                            Send a copy on my email
                        </button>
                        <div className="flex gap-4">
                            <button className="px-3 py-1 rounded-lg bg-neutral-800 text-[#00FFA3] border-1 border-[#00FFA3] transition">
                                DECLINE
                            </button>
                            <button className="px-6 py-2 rounded-lg bg-[#00FFA3] text-black font-medium hover:bg-[#00e697] transition">
                                AGREE
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Agreementsign
