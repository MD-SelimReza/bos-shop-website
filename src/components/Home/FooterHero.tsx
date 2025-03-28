"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';

const resources = [
  {
    title: 'Hoodies and Crewnecks',
    imageUrl: '/banner-2.jpg',
    link: 'collections/hoodies-crewnecks-sweatshirts'
  },
  {
    title: 'Accessories',
    imageUrl: '/banner-3.jpg',
    link: 'collections/accessories-1'
  },
  {
    title: 'T-Shirts',
    imageUrl: '/banner-3.jpg',
    link: 'collections/t-shirts'
  },
];

const FooterHero = () => {
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
      {/* Swiper for mobile (less than md) */}
      <div
        className={`w-full block md:hidden pl-5 ${
          isSlidingLeftToRight ? 'pr-5' : isSlidingRightToLeft ? 'pr-0' : 'pr-0'
        }`}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
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
      <div className="hidden md:grid grid-cols-3 gap-5 w-full">
        {resources.map((resource, index) => (
          <Link key={index} href={resource.link}>
            <div
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-[550px]"
            >
              <div className="w-full h-[550px] relative">
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
        ))}
      </div>
    </main>
  );
};

export default FooterHero;
