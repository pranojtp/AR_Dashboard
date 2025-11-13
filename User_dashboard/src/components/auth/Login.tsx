import { useNavigate } from "react-router-dom"
// import { useLocation } from "react-router-dom";
// import ThreeWavesScene from "../landingpage/Threeparticles";
import bgscrn from "../../assets/micbg1.jpg"

// import logo from '../../assets/favicon.ico'

const Login = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    // const fromSignout = location.state?.fromSignout || false;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/userdashboard/profile");
    };
    return (
        <>
            <div className="pr-5 sm:pr-25 relative flex items-center justify-end h-screen overflow-hidden  w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bgscrn})` }}>
                {/* <div className="absolute inset-0 z-0">
                    <ThreeWavesScene />
                </div> */}

                {/* Login Form */}
                <div className="relative z-10 flex flex-col p-5 gap-3 shadow-2xl w-full max-w-md">
                    {/* <div className="flex justify-center items-center">
                        <img src={logo} alt="logo" className="w-8 h-8"/>
                    </div>                     */}
                    <a href="/">
                        <h1 className="text-white text-2xl font-bold text-center tracking-wide mt-2 mb-5">
                            AUDIO REALITIES
                        </h1>
                    </a>
                    <div className="p-8 rounded-2xl">
                        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    className="w-full rounded-lg bg-neutral-800/50 text-sm border border-neutral-700 text-white px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:border-[#00FFC6] focus:ring-1 focus:ring-[#00FFC6] transition-all"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    className="w-full rounded-lg text-sm bg-neutral-800/50 border border-neutral-700 text-white px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:border-[#00FFC6] focus:ring-1 focus:ring-[#00FFC6] transition-all"
                                />
                                <div className="text-right mt-3">
                                    <a
                                        href="#"
                                        className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-center items-center gap-3 mt-5">
                                {/* {!fromSignout && (
                                    <a href="/signup">
                                        <button
                                            type="button"
                                            className="px-4 py-2 text-base rounded-2xl bg-black border border-neutral-600 text-white font-bold hover:bg-neutral-300 hover:text-black hover:py-2.5 transition-all"
                                        >
                                            Create Account
                                        </button>
                                    </a>
                                )} */}
                                <button
                                    type="submit"
                                    className="w-full py-2 text-base rounded-2xl bg-neutral-200 border border-neutral-600 text-black font-bold hover:bg-neutral-300 hover:py-2.5 transition-all"
                                >
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login



// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useState } from "react";
// import { loadFull } from "tsparticles";

// const Login = () => {
//     const navigate = useNavigate();
//     const [init, setInit] = useState(false);

//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadFull(engine);
//         }).then(() => setInit(true));
//     }, []);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         navigate("/userdashboard/profile");
//     };

//     return (
//         <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
//             {/* 🌊 3D Wave Particle Background */}
//             {init && (
//                 <Particles
//                     id="wave-particles"
//                     className="absolute inset-0"
//                     options={{
//                         background: { color: "#000000" },
//                         fpsLimit: 60,
//                         particles: {
//                             number: { value: 70, density: { enable: true } },
//                             color: { value: "#FFFFFF" },
//                             shape: { type: "circle" },
//                             opacity: { value: 0.4 },
//                             size: { value: 3 },
//                             move: {
//                                 enable: true,
//                                 speed: 1,
//                                 direction: "none",
//                                 random: false,
//                                 straight: false,
//                                 outModes: "out",
//                             },
//                             links: {
//                                 enable: true,
//                                 distance: 130,
//                                 color: "#FFFFFF",
//                                 opacity: 0.2,
//                                 width: 2,
//                             },
//                         },
//                         interactivity: {
//                             events: {
//                                 onHover: { enable: true, mode: "grab" },
//                                 // resize: true,
//                             },
//                             modes: {
//                                 grab: { distance: 200, line_linked: { opacity: 0.3 } },
//                             },
//                         },
//                         detectRetina: true,
//                         style: {
//                             // zIndex: 0,
//                         },
//                     }}
//                 />
//             )}

//             {/* Soft gradient overlay for depth */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-neutral-900/70 to-black/90"></div>

//             {/* 🪞 Frosted Glass Login Card */}
//             <motion.div
//                 className="relative z-10 bg-#000000  p-8 w-full max-w-md border border-neutral-700 rounded-2xl"
//             >
//                 <a href="/">
//                     <h1 className="text-2xl font-bold text-center text-white tracking-wide mb-10">
//                         AUDIO REALITIES
//                     </h1>
//                 </a>

//                 <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
//                     {/* Email Field */}
//                     <div>
//                         <label
//                             htmlFor="email"
//                             className="block text-sm font-medium text-gray-300 mb-2"
//                         >
//                             Email
//                         </label>
//                         <input
//                             id="email"
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full rounded-lg bg-neutral-900/70 border border-neutral-700 text-white px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:border-[#00FFC6] focus:ring-1 focus:ring-[#00FFC6] transition-all"
//                         />
//                     </div>

//                     {/* Password Field */}
//                     <div>
//                         <label
//                             htmlFor="password"
//                             className="block text-sm font-medium text-gray-300 mb-2"
//                         >
//                             Password
//                         </label>
//                         <input
//                             id="password"
//                             type="password"
//                             placeholder="Enter your password"
//                             className="w-full rounded-lg bg-neutral-900/70 border border-neutral-700 text-white px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:border-[#00FFC6] focus:ring-1 focus:ring-[#00FFC6] transition-all"
//                         />
//                         <div className="text-right mt-3">
//                             <a
//                                 href="#"
//                                 className="text-xs text-neutral-500 hover:text-[#00FFC6] transition-colors"
//                             >
//                                 Forgot password?
//                             </a>
//                         </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex justify-center items-center gap-3 mt-4">
//                         <button
//                             type="submit"
//                             className="w-full py-2 text-base rounded-2xl bg-neutral-200 border border-neutral-600 text-black font-bold hover:bg-neutral-400 transition-all"
//                         >
//                             LOGIN
//                         </button>
//                     </div>
//                 </form>
//             </motion.div>

//             {/* Floating Glow Effects */}
//             <div className="absolute w-72 h-72 bg-neutral-500/30 rounded-full blur-[120px] animate-float-slow top-20 left-10"></div>
//             <div className="absolute w-80 h-80 bg-neutral-500/30 rounded-full blur-[160px] animate-float-slow bottom-10 right-20"></div>
//         </div>
//     );
// };

// export default Login;
