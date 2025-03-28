'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

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

export default function SortByDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Featured');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    // Call your sort function here if needed
  };

  return (
    <div className="relative inline-block text-left w-48" ref={dropdownRef}>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hidden md:flex items-center justify-between gap-2 text-sm text-gray-600 cursor-pointer"
      >
        <span>Sort by</span>
        <FaChevronDown className="w-4 h-4 transform transition-transform duration-200"/>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute mt-2 w-64 z-50 bg-white border border-black rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4 gap-1.5 transition-opacity duration-300">
          {sortOptions.map((option) => (
            <li key={option}>
              <button
                onClick={() => handleSelect(option)}
                className="flex items-center w-full px-4 py-1 text-sm text-gray-700 cursor-pointer"
              >
                <div className="mr-3 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full flex-shrink-0 flex justify-center items-center ${
                    selected === option ? 'border-black border-[5px]' : 'border border-gray-700'
                    }`}
                  />
                </div>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
