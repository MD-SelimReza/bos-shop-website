// "use client";

// import React, { useState } from 'react';
// import { FiArrowLeft, FiSave, FiCamera } from 'react-icons/fi';
// import { useRouter } from 'next/navigation';
// import { FaUserCircle } from 'react-icons/fa';

// const EditProfilePage = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 234 567 890',
//     location: 'New York, USA',
//     avatar: '',
//   });

//   const [previewImage, setPreviewImage] = useState<string | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result as string);
//         setFormData({ ...formData, avatar: reader.result as string });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Profile Updated:', formData);
//     // You can call an API here to save the updated data
//     // router.push('/profile');
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center p-4 text-black">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 relative">
//           <div className="absolute inset-0 bg-black opacity-20" />
//           <div className="absolute left-4 top-4">
//             <button
//               onClick={() => router.back()}
//               className="flex items-center gap-1 text-white hover:text-gray-200 text-sm"
//             >
//               <FiArrowLeft /> Back
//             </button>
//           </div>
//           <div className="absolute left-1/2 top-24 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow overflow-hidden">
//             {previewImage || formData.avatar ? (
//               <img
//                 src={previewImage || formData.avatar}
//                 alt="Preview"
//                 className="object-cover w-full h-full"
//               />
//             ) : (
//               <FaUserCircle className="text-gray-400 text-7xl" />
//             )}
//             <label
//               htmlFor="avatarUpload"
//               className="absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer"
//             >
//               <FiCamera size={16} />
//             </label>
//             <input
//               id="avatarUpload"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="p-6 space-y-4 mt-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm text-gray-600 mb-1">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end gap-3 mt-6">
//             <button
//               type="button"
//               onClick={() => router.back()}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
//             >
//               <FiSave /> Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;


"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiSave, FiCamera } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import Image from "next/image";

// Create a User type for clarity and type safety
type User = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location?: string;
  image?: string;
};

const EditProfilePage = () => {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      location: "",
      image: "",
    },
  });

  // Fetch current user data (session)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/user/me");
        const user: User = (res.data as { user: User }).user;

        reset({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone || "",
          location: user.location || "",
          image: user.image || "",
        });

        setPreviewImage(user.image || null);
      } catch (error) {
        console.error("Failed to load user profile:", error);
      }
    };

    fetchProfile();
  }, [reset]);

  // Handle image preview and base64 conversion
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPreviewImage(base64);
        setValue("image", base64); // Save in form data
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit handler for updating profile
  const onSubmit = async (data: User) => {
    try {
      const res = await axios.patch("/api/user/update", data);
      console.log("Profile updated:", res.data);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Update error:", err.message);
      } else {
        console.error("Unknown update error:", err);
      }
    }
  };  

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 text-black">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 relative">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute left-4 top-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-white hover:text-gray-200 text-sm"
            >
              <FiArrowLeft /> Back
            </button>
          </div>

          <div className="absolute left-1/2 top-24 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow overflow-hidden">
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Avatar"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            ) : (
              <FaUserCircle className="text-gray-400 text-7xl" />
            )}
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer"
            >
              <FiCamera size={16} />
            </label>
            <input
              id="avatarUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                {...register("first_name", { required: "First name is required" })}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  errors.first_name ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
                }`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                {...register("last_name", { required: "Last name is required" })}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  errors.last_name ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
                }`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <input
                type="text"
                {...register("phone")}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Location</label>
              <input
                type="text"
                {...register("location")}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white ${
                isSubmitting
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              <FiSave /> {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
