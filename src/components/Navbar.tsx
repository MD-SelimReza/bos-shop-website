// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="w-full flex items-center justify-between px-4 py-3 shadow-md bg-white">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Link href="/">
//           <div className="cursor-pointer">
//             {/* Use your logo image here */}
//             <Image src="/logo.png" alt="Shop Logo" width={80} height={80} />
//             {/* <span className="text-xl font-bold">Shop</span> */}
//           </div>
//         </Link>
//       </div>

//       {/* Menu Items */}
//       <div className="flex gap-6 items-center text-[12px] uppercase font-medium tracking-wide">
//         <Link href="/shop" className="hover:text-gray-500">Home</Link>
//         <Link href="/shop/products" className="hover:text-gray-500">Products</Link>
//         <Link href="/shop/about" className="hover:text-gray-500">About</Link>
//         <Link href="/shop/contact" className="hover:text-gray-500">Contact</Link>
//       </div>

//       {/* Search and Cart */}
//       <div className="flex items-center gap-4 text-[12px]">
//         <button className="flex items-center gap-1 hover:text-gray-500">
//           <FaSearch className="w-4 h-4" />
//           Search
//         </button>
//         <Link href="/shop/cart" className="flex items-center gap-1 hover:text-gray-500">
//           <FaShoppingCart className="w-4 h-4" />
//           Cart
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SidebarMenu from "./SidebarMenu";
import Cart from "./Cart";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showSuggested, setShowSuggested] = useState(false);
  const [query, setQuery] = useState("");

  // Refs for detecting clicks outside
  const searchTermsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLDivElement>(null);

  // Prevent body scrolling when navbar search is open
  useEffect(() => {
    if (isOpen || isSidebarOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isSidebarOpen, isCartOpen]);

  const toggleSearch = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowSearchInput(true), 300);
      setTimeout(() => setShowSuggested(true), 500);
    } else {
      setShowSuggested(false);
      setTimeout(() => setShowSearchInput(false), 700);
      setTimeout(() => setIsOpen(false), 900);
    }
  }, [isOpen]);

  // Close search if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;

      if (
        searchTermsRef.current?.contains(event.target as Node) ||
        searchInputRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      toggleSearch();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSearch]);

  const handleSuggestedClick = (term: string) => {
    setQuery(term);
    setShowSuggested(false);
    setShowSearchInput(false);
    setIsOpen(false);
    router.push(`/search?query=${encodeURIComponent(term)}`);
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white z-30 transition-all duration-500 ${
          isOpen ? "pb-24 pt-4" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center w-full mx-auto px-8 transition-all duration-500">
          <Link href={"/"}>
            <div className="flex items-center">
              <Image src="/logo.png" alt="Shop Logo" width={80} height={80} />
            </div>
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <button onClick={toggleSearch} className="hover:text-black">Search</button>
            <button onClick={handleToggleCart} className="hover:text-black">Cart</button>
            <button onClick={handleToggleSidebar} className="hover:text-black">Menu</button>
          </div>
        </div>

        {showSearchInput && (
          <div
            ref={searchInputRef}
            className="absolute left-1/2 transform -translate-x-1/2 max-w-[600px] w-full mt-6 transition-opacity duration-750 opacity-100"
          >
            <div className="px-4 md:px-0 relative">
              <input
                autoFocus
                className="w-full h-12 pl-10 pr-10 rounded bg-rose-50 text-black focus:border-none focus:outline-none"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <FaSearch className="absolute left-6 md:left-3 top-4 text-gray-500" size={20} />
              <button
                onClick={toggleSearch}
                className="absolute right-6 md:right-3 top-4 text-gray-500"
              >
                 <AiOutlineClose 
                    size={20} 
                    className="transform transition-transform duration-500 hover:rotate-180" 
                  />
              </button>
            </div>
          </div>
        )}

        <div
          ref={searchTermsRef}
          className={`overflow-hidden transition-all mt-[-20px] duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2 w-full max-w-[600px] bg-white z-40 ${
            showSuggested ? "max-h-[400px] py-4" : "max-h-0 py-0"
          }`}
          style={{ top: "100%" }}
        >
          <div className="px-4">
            <h3 className="text-sm text-gray-500 mb-4 border-b pb-2">Suggested search terms</h3>
            <div className="flex flex-wrap gap-4 text-base text-gray-700">
              {['Home', 'Elevation Church', 'Elevation Worship', 'Apparel', 'Accessories', 'NextGen (Kids & YTH)', 'Resources', 'Make Room For The New'].map((term) => (
                <button
                  key={term}
                  onClick={() => handleSuggestedClick(term)}
                  className="hover:underline text-base text-left"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {isOpen && <div className="fixed inset-0 bg-[#CCCCCC] opacity-50 z-20 transition-opacity duration-500"></div>}

      <SidebarMenu isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
      <Cart isCartOpen={isCartOpen} handleToggleCart={handleToggleCart} />
    </>
  );
};

export default Navbar;




// 'use client';

// import React, { useState } from "react";
// import { FaX } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearchInput, setShowSearchInput] = useState(false);
//   const [showSuggested, setShowSuggested] = useState(false);
//   const [query, setQuery] = useState("");

//   const toggleSearch = () => {
//     if (!isOpen) {
//       // Open navbar height
//       setIsOpen(true);

//       // Show search input after navbar expands
//       setTimeout(() => {
//         setShowSearchInput(true);
//       }, 300);

//       // Show suggested terms after search input appears
//       setTimeout(() => {
//         setShowSuggested(true);
//       }, 600);

//     } else {
//       // Hide suggested first
//       setShowSuggested(false);

//       // Then hide search input after delay
//       setTimeout(() => {
//         setShowSearchInput(false);
//       }, 300);

//       // Finally close navbar
//       setTimeout(() => {
//         setIsOpen(false);
//         setQuery("");
//       }, 600);
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <header
//         className={`fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 transition-all duration-500 ${
//           isOpen ? "pb-24 shadow-lg pt-4" : "py-4"
//         }`}
//       >
//         <div className="flex justify-between items-center w-full mx-auto px-8 transition-all duration-500">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
//               <span className="text-white text-xl font-bold">^</span>
//             </div>
//           </div>

//           {/* Right side icons (always visible) */}
//           <div className="flex items-center gap-6 text-sm text-gray-600">
//             <button onClick={toggleSearch} className="hover:text-black">Search</button>
//             <button className="hover:text-black">Cart</button>
//             <button className="hover:text-black">Menu</button>
//           </div>
//         </div>

//         {/* Search Input inside Navbar (centered) */}
//         {showSearchInput && (
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-[600px] mx-auto mt-6 transition-opacity duration-750 opacity-100">
//             <input
//               autoFocus
//               className="w-full h-12 pl-10 pr-10 rounded bg-rose-50 focus:border-none focus:outline-none"
//               placeholder="Search..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <FaSearch className="absolute left-3 top-4 text-gray-500" size={20} />
//             <button
//               onClick={toggleSearch}
//               className="absolute right-3 top-4 text-gray-500 hover:text-black"
//             >
//               <FaX size={20} />
//             </button>
//           </div>
//         )}

//         {/* Suggested Search Terms - Positioned Inside Navbar */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2 w-[600px] bg-white z-40 ${
//             showSuggested ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
//           }`}
//           style={{
//             top: '100%',
//           }}
//         >
//           <div className="px-4">
//             <h3 className="text-sm text-gray-500 mb-4 border-b pb-2">Suggested search terms</h3>
//             <div className="flex flex-wrap gap-4 text-base text-gray-700">
//               <a href="#" className="hover:underline text-base">Home</a>
//               <a href="#" className="hover:underline text-base">Elevation Church</a>
//               <a href="#" className="hover:underline text-base">Elevation Worship</a>
//               <a href="#" className="hover:underline text-base">Apparel</a>
//               <a href="#" className="hover:underline text-base">Accessories</a>
//               <a href="#" className="hover:underline text-base">NextGen (Kids & YTH)</a>
//               <a href="#" className="hover:underline text-base">Resources</a>
//               <a href="#" className="hover:underline text-base">Make Room For The New</a>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Gray overlay background */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-300 opacity-50 z-40 transition-opacity duration-500"></div>
//       )}
//     </>
//   );
// };

// export default Navbar;
