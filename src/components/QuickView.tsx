"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";

// Types
interface ProductVariant {
  id: number;
  size: string;
  status: "in" | "low" | "out" | "unavailable";
}

interface QuickViewProps {
    onClose: () => void;
  }

// Sample data
const productVariants: ProductVariant[] = [
  { id: 43839396315276, size: "S", status: "in" },
  { id: 43839396348044, size: "M", status: "in" },
  { id: 43839396380812, size: "L", status: "in" },
  { id: 43839396413580, size: "XL", status: "in" },
  { id: 43839396446348, size: "2XL", status: "in" },
  { id: 43839396479116, size: "3XL", status: "in" },
];

const resources = [
    {
      title: 'Elevation Church',
      imageUrl: '/banner-2.jpg',
      link: 'collections/elevation-church-1'
    },
    {
      title: 'Elevation Worship',
      imageUrl: '/banner-3.jpg',
      link: 'collections/elevation-worship'
    },
    {
      title: 'Reflect Collection',
      imageUrl: '/banner-3.jpg',
      link: 'collections/reflect-2'
    },
    {
      title: 'Gifts with Purpose',
      imageUrl: '/banner-2.jpg',
      link: 'collections/giftables'
    },
  ];

const QuickView: React.FC<QuickViewProps> = ({ onClose }) => {
  const [selectedSize, setSelectedSize] = useState<ProductVariant>(productVariants[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleSizeChange = (variantId: number) => {
    const variant = productVariants.find((v) => v.id === variantId);
    if (variant) setSelectedSize(variant);
  };

  const handleQuantitySelect = (val: number) => {
    setQuantity(val);
    setDropdownOpen(false);
  };

  return (
    <div className="md:max-w-md w-full bg-white flex flex-col items-center justify-center md:min-h-screen max-h-[500px] h-full">
        {/* Product Details */}
        <div style={{scrollbarWidth: "none"}} className="flex flex-col p-6 space-y-6 overflow-y-auto overflow-hidden">
            <div className="flex md:flex-col justify-center gap-6 flex-row-reverse relative">
                {/* Info */}
                <div className="flex-1 flex justify-between gap-3 md:px-6">
                    <div className="mt-">
                        <h2 className="md:text-base font-semibold text-gray-800 text-left">
                            Oversized Embroidered Oxford
                        </h2>
                        <p className="text-sm text-gray-700 mt-1">$40.00 USD</p>
                    </div>
                    <p onClick={onClose} className="text-3xl text-gray-600 font-light -mt-4 cursor-pointer">&times;</p>
                </div>

                {/* Main Image */}
                <div className="flex-1 block md:hidden">
                    <div className="relative h-full aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={resources[0].imageUrl}
                            alt={resources[0].title}
                            layout="fill"
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

                {/* Image Slider */}
                <div className="flex-1 md:flex hidden">
                    <div className="relative max-w-[400px] w-full pl-6">
                        <div className="relative group">
                            <Swiper
                                spaceBetween={10}
                                modules={[Navigation]}
                                slidesPerView={1.1}
                                grabCursor={true}
                                loop={true}
                                navigation={{
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next",
                                }}
                            >
                                {resources.map((resource, index) => (
                                <SwiperSlide key={index}>
                                    <div className="aspect-square rounded-lg overflow-hidden">
                                        <Image
                                            src={resource.imageUrl}
                                            alt={resource.title}
                                            layout="fill"
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden group-hover:block">
                                <button
                                className="swiper-button-prev bg-white rounded-full cursor-pointer p-2 shadow"
                                // onClick={() => swiperRef.current?.swiper.slidePrev()}
                                >
                                    <FaChevronLeft size={20} className="text-gray-500 font-light" />
                                </button>
                            </div>
                            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 hidden group-hover:block">
                                <button
                                className="swiper-button-next bg-white rounded-full cursor-pointer p-2 shadow"
                                // onClick={() => swiperRef.current?.swiper.slideNext()}
                                >
                                    <FaChevronRight size={20} className="text-gray-500 font-light" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          {/* Stock Status */}
          <p className="text-xs text-yellow-600 md:px-6">● Only 1 left in stock</p>

          {/* Size Selector */}
          <fieldset className="text-gray-700 md:px-6">
            <legend className="font-medium mb-2">Size</legend>
            <div className="grid grid-cols-7 gap-2">
              {productVariants.map((variant) => (
                <label key={variant.id} className="cursor-pointer w-full">
                  <input
                    type="radio"
                    name="size"
                    value={variant.size}
                    checked={selectedSize.id === variant.id}
                    onChange={() => handleSizeChange(variant.id)}
                    className="hidden"
                  />
                  <div
                    className={`p-2 text-center border rounded-md w-full ${
                      selectedSize.id === variant.id
                        ? "border-blue-600 bg-blue-100"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {variant.size}
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Quantity Selector */}
          <div className="text-gray-700 md:px-6">
            <label className="block font-medium mb-2">Quantity</label>

            {quantity < 10 ? (
              <div className="relative inline-block w-32">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full border border-gray-500 rounded px-3 py-1.5 flex items-center justify-between bg-white"
                >
                  <span>{quantity}</span>
                  <FaChevronDown size={16} />
                </button>

                {dropdownOpen && (
                  <ul className="absolute w-full max-h-40 overflow-y-auto border rounded bg-white shadow mt-2 z-10 transition-all duration-300">
                    {[...Array(10)].map((_, i) => (
                      <li
                        key={i + 1}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleQuantitySelect(i + 1)}
                      >
                        {i + 1}
                      </li>
                    ))}
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleQuantitySelect(10)}
                    >
                      10+
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex border rounded overflow-hidden w-32">
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  className="flex-1 py-1.5 flex justify-center items-center"
                >
                  <FaMinus size={16} />
                </button>
                <div className="flex-1 py-1.5 flex justify-center items-center text-lg font-medium bg-white">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex-1 py-1.5 flex justify-center items-center"
                >
                  <FaPlus size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 text-left md:px-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis expedita molestias ipsam dolorum, nesciunt voluptatum modi dignissimos voluptas atque libero? Sunt minus, quas mollitia commodi itaque ab natus quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, excepturi.
          </p>

        </div>

        {/* CTA */}
        <div className="bg-white p-5 w-full pb-8 md:pb-14">
          <button className="w-full bg-black text-white hover:bg-gray-800 rounded-md h-11 cursor-pointer">
            ADD TO CART
          </button>
        </div>
    </div>
  );
};

export default QuickView;

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { FaChevronDown, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { SwiperRef } from "swiper"; // Import the SwiperRef type from swiper
// import 'swiper/css';

// // Types
// interface ProductVariant {
//   id: number;
//   size: string;
//   status: "in" | "low" | "out" | "unavailable";
// }

// interface QuickViewProps {
//   onClose: () => void;
// }

// const productVariants: ProductVariant[] = [
//   { id: 43839396315276, size: "S", status: "in" },
//   { id: 43839396348044, size: "M", status: "in" },
//   { id: 43839396380812, size: "L", status: "in" },
//   { id: 43839396413580, size: "XL", status: "in" },
//   { id: 43839396446348, size: "2XL", status: "in" },
//   { id: 43839396479116, size: "3XL", status: "in" },
// ];

// const resources = [
//   {
//     title: 'Elevation Church',
//     imageUrl: '/banner-2.jpg',
//     link: 'collections/elevation-church-1'
//   },
//   {
//     title: 'Elevation Worship',
//     imageUrl: '/banner-3.jpg',
//     link: 'collections/elevation-worship'
//   },
//   {
//     title: 'Reflect Collection',
//     imageUrl: '/banner-3.jpg',
//     link: 'collections/reflect-2'
//   },
//   {
//     title: 'Gifts with Purpose',
//     imageUrl: '/banner-2.jpg',
//     link: 'collections/giftables'
//   },
// ];

// const QuickView: React.FC<QuickViewProps> = ({ onClose }) => {
//   const [selectedSize, setSelectedSize] = useState<ProductVariant>(productVariants[0]);
//   const [quantity, setQuantity] = useState<number>(1);
//   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

//   // Corrected ref typing: use SwiperRef from 'swiper' instead of Swiper
//   const swiperRef = useRef<SwiperRef | null>(null);

//   const handleSizeChange = (variantId: number) => {
//     const variant = productVariants.find((v) => v.id === variantId);
//     if (variant) setSelectedSize(variant);
//   };

//   const handleQuantitySelect = (val: number) => {
//     setQuantity(val);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="md:max-w-md w-full bg-white flex flex-col items-center justify-center md:min-h-screen max-h-[500px] h-full">
//         {/* Product Details */}
//         <div style={{scrollbarWidth: "none"}} className="flex flex-col p-6 space-y-6 overflow-y-auto overflow-hidden">
//             <div className="flex md:flex-col justify-center gap-6 flex-row-reverse relative">
//                 {/* Info */}
//                 <div className="flex-1 flex justify-between gap-3 md:px-6">
//                     <div className="mt-">
//                         <h2 className="md:text-base font-semibold text-gray-800 text-left">
//                             Oversized Embroidered Oxford
//                         </h2>
//                         <p className="text-sm text-gray-700 mt-1">$40.00 USD</p>
//                     </div>
//                     <p onClick={onClose} className="text-3xl text-gray-600 font-light -mt-4 cursor-pointer">&times;</p>
//                 </div>

//                 {/* Main Image */}
//                 <div className="flex-1 block md:hidden">
//                     <div className="relative h-full aspect-square rounded-lg overflow-hidden">
//                         <Image
//                             src={resources[0].imageUrl}
//                             alt={resources[0].title}
//                             layout="fill"
//                             className="rounded-lg object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Image Slider */}
//                 <div className="flex-1 md:flex hidden">
//                     <div className="relative max-w-[400px] w-full pl-6">
//                         <div className="relative group">
//                             <Swiper
//                                 spaceBetween={10}
//                                 slidesPerView={1.1}
//                                 grabCursor={true}
//                                 loop={true}
//                                 ref={swiperRef}
//                                 navigation={{
//                                   prevEl: ".swiper-button-prev",
//                                   nextEl: ".swiper-button-next",
//                                 }}
//                             >
//                                 {resources.map((resource, index) => (
//                                   <SwiperSlide key={index}>
//                                       <div className="aspect-square rounded-lg overflow-hidden">
//                                           <Image
//                                               src={resource.imageUrl}
//                                               alt={resource.title}
//                                               layout="fill"
//                                               className="object-cover rounded-lg"
//                                           />
//                                       </div>
//                                   </SwiperSlide>
//                                 ))}
//                             </Swiper>

//                             {/* Navigation Buttons */}
//                             <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden group-hover:block">
//                                 <button
//                                   className="swiper-button-prev bg-white rounded-full cursor-pointer p-2 shadow"
//                                   onClick={() => swiperRef.current?.swiper.slidePrev()}
//                                 >
//                                     <FaChevronLeft size={20} className="text-gray-500 font-light" />
//                                 </button>
//                             </div>
//                             <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 hidden group-hover:block">
//                                 <button
//                                   className="swiper-button-next bg-white rounded-full cursor-pointer p-2 shadow"
//                                   onClick={() => swiperRef.current?.swiper.slideNext()}
//                                 >
//                                     <FaChevronRight size={20} className="text-gray-500 font-light" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//           {/* Stock Status */}
//           <p className="text-xs text-yellow-600 md:px-6">● Only 1 left in stock</p>

//           {/* Size Selector */}
//           <fieldset className="text-gray-700 md:px-6">
//             <legend className="font-medium mb-2">Size</legend>
//             <div className="grid grid-cols-7 gap-2">
//               {productVariants.map((variant) => (
//                 <label key={variant.id} className="cursor-pointer w-full">
//                   <input
//                     type="radio"
//                     name="size"
//                     value={variant.size}
//                     checked={selectedSize.id === variant.id}
//                     onChange={() => handleSizeChange(variant.id)}
//                     className="hidden"
//                   />
//                   <div
//                     className={`p-2 text-center border rounded-md w-full ${
//                       selectedSize.id === variant.id
//                         ? "border-blue-600 bg-blue-100"
//                         : "border-gray-300 hover:bg-gray-100"
//                     }`}
//                   >
//                     {variant.size}
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </fieldset>

//           {/* Quantity Selector */}
//           <div className="text-gray-700 md:px-6">
//             <label className="block font-medium mb-2">Quantity</label>

//             {quantity < 10 ? (
//               <div className="relative inline-block w-32">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="w-full border border-gray-500 rounded px-3 py-1.5 flex items-center justify-between bg-white"
//                 >
//                   <span>{quantity}</span>
//                   <FaChevronDown size={16} />
//                 </button>

//                 {dropdownOpen && (
//                   <ul className="absolute w-full max-h-40 overflow-y-auto border rounded bg-white shadow mt-2 z-10 transition-all duration-300">
//                     {[...Array(10)].map((_, i) => (
//                       <li
//                         key={i + 1}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleQuantitySelect(i + 1)}
//                       >
//                         {i + 1}
//                       </li>
//                     ))}
//                     <li
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => handleQuantitySelect(10)}
//                     >
//                       10+
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             ) : (
//               <div className="flex border rounded overflow-hidden w-32">
//                 <button
//                   onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
//                   className="flex-1 py-1.5 flex justify-center items-center"
//                 >
//                   <FaMinus size={16} />
//                 </button>
//                 <div className="flex-1 py-1.5 flex justify-center items-center text-lg font-medium bg-white">
//                   {quantity}
//                 </div>
//                 <button
//                   onClick={() => setQuantity((prev) => prev + 1)}
//                   className="flex-1 py-1.5 flex justify-center items-center"
//                 >
//                   <FaPlus size={16} />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Description */}
//           <p className="text-sm text-gray-600 text-left md:px-6">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis expedita molestias ipsam dolorum, nesciunt voluptatum modi dignissimos voluptas atque libero? Sunt minus, quas mollitia commodi itaque ab natus quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, excepturi.
//           </p>

//         </div>

//         {/* CTA */}
//         <div className="bg-white p-5 w-full pb-8 md:pb-14">
//           <button className="w-full bg-black text-white hover:bg-gray-800 rounded-md h-11 cursor-pointer">
//             ADD TO CART
//           </button>
//         </div>
//     </div>
//   );
// };

// export default QuickView;
