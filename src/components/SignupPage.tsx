// "use client";

// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { FcGoogle } from 'react-icons/fc';
// import { FaLinkedin } from 'react-icons/fa';

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showPasswordInfo, setShowPasswordInfo] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validatePassword = (password: string) => {
//     return {
//       hasLetter: /[a-zA-Z]/.test(password),
//       hasNumber: /[0-9]/.test(password),
//       hasMinLength: password.length >= 8,
//       hasSpecialChar: /[^A-Za-z0-9]/.test(password),
//     };
//   };

//   const passwordValidation = validatePassword(formData.password);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="py-20 flex items-center justify-center bg-gray-200 px-4 text-black">
//       <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md relative">
//         <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
//         <p className="text-gray-500 text-sm mb-6">
//           Enter your email and password to create account.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* First and Last Name */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium mb-1">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium mb-1">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="relative">
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onFocus={() => setShowPasswordInfo(true)}
//                 onBlur={() => setShowPasswordInfo(false)}
//                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
//               </button>
//             </div>

//             {/* Password Requirements Tooltip */}
//             {showPasswordInfo && (
//               <div className="absolute right-0 bottom-full -mb-4 bg-white shadow-lg rounded-md border w-72 p-4 z-10">
//                 <p className="text-sm font-medium mb-2">Password requirements:</p>
//                 <ul className="text-sm space-y-1">
//                   <li className="flex items-center">
//                     <span
//                       className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
//                         passwordValidation.hasLetter
//                           ? 'bg-green-500 text-white'
//                           : 'bg-white'
//                       }`}
//                     >
//                       ✓
//                     </span>
//                     Must contain a letter
//                   </li>
//                   <li className="flex items-center">
//                     <span
//                       className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
//                         passwordValidation.hasNumber
//                           ? 'bg-green-500 text-white'
//                           : 'bg-white'
//                       }`}
//                     >
//                       ✓
//                     </span>
//                     Must contain a number
//                   </li>
//                   <li className="flex items-center">
//                     <span
//                       className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
//                         passwordValidation.hasMinLength
//                           ? 'bg-green-500 text-white'
//                           : 'bg-white'
//                       }`}
//                     >
//                       ✓
//                     </span>
//                     Must have at least 8 characters
//                   </li>
//                   <li className="flex items-center">
//                     <span
//                       className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
//                         passwordValidation.hasSpecialChar
//                           ? 'bg-green-500 text-white'
//                           : 'bg-white'
//                       }`}
//                     >
//                       ✓
//                     </span>
//                     Add a special character
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Sign Up Button */}
//           <button
//             type="submit"
//             className="w-full bg-lime-600 hover:bg-lime-700 text-white rounded-md py-2 text-sm font-semibold"
//           >
//             Sign Up
//           </button>

//           {/* Social Buttons */}
//           <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
//             <span>Or Sign Up with</span>
//           </div>

//           <div className="flex justify-center gap-4">
//             <button
//               type="button"
//               className="flex items-center gap-2 border p-2 rounded-md hover:bg-gray-50 text-blue-700"
//             >
//               <FaLinkedin size={20} /> LinkedIn
//             </button>
//             <button
//               type="button"
//               className="flex items-center gap-2 border p-2 rounded-md hover:bg-gray-50"
//             >
//               <FcGoogle size={20} /> Google
//             </button>
//           </div>

//           {/* Already have account */}
//           <p className="text-center text-sm mt-4">
//             Already have an account?{' '}
//             <a href="/signin" className="text-blue-600 hover:underline">
//               Sign in
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;


"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { signIn } from "next-auth/react";

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
  image?: string;
  location?: string;
};

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const passwordValue = watch("password") || "";

  const validatePassword = (password: string) => {
    return {
      hasLetter: /[a-zA-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasMinLength: password.length >= 8,
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
    };
  };

  const passwordValidation = validatePassword(passwordValue);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setServerError("");
    console.log("Form data -->", data);
  
    try {
      // ✅ Create user first via signup API
      const response = await axios.post("/api/auth/signup", data);
      console.log("Signup success -->", response.data);
  
      // ✅ Automatically sign them in right after signup
      const result = await signIn("credentials", {
        redirect: true,               // true = automatically redirect to callbackUrl
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",             // redirect after login, adjust if needed
      });
  
      // Optional logging (for debug)
      console.log("SignIn result -->", result);
  
    } catch (error: unknown) {
      console.error("Signup error -->", error);
    
      if (error instanceof Error) {
        setServerError(error.message);
      } else if (typeof error === "object" && error !== null && "response" in error) {
        setServerError((error as { response?: { data?: { message?: string } } }).response?.data?.message || "Something went wrong");
      } else {
        setServerError("Something went wrong");
      }
    }    
  };
  

  return (
    <div className="py-20 flex items-center justify-center bg-gray-200 px-4 text-black">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md relative">
        <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter your details to create an account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                {...register("first_name", { required: "First name is required" })}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                {...register("last_name", { required: "Last name is required" })}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    hasLetter: (val) =>
                      /[a-zA-Z]/.test(val) || "Must contain a letter",
                    hasNumber: (val) =>
                      /[0-9]/.test(val) || "Must contain a number",
                    hasMinLength: (val) =>
                      val.length >= 8 || "Must be at least 8 characters",
                    hasSpecialChar: (val) =>
                      /[^A-Za-z0-9]/.test(val) || "Add a special character",
                  },
                })}
                onFocus={() => setShowPasswordInfo(true)}
                onBlur={() => setShowPasswordInfo(false)}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            {/* Password Requirements Tooltip */}
            {showPasswordInfo && (
              <div className="absolute right-0 bottom-full -mb-4 bg-white shadow-lg rounded-md border w-72 p-4 z-10">
                <p className="text-sm font-medium mb-2">Password requirements:</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <span
                      className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
                        passwordValidation.hasLetter
                          ? "bg-green-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      ✓
                    </span>
                    Must contain a letter
                  </li>
                  <li className="flex items-center">
                    <span
                      className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
                        passwordValidation.hasNumber
                          ? "bg-green-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      ✓
                    </span>
                    Must contain a number
                  </li>
                  <li className="flex items-center">
                    <span
                      className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
                        passwordValidation.hasMinLength
                          ? "bg-green-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      ✓
                    </span>
                    At least 8 characters
                  </li>
                  <li className="flex items-center">
                    <span
                      className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center text-xs ${
                        passwordValidation.hasSpecialChar
                          ? "bg-green-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      ✓
                    </span>
                    Special character
                  </li>
                </ul>
              </div>
            )}
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-lime-600 hover:bg-lime-700"
            } text-white rounded-md py-2 text-sm font-semibold`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* Server Error */}
          {serverError && (
            <p className="text-center text-red-500 text-sm mt-2">{serverError}</p>
          )}

          {/* Social Buttons */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Or Sign Up with</span>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 border p-2 rounded-md hover:bg-gray-50 text-blue-700"
            >
              <FaLinkedin size={20} /> LinkedIn
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border p-2 rounded-md hover:bg-gray-50"
            >
              <FcGoogle size={20} /> Google
            </button>
          </div>

          {/* Already have account */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
