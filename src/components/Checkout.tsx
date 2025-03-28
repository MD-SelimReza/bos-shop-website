// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { FaChevronLeft } from 'react-icons/fa';

// const Checkout: React.FC = () => {
//   const [shipping, setShipping] = useState({
//     country: 'Bangladesh',
//     city: 'Rajshahi',
//   });

//   const cartItems = [
//     {
//       id: 1,
//       name: 'Elevation Nights Tour T-Shirt 2025',
//       price: 40,
//       image: '/banner-2.jpg',
//       size: 'L',
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: 'I Trust In God Flat Bill Hat',
//       price: 25,
//       image: '/banner-3.jpg',
//       quantity: 1,
//     },
//   ];

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shippingCost = 38.35;
//   const total = subtotal + shippingCost;

//   return (
//     <div className="flex min-h-screen w-full max-w-7xl mx-auto bg-gray-50 text-black">
//       {/* Left - Form */}
//       <div className="w-full md:w-2/3 lg:w-1/2 p-8 py-16 bg-white">
//         <h1 className="text-xl font-semibold mb-4">Elevation Church Resources</h1>
//         <nav className="text-sm text-gray-500 mb-6 space-x-2">
//           <span className="text-black">Cart</span>
//           <span>{'>'}</span>
//           <span>Information</span>
//           <span>{'>'}</span>
//           <span>Shipping</span>
//           <span>{'>'}</span>
//           <span>Payment</span>
//         </nav>

//         {/* Express Checkout */}
//         <div className="space-y-4 mb-6">
//           <h2 className="text-sm font-medium">Express checkout</h2>
//           <div className="flex space-x-4">
//             <button className="flex-1 py-3 rounded bg-[#5a31f4] text-white font-semibold">
//               Shop Pay
//             </button>
//             <button className="flex-1 py-3 rounded bg-[#ffc439] text-black font-semibold">
//               PayPal
//             </button>
//             <button className="flex-1 py-3 rounded bg-black text-white font-semibold flex items-center justify-center space-x-2">
//               <span>G Pay</span>
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center space-x-2 my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="text-xs text-gray-500">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Contact */}
//         <div className="mb-6 text-black">
//           <div className="flex justify-between mb-2">
//             <label htmlFor="email" className="text-sm font-medium">
//               Contact
//             </label>
//             <a href="#" className="text-sm text-black hover:underline">
//               Log in
//             </a>
//           </div>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             className="w-full border px-4 py-3 rounded mb-2 text-sm"
//           />
//           <div className="flex items-center space-x-2">
//             <input type="checkbox" id="newsletter" className="h-4 w-4" />
//             <label htmlFor="newsletter" className="text-sm">
//               Email me with news and offers
//             </label>
//           </div>
//         </div>

//         {/* Shipping Address */}
//         <div className="mb-6 text-black">
//           <h2 className="text-sm font-medium mb-2">Shipping address</h2>

//           <select
//             className="w-full border px-4 py-3 rounded text-sm mb-4"
//             value={shipping.country}
//             onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
//           >
//             <option value="Bangladesh">Bangladesh</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//           </select>

//           <div className="flex space-x-4 mb-4">
//             <input
//               type="text"
//               placeholder="First name (optional)"
//               className="w-1/2 border px-4 py-3 rounded text-sm"
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               className="w-1/2 border px-4 py-3 rounded text-sm"
//             />
//           </div>

//           <input
//             type="text"
//             placeholder="Company (optional)"
//             className="w-full border px-4 py-3 rounded text-sm mb-4"
//           />

//           <input
//             type="text"
//             placeholder="Address"
//             className="w-full border px-4 py-3 rounded text-sm mb-4"
//           />

//           <input
//             type="text"
//             placeholder="Apartment, suite, etc. (optional)"
//             className="w-full border px-4 py-3 rounded text-sm mb-4"
//           />

