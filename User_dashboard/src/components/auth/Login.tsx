import { useNavigate } from "react-router-dom"
// import bg1 from '../../assets/bg1.png'
const Login = () => {
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate('/userdashboard/profile')
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-neutral-900"
            // style={{ backgroundImage: `url(${bg1})` }}
            >
                <div className="bg-black border border-neutral-700 rounded-xl flex flex-col gap-3 p-5">
                    <h1 className="text-white text-xl font-semibold text-center">
                        AUDIO REALITIES
                    </h1>
                    <div className="p-8 m-5 rounded-2xl w-fit">
                        <form className="flex flex-col space-y-6">
                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-gray-200 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    className="w-full rounded-md  bg-neutral-800 text-sm border border-neutral-500 text-gray-300 px-4 py-2  placeholder:text-gray-400"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm text-gray-200 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    className="w-full rounded-md text-sm bg-neutral-800 border border-neutral-500 text-gray-300 px-4 py-2  placeholder:text-gray-400"
                                />
                                <div className="text-right mt-3">
                                    <a
                                        href="#"
                                        className="text-xs text-gray-400 hover:text-[#00FFC6]"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-center items-center mt-4 gap-3">
                                <a href="/signup">
                                    <button
                                        type="button"
                                        className="px-2 py-1 text-xs rounded-md border border-[#00FFC6] text-[#00FFC6] hover:bg-[#00FFC6] hover:text-black transition-all"
                                    >
                                        Create an Account
                                    </button>
                                </a>                                
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="px-3 py-1 text-sm rounded-md bg-[#00FFC6] text-black font-medium hover:bg-[#00dcae] transition-all"
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
