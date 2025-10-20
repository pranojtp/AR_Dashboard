import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/userdashboard/profile')
    }

    return (
        <>
            <div className="relative flex items-center justify-center h-screen bg-neutral-800 overflow-hidden">
                {/* Login Form */}
                <div className="relative z-10 bg-black backdrop-blur-xl border border-neutral-800/50 rounded-2xl flex flex-col gap-3 p-5 shadow-2xl w-full max-w-md">
                    <h1 className="text-white text-2xl font-bold text-center tracking-wide mt-2">
                        AUDIO REALITIES
                    </h1>
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
                                        className="text-xs text-gray-400 hover:text-[#00FFC6] transition-colors"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-center items-center mt-6 gap-3">
                                <a href="/signup">
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-sm rounded-lg border border-neutral-700 text-gray-300 hover:border-[#00FFC6] hover:text-[#00FFC6] transition-all"
                                    >
                                        Create Account
                                    </button>
                                </a>
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-sm rounded-lg bg-[#00FFC6] text-black font-semibold hover:bg-[#00e6b8] transition-all"
                                >
                                    Login
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