//           <div className="flex space-x-4 mb-4">
//             <input
//               type="text"
//               placeholder="City"
//               value={shipping.city}
//               onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
//               className="w-1/2 border px-4 py-3 rounded text-sm"
//             />
//             <input
//               type="text"
//               placeholder="Postal code (optional)"
//               className="w-1/2 border px-4 py-3 rounded text-sm"
//             />
//           </div>

//           <input
//             type="tel"
//             placeholder="Phone"
//             className="w-full border px-4 py-3 rounded text-sm mb-4"
//           />

//           <div className="flex items-center space-x-2">
//             <input type="checkbox" id="text-news" className="h-4 w-4" />
//             <label htmlFor="text-news" className="text-sm">
//               Text me with news and offers
//             </label>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex justify-between items-center mt-6">
//           <a href="#" className="flex items-center text-sm text-gray-600 hover:underline">
//             <FaChevronLeft size={16} className="mr-1" /> Return to cart
//           </a>
//           <button className="bg-black text-white py-3 px-6 rounded text-sm font-semibold">
//             Continue to shipping
//           </button>
//         </div>

//         {/* Footer Links */}
//         <div className="mt-12 text-xs text-gray-500 space-x-4">
//           <a href="#" className="hover:underline">
//             Refund policy
//           </a>
//           <a href="#" className="hover:underline">
//             Shipping policy
//           </a>
//           <a href="#" className="hover:underline">
//             Privacy policy
//           </a>
//           <a href="#" className="hover:underline">
//             Terms of service
//           </a>
//           <a href="#" className="hover:underline">
//             Contact information
//           </a>
//         </div>
//       </div>

//       {/* Right - Order Summary */}
//       <div className="hidden md:block w-1/3 lg:w-1/2 p-8 py-16 bg-gray-50 border-l">
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex space-x-4">
//               <div className="relative w-20 h-20 border rounded overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {item.quantity}
//                 </div>
//               </div>
//               <div className="flex flex-col justify-between flex-grow">
//                 <h3 className="text-sm font-medium">{item.name}</h3>
//                 {item.size && (
//                   <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
//                 )}
//               </div>
//               <div className="text-sm font-medium text-right">${item.price.toFixed(2)}</div>
//             </div>
//           ))}
//         </div>

//         {/* Discount */}
//         <div className="mt-6">
//           <input
//             type="text"
//             placeholder="Discount code or gift card"
//             className="w-full border px-4 py-3 rounded text-sm mb-2"
//           />
//           <button className="w-full bg-gray-200 text-sm font-semibold py-2 rounded hover:bg-gray-300 transition">
//             Apply
//           </button>
//         </div>

//         {/* Pricing Summary */}
//         <div className="mt-6 space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>Subtotal - {cartItems.length} items</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="flex items-center">
//               Shipping
//               <svg
//                 className="ml-1 w-4 h-4 text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9 9h2V7H9v2zm0 4h2v-2H9v2z" />
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zM2 10a8 8 0 1116 0A8 8 0 012 10z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </span>
//             <span>${shippingCost.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between font-semibold text-base mt-4">
//             <span>Total</span>
//             <span>USD ${total.toFixed(2)}</span>
//           </div>
//           <p className="text-xs text-gray-500">
//             Including $0.00 in taxes
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';

