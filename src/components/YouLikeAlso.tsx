"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import QuickView from './QuickView';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const products = [
    {
      id: 1,
      name: 'Elevation Nights Tour T-Shirt 2025',
      price: 40,
      slug: 'elevation-nights-tour-t-shirt-copy',
      image: '/banner-3.jpg',
      hoverImage: '/banner-2.jpg',
    },
    {
      id: 2,
      name: 'Classic Black Hoodie',
      price: 60,
      slug: 'classic-black-hoodie',
      image: '/banner-2.jpg',
      hoverImage: '/banner-3.jpg',
    },
    {
      id: 3,
      name: 'Summer Cap Limited Edition',
      price: 25,
      slug: 'summer-cap-limited-edition',
      image: '/banner-1.jpg',
      hoverImage: '/banner-2.jpg',
    },
    {
      id: 4,
      name: 'Minimalist White Tee',
      price: 30,
      slug: 'minimalist-white-tee',
      image: '/banner-3.jpg',
      hoverImage: '/banner-1.jpg',
    },
];

const YouLikeAlso = () => {
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
      const quickViewRef = useRef(null);
    
      // Prevent body scrolling when navbar search is open
      useEffect(() => {
        if (isQuickViewOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        // Clean up on unmount
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isQuickViewOpen]);
    
        // Close quick view on clicking outside
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            quickViewRef.current &&
            !(quickViewRef.current as HTMLElement).contains(event.target as Node)
          ) {
            setIsQuickViewOpen(false);
          }
        };
    
        if (isQuickViewOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isQuickViewOpen]);

    return (
        <>
            <h2 className='text-2xl capitalize text-black text-center my-10'>You may also like</h2>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 w-full">
                {products.map((product) => (
                    <div className="relative" key={product.id}>
                        <div className="rounded-md relative py-10">
                            <div className="relative overflow-hidden aspect-[1/1] bg-gray-100 rounded-md group">
                            <Link href={`/products/${product.slug}`}>
                                {/* Featured Image */}
                                <Image
                                src={product.image}
                                alt={product.name}
                                width={2048}
                                height={2662}
                                className="object-cover w-full h-full rounded-md"
                                priority
                                />

                                {/* Hover Image */}
                                <Image
                                src={product.hoverImage}
                                alt={product.name}
                                width={2048}
                                height={2662}
                                className="object-cover w-full h-full absolute top-0 left-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
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
                            </Link>

                            {/* Quick Buy Button for Large Devices */}
                            <div onClick={() => setIsQuickViewOpen(true)} className="
                                absolute bottom-4 right-4
                                opacity-0 group-hover:opacity-100
                                translate-y-4 group-hover:translate-y-0
                                transition-all duration-500 ease-in-out
                                md:flex cursor-pointer hidden
                            ">
                                <div
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
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="w-5 h-5"
                                viewBox="0 0 192 192"
                                fill="currentColor"
                                >
                                <path d="M60 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9ZM138 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                                <path
                                    d="M31.725 54h134.55l-19.8 69.3a11.926 11.926 0 0 1-11.55 8.7h-71.85a11.925 11.925 0 0 1-11.55-8.7l-27.15-94.95A6 6 0 0 0 18.6 24H6"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
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
                            
                            {/* Mobile devices quick view button */}
                            <div onClick={() => setIsQuickViewOpen(true)} className='absolute bottom-2.5 right-2.5 flex items-center gap-2 bg-black py-1.5 px-2 text-white rounded-lg md:hidden'>
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="w-5 h-5"
                                viewBox="0 0 192 192"
                                fill="currentColor"
                                >
                                <path d="M60 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9ZM138 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                                <path
                                    d="M31.725 54h134.55l-19.8 69.3a11.926 11.926 0 0 1-11.55 8.7h-71.85a11.925 11.925 0 0 1-11.55-8.7l-27.15-94.95A6 6 0 0 0 18.6 24H6"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                                <span className='text-sm uppercase text-white'>Quick View</span>
                            </div>
                            </div>                    
                        </div>

                        {/* Product Info */}
                        <Link href={`/products/${product.slug}`}>
                            <div className="text-left mb-3 mt-2">
                            <h3 className="font-semibold text-base text-gray-800 hover:text-black transition">
                            {product.name}
                            </h3>
                            <p className="text-gray-600 mt-1 text-sm">${product.price.toFixed(2)} USD</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='w-full block md:hidden px-6'>
                <Swiper
                    freeMode={true}
                    slidesPerView={1}
                    loop={false}
                >
                    {products.map((product) => (
                     <SwiperSlide className="relative" key={product.id}>
                        <div className="rounded-md relative py-10">
                            <div className="relative overflow-hidden aspect-[1/1] bg-gray-100 rounded-md group">
                            <Link href={`/products/${product.slug}`}>
                                {/* Featured Image */}
                                <Image
                                src={product.image}
                                alt={product.name}
                                width={2048}
                                height={2662}
                                className="object-cover w-full h-full rounded-md"
                                priority
                                />

                                {/* Hover Image */}
                                <Image
                                src={product.hoverImage}
                                alt={product.name}
                                width={2048}
                                height={2662}
                                className="object-cover w-full h-full absolute top-0 left-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
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
                            </Link>

                            {/* Quick Buy Button for Large Devices */}
                            <div onClick={() => setIsQuickViewOpen(true)} className="
                                absolute bottom-4 right-4
                                opacity-0 group-hover:opacity-100
                                translate-y-4 group-hover:translate-y-0
                                transition-all duration-500 ease-in-out
                                md:flex cursor-pointer hidden
                            ">
                                <div
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
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="w-5 h-5"
                                viewBox="0 0 192 192"
                                fill="currentColor"
                                >
                                <path d="M60 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9ZM138 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                                <path
                                    d="M31.725 54h134.55l-19.8 69.3a11.926 11.926 0 0 1-11.55 8.7h-71.85a11.925 11.925 0 0 1-11.55-8.7l-27.15-94.95A6 6 0 0 0 18.6 24H6"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
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
                            
                            {/* Mobile devices quick view button */}
                            <div onClick={() => setIsQuickViewOpen(true)} className='absolute bottom-2.5 right-2.5 flex items-center gap-2 bg-black py-1.5 px-2 text-white rounded-lg md:hidden'>
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                className="w-5 h-5"
                                viewBox="0 0 192 192"
                                fill="currentColor"
                                >
                                <path d="M60 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9ZM138 171a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                                <path
                                    d="M31.725 54h134.55l-19.8 69.3a11.926 11.926 0 0 1-11.55 8.7h-71.85a11.925 11.925 0 0 1-11.55-8.7l-27.15-94.95A6 6 0 0 0 18.6 24H6"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                                <span className='text-sm uppercase text-white'>Quick View</span>
                            </div>
                            </div>                    
                        </div>

                        {/* Product Info */}
                        <Link href={`/products/${product.slug}`}>
                            <div className="text-left mb-3 mt-2">
                            <h3 className="font-semibold text-base text-gray-800 hover:text-black transition">
                            {product.name}
                            </h3>
                            <p className="text-gray-600 mt-1 text-sm">${product.price.toFixed(2)} USD</p>
                            </div>
                        </Link>
                     </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {isQuickViewOpen && <div className="fixed inset-0 bg-[#CCCCCC] opacity-50 z-30 transition-opacity duration-500"></div>}
                <div className="fixed bottom-0 right-0 md:top-0 md:right-0 w-full md:max-w-[400px] md:min-h-screen max-h-[500px] h-full z-50 pointer-events-none">
                <div
                    ref={quickViewRef}
                    className={`transform transition-transform duration-500 ease-in-out pointer-events-auto
                    ${isQuickViewOpen 
                    ? "translate-y-0 md:translate-x-0 md:translate-y-0"
                    : "translate-y-full md:translate-y-0 md:translate-x-full"
                    }
                    `}
                >
                    <QuickView onClose={() => setIsQuickViewOpen(false)} />
                </div>
            </div>
        </>
    );
};

export default YouLikeAlso;