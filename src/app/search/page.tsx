// "use client";

// import React, { useEffect, useState } from "react";
// import ProductGallery from "@/components/ProductGallery";
// import SearchWithSuggestions from "@/components/SearchWithSuggestions";
// import SortByDropdown from "@/components/SortByDropdown";
// import FilterSidebar from "@/components/FilterSidebar";
// import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const sortOptions = [
//   "Featured",
//   "Best selling",
//   "Alphabetically, A-Z",
//   "Alphabetically, Z-A",
//   "Price, low to high",
//   "Price, high to low",
//   "Date, old to new",
//   "Date, new to old",
// ];

// const Page = () => {
//   const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("Featured");

//   useEffect(() => {
//     if (isMobileSortOpen || isMobileFilterOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileSortOpen, isMobileFilterOpen]);

//   return (
//     <div>
//       <SearchWithSuggestions />
//       <div className="flex xl:gap-0 gap-10 mt-10 xl:px-16 px-5 relative">
//         <div className="md:max-w-1/4 w-full mx-auto hidden md:block sticky top-0 z-[100]">
//           <FilterSidebar />
//         </div>
//         <div className="md:max-w-3/4 w-full">
//           <div className="flex justify-between items-center mb-4 sticky top-5 z-[100]">
//             <SortByDropdown />
//             {/* Mobile Filter Button */}
//             <button
//               onClick={() => setIsMobileSortOpen(true)}
//               className="md:hidden text-sm font-medium underline text-gray-600 hover:text-black"
//             >
//                 <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 role="presentation"
//                 className="size-5 block"
//                 viewBox="0 0 20 13"
//                 >
//                 <path d="M18.5 2.75a.75.75 0 0 1 .102 1.493l-.102.007h-17a.75.75 0 0 1-.102-1.493L1.5 2.75h17ZM18.5 8.75a.75.75 0 0 1 .102 1.493l-.102.007h-17a.75.75 0 0 1-.102-1.493L1.5 8.75h17Z"></path>
//                 <path d="M5.5.25a.75.75 0 0 1 .743.648L6.25 1v5a.75.75 0 0 1-1.493.102L4.75 6V1A.75.75 0 0 1 5.5.25ZM14.5 6.25a.75.75 0 0 1 .743.648L15.25 7v5a.75.75 0 0 1-1.493.102L13.75 12V7a.75.75 0 0 1 .75-.75Z"></path>
//                 </svg>
//             </button>
//           </div>
//           <ProductGallery />
//         </div>
//       </div>

//       {/* Mobile Sort & Filter Modal */}
//         <div
//             className={`fixed inset-0 bg-white shadow-lg z-50 p-5 md:hidden flex flex-col transition-transform duration-500 ease-in-out ${
//             isMobileSortOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//         >
//             {/* Close Button */}
//             <div className="absolute top-4 left-5">
//             <button
//                 onClick={() => {
//                 setIsMobileSortOpen(false);
//                 }}
//                 className="text-gray-600 font-light"
//             >
//                 <AiOutlineClose size={16} />
//             </button>
//             </div>

//             {/* Mobile Sort Options */}
//                 <div
//                 onClick={() => setIsAccordionOpen((prev) => !prev)}
//                 className="flex items-center justify-between mt-12 text-black"
//                 >
//                 <span className="text-sm font-medium">Sort by</span>
//                 <span className={`ml-2 transition-transform ${isAccordionOpen ? "rotate-180" : "rotate-0"}`}>
//                     {isAccordionOpen ? <AiOutlinePlus className="text-gray-600" /> : <AiOutlineMinus className="text-gray-600" />}
//                 </span>
//                 </div>

//                 {/* Sort Options List */}
//                 <div className={`overflow-hidden transition-all ${isAccordionOpen ? "max-h-screen" : "max-h-0"}`}>
//                 <ul className="flex flex-col py-4 gap-4 text-black">
//                     {sortOptions.map((option) => (
//                     <li key={option}>
//                         <button
//                         onClick={() => {
//                             setSelectedSort(option);
//                             setIsMobileSortOpen(false);
//                         }}
//                         className="flex items-center w-full text-sm text-left"
//                         >
//                         <div
//                             className={`w-4 h-4 mr-4 rounded-full border flex items-center justify-center ${
//                             selectedSort === option ? "border-black border-[5px]" : "border-gray-500 border"
//                             }`}
//                         ></div>
//                         <span>{option}</span>
//                         </button>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>

