'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
};

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Elevation Nights Tour T-Shirt 2025',
    price: 40,
    size: 'L',
    quantity: 1,
    image:
      '/banner-2.jpg',
  },
  {
    id: 2,
    name: 'I Trust In God Flat Bill Hat',
    price: 25,
    quantity: 1,
    image:
      '/banner-3.jpg',
  },
//   {
//     id: 3,
//     name: 'Elevation Nights Tour T-Shirt 2025',
//     price: 40,
//     size: 'L',
//     quantity: 1,
//     image:
//       '/banner-2.jpg',
//   },
//   {
//     id: 4,
//     name: 'I Trust In God Flat Bill Hat',
//     price: 25,
//     quantity: 1,
//     image:
//       '/banner-3.jpg',
//   },
//   {
//     id: 5,
//     name: 'Elevation Nights Tour T-Shirt 2025',
//     price: 40,
//     size: 'L',
//     quantity: 1,
//     image:
//       '/banner-2.jpg',
//   },
//   {
//     id: 6,
//     name: 'I Trust In God Flat Bill Hat',
//     price: 25,
//     quantity: 1,
//     image:
//       '/banner-3.jpg',
//   },
];

interface CartMenuProps {
  isCartOpen: boolean;
  handleToggleCart: () => void;
}

const Cart: React.FC<CartMenuProps> = ({ isCartOpen, handleToggleCart}) => {
  const cartRef = useRef<HTMLDivElement>(null);

   // Close sidebar if clicked outside
   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node) && isCartOpen) {
        handleToggleCart();  // Close sidebar if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, handleToggleCart]);
  
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
    <>
    <div
      ref={cartRef}
      className={`fixed top-0 right-0 h-screen text-black bg-white shadow-lg z-50 p-4 pb-10 flex w-full sm:max-w-sm flex-col transition-transform duration-500 ease-in-out ${
        isCartOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">
          Cart <span className="text-gray-500">({cartItems.length} items)</span>
        </h2>
        <button onClick={handleToggleCart} className='text-gray-500 cursor-pointer'>
          <AiOutlineClose 
            size={20} 
            className="transform transition-transform duration-500 hover:rotate-180" 
          />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex space-x-4">
              {/* Product Image */}
              <div className="w-24 h-24 relative flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout='fill'
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  {item.size && (
                    <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2">
                  {/* Quantity Controls */}
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

                  {/* Remove */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-xs text-gray-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="flex-shrink-0 text-sm font-medium text-right">
                ${item.price.toFixed(2)}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="space-y-4 pb-4">
        {/* Subtotal */}
        {/* <div className="flex justify-between text-sm font-medium">
          <span>CHECKOUT</span>
          <span>${cartTotal.toFixed(2)} USD</span>
        </div> */}

        {/* Buttons */}
        <button className="w-full bg-black text-white py-3 text-sm font-semibold rounded hover:bg-gray-800 transition">
          <Link href={"/checkout"}>
            CHECKOUT • ${cartTotal.toFixed(2)} USD
          </Link>
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
    </div>
    {isCartOpen && <div className="fixed inset-0 bg-gray-300 opacity-50 z-40 transition-opacity duration-500"></div>}
    </>
  );
};

export default Cart;
