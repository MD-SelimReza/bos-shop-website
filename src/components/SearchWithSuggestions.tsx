// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
// import { FaX } from 'react-icons/fa6';

// const SearchWithSuggestions = () => {
//   const [query, setQuery] = useState('');
//   const [showSuggested, setShowSuggested] = useState(false);
//   const [activeTab, setActiveTab] = useState('Products');
//   const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
//   const tabRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
//   const searchWrapperRef = useRef<HTMLDivElement>(null); // ✅ Added ref for click detection
//   const router = useRouter();

//   const tabs = ['Products', 'Blogs', 'Pages'];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//     setShowSuggested(e.target.value.length > 0);
//   };

//   const handleSuggestedClick = (term: string) => {
//     setQuery(term);
//     router.push(`/search?query=${term}`);
//     setShowSuggested(false);
//   };

//   const handleTabClick = (tab: string) => {
//     setActiveTab(tab);
//   };

//   const toggleSearch = () => {
//     setShowSuggested(false);
//   };

//   // ✅ Handle click outside and mouse top axis behavior
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         searchWrapperRef.current &&
//         !searchWrapperRef.current.contains(event.target as Node)
//       ) {
//         setShowSuggested(false);
//       }
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       if (event.clientY <= 0) {
//         setShowSuggested(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // ✅ Handle active tab underline
//   useEffect(() => {
//     const activeTabEl = tabRefs.current[activeTab];
//     if (activeTabEl) {
//       const { offsetLeft, offsetWidth } = activeTabEl;
//       setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
//     }
//   }, [activeTab]);

//   return (
//     <div className="relative flex justify-center flex-col items-center">
//       {/* Search Input Field */}
//       <div
//         ref={searchWrapperRef} // ✅ Add ref here
//         className="max-w-[600px] w-full mt-6 transition-opacity duration-750 opacity-100"
//       >
//         <div className="px-4 md:px-0 relative">
//           <input
//             className="w-full h-12 pl-10 pr-10 rounded bg-rose-50 text-black focus:border-none focus:outline-none"
//             placeholder="Search..."
//             value={query}
//             onChange={handleChange}
//             onClick={() => setShowSuggested(true)}
//           />
//           <FaSearch className="absolute left-6 md:left-3 top-4 text-gray-500" size={20} />
//           <button
//             onClick={toggleSearch}
//             className="absolute right-6 md:right-3 top-4 text-gray-500 hover:text-black"
//           >
//             <FaX size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Suggested Search Terms */}
//       <div
//         className={`overflow-hidden transition-all duration-750 ease-in-out w-full max-w-[600px] bg-white z-40 ${
//           showSuggested ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 py-0'
//         }`}
//         style={{ top: '100%' }}
//       >
//         <div className="border-x border-gray-300 border-b">
//           <h3 className="text-sm text-gray-500 border-gray-300 px-4 py-5 mb-4 border-b pb-2">
//             Suggested search terms
//           </h3>
//           <div className="px-4 pb-5">
//             <div className="flex flex-wrap gap-x-4 gap-y-3 text-base text-gray-700">
//               {[
//                 'Home',
//                 'Elevation Church',
//                 'Elevation Worship',
//                 'Apparel',
//                 'Accessories',
//                 'NextGen (Kids & YTH)',
//                 'Resources',
//                 'Make Room For The New',
//               ].map((term) => (
//                 <button
//                   key={term}
//                   onClick={() => handleSuggestedClick(term)}
//                   className="hover:underline text-base text-left"
//                 >
//                   {term}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Results Title */}
//       <div className="mt-8 text-center">
//         <h3 className="text-3xl font-normal text-black">
//           Results for &quot;<span className="font-medium">{query}</span>&quot;
//         </h3>
//       </div>

//       {/* Tabs with dynamic underline */}
//       <div className="relative mt-8 w-fit">
//         <ul className="flex justify-center gap-6 text-gray-600 text-sm font-medium relative">
//           {tabs.map((tab) => (
//             <li
//               key={tab}
//               ref={(el) => {
//                 tabRefs.current[tab] = el;
//               }}
//               onClick={() => handleTabClick(tab)}
//               className={`cursor-pointer pb-3 transition-colors ${
//                 activeTab === tab ? 'text-black' : 'text-gray-400'
//               }`}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>

//         {/* Dynamic underline */}
//         <div className="relative mt-0.5 h-1 w-full bg-gray-200 rounded-full">
//           <div
//             className="absolute h-1 bg-black transition-all duration-300 ease-in-out"
//             style={{
//               left: underlineStyle.left,
//               width: underlineStyle.width,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchWithSuggestions;


'use client';

import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';

const SearchWithSuggestions = () => {
  const [query, setQuery] = useState('');
  const [showSuggested, setShowSuggested] = useState(false);
  const [activeTab, setActiveTab] = useState('Products');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const tabs = ['Products', 'Blogs', 'Pages'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggested(e.target.value.length > 0);
  };

  const handleSuggestedClick = (term: string) => {
    setQuery(term);
    router.push(`/search?query=${term}`);
    setShowSuggested(false);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleSearch = () => {
    setShowSuggested(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggested(false);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setShowSuggested(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const activeTabEl = tabRefs.current[activeTab];
    if (activeTabEl) {
      const { offsetLeft, offsetWidth } = activeTabEl;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="relative flex justify-center flex-col items-center">
      {/* Search Input & Suggestions Wrapper */}
      <div
        className="relative w-full max-w-[600px] mt-6 transition-opacity duration-750 opacity-100"
      >
        {/* Search Input Field */}
        <div ref={searchWrapperRef} className="relative px-4 md:px-0">
          <input
            className="w-full h-12 pl-10 pr-10 rounded bg-rose-50 text-black focus:border-none focus:outline-none"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
            onClick={() => setShowSuggested(true)}
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

        {/* Suggested Search Terms - overlay box with smooth expand/collapse */}
        <div
        className={`absolute left-0 right-0 w-full bg-white z-50 overflow-hidden transition-all duration-750 ease-in-out ${
          showSuggested
          ? 'max-h-[400px]'
          : 'max-h-0 py-0'
        }`}
        >
          <div className="border-x border-gray-300 border-b pt-4">
            <h3 className="text-sm text-gray-500 border-gray-300 px-4 mb-4 border-b pb-2">
            Suggested search terms
            </h3>
            <div className="px-4 pb-5">
              <div className="flex flex-wrap gap-x-4 gap-y-3 text-base text-gray-700">
                {[
                'Home',
                'Elevation Church',
                'Elevation Worship',
                'Apparel',
                'Accessories',
                'NextGen (Kids & YTH)',
                'Resources',
                'Make Room For The New',
                ].map((term) => (
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
        </div>
      </div>

      {/* Results Title */}
      <div className="mt-8 text-center">
        <h3 className="text-3xl font-normal text-black">
          Results for &quot;<span className="font-medium">{query}</span>&quot;
        </h3>
      </div>

      {/* Tabs with dynamic underline */}
      <div className="relative mt-8 w-fit">
        <ul className="flex justify-center gap-6 text-gray-600 text-sm font-medium relative">
          {tabs.map((tab) => (
          <li
            key={tab}
            ref={(el) => {
            tabRefs.current[tab] = el;
            }}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer pb-3 transition-colors ${
            activeTab === tab ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            {tab}
          </li>
          ))}
        </ul>

        {/* Outer gray bar */}
        <div className="relative h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            
          {/* Dynamic underline */}
          <div
          className={`
            absolute h-[5px] bg-gray-600 transition-all duration-300 ease-in-out
            ${activeTab === 'Products' ? 'rounded-l-full' : ''}
            ${activeTab === 'Pages' ? 'rounded-r-full' : ''}
          `}
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchWithSuggestions;
