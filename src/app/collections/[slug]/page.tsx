// import BannerCategory from "@/components/BannerCategory";
// import ProductGallery from "@/components/ProductGallery";
// import SearchWithSuggestions from "@/components/SearchWithSuggestions";
// import SortByDropdown from "@/components/SortByDropdown";

// // type Props = {
// //   params: { slug: string[] };
// //   searchParams?: { [key: string]: string | string[] | undefined };
// // };

// export default function Page() {
//   // const collectionName = params.slug.join('/');

//   return (
//     <div className="min-h-screen mx-auto text-black space-y-6">
//       {/* <h1 className="text-4xl font-bold mb-4 text-center">
//         Collection: {collectionName}
//       </h1> */}
//       {/* <SearchWithSuggestions /> */}
//       <BannerCategory />
//       <div className="mt-10 xl:px-16 px-5">
//         {/* Desktop view */}
//         <div className="hidden md:flex items-center justify-between">
//           <SortByDropdown />
//           <p className="text-sm text-gray-600">75 products</p>
//         </div>

//         {/* Mobile view */}
//         <div className="flex justify-end md:hidden">
//           <svg
//             aria-hidden="true"
//             focusable="false"
//             role="presentation"
//             className="size-5 block"
//             viewBox="0 0 20 13"
//           >
//             <path d="M18.5 2.75a.75.75 0 0 1 .102 1.493l-.102.007h-17a.75.75 0 0 1-.102-1.493L1.5 2.75h17ZM18.5 8.75a.75.75 0 0 1 .102 1.493l-.102.007h-17a.75.75 0 0 1-.102-1.493L1.5 8.75h17Z"></path>
//             <path d="M5.5.25a.75.75 0 0 1 .743.648L6.25 1v5a.75.75 0 0 1-1.493.102L4.75 6V1A.75.75 0 0 1 5.5.25ZM14.5 6.25a.75.75 0 0 1 .743.648L15.25 7v5a.75.75 0 0 1-1.493.102L13.75 12V7a.75.75 0 0 1 .75-.75Z"></path>
//           </svg>
//         </div>
//       </div>
//       <ProductGallery />
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import BannerCategory from '@/components/BannerCategory';
import ProductGallery from '@/components/ProductGallery';
import SortByDropdown from '@/components/SortByDropdown';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const sortOptions = [
  'Featured',
  'Best selling',
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
  'Price, low to high',
  'Price, high to low',
  'Date, old to new',
  'Date, new to old',
];

export default function Page() {
  const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selected, setSelected] = useState('Featured');

  // Prevent body scrolling when navbar search is open
  useEffect(() => {
    if (isMobileSortOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileSortOpen]);

  return (
    <div className="min-h-screen mx-auto text-black space-y-6 relative">
      <BannerCategory />

      <div className="mt-10 xl:px-16 px-5">
        {/* Desktop sort */}
        <div className="hidden md:flex items-center justify-between">
          <SortByDropdown />
          <p className="text-sm text-gray-600">75 products</p>
        </div>

        {/* Mobile filter button */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsMobileSortOpen(true)}>
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


      {/* Mobile Sort Modal */}
      <div  className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-50 p-5 md:hidden flex flex-col transition-transform duration-500 ease-in-out ${
        isMobileSortOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      >
        {/* X Icon at Top Left */}
        <div className="absolute top-4 left-5">
          <button
            onClick={() => {
              setIsMobileSortOpen(false);
              setIsAccordionOpen(false);
            }}
            className="text-2xl text-gray-600 font-light"
          >
            &times;
          </button>
        </div>

        {/* Bottom Bar */}
        <div onClick={() => setIsAccordionOpen((prev) => !prev)} className="flex items-center justify-between mt-12">
          <span className="text-sm font-medium">Sort by</span>
          <span
            className={`ml-2 transition-transform duration-500 ease-in-out md:hidden
              ${isAccordionOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            {isAccordionOpen ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
          </span>
        </div>

        {/* Sort options accordion */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isAccordionOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col py-4 gap-4">
            {sortOptions.map((option) => (
              <li key={option}>
                <button
                  onClick={() => {
                    setSelected(option);
                    setIsMobileSortOpen(false);
                  }}
                  className="flex items-center w-full text-sm text-left"
                >
                  <div
                    className={`w-4 h-4 mr-4 rounded-full border flex items-center justify-center ${
                      selected === option
                        ? 'border-black border-[5px]'
                        : 'border-gray-500 border'
                    }`}
                  ></div>
                  <span>{option}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


