'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Product = {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  smallImageUrl: string;
};

const products: Product[] = [
  {
    title: 'I Trust In God Zipper Tote',
    price: '$35.00 USD',
    description:
      'Extra large heavyweight zip-top canvas tote bag with "I TRUST IN GOD" and Elevation Worship logo printed in green. Large interior compartment features zipper pocket, two slip pockets, and key hook.',
    imageUrl: '/banner-2.jpg',
    smallImageUrl: '/banner-3.jpg',
  },
  {
    title: 'Elevation Worship T-Shirt',
    price: '$25.00 USD',
    description:
      'Bold black Elevation Worship T-shirt, made from premium cotton with breathable comfort and a clean design. Perfect for showing your worship pride.',
    imageUrl: '/banner-3.jpg',
    smallImageUrl: '/banner-2.jpg',
  },
  {
    title: 'Trust In God Flat Bill Hat',
    price: '$30.00 USD',
    description:
      'Sleek flat bill hat with "Trust In God" embroidered in bold letters. Adjustable snapback for the perfect fit. Stylish and meaningful.',
    imageUrl: '/product1.webp',
    smallImageUrl: '/product1.webp',
  },
];

const ProductFeature: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const handleTabClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-start py-10 gap-10 px-5 max-w-[1400px] mx-auto">

      {/* Left Column: Title Tabs + Product Details (Desktop only) */}
      <div className="flex-1 w-full text-black order-1 md:order-1">
        <div className="md:max-w-md mx-auto md:mx-0">

          {/* Title Tabs - Always at the top */}
          <div
            style={{ scrollbarWidth: 'none' }}
            className="flex md:flex-col gap-6 overflow-x-auto pb-1"
          >
            {products.map((product, index) => (
              <p
                key={index}
                onClick={() => handleTabClick(index)}
                className={`cursor-pointer text-nowrap text-2xl md:text-3xl font-light transition-all duration-300 ${
                  activeIndex === index
                    ? 'text-black underline underline-offset-8 decoration-2'
                    : 'text-neutral-400 hover:text-black'
                }`}
              >
                {product.title}
              </p>
            ))}
          </div>

          {/* Product Details (Desktop only) */}
          <div className="hidden md:block transition-all duration-500 mt-10">
            <p className="text-lg font-medium mb-2">{activeProduct.price}</p>
            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              {activeProduct.description}
            </p>
            <button className="px-6 py-3 bg-black rounded-sm text-white text-xs uppercase tracking-wider hover:bg-neutral-800 transition">
              View Product
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Images */}
      <div className="flex-1 w-full flex flex-col gap-8 order-2 md:order-2">

        {/* Product Images */}
        <div className="flex w-full relative overflow-hidden">
          <div className="relative h-auto w-3/4 md:mx-0 xl:h-[480px] aspect-square">
            <Image
              key={activeProduct.imageUrl}
              src={activeProduct.imageUrl}
              alt={activeProduct.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Small Overlay Image - Only on Desktop */}
          <div className="absolute w-[40%] aspect-square translate-y-1/2 right-0 rounded-lg shadow-xl overflow-hidden">
            <Image
              key={activeProduct.smallImageUrl}
              src={activeProduct.smallImageUrl}
              alt={activeProduct.title + ' small'}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Product Details (Mobile only) */}
        <div className="block md:hidden transition-all duration-500 text-black">
          <p className="text-lg font-medium mb-2">{activeProduct.price}</p>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            {activeProduct.description}
          </p>
          <button className="px-6 py-3 bg-black rounded-sm text-white text-xs uppercase tracking-wider hover:bg-neutral-800 transition">
            View Product
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductFeature;





// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// type Product = {
//   title: string;
//   price: string;
//   description: string;
//   imageUrl: string;
//   smallImageUrl: string;
// };

// const products: Product[] = [
//   {
//     title: 'I Trust In God Zipper Tote',
//     price: '$35.00 USD',
//     description:
//       'Extra large heavyweight zip-top canvas tote bag with "I TRUST IN GOD" and Elevation Worship logo printed in green. Large interior compartment features zipper pocket, two slip pockets, and key hook.',
//     imageUrl: '/banner-2.jpg',
//     smallImageUrl: '/banner-3.jpg',
//   },
//   {
//     title: 'Elevation Worship T-Shirt',
//     price: '$25.00 USD',
//     description:
//       'Bold black Elevation Worship T-shirt, made from premium cotton with breathable comfort and a clean design. Perfect for showing your worship pride.',
//     imageUrl: '/banner-3.jpg',
//     smallImageUrl: '/banner-2.jpg',
//   },
//   {
//     title: 'Trust In God Flat Bill Hat',
//     price: '$30.00 USD',
//     description:
//       'Sleek flat bill hat with "Trust In God" embroidered in bold letters. Adjustable snapback for the perfect fit. Stylish and meaningful.',
//     imageUrl: '/product1.webp',
//     smallImageUrl: '/product1.webp',
//   },
// ];

// const ProductFeature: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeProduct = products[activeIndex];

//   const handleTabClick = (index: number) => {
//     if (index !== activeIndex) {
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <section className="flex flex-col md:flex-row justify-between items-start py-10 md:py-20 gap-10 px-5 md:px-10 max-w-7xl mx-auto">
//       {/* Text Content */}
//       <div className="flex-1 w-full text-black">
//         <div className="space-y-10 md:max-w-md mx-auto md:mx-0">
//           {/* Title Tabs */}
//           <div style={{scrollbarWidth: "none"}} className="space-y-6 flex md:flex-col gap-6 overflow-x-auto">
//             {products.map((product, index) => (
//               <p
//                 key={index}
//                 onClick={() => handleTabClick(index)}
//                 className={`cursor-pointer text-nowrap text-2xl md:text-3xl font-light transition-all duration-300 ${
//                   activeIndex === index
//                     ? 'text-black underline underline-offset-8 decoration-2'
//                     : 'text-neutral-400 hover:text-black'
//                 }`}
//               >
//                 {product.title}
//               </p>
//             ))}
//           </div>

//           {/* Product Details */}
//           <div className="transition-all duration-500">
//             <p className="text-lg font-medium mb-2">{activeProduct.price}</p>
//             <p className="text-sm text-neutral-600 leading-relaxed mb-8">
//               {activeProduct.description}
//             </p>
//             <button className="px-6 py-3 bg-black rounded-sm text-white text-xs uppercase tracking-wider hover:bg-neutral-800 transition">
//               View Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Images */}
//       <div className="flex-1 w-full flex relative overflow-hidden">
//         {/* Large Image */}
//         <div className="relative h-auto w-3/4 xl:h-[480px] aspect-square">
//           <Image
//             key={activeProduct.imageUrl}
//             src={activeProduct.imageUrl}
//             alt={activeProduct.title}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Small Overlay Image - Only on Desktop */}
//         <div className="absolute w-[40%] aspect-square translate-y-1/2 right-0 rounded-lg shadow-xl overflow-hidden">
//           <Image
//             key={activeProduct.smallImageUrl}
//             src={activeProduct.smallImageUrl}
//             alt={activeProduct.title + ' small'}
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductFeature;