//             {/* Mobile Filter Sidebar */}
//             <div className="mt-10">
//                 <FilterSidebar />
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useEffect, useState } from "react";
import ProductGallery from "@/components/ProductGallery";
import SearchWithSuggestions from "@/components/SearchWithSuggestions";
import SortByDropdown from "@/components/SortByDropdown";
import FilterSidebar from "@/components/FilterSidebar";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const sortOptions = [
  "Featured",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

const Page = () => {
  const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Featured");

  useEffect(() => {
    if (isMobileSortOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileSortOpen]);

  return (
    <div>
      <SearchWithSuggestions />
      <div className="flex xl:gap-0 gap-10 mt-10 xl:px-16 px-5 relative">
        <div className="md:max-w-1/4 w-full mx-auto hidden md:block sticky top-5 z-[100] h-full">
          <FilterSidebar />
        </div>
        <div className="md:max-w-3/4 w-full">
          <div className="flex justify-between items-center mb-4 sticky top-5 z-40">
            <SortByDropdown />
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileSortOpen(true)}
              className="md:hidden text-sm font-medium underline text-gray-600 hover:text-black"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="size-5 block"
                viewBox="0 0 20 13"
              >
                <path d="M18.5 2.75a.75.75 0 0 1 .102 1.493l-.102.007h-17a.75.75 0 0 1-.102-1.493L1.5 2.75h17ZM18.5 8.75a.75.75 0 0 1 .102 1.493l-.102.007h-17a.75.75 0 0 1-.102-1.493L1.5 8.75h17Z"></path>
                <path d="M5.5.25a.75.75 0 0 1 .743.648L6.25 1v5a.75.75 0 0 1-1.493.102L4.75 6V1A.75.75 0 0 1 5.5.25ZM14.5 6.25a.75.75 0 0 1 .743.648L15.25 7v5a.75.75 0 0 1-1.493.102L13.75 12V7a.75.75 0 0 1 .75-.75Z"></path>
              </svg>
            </button>
          </div>
          <ProductGallery />
        </div>
      </div>

      {/* Mobile Sort & Filter Modal */}
      <div
        className={`fixed inset-0 bg-white shadow-lg z-50 p-5 md:hidden flex flex-col transition-transform duration-500 ease-in-out ${
          isMobileSortOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 left-5">
          <button
            onClick={() => {
              setIsMobileSortOpen(false);
            }}
            className="text-gray-600 font-light"
          >
            <AiOutlineClose size={16} />
          </button>
        </div>

        {/* Mobile Sort Options */}
        <div
          onClick={() => setIsAccordionOpen((prev) => !prev)}
          className="flex items-center justify-between mt-12 text-black"
        >
          <span className="text-sm font-medium">Sort by</span>
          <span
            className={`ml-2 transition-transform ${isAccordionOpen ? "rotate-180" : "rotate-0"}`}
          >
            {isAccordionOpen ? <AiOutlinePlus className="text-gray-600" /> : <AiOutlineMinus className="text-gray-600" />}
          </span>
        </div>

        {/* Sort Options List */}
        <div className={`overflow-hidden transition-all ${isAccordionOpen ? "max-h-screen" : "max-h-0"}`}>
          <ul className="flex flex-col py-4 gap-4 text-black">
            {sortOptions.map((option) => (
              <li key={option}>
                <button
                  onClick={() => {
                    setSelectedSort(option);
                    setIsMobileSortOpen(false);
                  }}
                  className="flex items-center w-full text-sm text-left"
                >
                  <div
                    className={`w-4 h-4 mr-4 rounded-full border flex items-center justify-center ${
                      selectedSort === option ? "border-black border-[5px]" : "border-gray-500 border"
                    }`}
                  ></div>
                  <span>{option}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Filter Sidebar */}
        <div className="mt-10">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;
