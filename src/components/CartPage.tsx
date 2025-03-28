'use client';

import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Elevation Nights Tour T-Shirt 2025",
    price: 40,
    quantity: 1,
    size: "S",
    image: "/banner-2.jpg",
  },
  {
    id: 2,
    name: "Elevation Nights Tour Long Sleeve 2025",
    price: 45,
    quantity: 1,
    size: "S",
    image: "/banner-3.jpg",
  },
  {
    id: 3,
    name: "I Trust In God Flat Bill Hat",
    price: 25,
    quantity: 3,
    size: "S",
    image: "/product1.webp",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center text-black">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold mb-4">
              Cart <span className="text-sm text-gray-500">({cartItems.length} items)</span>
            </h1>

            <a href="#" className="text-sm text-gray-600 mb-4 inline-block hover:underline">
              Continue Shopping
            </a>
          </div>
          <div className="border-t mt-2">
            {cartItems.length === 0 ? (
              <div className="py-10 text-center text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex py-6 border-b">
                  {/* Product Image */}
                  <div className="w-24 h-24 relative mr-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex justify-between items-center">
                    <div className="w-2/3">
                      <h2 className="font-semibold text-sm">{item.name}</h2>
                      <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
                    </div>

                    {/* Price & Quantity */}
                    <div className="w-1/3 flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>

                      {/* Quantity controls */}
                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="px-1 py-1 text-gray-600 disabled:opacity-50 border-r border-gray-300"
                            disabled={item.quantity <= 1}
                          >
                            <AiOutlineMinus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="px-1 py-1 text-gray-600 border-l border-gray-300"
                          >
                            <AiOutlinePlus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side Checkout */}
        <div className="w-full lg:w-80">
          <div className="space-y-4 border p-6 rounded-xl shadow-sm">
            <div className="flex justify-between text-lg font-medium border-b pb-2">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)} USD</span>
            </div>

            {/* Checkout Buttons */}
            <div className="space-y-4 pt-4">
              <button className="w-full bg-black text-white py-3 text-sm font-semibold rounded hover:bg-gray-800 transition">
                CHECKOUT • ${cartTotal.toFixed(2)} USD
              </button>

              <button className="w-full bg-[#5a31f4] text-white py-3 text-sm font-semibold rounded hover:bg-[#4725cc] transition">
                Shop Pay
              </button>

              <button className="w-full bg-[#ffc439] text-black py-3 text-sm font-semibold rounded hover:bg-[#e0ad0f] transition">
                PayPal
              </button>

              <button className="w-full bg-black text-white py-3 text-sm font-semibold rounded hover:bg-gray-800 transition flex items-center justify-center space-x-2">
                <span>Google Pay</span>
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
