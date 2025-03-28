"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function FilterSidebar() {
  const minPrice = 0;
  const maxPrice = 200;

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [filters, setFilters] = useState<{ availability: string[]; price: number[] }>({
    availability: [],
    price: [minPrice, maxPrice],
  });

  const [showAvailability, setShowAvailability] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const handleMinPriceChange = (value: number) => {
    if (value < minPrice || value >= priceRange[1]) return;
    const newRange: [number, number] = [value, priceRange[1]];
    setPriceRange(newRange);
    setFilters((prev) => ({ ...prev, price: newRange }));
  };

  const handleMaxPriceChange = (value: number) => {
    if (value > maxPrice || value <= priceRange[0]) return;
    const newRange: [number, number] = [priceRange[0], value];
    setPriceRange(newRange);
    setFilters((prev) => ({ ...prev, price: newRange }));
  };

  const handleAvailabilityChange = (option: string) => {
    setFilters((prev) => {
      const updatedAvailability = prev.availability.includes(option)
        ? prev.availability.filter((item) => item !== option)
        : [...prev.availability, option];

      return { ...prev, availability: updatedAvailability };
    });
  };

  const handleRemovePriceFilter = () => {
    setFilters((prev) => ({ ...prev, price: [minPrice, maxPrice] }));
    setPriceRange([minPrice, maxPrice]);
  };

  const handleClearAll = () => {
    setFilters({ availability: [], price: [minPrice, maxPrice] });
    setPriceRange([minPrice, maxPrice]);
  };

  const isPriceFiltered = filters.price[0] !== minPrice || filters.price[1] !== maxPrice;
  const hasFilters = filters.availability.length > 0 || isPriceFiltered;

  return (
    <div className="w-full md:max-w-xs text-black">
      {/* Filters Section - Always visible if filters exist */}
      {hasFilters && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-medium">
              Filters ({filters.availability.length + (isPriceFiltered ? 1 : 0)})
            </h3>
            <button onClick={handleClearAll} className="text-sm underline text-gray-600 hover:text-black">
              Clear all
            </button>
          </div>

          {/* Applied Filters as Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {filters.availability.map((item) => (
              <div key={item} className="flex items-center bg-orange-50 text-xs px-3 py-1 rounded-full space-x-1">
                <span className="font-medium">{item.toUpperCase()}</span>
                <button className="text-gray-500" onClick={() => handleAvailabilityChange(item)}>
                  <AiOutlineClose size={14} />
                </button>
              </div>
            ))}

            {isPriceFiltered && (
              <div className="flex items-center bg-orange-50 text-xs px-3 py-1 rounded-full space-x-1">
                <span className="font-medium">${filters.price[0]} - ${filters.price[1]}</span>
                <button className="text-gray-500" onClick={handleRemovePriceFilter}>
                  <AiOutlineClose size={14} />
                </button>
              </div>
            )}
          </div>

          <hr className="my-4" />
        </div>
      )}

      {/* Availability Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between w-full text-sm font-medium text-black mb-2"
          onClick={() => setShowAvailability(!showAvailability)}
        >
          <span>Availability ({filters.availability.length})</span>
          {showAvailability ? <AiOutlineMinus className="text-gray-600" /> : <AiOutlinePlus className="text-gray-600" />}
        </button>

        <div className={`${showAvailability ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-2 pl-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.availability.includes("In stock")}
                onChange={() => handleAvailabilityChange("In stock")}
                className="w-4 h-4 accent-black"
              />
              <span className="text-sm">In stock</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.availability.includes("Out of stock")}
                onChange={() => handleAvailabilityChange("Out of stock")}
                className="w-4 h-4 accent-black"
              />
              <span className="text-sm">Out of stock</span>
            </label>
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <button
          className="flex justify-between w-full text-sm font-medium text-black mb-2"
          onClick={() => setShowPrice(!showPrice)}
        >
          <span>Price ({isPriceFiltered ? 1 : 0})</span>
          {showPrice ? <AiOutlineMinus className="text-gray-600" /> : <AiOutlinePlus className="text-gray-600" />}
        </button>

        <div className={`${showPrice ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-4 pl-2">
            {/* Range Slider */}
            <div className="relative h-6 flex items-center">
              <div className="absolute h-1 bg-gray-200 w-full rounded" />
              <div
                className="absolute h-1 bg-orange-300 rounded"
                style={{
                  left: `${(priceRange[0] / maxPrice) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / maxPrice) * 100}%`,
                }}
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => handleMinPriceChange(Number(e.target.value))}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto"
              />
            </div>

            {/* Min & Max Inputs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center w-1/2 border rounded px-2 py-1 text-sm">
                <span className="mr-1">$</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  min={minPrice}
                  max={priceRange[1] - 1}
                  onChange={(e) => handleMinPriceChange(Number(e.target.value))}
                  className="w-full bg-transparent outline-none text-right"
                />
              </div>
              <div className="flex items-center w-1/2 border rounded px-2 py-1 text-sm">
                <span className="mr-1">$</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  min={priceRange[0] + 1}
                  max={maxPrice}
                  onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                  className="w-full bg-transparent outline-none text-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
