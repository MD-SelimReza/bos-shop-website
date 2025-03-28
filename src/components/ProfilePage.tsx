"use client";

import React from 'react';
import { FiEdit2, FiLogOut, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useSessionUser } from '@/hooks/useSessionUser';
import Image from 'next/image';

const ProfilePage = () => {
  const { user } = useSessionUser();
  // console.log(user, loading, error);

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow w-full max-w-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 relative">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute left-1/2 top-24 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            {user?.image ? (
              <Image src={user?.image} alt="User Avatar" width={128} height={128} className="object-cover w-full h-full" />
            ) : (
              <FaUserCircle className="text-gray-400 text-7xl" />
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="text-gray-500 text-sm mt-1">{user?.location}</p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <Link href={"/dashboard/edit-account"}>
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
                <FiEdit2 /> Edit Profile
              </button>
            </Link>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
              <FiLogOut /> Logout
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t p-6 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <FiMail className="text-indigo-500" size={18} />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone className="text-indigo-500" size={18} />
            <span>{user?.phone}</span>
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <FiMapPin className="text-indigo-500" size={18} />
            <span>{user?.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
