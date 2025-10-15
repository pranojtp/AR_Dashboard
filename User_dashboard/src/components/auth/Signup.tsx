// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// interface FormData {
//     email: string;
//     pwd1: string;
//     pwd2: string;
// }

// interface FormErrors {
//     email?: string;
//     pwd1?: string;
//     pwd2?: string;
// }

// interface TouchedFields {
//     email?: boolean;
//     pwd1?: boolean;
//     pwd2?: boolean;
// }

// const Signup: React.FC = () => {
//     const [formData, setFormData] = useState<FormData>({
//         email: "",
//         pwd1: "",
//         pwd2: "",
//     });

//     const [errors, setErrors] = useState<FormErrors>({});
//     const [touched, setTouched] = useState<TouchedFields>({});

//     const navigate = useNavigate();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex =
//         /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#~()_|+=-`\/:;,.])[A-Za-z\d@$!%*?&#~()_|+=-`\/:;,.]{8,}$/;

//     const validateField = (name: string, value: string) => {
//         let error = "";

//         if (name === "email") {
//             if (!emailRegex.test(value)) {
//                 error = "Enter a valid email address (e.g. user@example.com)";
//             }
//         }

//         if (name === "pwd1") {
//             if (!passwordRegex.test(value)) {
//                 error =
//                     "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
//             }
//         }

//         if (name === "pwd2") {
//             if (value !== formData.pwd1) {
//                 error = "Passwords do not match.";
//             }
//         }

//         setErrors((prev) => ({ ...prev, [name]: error }));
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setTouched((prev) => ({ ...prev, [name]: true }));
//         validateField(name, value);
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const newErrors: FormErrors = {};

//         if (!emailRegex.test(formData.email)) {
//             newErrors.email = "Enter a valid email address.";
//         }

//         if (!passwordRegex.test(formData.pwd1)) {
//             newErrors.pwd1 =
//                 "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
//         }

//         if (formData.pwd1 !== formData.pwd2) {
//             newErrors.pwd2 = "Passwords do not match.";
//         }

//         setErrors(newErrors);
//         setTouched({ email: true, pwd1: true, pwd2: true });

//         if (Object.keys(newErrors).length === 0) {
//             console.log("✅ Form submitted:", formData);
//             // alert("Signup successful!");
//             navigate("/personaldetails");
//         }
//     };
//     return (
//         <>
//             <div className="flex items-center justify-center h-screen bg-neutral-800">
//                 <div className="bg-black border border-neutral-700 rounded-xl flex flex-col gap-8 p-8">
//                     <h1 className="text-white text-2xl font-semibold text-center">
//                         AUDIO REALITIES
//                     </h1>

//                     <form
//                         className="flex flex-col items-center gap-3 p-8 rounded-2xl shadow-lg w-auto space-y-6"
//                         onSubmit={handleSubmit}
//                     >
//                         {/* Email */}
//                         <div className="w-80">
//                             <label className="block text-gray-200 text-m mb-2 font-medium">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="example@gmail.com"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 className={`w-full rounded-lg bg-neutral-800 text-white border px-4 py-2 placeholder-gray-400  focus:outline-none ${touched.email && errors.email
//                                     ? "border-red-500"
//                                     : "border-[#10a79d]"
//                                     }`}
//                             />
//                             {touched.email && errors.email && (
//                                 <p className="text-red-500 text-sm mt-1 transition-all">
//                                     {errors.email}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Create Password */}
//                         <div className="w-80">
//                             <label className="block mb-2 text-m text-gray-200 font-medium">
//                                 Create Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="pwd1"
//                                 placeholder="........"
//                                 value={formData.pwd1}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 className={`w-full rounded-lg bg-neutral-800 text-white border px-4 py-2 placeholder-gray-400 placeholder:text-4xl focus:outline-none ${touched.pwd1 && errors.pwd1
//                                     ? "border-red-500"
//                                     : "border-[#10a79d]"
//                                     }`}
//                             />
//                             <p
//                                 className={`text-sm pt-3 mt-1 transition-all font-style: italic ${touched.pwd1 && errors.pwd1 ? "text-red-500" : "text-neutral-600"
//                                     }`}
//                             >
//                                 Password must be at least 8 characters, include one uppercase letter, one
//                                 number, and one special character.
//                             </p>
//                         </div>

//                         {/* Confirm Password */}
//                         <div className="w-80">
//                             <label className="block mb-2 text-m text-gray-200 font-medium">
//                                 Confirm Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="pwd2"
//                                 placeholder="........"
//                                 value={formData.pwd2}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 className={`w-full rounded-lg bg-neutral-800 text-white border px-4 py-2 placeholder-gray-400 placeholder:text-4xl focus:outline-none ${touched.pwd2 && errors.pwd2
//                                     ? "border-red-500"
//                                     : "border-[#10a79d]"
//                                     }`}
//                             />
//                             {touched.pwd2 && errors.pwd2 && (
//                                 <p className="text-red-500 text-sm mt-1 transition-all">
//                                     {errors.pwd2}
//                                 </p>
//                             )}
//                         </div>

//                         <button
//                             type="submit"
//                             className="px-6 py-2 bg-[#00FFA3] text-black font-medium rounded-lg hover:bg-[#00e695] transition"
//                         >
//                             Sign up
//                         </button>
//                     </form>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Signup

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    pwd1: string;
    pwd2: string;
}

