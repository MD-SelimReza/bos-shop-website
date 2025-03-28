import Image from 'next/image';
import React from 'react';

const BannerCategory = () => {
    return (
        <div className='w-full h-[160px] relative'>
            <Image src="/banner-1.jpg" alt='Banner category photo' layout='fill' objectFit='cover' />
        </div>
    );
};

export default BannerCategory;