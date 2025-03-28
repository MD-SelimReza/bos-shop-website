// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface ProductGridItemProps {
//   title: string;
//   price: string;
//   productLink: string;
//   featuredImage: string;
//   hoverImage: string;
// }

// const ProductGridItem: React.FC<ProductGridItemProps> = ({
//   title,
//   price,
//   productLink,
//   featuredImage,
//   hoverImage,
// }) => {
//   return (
//     <div className="relative group" id="product-item">
//       {/* Image Container */}
//       <div className="relative overflow-hidden aspect-[1/1] bg-gray-100 rounded-xl">
//         <Link href={productLink} aria-label={title} className="block rounded-xl relative">
//           {/* Featured Image (slides out on hover) */}
//           <Image
//             src={featuredImage}
//             alt={title}
//             width={2048}
//             height={2662}
//             className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-full rounded-xl"
//             priority
//           />

//           {/* Hover Image (slides in from left on hover) */}
//           <Image
//             src={hoverImage}
//             alt={title}
//             width={2048}
//             height={2662}
//             className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-500 ease-in-out translate-x-[-100%] group-hover:translate-x-0 rounded-xl"
//           />
//         </Link>

//         {/* Quick Buy Button */}
//         <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-3 translate-x-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
//           <div className="relative group/quickbuy">
//             <Link
//               href={productLink}
//               aria-label="Quick Buy"
//               className="bg-black text-white text-sm rounded-full p-3 flex items-center justify-center shadow-lg relative z-10"
//             >
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 role="presentation"
//                 className="w-5 h-5"
//                 viewBox="0 0 192 192"
//                 fill="currentColor"
//               >
//                 <path d="M60 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9ZM138 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
//                 <path
//                   d="M31.725 54h134.55l-19.8 69.3a11.926 11.926 0 0 1-11.55 8.7h-71.85a11.925 11.925 0 0 1-11.55-8.7l-27.15-94.95A6 6 0 0 0 18.6 24H6"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>

//             {/* Text Label (slides in on hover of button) */}
//             <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-2 opacity-0 group-hover/quickbuy:opacity-100 group-hover/quickbuy:translate-x-0 translate-x-2 transition-all duration-300 ease-in-out">
//               <div className="bg-black text-white text-xs rounded px-3 py-1 whitespace-nowrap shadow-md">
//                 Quick Buy
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="mt-4 text-left">
//         <Link href={productLink} aria-label={title}>
//           <h3 className="font-semibold text-lg text-gray-800 hover:text-black transition">
//             {title}
//           </h3>
//         </Link>
//         <Link href={productLink}>
//           <p className="text-gray-600 mt-1">{price}</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductGridItem;


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductGridItemProps {
  title: string;
  price: string;
  productLink: string;
  featuredImage: string;
  hoverImage: string;
}

const ProductGridItem: React.FC<ProductGridItemProps> = ({
  title,
  price,
  productLink,
  featuredImage,
  hoverImage,
}) => {
  return (
    <div className="relative" id="product-item">
      {/* Image Container */}
      <Link href={productLink} aria-label={title} className="block group rounded-md relative py-10">
        <div className="relative overflow-hidden aspect-[1/1] bg-gray-100 rounded-md">
         {/* Featured Image */}
         <Image
            src={featuredImage}
            alt={title}
            width={2048}
            height={2662}
            className="object-cover w-full h-full rounded-md"
            priority
          />

          {/* Hover Image - fades in smoothly */}
          <Image
            src={hoverImage}
            alt={title}
            width={2048}
            height={2662}
            className="
              object-cover w-full h-full
              absolute top-0 left-0
              rounded-md
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500 ease-in-out
            "
          />

          {/* Shadow sweep animation */}
          <div
            className="
              absolute top-0 left-[-100%] w-full h-full
              bg-gradient-to-r from-black/20 to-transparent
              group-hover:left-0
              transition-all duration-500 ease-in-out
              pointer-events-none
            "
          ></div>

        {/* Quick Buy Button */}
        <div className="
          absolute bottom-4 right-4
          opacity-0 group-hover:opacity-100
          translate-y-4 group-hover:translate-y-0
          transition-all duration-500 ease-in-out
          flex
        ">
          <div
            // href={productLink}
            aria-label="Quick Buy"
            className="
              relative group/quickbuy
              flex items-center
              bg-black text-white text-sm
              rounded-full px-4 py-2
              shadow-lg
              transition-all duration-750 ease-in-out
            "
          >
            {/* Icon */}
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="w-5 h-5"
              viewBox="0 0 192 192"
              fill='currentColor'
            >
              <path d="M60 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9ZM138 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
              <path
                d="M31.725 54h134.55l-19.8 69.3a11.926 11.926 0 0 1-11.55 8.7h-71.85a11.925 11.925 0 0 1-11.55-8.7l-27.15-94.95A6 6 0 0 0 18.6 24H6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Quick Buy Text */}
            <span
              className="
                overflow-hidden
                whitespace-nowrap
                max-w-0 group-hover/quickbuy:max-w-xs
                opacity-0 group-hover/quickbuy:opacity-100 group-hover/quickbuy:ml-2
                transition-all duration-750 ease-in-out uppercase
              "
            >
              Quick Buy
            </span>
          </div>
        </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-left mb-3">
        <Link href={productLink} aria-label={title}>
          <h3 className="font-semibold text-base text-gray-800 hover:text-black transition">
            {title}
          </h3>
        </Link>
        <Link href={productLink}>
          <p className="text-gray-600 mt-1 text-sm">{price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductGridItem;
