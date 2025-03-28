// import Image from "next/image";
// import ProductGridItem from "./ProductGridItem";

// export default function ShopTheLook() {
//   return (
//     <div className="flex flex-col lg:flex-row justify-center gap-16 p-8">
//       {/* Left Side - Model Image */}
//       <div className="relative xl:w-[600px] xl:h-[600px] h-[500px] w-full">
//         <Image
//           src="/banner-2.jpg" // Replace with your image path
//           alt="Model wearing outfit"
//           layout="fill"
//           className="rounded-lg object-cover"
//         />
//         {/* Hotpots */}
//         <div className="absolute lg:hidden top-1/3 left-1/4 w-6 h-6 border border-white rounded-full flex items-center justify-center bg-[#F0F0F0]">
//           <span className="w-2 h-2 bg-white rounded-full"></span>
//         </div>
//         <div className="absolute lg:hidden top-1/2 left-1/2 w-6 h-6 border border-white rounded-full flex items-center justify-center bg-[#F0F0F0]">
//           <span className="w-2 h-2 bg-white rounded-full"></span>
//         </div>
//       </div>

//       {/* Right Side - Product Listings */}
//       <div className="space-y-4 hidden md:block">
//         <h2 className="text-4xl font-medium text-center text-black mb-10">Shop the Look</h2>
//         <div className="flex gap-16">
//           <div className="xl:w-[300px] w-[200px]">
//             <ProductGridItem
//                 title="Elevation Nights Tour T-Shirt 2025"
//                 price="$40.00 USD"
//                 productLink="/shop/elevation-worship/products/elevation-nights-tour-t-shirt-copy"
//                 featuredImage="/banner-3.jpg"
//                 hoverImage="/banner-2.jpg"
//             />
//           </div>
//           <div className="xl:w-[300px] w-[200px]">
//             <ProductGridItem
//                 title="Elevation Nights Tour T-Shirt 2025"
//                 price="$40.00 USD"
//                 productLink="/shop/elevation-worship/products/elevation-nights-tour-t-shirt-copy"
//                 featuredImage="/banner-3.jpg"
//                 hoverImage="/banner-2.jpg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProductGridItem from "./ProductGridItem";
import ProductCard from "./ProductCard";

export default function ShopTheLook() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  // Prevent body scrolling when navbar search is open
  useEffect(() => {
    if (isCardOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCardOpen]);

  const handleHotspotClick = (index: number) => {
    setActiveProduct(index);
    setIsCardOpen(true);
  };

  return (
    <>
      <div className="flex justify-center gap-6 lg:gap-16 px-5 lg:px-16 py-10 relative">
        {/* Left Side - Model Image */}
        <div className="relative w-full aspect-square md:w-1/2">
          <Image
            src="/banner-2.jpg"
            alt="Model wearing outfit"
            layout="fill"
            className="rounded-lg object-cover"
          />

          {/* Hotspot Buttons */}
          <button
            onClick={() => handleHotspotClick(0)}
            className="absolute md:hidden top-1/3 left-1/4 w-6 h-6 border border-white rounded-full flex items-center justify-center bg-[#F0F0F0] z-10"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </button>

          <button
            onClick={() => handleHotspotClick(1)}
            className="absolute md:hidden top-1/2 left-1/2 w-6 h-6 border border-white rounded-full flex items-center justify-center bg-[#F0F0F0] z-10"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </button>
        </div>

        {/* Right Side - Product Listings */}
        <div className="space-y-4 hidden md:block w-1/2">
          <h2 className="text-4xl font-medium text-center text-black mb-10">Shop the Look</h2>
          <div className="flex gap-6 lg:gap-16">
            <div className="aspect-square">
              <ProductGridItem
                title="Elevation Nights Tour T-Shirt 2025"
                price="$40.00 USD"
                productLink="/shop/elevation-worship/products/elevation-nights-tour-t-shirt-copy"
                featuredImage="/banner-3.jpg"
                hoverImage="/banner-2.jpg"
              />
            </div>
            <div className="aspect-square">
              <ProductGridItem
                title="Elevation Nights Tour T-Shirt 2025"
                price="$40.00 USD"
                productLink="/shop/elevation-worship/products/elevation-nights-tour-t-shirt-copy"
                featuredImage="/banner-3.jpg"
                hoverImage="/banner-2.jpg"
              />
            </div>
          </div>
        </div>

        {isCardOpen && <div className="fixed inset-0 bg-[#CCCCCC] opacity-50 z-30 transition-opacity duration-500"></div>}
      </div>
      {/* Sliding ProductCard */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
        <div
          className={`transition-transform duration-500 ease-in-out transform ${
            isCardOpen ? "translate-y-0" : "translate-y-full"
          } pointer-events-auto`}
        >
          {activeProduct !== null && (
            <ProductCard
              activeProduct={activeProduct}
              onClose={() => setIsCardOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}
