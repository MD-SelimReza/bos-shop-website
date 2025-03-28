"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';

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

const Hero = () => {
  const [isSlidingLeftToRight, setIsSlidingLeftToRight] = useState(false);
  const [isSlidingRightToLeft, setIsSlidingRightToLeft] = useState(false);

  const handleSlideChange = (swiper: SwiperClass) => {
    const isLeftToRight = swiper.realIndex > swiper.previousIndex;
    const isRightToLeft = swiper.realIndex < swiper.previousIndex;

    setIsSlidingLeftToRight(isLeftToRight);
    setIsSlidingRightToLeft(isRightToLeft);
  };

  return (
    <main className="flex flex-col items-center justify-start bg-white px-0 md:px-5 text-black py-10">
      <h1 className="text-3xl md:text-4xl xl:text-[40px] font-bold mb-4 text-center">
        ELEVATION CHURCH RESOURCES
      </h1>
      <p className="text-sm md:text-base mb-10 text-center tracking-widest">
        MERCH WITH MEANING
      </p>

      {/* Swiper for mobile (less than md) */}
      <div
        className={`w-full block md:hidden pl-5 ${
          isSlidingLeftToRight ? 'pr-5' : isSlidingRightToLeft ? 'pr-0' : 'pr-0'
        }`}
      >
        <Swiper
          spaceBetween={20} // 20px gap between slides
          slidesPerView={1.1} // show one full card + a bit of the next
          loop={false}
          onTouchMove={handleSlideChange}
        >
          {resources.map((resource, index) => (
            <SwiperSlide key={index}>
              <Link href={resource.link}>
                <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-[550px]">
                  <div className="w-full h-full relative">
                    <Image
                      src={resource.imageUrl}
                      alt={resource.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
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

      {/* Grid for md and larger */}
      <div className="hidden md:grid md:grid-cols-4 gap-5 w-full">
        {resources.map((resource, index) => (
          <Link href={resource.link} key={index}>
            <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-[550px]">
              <div className="w-full h-full relative">
                <Image
                  src={resource.imageUrl}
                  alt={resource.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
                <h2 className="text-white text-2xl font-medium text-center px-4 z-10">
                  {resource.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Hero;

