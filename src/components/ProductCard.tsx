// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
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

// interface ProductCardProps {
//   activeProduct: number;
//   onClose: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ activeProduct, onClose }) => {
//   // Sync with parent when activeProduct changes
//   useEffect(() => {
//     setSelectedProduct(activeProduct);
//   }, [activeProduct]);
  
//   const [selectedSize, setSelectedSize] = useState(productVariants[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState(activeProduct);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleSizeChange = (variantId: number) => {
//     const variant = productVariants.find((v) => v.id === variantId);
//     if (variant) setSelectedSize(variant);
//   };

//   const handleQuantitySelect = (val: number) => {
//     setQuantity(val);
//     setDropdownOpen(false);
//   };

//   const products = [
//     {
//       image: "/banner-2.jpg",
//       title: "Oversized Embroidered Oxford",
//       price: "$40.00 USD",
//       description:
//         "Limited Release. White heavy-weight button-up oxford with various white embroidered images. Limited Release. White heavy-weight button-up oxford with various white embroidered images. Limited Release. White heavy-weight button-up oxford with various white embroidered images.",
//     },
//     {
//       image: "/banner-3.jpg",
//       title: "Oversized Embroidered Oxford 2",
//       price: "$45.00 USD",
//       description:
//         "Exclusive Release. White heavy-weight button-up oxford with unique embroidery designs. Limited Release. White heavy-weight button-up oxford with various white embroidered images. Limited Release. White heavy-weight button-up oxford with various white embroidered images.",
//     },
//   ];

//   return (
//     <div className="md:hidden flex flex-col items-center justify-center">
//       <div className="w-full bg-white rounded-2xl shadow-xl py-5">
//         <div className="flex items-center justify-between px-6 pb-0">
//           <p className="text-sm text-gray-500">Product {selectedProduct + 1} of {products.length}</p>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
//         </div>

//         <div className="flex gap-2 pb-3 pt-2 pl-6 max-w-1/3">
//           {products.map((product, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedProduct(index)}
//               className={`relative border rounded-md overflow-hidden flex-1 aspect-square ${
//                 selectedProduct === index ? "ring ring-gray-700" : ""
//               }`}
//             >
//               <Image
//                 src={product.image}
//                 alt={`Thumbnail ${index + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col px-6 border-t">
//           <div className="flex mt-3 gap-6">
//             <div className="flex-1 relative aspect-square border rounded-xl overflow-hidden">
//               <Image
//                 src={products[selectedProduct].image}
//                 alt="Product Image"
//                 fill
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold text-gray-800 text-left">
//                 {products[selectedProduct].title}
//               </h2>
//               <p className="text-md text-gray-700 mt-1">{products[selectedProduct].price}</p>
//             </div>
//           </div>

//           <p className="mt-2 text-xs text-yellow-600">● Only 1 left in stock</p>

//           {/* Size Selector */}
//           <fieldset className="mt-2 text-gray-700">
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
//           <div className="mt-2 text-gray-700">
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
//                   onClick={() =>
//                     setQuantity((prev) => Math.max(prev - 1, 1))
//                   }
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

//           <p className="text-sm text-gray-600 mt-4 text-left">
//             {products[selectedProduct].description}
//           </p>

//           <button className="w-full mt-6 bg-black text-white hover:bg-gray-800 rounded-md h-11">
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa6";

// Types
interface ProductVariant {
  id: number;
  size: string;
  status: "in" | "low" | "out" | "unavailable";
}

interface Product {
  image: string;
  title: string;
  price: string;
  description: string;
}

interface ProductCardProps {
  activeProduct: number;
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

const products: Product[] = [
  {
    image: "/banner-2.jpg",
    title: "Oversized Embroidered Oxford",
    price: "$40.00 USD",
    description:
      "Limited Release. White heavy-weight button-up oxford with various white embroidered images.",
  },
  {
    image: "/banner-3.jpg",
    title: "Oversized Embroidered Oxford 2",
    price: "$45.00 USD",
    description:
      "Exclusive Release. White heavy-weight button-up oxford with unique embroidery designs.",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ activeProduct, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<number>(activeProduct);
  const [selectedSize, setSelectedSize] = useState<ProductVariant>(productVariants[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Sync when activeProduct changes
  useEffect(() => {
    if (activeProduct >= 0 && activeProduct < products.length) {
      setSelectedProduct(activeProduct);
    } else {
      setSelectedProduct(0);
    }
  }, [activeProduct]);

  const handleSizeChange = (variantId: number) => {
    const variant = productVariants.find((v) => v.id === variantId);
    if (variant) setSelectedSize(variant);
  };

  const handleQuantitySelect = (val: number) => {
    setQuantity(val);
    setDropdownOpen(false);
  };

  const currentProduct = products[selectedProduct] || products[0];

  return (
    <div className="md:hidden flex flex-col items-center justify-center max-h-[550px] h-full">
      <div style={{
        scrollbarWidth: "none"
      }} className="w-full bg-white rounded-2xl shadow-xl pt-5 pb-12 overflow-y-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-0">
          <p className="text-sm text-gray-500">
            Product {selectedProduct + 1} of {products.length}
          </p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Product Thumbnails */}
        <div className="flex gap-2 pb-3 pt-2 pl-6 max-w-1/3">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(index)}
              className={`relative border rounded-md overflow-hidden flex-1 aspect-square ${
                selectedProduct === index ? "ring ring-gray-700" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Product Details */}
        <div className="flex flex-col px-6 border-t">
          <div className="flex mt-3 gap-6">
            {/* Main Image */}
            <div className="flex-1 relative aspect-square border rounded-xl overflow-hidden">
              <Image
                src={currentProduct.image}
                alt={currentProduct.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 text-left">
                {currentProduct.title}
              </h2>
              <p className="text-md text-gray-700 mt-1">{currentProduct.price}</p>
            </div>
          </div>

          {/* Stock Status */}
          <p className="mt-2 text-xs text-yellow-600">● Only 1 left in stock</p>

          {/* Size Selector */}
          <fieldset className="mt-2 text-gray-700">
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
          <div className="mt-2 text-gray-700">
            <label className="block font-medium mb-2">Quantity</label>

            {quantity < 10 ? (
              <div className="relative inline-block w-32">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full border rounded-lg px-4 py-1.5 flex items-center justify-between bg-white"
                >
                  <span>{quantity}</span>
                  <FaChevronDown size={16} />
                </button>

                {dropdownOpen && (
                  <ul className="absolute w-full max-h-32 overflow-y-auto border rounded bg-white shadow mt-2 z-10 transition-all duration-300">
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
          <p className="text-sm text-gray-600 mt-4 text-left">
            {currentProduct.description}
          </p>

          {/* CTA */}
          <button className="w-full py-3 bg-black text-white uppercase rounded-lg text-sm font-light">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

