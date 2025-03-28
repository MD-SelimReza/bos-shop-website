// "use client";

// import React, { useState } from "react";
// import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
// // import { FaGoogle, FaLinkedin } from "react-icons/fa";

// const SigninPage = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Login Attempt:", { email, password });
//     // Add login logic or API call here!
//   };

//   return (
//     <div className="py-20 flex items-center justify-center bg-gray-100 px-4 text-black">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
//         {/* Header */}
//         <div>
//           <h2 className="text-2xl font-bold text-left text-gray-800">Login</h2>
//           <p className="text-left text-sm text-gray-500 mt-1">
//             Enter your email and password to login
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="text-sm text-gray-600 mb-1 block">Email</label>
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-sm text-gray-600 mb-1 block">Password</label>
//             <div className="relative">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
//               >
//                 {passwordVisible ? <FiEyeOff /> : <FiEye />}
//               </button>
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="text-sm text-indigo-600 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 text-sm font-medium"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         {/* <div className="flex items-center space-x-2">
//           <div className="h-px flex-1 bg-gray-300" />
//           <span className="text-sm text-gray-400">OR</span>
//           <div className="h-px flex-1 bg-gray-300" />
//         </div> */}

//         {/* Social Login Buttons */}
//         {/* <div className="flex justify-center gap-4">
//           <button className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-600 px-4 py-2 rounded-lg text-sm">
//             <FaGoogle className="text-red-500" /> Google
//           </button>
//           <button className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-600 px-4 py-2 rounded-lg text-sm">
//             <FaLinkedin className="text-blue-700" /> LinkedIn
//           </button>
//         </div> */}

//         {/* Sign Up Link */}
//         <p className="text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-indigo-600 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SigninPage;


"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

interface SigninFormValues {
  email: string;
  password: string;
}

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onSubmit = async (data: SigninFormValues) => {
    setLoading(true);
    setServerError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (res?.error) {
      setServerError("Invalid email or password");
    }

    if (res?.ok) {
      router.push("/dashboard"); // Redirect to your desired page after login
    }
  };

  return (
    <div className="py-20 flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-left text-gray-800">Login</h2>
          <p className="text-left text-sm text-gray-500 mt-1">
            Enter your email and password to login
          </p>
        </div>

        {/* Error Message */}
        {serverError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {serverError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-500"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-500"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            } text-white rounded-lg py-2 text-sm font-medium`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
