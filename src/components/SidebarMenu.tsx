'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Link from 'next/link';
import { useSessionUser } from '@/hooks/useSessionUser';
import { signOut } from "next-auth/react";

interface SidebarMenuProps {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isSidebarOpen, handleToggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [openMenus, setOpenMenus] = useState<string[]>(['Elevation Church', 'Holly Furtick']);
  const { user, loading } = useSessionUser(); // 👈 grab user and loading state
  console.log(user); // 👈 log user to console
  
  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isSidebarOpen) {
        handleToggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, handleToggleSidebar]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen bg-white shadow-lg z-50 py-4 px-6 flex sm:max-w-sm w-full flex-col transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <button onClick={handleToggleSidebar} className="text-gray-500">
            <AiOutlineClose size={20} className="transform transition-transform duration-500 hover:rotate-180" />
          </button>
        </div>

        {/* Menu */}
        <nav style={{ scrollbarWidth: "none" }} className="flex-grow overflow-y-auto">
          <ul className="space-y-4 text-sm font-medium text-black">
            <li>
              <a href="#" className="block py-1 hover:text-gray-500">Home</a>
            </li>

            {/* Elevation Church */}
            <li>
              <button className="flex items-center justify-between w-full py-1">
                <span>Elevation Church</span>

                {/* Icon Button for Click Event */}
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the click event from propagating to the button
                    toggleMenu('Elevation Church'); // Toggle the menu for "Elevation Church"
                  }}
                  className="cursor-pointer"
                >
                  {openMenus.includes('Elevation Church') ? (
                    <AiOutlineMinus className="text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="text-gray-600" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openMenus.includes('Elevation Church') ? 'max-h-screen' : 'max-h-0'}`}
              >
                <ul className="mt-2 ml-4 space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="block py-1 hover:text-gray-800">T-Shirts</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 hover:text-gray-800">Sweatshirts & Outerwear</a>
                  </li>

                  {/* Holly Furtick */}
                  <li>
                    <button
                      className="flex items-center justify-between w-full py-1"
                    >
                      <span>Holly Furtick</span>
                      
                      {/* Icon Button for Click Event */}
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu('Holly Furtick');
                        }}
                        className="cursor-pointer"
                      >
                        {openMenus.includes('Holly Furtick') ? (
                          <AiOutlineMinus className="text-gray-600" />
                        ) : (
                          <AiOutlinePlus className="text-gray-600" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openMenus.includes('Holly Furtick') ? 'max-h-screen' : 'max-h-0'}`}
                    >
                      <ul className="mt-2 ml-4 space-y-2 text-gray-600 border-l pl-2 border-gray-300">
                        <li>
                          <a href="#" className="block py-1 hover:text-gray-800">Good Company</a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 hover:text-gray-800">Reflect Collection</a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 hover:text-gray-800">HF Book Club</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            {/* Additional Menus */}
            {["Elevation Worship", "Apparel", "Accessories", "NextGen", "Resources", "Make Room"].map((menu) => (
              <li key={menu}>
                <button className={`flex items-center justify-between w-full py-1 ${menu === "Make Room" ? "text-red-500" : ""}`}>
                  <span>{menu === "Make Room" ? "Make Room For The New" : menu}</span>
                  
                  {/* Icon Button for Click Event */}
                  <span
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from bubbling up to the parent button
                      toggleMenu(menu);    // Toggle the menu for the specific item
                    }}
                    className="cursor-pointer"
                  >
                    {openMenus.includes(menu) ? (
                      <AiOutlineMinus className="text-gray-600" />
                    ) : (
                      <AiOutlinePlus className="text-gray-600" />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Links */}
        <div className="mt-auto text-xs text-gray-500 space-y-2 py-6">
          {loading ? (
            <p className="text-center text-sm">Loading...</p>
          ) : user ? (
            <>
              <Link href="/dashboard/my-account" className="block hover:underline">My Account</Link>
              <Link href="/dashboard" onClick={handleToggleSidebar} className="block hover:underline">Dashboard</Link>
              <button onClick={() => signOut()} className="block text-left w-full hover:underline text-red-600">Logout</button>
              <Link href="/search" className="block hover:underline">Search</Link>
            </>
          ) : (
            <>
              <Link href="/signin" className="block hover:underline">Log in</Link>
              <Link href="/signup" className="block hover:underline">Create account</Link>
              <Link href="/search" className="block hover:underline">Search</Link>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-gray-300 opacity-50 z-40 transition-opacity duration-500"></div>}
    </>
  );
};

export default SidebarMenu;

