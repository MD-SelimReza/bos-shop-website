import React from 'react';
import ProductDetails from '@/components/ProductDetails';
import YouLikeAlso from '@/components/YouLikeAlso';
import IconsRow from '@/components/IconsRow';

const page = () => {    
    return (
        <div className='space-y-4'>
            <ProductDetails />
            <YouLikeAlso />
            <IconsRow />
        </div>
    );
};

export default page;