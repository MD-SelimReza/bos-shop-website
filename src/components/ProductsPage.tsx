"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiGrid, FiList, FiEye, FiEdit, FiTrash } from "react-icons/fi";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    price: 29.99,
    image: "/banner-1.jpg",
  },
  {
    id: 2,
    title: "Women's Sneakers",
    price: 49.99,
    image: "/banner-2.jpg",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 199.99,
    image: "/banner-3.jpg",
  },
  {
    id: 4,
    title: "Bluetooth Headphones",
    price: 89.99,
    image: "/product1.webp",
  },
  {
    id: 5,
    title: "Men's Casual Shirt",
    price: 29.99,
    image: "/banner-1.jpg",
  },
  {
    id: 6,
    title: "Women's Sneakers",
    price: 49.99,
    image: "/banner-2.jpg",
  },
  {
    id: 7,
    title: "Smart Watch",
    price: 199.99,
    image: "/banner-3.jpg",
  },
  {
    id: 8,
    title: "Bluetooth Headphones",
    price: 89.99,
    image: "/product1.webp",
  },
  {
    id: 9,
    title: "Men's Casual Shirt",
    price: 29.99,
    image: "/banner-1.jpg",
  },
  {
    id: 10,
    title: "Women's Sneakers",
    price: 49.99,
    image: "/banner-2.jpg",
  },
  {
    id: 11,
    title: "Smart Watch",
    price: 199.99,
    image: "/banner-3.jpg",
  },
  {
    id: 12,
    title: "Bluetooth Headphones",
    price: 89.99,
    image: "/product1.webp",
  },
];

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-72px)] flex flex-col">
      <div className="w-full mx-auto">
        {/* Page Header */}
        <div className="sticky top-[72px] z-10 bg-gray-100 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-indigo-600 text-white" : "bg-white text-gray-600"} shadow`}
            >
              <FiGrid />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`p-2 rounded ${viewMode === "table" ? "bg-indigo-600 text-white" : "bg-white text-gray-600"} shadow`}
            >
              <FiList />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto space-y-6 pb-4">
          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow p-4 relative group hover:shadow-lg transition">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <h3 className="mt-4 text-md font-medium text-gray-800">{product.title}</h3>
                  <p className="text-gray-500 text-sm">${product.price.toFixed(2)}</p>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="p-2 bg-gray-100 hover:bg-indigo-100 rounded-full">
                      <FiEye className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-yellow-100 rounded-full">
                      <FiEdit className="text-yellow-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-red-100 rounded-full">
                      <FiTrash className="text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Table View */}
          {viewMode === "table" && (
            <div className="bg-white rounded-xl shadow overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4">Image</th>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleProducts.map((product) => (
                    <tr key={product.id} className="border-t">
                      <td className="px-6 py-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={product.image}
                            alt={product.title}
                            layout="fill"
                            className="object-cover rounded-md"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">{product.title}</td>
                      <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4 space-x-2 flex items-center">
                        <button className="p-2 bg-gray-100 hover:bg-indigo-100 rounded-full">
                          <FiEye className="text-gray-600" />
                        </button>
                        <button className="p-2 bg-gray-100 hover:bg-yellow-100 rounded-full">
                          <FiEdit className="text-yellow-600" />
                        </button>
                        <button className="p-2 bg-gray-100 hover:bg-red-100 rounded-full">
                          <FiTrash className="text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
