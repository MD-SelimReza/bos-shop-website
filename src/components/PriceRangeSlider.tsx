// 'use client';

// import React, { useState } from 'react';

// const minPrice = 0;
// const maxPrice = 100;
// const minGap = 0;

// const PriceRangeSlider: React.FC = () => {
//   const [value, setValue] = useState<number[]>([20, 100]);

//   const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newMin = Math.min(Number(e.target.value), value[1] - minGap);
//     setValue([newMin, value[1]]);
//   };

//   const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newMax = Math.max(Number(e.target.value), value[0] + minGap);
//     setValue([value[0], newMax]);
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto">
//       {/* Price Inputs */}
//       <div className="flex justify-between mb-4">
//         {/* Min Price */}
//         <div className="flex flex-col items-center">
//           <label htmlFor="min" className="text-sm font-medium text-gray-700 mb-1">
//             Min Price
//           </label>
//           <div className="flex items-center border border-gray-300 rounded px-2 py-1">
//             <span className="text-gray-500 mr-1">$</span>
//             <input
//               id="min"
//               type="number"
//               min={minPrice}
//               max={value[1] - minGap}
//               value={value[0]}
//               onChange={handleMinChange}
//               className="w-16 text-center outline-none"
//             />
//           </div>
//         </div>

//         {/* Max Price */}
//         <div className="flex flex-col items-center">
//           <label htmlFor="max" className="text-sm font-medium text-gray-700 mb-1">
//             Max Price
//           </label>
//           <div className="flex items-center border border-gray-300 rounded px-2 py-1">
//             <span className="text-gray-500 mr-1">$</span>
//             <input
//               id="max"
//               type="number"
//               min={value[0] + minGap}
//               max={maxPrice}
//               value={value[1]}
//               onChange={handleMaxChange}
//               className="w-16 text-center outline-none"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Range Slider */}
//       <div className="relative h-2 bg-gray-200 rounded mb-4">
//         {/* Selected Range Track */}
//         <div
//           className="absolute h-2 bg-blue-500 rounded"
//           style={{
//             left: `${(value[0] / maxPrice) * 100}%`,
//             width: `${((value[1] - value[0]) / maxPrice) * 100}%`,
//           }}
//         />

//         {/* Left Thumb */}
//         <input
//           type="range"
//           min={minPrice}
//           max={maxPrice}
//           value={value[0]}
//           onChange={handleMinChange}
//           className="absolute top-1/2 transform -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-auto z-10"
//         />

//         {/* Right Thumb */}
//         <input
//           type="range"
//           min={minPrice}
//           max={maxPrice}
//           value={value[1]}
//           onChange={handleMaxChange}
//           className="absolute top-1/2 transform -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-auto"
//         />
//       </div>

//       {/* Display Range */}
//       <div className="text-center text-sm text-gray-600">
//         Selected Range: ${value[0]} - ${value[1]}
//       </div>
//     </div>
//   );
// };

// export default PriceRangeSlider;

'use client';

import React, { useState } from 'react';

const minDistance = 10;

const PriceRangeSlider: React.FC = () => {
  // State for the left and right slider thumbs
  const [value1, setValue1] = useState<number[]>([20, 37]); // for the first slider

  // Handle the first slider (value1)
  const handleChange1 = (
    event: React.ChangeEvent<HTMLInputElement>,
    activeThumb: number
  ) => {
    const newValue = parseInt(event.target.value);

    if (activeThumb === 0) {
      // Left thumb is being dragged
      const newLeftValue = Math.min(newValue, value1[1] - minDistance);
      setValue1([newLeftValue, value1[1]]);
    } else {
      // Right thumb is being dragged
      const newRightValue = Math.max(newValue, value1[0] + minDistance);
      setValue1([value1[0], newRightValue]);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* First Slider */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Range 1</div>
        <div className="relative w-full h-2 bg-gray-300 rounded">
          <div
            className="absolute h-2 bg-blue-500 rounded"
            style={{
              left: `${(value1[0] / 100) * 100}%`,
              width: `${((value1[1] - value1[0]) / 100) * 100}%`,
            }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={value1[0]}
            onChange={(e) => handleChange1(e, 0)}
            className="absolute top-1/2 transform -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-auto z-10"
          />
          <input
            type="range"
            min={0}
            max={100}
            value={value1[1]}
            onChange={(e) => handleChange1(e, 1)}
            className="absolute top-1/2 transform -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-auto"
          />
        </div>
      </div>

      {/* Display Range */}
      <div className="text-center text-sm text-gray-600">
        Selected Range 1: ${value1[0]} - ${value1[1]}
      </div>
    </div>
  );
};

export default PriceRangeSlider;