interface FormErrors {
    email?: string;
    pwd1?: string;
    pwd2?: string;
}

interface TouchedFields {
    email?: boolean;
    pwd1?: boolean;
    pwd2?: boolean;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        pwd1: "",
        pwd2: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<TouchedFields>({});

    const navigate = useNavigate();

    // 🔹 Refs for input focus management
    const emailRef = useRef<HTMLInputElement>(null);
    const pwd1Ref = useRef<HTMLInputElement>(null);
    const pwd2Ref = useRef<HTMLInputElement>(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#~()_|+=-`\/:;,.])[A-Za-z\d@$!%*?&#~()_|+=-`\/:;,.]{8,}$/;

    const validateField = (name: string, value: string) => {
        let error = "";

        if (name === "email") {
            if (!emailRegex.test(value)) {
                error = "Enter a valid email address (e.g. user@example.com)";
            }
        }

        if (name === "pwd1") {
            if (!passwordRegex.test(value)) {
                error =
                    "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
            }
        }

        if (name === "pwd2") {
            if (value !== formData.pwd1) {
                error = "Passwords do not match.";
            }
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        validateField(name, value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: FormErrors = {};

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!passwordRegex.test(formData.pwd1)) {
            newErrors.pwd1 =
                "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
        }

        if (formData.pwd1 !== formData.pwd2) {
            newErrors.pwd2 = "Passwords do not match.";
        }

        setErrors(newErrors);

        // ✅ Only mark fields that have errors
        const touchedFields: TouchedFields = {};
        Object.keys(newErrors).forEach((key) => {
            touchedFields[key as keyof TouchedFields] = true;
        });
        setTouched((prev) => ({ ...prev, ...touchedFields }));

        if (Object.keys(newErrors).length === 0) {
            console.log("✅ Form submitted:", formData);
            navigate("/personaldetails");
        }
    };

    const isFormValid =
        emailRegex.test(formData.email) &&
        passwordRegex.test(formData.pwd1) &&
        formData.pwd1 === formData.pwd2;

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-neutral-800">
                <div className="bg-black border border-neutral-700 rounded-xl flex flex-col gap-5 p-5">
                    <h1 className="text-white text-xl font-semibold text-center">
                        AUDIO REALITIES
                    </h1>

                    <form
                        className="flex flex-col items-center gap-3 p-8 rounded-2xl shadow-lg w-auto space-y-6"
                        onSubmit={handleSubmit}
                    >
                        {/* Email */}
                        <div className="w-72">
                            <label className="block text-gray-200 text-base mb-2 font-medium">
                                Email
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        if (emailRegex.test(formData.email)) {
                                            pwd1Ref.current?.focus(); // ✅ Move to password field
                                        }
                                    }
                                }}
                                className={`w-full rounded-lg bg-neutral-800 text-sm text-white border px-3 py-2 placeholder-gray-400 focus:outline-none ${touched.email && errors.email
                                        ? "border-red-500"
                                        : "border-[#10a79d]"
                                    }`}
                            />
                            {touched.email && errors.email && (
                                <p className="text-red-500 text-sm mt-1 transition-all">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Create Password */}
                        <div className="w-72">
                            <label className="block mb-2 text-base text-gray-200 font-medium">
                                Create Password
                            </label>
                            <input
                                ref={pwd1Ref}
                                type="password"
                                name="pwd1"
                                placeholder="........"
                                value={formData.pwd1}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        if (passwordRegex.test(formData.pwd1)) {
                                            pwd2Ref.current?.focus(); // ✅ Move to confirm password field
                                        }
                                    }
                                }}
                                className={`w-full rounded-lg bg-neutral-800 text-sm text-white border px-3 py-2 placeholder-gray-400 placeholder:text-3xl focus:outline-none ${touched.pwd1 && errors.pwd1
                                        ? "border-red-500"
                                        : "border-[#10a79d]"
                                    }`}
                            />
                            <p
                                className={`text-xs pt-3 mt-1 transition-all italic ${touched.pwd1 && errors.pwd1
                                        ? "text-red-500"
                                        : "text-neutral-600"
                                    }`}
                            >
                                Password must be at least 8 characters, include one uppercase
                                letter, one number, and one special character.
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div className="w-72">
                            <label className="block mb-2 text-base text-gray-200 font-medium">
                                Confirm Password
                            </label>
                            <input
                                ref={pwd2Ref}
                                type="password"
                                name="pwd2"
                                placeholder="........"
                                value={formData.pwd2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        if (isFormValid) {
                                            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                                        }
                                    }
                                }}
                                className={`w-full rounded-lg bg-neutral-800 text-sm text-white border px-3 py-2 placeholder-gray-400 placeholder:text-3xl focus:outline-none ${touched.pwd2 && errors.pwd2
                                        ? "border-red-500"
                                        : "border-[#10a79d]"
                                    }`}
                            />
                            {touched.pwd2 && errors.pwd2 && (
                                <p className="text-red-500 text-sm mt-1 transition-all">
                                    {errors.pwd2}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`px-4 py-1 rounded-lg font-medium transition ${isFormValid
                                    ? "bg-[#00FFA3] text-black hover:bg-[#00e695]"
                                    : "bg-[#00FFA3] text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
