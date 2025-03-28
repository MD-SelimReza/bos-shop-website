// 'use client';

// import { useState } from "react";
// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   const resources = [
//     {
//       title: "Elevation Church",
//       image: "https://img.freepik.com/free-vector/realistic-spring-background_52683-32785.jpg?t=st=1741762495~exp=1741766095~hmac=641aafa3962b657a8f04d0e90c0452db866ca00f54d6ff907bd5bc1f0d64b141&w=1380",
//       link: "#",
//       bgColor: "#CB6040"
//     },
//     {
//       title: "Elevation Worship",
//       image: "https://img.freepik.com/free-photo/beautiful-butterfly-nature_23-2150765705.jpg?t=st=1741761806~exp=1741765406~hmac=e6052719973de278a0287f9749c7e13ecc370b0523c958ecbc690754a589cb58&w=1380",
//       link: "#",
//       bgColor: "#FD8B51"
//     },
//     {
//       title: "Reflect Collection",
//       image: "https://img.freepik.com/free-vector/butterflies-fluttering-spring-meadow_1308-167299.jpg?t=st=1741762245~exp=1741765845~hmac=2560b004c09ff9e599eb9e4a6a5701a9e39cd49db6f403b0379792742dba99b5&w=1380",
//       link: "#",
//       bgColor: "#F2E5BF"
//     },
//     {
//       title: "Gifts with Purpose",
//       image: "https://img.freepik.com/free-vector/gradient-christmas-tinsel-background_52683-76117.jpg?t=st=1741762539~exp=1741766139~hmac=11c0a8a6182d8f93763fa65c3347c7c5018b2890a0e299413c7800abc2913ddf&w=1380",
//       link: "#",
//       bgColor: "#257180"
//     },
//   ];

//   return (
//     <div className="py-10 flex flex-col items-center bg-white">
//       {/* Flex container for the cards */}
//       <div className="flex w-full">
//         <div className="w-full block md:hidden">
//           <Swiper
//             slidesPerView={1.1}
//             loop={false}
//           >
//             {resources.map((resource, index) => (
//               <SwiperSlide key={index}>
//                 <Link href={resource.link}>
//                   <div className="relative w-full h-[500px] overflow-hidden">
//                     <Image
//                       src={resource?.image}
//                       alt={resource.title}
//                       layout="fill"
//                       className="object-cover object-center"
//                       priority={false}
//                     />
//                     {/* Overlay Content */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
//                       <h2 className="text-white text-3xl font-semibold text-center px-4 z-10">
//                         {resource.title}
//                       </h2>
//                     </div>
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Flex for md and larger */}
//         {resources.map((resource, index) => (
//           <div key={index}
//             onMouseEnter={() => setActiveIndex(index)}
//             className={clsx(
//               "relative hidden md:flex flex-col border-2 border-red-500 justify-center items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer",
//               activeIndex === index ? "flex-[5]" : "flex-[1]" // fixed conditional
//             )}
//             style={{
//               height: "500px",
//               minWidth: "100px",
//               transitionProperty: "flex-grow",
//               transitionDuration: "500ms",
//               transitionTimingFunction: "ease-in-out",
//             }}
//           >
//             <Link href={resource.link}>
//               <div className="relative h-[500px] overflow-hidden">
//                 <Image
//                   src={resource?.image}
//                   alt={resource.title}
//                   layout="fill"
//                   className="object-cover object-center transition-all duration-500 ease-in-out" // fixed object
//                   priority={activeIndex === index} // optional improvement
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
//                   <h2 className="text-white text-3xl font-semibold text-center px-4 z-10">
//                     {resource.title}
//                   </h2>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const resources = [
    {
      title: "Elevation Church",
      image: "https://img.freepik.com/free-vector/realistic-spring-background_52683-32785.jpg?t=st=1741762495~exp=1741766095~hmac=641aafa3962b657a8f04d0e90c0452db866ca00f54d6ff907bd5bc1f0d64b141&w=1380",
      link: "#",
      bgColor: "#CB6040"
    },
    {
      title: "Elevation Worship",
      image: "https://img.freepik.com/free-photo/beautiful-butterfly-nature_23-2150765705.jpg?t=st=1741761806~exp=1741765406~hmac=e6052719973de278a0287f9749c7e13ecc370b0523c958ecbc690754a589cb58&w=1380",
      link: "#",
      bgColor: "#FD8B51"
    },
    {
      title: "Reflect Collection",
      image: "https://img.freepik.com/free-vector/butterflies-fluttering-spring-meadow_1308-167299.jpg?t=st=1741762245~exp=1741765845~hmac=2560b004c09ff9e599eb9e4a6a5701a9e39cd49db6f403b0379792742dba99b5&w=1380",
      link: "#",
      bgColor: "#F2E5BF"
    },
    {
      title: "Gifts with Purpose",
      image: "https://img.freepik.com/free-vector/gradient-christmas-tinsel-background_52683-76117.jpg?t=st=1741762539~exp=1741766139~hmac=11c0a8a6182d8f93763fa65c3347c7c5018b2890a0e299413c7800abc2913ddf&w=1380",
      link: "#",
      bgColor: "#257180"
    },
  ];

  return (
    <div className="py-10 flex flex-col items-center bg-white">
      {/* Flex container for the cards */}
      <div className="flex w-full">
        {/* Mobile swiper */}
        <div className="w-full block md:hidden">
          <Swiper slidesPerView={1.1} loop={false}>
            {resources.map((resource, index) => (
              <SwiperSlide key={index}>
                <Link href={resource.link}>
                  <div className="relative w-full h-[500px] overflow-hidden">
                    <Image
                      src={resource?.image}
                      alt={resource.title}
                      layout="fill"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
                      <h2 className="text-white text-3xl font-semibold text-center px-4 z-10">
                        {resource.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop layout */}
        {resources.map((resource, index) => (
          <div key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={clsx(
              "relative hidden md:flex justify-center w-full items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer",
              activeIndex === index ? "flex-[5]" : "flex-[1]"
            )}
            style={{
              height: "500px",
              minWidth: "100px",
              transitionProperty: "flex-grow",
              transitionDuration: "500ms",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Link href={resource.link} className="block">
              <div className="relative w-screen h-[500px] overflow-hidden">
                <Image
                  src={resource?.image}
                  alt={resource.title}
                  layout="fill"
                  className="object-cover object-center transition-all duration-500 ease-in-out"
                  priority={activeIndex === index}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
                  <h2 className="text-white text-3xl font-semibold text-center px-4 z-10">
                    {resource.title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

