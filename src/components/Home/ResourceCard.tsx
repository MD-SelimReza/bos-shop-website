// import React from "react";
// import clsx from "clsx";
// import Image from "next/image";

// type ResourceCardProps = {
//   title: string;
//   image: string;
//   link: string;
//   isActive: boolean;
//   onMouseEnter: () => void;
// };

// const ResourceCard: React.FC<ResourceCardProps> = ({
//   title,
//   image,
//   link,
//   isActive,
//   onMouseEnter,
// }) => {
//   return (
//     <a
//       href={link}
//       onMouseEnter={onMouseEnter}
//       className={clsx(
//         "relative flex flex-col justify-center items-center rounded-none overflow-hidden transition-all duration-500 ease-in-out cursor-pointer",
//         isActive ? "flex-[3]" : "flex-[1]"
//       )}
//     >
//       <Image
//         src={image}
//         alt={title}
//         className="object-cover w-full h-full transition-all duration-500 ease-in-out"
//         width="1000" height="1000" loading="lazy"
//       />
//       <div className="absolute inset-0 bg-opacity-10 flex justify-center items-center">
//         <h2 className="text-white text-2xl font-semibold text-center">{title}</h2>
//       </div>
//     </a>
//   );
// };

// export default ResourceCard;

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type ResourceCardProps = {
  title: string;
  image: string;
  link: string;
  isActive: boolean;
  onMouseEnter: () => void;
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  image,
  link,
  isActive,
  onMouseEnter,
}) => {
  return (
    <Link href={link} className="block w-full">
      {/* Swiper for mobile (less than md) */}
      <div className="w-full block md:hidden border-2 border-red-500">
        <Swiper
          slidesPerView={1.1}
          loop={false}
        >
          <SwiperSlide>
            <div className="relative w-full h-[500px] overflow-hidden">
              <Image
                src={image}
                alt={title}
                layout="fill"
                className="object-cover object-center"
                priority={false}
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
                <h2 className="text-white text-3xl font-semibold text-center px-4 z-10">
                  {title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Flex for md and larger */}
      <div
        onMouseEnter={onMouseEnter}
        className={clsx(
          "relative hidden md:flex flex-col justify-center items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer",
          isActive ? "flex-[5]" : "flex-[1]" // expands and shrinks width only!
        )}
        style={{
          height: "500px",
          minWidth: "100px",
          transitionProperty: "flex-grow", // Animate flex-grow directly
          transitionDuration: "500ms",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        {/* Image container controls the image rendering */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-none object-center transition-all duration-500 ease-in-out"
            priority={false}
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
            <h2 className="text-white text-3xl font-semibold text-center px-4 z-10">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;


// import React from "react";
// import clsx from "clsx";

// type ResourceCardProps = {
//   title: string;
//   image: string; // Unused now
//   link: string;
//   isActive: boolean;
//   onMouseEnter: () => void;
//   bgColor: string;
// };

// const ResourceCard: React.FC<ResourceCardProps> = ({
//   title,
//   link,
//   isActive,
//   onMouseEnter,
//   bgColor,
// }) => {
//   return (
//     <a
//       href={link}
//       onMouseEnter={onMouseEnter}
//       className={clsx(
//         "relative flex flex-col justify-center items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer",
//         isActive ? "flex-[5]" : "flex-[1]"
//       )}
//       style={{
//         height: "500px",
//         minWidth: "100px",
//         transitionProperty: "flex-grow",
//         transitionDuration: "500ms",
//         transitionTimingFunction: "ease-in-out",
//         backgroundColor: bgColor, // ✅ sets the background color dynamically!
//       }}
//     >
//       {/* Overlay Title */}
//       <div className={`absolute inset-0  bg-opacity-30 flex justify-center items-center pointer-events-none`} style={{ backgroundColor: bgColor }}>
//         <h2 className="text-white text-2xl font-semibold text-center px-4">
//           {title}
//         </h2>
//       </div>
//     </a>
//   );
// };

// export default ResourceCard;
