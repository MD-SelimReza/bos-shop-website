import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPage = (page:number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Add page navigation logic here!
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-8">
      {/* Left Arrow */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <AiOutlineLeft size={16} />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`relative p-2 text-sm font-medium transition-colors cursor-pointer ${
            currentPage === page
              ? 'text-black'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {page}
          {/* Underline Effect */}
          {currentPage === page && (
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[1px] bg-black rounded transition-all duration-300"
            />
          )}
        </button>
      ))}

      {/* Right Arrow */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <AiOutlineRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