const Checkout: React.FC = () => {
  const [shipping, setShipping] = useState({
    country: 'Bangladesh',
    city: 'Rajshahi',
  });

  const cartItems = [
    {
      id: 1,
      name: 'Elevation Nights Tour T-Shirt 2025',
      price: 40,
      image: '/banner-2.jpg',
      size: 'L',
      quantity: 1,
    },
    {
      id: 2,
      name: 'I Trust In God Flat Bill Hat',
      price: 25,
      image: '/banner-3.jpg',
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 38.35;
  const total = subtotal + shippingCost;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full max-w-7xl mx-auto bg-gray-50 text-black">
      {/* Left - Form */}
      <div className="w-full lg:w-2/3 xl:w-1/2 p-8 py-16 bg-white">
        <h1 className="text-xl font-semibold mb-4">Elevation Church Resources</h1>
        <nav className="text-sm text-gray-500 mb-6 space-x-2">
          <span className="text-black">Cart</span>
          <span>{'>'}</span>
          <span>Information</span>
          <span>{'>'}</span>
          <span>Shipping</span>
          <span>{'>'}</span>
          <span>Payment</span>
        </nav>

        {/* Express Checkout */}
        <div className="space-y-4 mb-6">
          <h2 className="text-sm font-medium">Express checkout</h2>
          <div className="flex space-x-4">
            <button className="flex-1 py-3 rounded bg-[#5a31f4] text-white font-semibold">
              Shop Pay
            </button>
            <button className="flex-1 py-3 rounded bg-[#ffc439] text-black font-semibold">
              PayPal
            </button>
            <button className="flex-1 py-3 rounded bg-black text-white font-semibold flex items-center justify-center space-x-2">
              <span>G Pay</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Contact */}
        <div className="mb-6 text-black">
          <div className="flex justify-between mb-2">
            <label htmlFor="email" className="text-sm font-medium">
              Contact
            </label>
            <a href="#" className="text-sm text-black hover:underline">
              Log in
            </a>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border px-4 py-3 rounded mb-2 text-sm"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="newsletter" className="h-4 w-4" />
            <label htmlFor="newsletter" className="text-sm">
              Email me with news and offers
            </label>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mb-6 text-black">
          <h2 className="text-sm font-medium mb-2">Shipping address</h2>

          <select
            className="w-full border px-4 py-3 rounded text-sm mb-4"
            value={shipping.country}
            onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="First name (optional)"
              className="w-1/2 border px-4 py-3 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border px-4 py-3 rounded text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full border px-4 py-3 rounded text-sm mb-4"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full border px-4 py-3 rounded text-sm mb-4"
          />

          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full border px-4 py-3 rounded text-sm mb-4"
          />

          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="City"
              value={shipping.city}
              onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
              className="w-1/2 border px-4 py-3 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Postal code (optional)"
              className="w-1/2 border px-4 py-3 rounded text-sm"
            />
          </div>

          <input
            type="tel"
            placeholder="Phone"
            className="w-full border px-4 py-3 rounded text-sm mb-4"
          />

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="text-news" className="h-4 w-4" />
            <label htmlFor="text-news" className="text-sm">
              Text me with news and offers
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-6">
          <a href="#" className="flex items-center text-sm text-gray-600 hover:underline">
            <FaChevronLeft size={16} className="mr-1" /> Return to cart
          </a>
          <button className="bg-black text-white py-3 px-6 rounded text-sm font-semibold">
            Continue to shipping
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-12 text-xs text-gray-500 space-x-4">
          <a href="#" className="hover:underline">
            Refund policy
          </a>
          <a href="#" className="hover:underline">
            Shipping policy
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Terms of service
          </a>
          <a href="#" className="hover:underline">
            Contact information
          </a>
        </div>
      </div>

      {/* Right - Order Summary */}
      <div className="w-full lg:w-1/3 xl:w-1/2 p-8 py-16 bg-gray-50 border-l">
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex space-x-4">
              <div className="relative w-20 h-20 border rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {item.quantity}
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-sm font-medium">{item.name}</h3>
                {item.size && (
                  <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                )}
              </div>
              <div className="text-sm font-medium text-right">${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* Discount */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Discount code or gift card"
            className="w-full border px-4 py-3 rounded text-sm mb-2"
          />
          <button className="w-full bg-gray-200 text-sm font-semibold py-2 rounded hover:bg-gray-300 transition">
            Apply
          </button>
        </div>

        {/* Pricing Summary */}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal - {cartItems.length} items</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center">
              Shipping
              <svg
                className="ml-1 w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 9h2V7H9v2zm0 4h2v-2H9v2z" />
                <path
                  fillRule="evenodd"
                  d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zM2 10a8 8 0 1116 0A8 8 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base mt-4">
            <span>Total</span>
            <span>USD ${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-gray-500">
            Including $0.00 in taxes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
