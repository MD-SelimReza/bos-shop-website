"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa6";
// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from 'swiper';
import "swiper/css";

interface ProductVariant {
  id: number;
  size: string;
  status: "in" | "low" | "out" | "unavailable";
}

const productVariants: ProductVariant[] = [
  { id: 43839396315276, size: "S", status: "in" },
  { id: 43839396348044, size: "M", status: "in" },
  { id: 43839396380812, size: "L", status: "in" },
  { id: 43839396413580, size: "XL", status: "in" },
  { id: 43839396446348, size: "2XL", status: "in" },
  { id: 43839396479116, size: "3XL", status: "in" },
];

interface ProductImage {
  id: number;
  alt: string;
  src: string;
}

const images: ProductImage[] = [
  { id: 1, alt: "Back", src: "/banner-2.jpg" },
  { id: 2, alt: "Front", src: "/banner-3.jpg" },
  { id: 3, alt: "Detail", src: "/product1.webp" },
  // { id: 4, alt: "Back", src: "/banner-2.jpg" },
  // { id: 5, alt: "Front", src: "/banner-3.jpg" },
  // { id: 6, alt: "Detail", src: "/product1.webp" },
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(productVariants[0]);
  const [quantity, setQuantity] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  // Prevent body scrolling when navbar search is open
  useEffect(() => {
    if (showImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showImageModal]);

  const handleSizeChange = (variantId: number) => {
    const variant = productVariants.find((v) => v.id === variantId);
    if (variant) setSelectedSize(variant);
  };

  const handleQuantitySelect = (val: number) => {
    setQuantity(val);
    setDropdownOpen(false);
  };

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    setShowImageModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setQuantity(value === "" ? 1 : Math.max(1, parseInt(value, 10)));
    }
  };
  
  return (
    <div className="w-full max-w-7xl px-6 md:px-10 mx-auto py-6 text-black min-h-screen relative">  
      <div className="flex flex-col md:flex-row gap-10">
        {showImageModal && (
          <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
            {/* Close Button */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-8 right-8 text-black text-2xl z-10 hover:text-gray-700 transition active:rotate-180"
            >
              <AiOutlineClose />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              initialSlide={activeImageIndex}
              className="relative w-full h-full flex justify-center items-center"
            >
              {images.map((image) => (
                <SwiperSlide
                  key={image.id}
                  className="flex justify-center items-center h-full"
                >
                  {/* Image Wrapper with aspect-square */}
                  <div className="flex justify-center items-center h-full">
                    <div className="relative aspect-square w-full max-w-[600px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover" // or use className="object-cover"
                        className="rounde"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Prev Button */}
              <div className="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white/100 rounded-full p-3 shadow-md transition">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              {/* Next Button */}
              <div className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white/100 rounded-full p-3 shadow-md transition">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Swiper>
          </div>
        )}

        {/* Image Grid */}
        <div className="md:w-3/5 w-full">
          <div className="md:grid grid-cols-2 gap-4 hidden overflow-y-auto h-fit">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg relative w-full aspect-square group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* <div className="absolute inset-0 bg-black flex justify-center hover:z-50 items-center opacity-0 group-hover:opacity-50 transition-opacity">
                  <AiOutlinePlusCircle size={48} className="text-white z-50" />
                </div> */}
              </div>
            ))}
          </div>
          <div className="md:hidden w-full">
            <Swiper
              spaceBetween={10}
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2"
            >
              {images.map((image, index) => (
                <SwiperSlide key={image.id}>
                  <div onClick={() => handleImageClick(index)} className="relative max-w-screen w-full h-full aspect-square rounded-lg">
                    <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="w-full h-auto object-cover rounded-lg" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                640: { slidesPerView: 6 },
              }}
              loop={true}
              freeMode={true}
              watchSlidesProgress={true}
              centeredSlides={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper mt-2.5 mx-auto w-full"
            >
              {images.map((image) => (
                <SwiperSlide key={image.id} className="w-fit">
                  <div className="relative max-w-[200px] w-full aspect-square rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-2/5 w-full space-y-4 sticky top-24 self-start">
          {/* Inventory Status */}
          <div className="mb-4 text-sm md:text-base">
            {selectedSize.status === "in" && (
              <span className="text-green-600">Item is in stock</span>
            )}
            {selectedSize.status === "low" && (
              <span className="text-yellow-600">Hurry! Low inventory</span>
            )}
            {selectedSize.status === "out" && (
              <span className="text-red-600">Item is out of stock</span>
            )}
            {selectedSize.status === "unavailable" && (
              <span className="text-gray-500">Item is unavailable</span>
            )}
          </div>

          {/* Product Title */}
          <h1 className="text-[27px] font-medium">
            Elevation Nights Tour T-Shirt 2025
          </h1>

          {/* Price */}
          <div className="text-xl">$40.00 USD</div>

          {/* Description */}
          <div className="text-gray-700 space-y-2 text-sm md:text-base">
            <p>
              Black unisex heavy-weight boxy t-shirt. Front reads &quot;Elevation
              Worship&quot; in distressed cream print. Back Reads &quot;Elevation Nights
              2025 Tour&quot; in distressed cream print with 2025 Elevation Nights tour
              stops printed in distressed cream print. 100% cotton.
            </p>
            <p>
              <em>Please allow 5-7 business days for processing and handling.</em>
            </p>
          </div>

          {/* Size Selector */}
          <fieldset>
            <legend className="font-medium mb-2">Size</legend>
            <div className="flex flex-wrap gap-2">
              {productVariants.map((variant) => (
                <label key={variant.id} className="cursor-pointer basis-20">
                  <input
                    type="radio"
                    name="size"
                    value={variant.size}
                    checked={selectedSize.id === variant.id}
                    onChange={() => handleSizeChange(variant.id)}
                    className="hidden"
                  />
                  <div
                    className={`p-2 text-center border rounded-md basis-20 ${
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
          <div>
            <label className="block font-medium mb-2">Quantity</label>

            {quantity < 10 ? (
              <div className="relative inline-block w-28">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full border rounded-lg px-4 py-1.5 flex items-center justify-between bg-white"
                >
                  <span>{quantity}</span>
                  <FaChevronDown size={16} />
                </button>

                {dropdownOpen && (
                  <ul className="absolute w-full max-h-40 overflow-y-auto border rounded-lg bg-white shadow mt-2 z-10 transition-all duration-300">
                    {[...Array(9)].map((_, i) => (
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
            // <div className="flex border rounded-lg overflow-hidden w-32">
            //   <button
            //     onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            //     className="flex-1 py-1.5 flex justify-center items-center"
            //   >
            //     <FaMinus size={16} />
            //   </button>
            //   <div className="flex-1 py-1.5 flex justify-center items-center text-lg font-medium bg-white w-fit">
            //     <input value={quantity} />
            //   </div>
            //   <button
            //     onClick={() => setQuantity((prev) => prev + 1)}
            //     className="flex-1 py-1.5 flex justify-center items-center"
            //   >
            //     <FaPlus size={16} />
            //   </button>
            // </div>
            <div className="flex border rounded-lg overflow-hidden w-32">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="flex-1 py-1.5 flex justify-center items-center"
              >
                <FaMinus size={16} />
              </button>
              <input
                type="text"
                value={quantity}
                onChange={handleInputChange}
                className="w-12 py-1.5 text-center text-base font-medium bg-white border-none outline-none"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="flex-1 py-1.5 flex justify-center items-center"
              >
                <FaPlus size={16} />
              </button>
            </div>
            )}
          </div>

          {/* Add to Cart */}
          <button className="w-full py-3 bg-black text-white uppercase rounded-lg text-sm font-light">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa6";


// interface ProductVariant {
//   id: number;
//   size: string;
//   status: "in" | "low" | "out" | "unavailable";
// }

// const productVariants: ProductVariant[] = [
//   { id: 43839396315276, size: "S", status: "in" },
//   { id: 43839396348044, size: "M", status: "in" },
//   { id: 43839396380812, size: "L", status: "in" },
//   { id: 43839396413580, size: "XL", status: "in" },
//   { id: 43839396446348, size: "2XL", status: "in" },
//   { id: 43839396479116, size: "3XL", status: "in" },
// ];

// interface ProductImage {
//   id: number;
//   alt: string;
//   src: string;
// }

// const images: ProductImage[] = [
//   { id: 1, alt: "Back", src: "/banner-2.jpg" },
//   { id: 2, alt: "Front", src: "/banner-3.jpg" },
//   { id: 3, alt: "Detail", src: "/product1.webp" },
// ];

// export default function ProductDetails() {
//   const [selectedSize, setSelectedSize] = useState(productVariants[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [customQuantity, setCustomQuantity] = useState(10);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [showImageModal, setShowImageModal] = useState(false);
//   const [activeImage, setActiveImage] = useState<ProductImage | null>(null);

//   const handleSizeChange = (variantId: number) => {
//     const variant = productVariants.find((v) => v.id === variantId);
//     if (variant) setSelectedSize(variant);
//   };

//   const handleQuantitySelect = (val: number) => {
//     setDropdownOpen(false);
//     if (val === 10) {
//       setQuantity(10);
//       setCustomQuantity(10);
//     } else {
//       setQuantity(val);
//     }
//   };

//   const handleImageClick = (image: ProductImage) => {
//     setActiveImage(image);
//     setShowImageModal(true);
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto flex gap-10 p-6 text-black relative">
//       {/* Image Modal */}
//       {showImageModal && activeImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={() => setShowImageModal(false)}
//         >
//           <div className="relative w-3/4 h-3/4">
//             <Image
//               src={activeImage.src}
//               alt={activeImage.alt}
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       )}

//       {/* Image Grid */}
//       <div className="grid grid-cols-2 gap-4 w-1/2">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="overflow-hidden rounded-lg relative w-full h-64 group cursor-pointer"
//             onClick={() => handleImageClick(image)}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <FaPlusCircle size={48} className="text-white" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Product Info */}
//       <div className="w-1/2 space-y-6">
//         {/* Inventory Status */}
//         <div className="mb-4">
//           {selectedSize.status === "in" && (
//             <span className="text-green-600">Item is in stock</span>
//           )}
//           {selectedSize.status === "low" && (
//             <span className="text-yellow-600">Hurry! Low inventory</span>
//           )}
//           {selectedSize.status === "out" && (
//             <span className="text-red-600">Item is out of stock</span>
//           )}
//           {selectedSize.status === "unavailable" && (
//             <span className="text-gray-500">Item is unavailable</span>
//           )}
//         </div>

//         {/* Product Title */}
//         <h1 className="text-3xl font-bold">
//           Elevation Nights Tour T-Shirt 2025
//         </h1>

//         {/* Price */}
//         <div className="text-xl font-semibold">$40.00 USD</div>

//         {/* Description */}
//         <div className="text-gray-700 space-y-2">
//           <p>
//             Black unisex heavy-weight boxy t-shirt. Front reads "Elevation
//             Worship" in distressed cream print. Back Reads "Elevation Nights
//             2025 Tour" in distressed cream print with 2025 Elevation Nights tour
//             stops printed in distressed cream print. 100% cotton.
//           </p>
//           <p>
//             <em>Please allow 5-7 business days for processing and handling.</em>
//           </p>
//         </div>

//         {/* Size Selector */}
//         <fieldset>
//           <legend className="font-medium mb-2">Size</legend>
//           <div className="grid grid-cols-7 gap-2">
//             {productVariants.map((variant) => (
//               <label key={variant.id} className="cursor-pointer w-full">
//                 <input
//                   type="radio"
//                   name="size"
//                   value={variant.size}
//                   checked={selectedSize.id === variant.id}
//                   onChange={() => handleSizeChange(variant.id)}
//                   className="hidden"
//                 />
//                 <div
//                   className={`p-2 text-center border rounded-md w-full ${
//                     selectedSize.id === variant.id
//                       ? "border-blue-600 bg-blue-100"
//                       : "border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {variant.size}
//                 </div>
//               </label>
//             ))}
//           </div>
//         </fieldset>

//         {/* Quantity Selector */}
//         <div>
//           <label className="block font-medium mb-2">Quantity</label>
//           {quantity < 10 ? (
//             <div className="relative inline-block w-28">
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="w-full border rounded px-4 py-2 flex items-center justify-between bg-white"
//               >
//                 <span>{quantity}</span>
//                 <FaChevronDown size={16} />
//               </button>
//               {dropdownOpen && (
//                 <ul className="absolute w-full max-h-40 overflow-y-auto border rounded bg-white shadow mt-2 z-10 transition-all duration-300">
//                   {[...Array(10)].map((_, i) => (
//                     <li
//                       key={i + 1}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => handleQuantitySelect(i + 1)}
//                     >
//                       {i + 1}
//                     </li>
//                   ))}
//                   <li
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleQuantitySelect(10)}
//                   >
//                     10+
//                   </li>
//                 </ul>
//               )}
//             </div>
//           ) : (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() =>
//                   setCustomQuantity((prev) => Math.max(prev - 1, 10))
//                 }
//                 className="p-2 border rounded bg-gray-100 hover:bg-gray-200"
//               >
//                 <FaMinus size={16} />
//               </button>
//               <span className="text-lg">{customQuantity}</span>
//               <button
//                 onClick={() => setCustomQuantity((prev) => prev + 1)}
//                 className="p-2 border rounded bg-gray-100 hover:bg-gray-200"
//               >
//                 <FaPlus size={16} />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Add to Cart */}
//         <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
