"use client";

import { useSessionUser } from "@/hooks/useSessionUser";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const DashboardLayoutWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useSessionUser();
  // console.log(user, loading, error);

  if (loading) {
    return <p className="text-center py-10 flex justify-center items-center min-h-screen">Loading user...</p>;
  }

  // if (error) {
  //   return <p className="text-center text-red-500 py-10">Error: {error}</p>;
  // }

  // if (!user) {
  //   return <p className="text-center py-10">No user found</p>;
  // }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen sm:max-w-64 w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center px-6 py-[22px] border-b">
          <Link href={"/"} className="text-xl font-bold text-indigo-600">ShopAdmin</Link>
          {/* <Image src={"/Logo.png"} alt="Logo" width={80} height={80} loading="lazy" /> */}
          <button
            className="md:hidden text-gray-600 text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <nav className="mt-6 space-y-2 px-2">
          <a href="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
            Dashboard
          </a>
          <a href="/dashboard/products" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
            Products
          </a>
          <a href="/dashboard/orders" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
            Orders
          </a>
          <a href="/dashboard/customers" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
            Customers
          </a>
          <a href="/dashboard/my-account" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
            My Account
          </a>
          <a href="/dashboard/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between bg-white px-6 py-4 sticky top-0 z-20">
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-2xl text-gray-700"
            >
              <FiMenu />
            </button>
            <span className="text-lg font-bold text-indigo-600">ShopAdmin</span>
            {/* <Image src={"/Logo.png"} alt="Logo" width={80} height={80} loading="lazy" /> */}
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-gray-700 text-sm hidden sm:block">Hello, {user?.first_name}</span>
            <Link href={"/dashboard/my-account"} className="relative w-10 h-10">
              <Image
              src={user?.image ? user?.image : "https://i.pravatar.cc/40?img=32"}
              alt="Profile"
              layout="fill"
              className="rounded-full border-2 border-indigo-600"
              />
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="px-4 md:px-6 space-y-6 flex-1 max-w-dvw">{children}</main>
        
      </div>
    </div>
  );
};

export default DashboardLayoutWrapper;

