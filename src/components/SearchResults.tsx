'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const mockProducts = [
  { id: 1, name: 'Presence Mug', price: 15, image: '/products/mug1.png' },
  { id: 2, name: 'Elevation Candle', price: 20, image: '/products/candle1.png' },
  { id: 3, name: 'White Travel Mug', price: 25, image: '/products/mug2.png' },
];

const mockBlogs = [{ id: 1, title: 'Faith & Worship', content: 'A journey in faith...' }];
const mockPages = [{ id: 1, title: 'About Us', content: 'Learn more about our mission' }];

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [activeTab, setActiveTab] = useState('products');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  console.log('Filtered Products:', filteredProducts);

  useEffect(() => {
    // Simulate fetching data
    const products = mockProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(products);

    if (products.length > 0) setActiveTab('products');
    else if (mockBlogs.length > 0) setActiveTab('blogs');
    else if (mockPages.length > 0) setActiveTab('pages');
  }, [query]);

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-8">Results for &quot;{query}&quot;</h2>

      {/* Navigation Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        <button
          className={`py-2 px-4 ${activeTab === 'products' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'blogs' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('blogs')}
        >
          Blogs
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'pages' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('pages')}
        >
          Pages
        </button>
      </div>

      {/* Filters */}
      {/* Results Section */}
      {activeTab === 'products' && (
        <div>
            <p className="text-center text-gray-500">No results found for &quot;{query}&quot;</p>
        </div>
      )}

      {activeTab === 'blogs' && (
        <div>
          {mockBlogs.length > 0 ? mockBlogs.map((blog) => <p key={blog.id}>{blog.title}</p>) : <p>No blogs found.</p>}
        </div>
      )}

      {activeTab === 'pages' && (
        <div>
          {mockPages.length > 0 ? mockPages.map((page) => <p key={page.id}>{page.title}</p>) : <p>No pages found.</p>}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
