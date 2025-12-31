
// const Createproject = () => {
//     const projects = [
//         { id: 1, title: "Dubbing", color: "from-[#00FFA3] to-[#00C4FF]" },
//         { id: 2, title: "Text to Speech", color: "from-[#00FFA3] to-[#00C4FF]" },
//         { id: 3, title: "Voice Cloning", color: "from-[#00FFA3] to-[#00C4FF]" },
//         { id: 4, title: "Voice Conversion", color: "from-[#00FFA3] to-[#00C4FF]" },
//     ];
//     return (
//         <>
//             <div>
//                 <h3 className="text-sm text-white font-medium mb-4">Select the type of Project</h3>
//             </div>
//             <div className="flex flex-row gap-10">
//                 {projects.map((proj) => (
//                     <div key={proj.id}>
//                         <div

//                             className={`text-white rounded-xl h-40 w-40 bg-gradient-to-r ${proj.color} flex items-center justify-center text-black font-semibold`}
//                         >
//                             +
//                         </div>
//                         <p className="text-white text-xs p-2">{proj.title}</p>
//                     </div>
//                 ))}
//             </div>

//         </>
//     )
// }

// export default Createproject


interface FeatureCardProps {
    title: string;
    gradientFrom: string;
    gradientTo: string;
    customGradientClass?: string;
}

// FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, gradientFrom, gradientTo, customGradientClass }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer">
            {/* Gradient box */}
            <div
                className={`
                    w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40
                    rounded-xl shadow-lg transition-all duration-300 ease-in-out
                    flex items-center justify-center p-2
                    ${customGradientClass || `bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
                    group-hover:scale-[1.02] group-hover:shadow-2xl
                `}
            >
                {/* Plus icon */}
                <div className="w-12 h-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/70 transform -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 h-full w-px bg-white/70 transform -translate-x-1/2"></div>
                </div>
            </div>

            {/* Title */}
            <p className="mt-4 text-white text-xs md:text-xs font-medium select-none">
                {title}
            </p>
        </div>
    );
};

const Createproject = () => {
    const features: FeatureCardProps[] = [
        {
            title: 'New Project',
            gradientFrom: 'from-blue-700',
            gradientTo: 'to-blue-400',
        },
        // {
        //     title: 'Text to Speech',
        //     gradientFrom: 'from-purple-600',
        //     gradientTo: 'to-cyan-400',
        // },
        // {
        //     title: 'Voice Cloning',
        //     gradientFrom: 'from-yellow-200',
        //     gradientTo: 'to-cyan-200',
        //     customGradientClass: 'bg-gradient-to-br from-yellow-200 to-cyan-400'
        // },
        // {
        //     title: 'Voice Conversion',
        //     gradientFrom: 'from-blue-900',
        //     gradientTo: 'to-green-500',
        //     customGradientClass: 'bg-gradient-to-br from-blue-900 to-green-600/70'
        // },
    ];

    return (
        <>
            <div>
                {/* <h3 className="text-sm text-white font-medium mb-4">
                    Select the type of Project
                </h3> */}
            </div>
            <div
                className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center md:justify-start"
            >
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        gradientFrom={feature.gradientFrom}
                        gradientTo={feature.gradientTo}
                        customGradientClass={feature.customGradientClass}
                    />
                ))}
            </div>
        </>
    );
};

export default Createproject;
