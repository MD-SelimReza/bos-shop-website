'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const Footer = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isHelpfulLinksOpen, setIsHelpfulLinksOpen] = useState(false);

  const toggleShop = () => setIsShopOpen((prev) => !prev);
  const toggleHelpfulLinks = () => setIsHelpfulLinksOpen((prev) => !prev);

  return (
    <footer className="bg-black w-full pb-10 text-sm text-white lg:px-10 xl:px-0">
      <div className="mx-auto max-w-7xl w-full px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-center gap-10 xl:gap-24">
          
          <div className="flex flex-col md:flex-row gap-6 xl:gap-24">

            {/* SHOP MENU BLOCK */}
            <div className="w-full md:w-1/2 text-left text-nowrap p-2">
              <p className="text-base font-medium mb-4">
                <button
                  className="flex items-center justify-between w-full md:cursor-default"
                  onClick={toggleShop}
                >
                  <span>SHOP</span>
                  {/* Icon only shows on mobile */}
                  <span
                    className={`ml-2 transition-transform duration-500 ease-in-out md:hidden
                      ${isShopOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    {isShopOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
              </p>

              {/* COLLAPSIBLE CONTENT */}
              <div
                className={`transition-all duration-750 ease-in-out overflow-hidden 
                  ${isShopOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} 
                  md:max-h-none md:opacity-100`}
              >
                <ul className="space-y-2 py-2 md:py-0">
                  <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                  <li><Link href="/collections/elevation-church-1" className="hover:text-gray-600">Elevation Church</Link></li>
                  <li><Link href="/collections/elevation-worship" className="hover:text-gray-600">Elevation Worship</Link></li>
                  <li><Link href="/collections/apparel" className="hover:text-gray-600">Apparel</Link></li>
                  <li><Link href="/collections/accessories-1" className="hover:text-gray-600">Accessories</Link></li>
                  <li><Link href="/collections/nextgen" className="hover:text-gray-600">NextGen (Kids &amp; YTH)</Link></li>
                  <li><Link href="/collections/studies" className="hover:text-gray-600">Resources</Link></li>
                  <li><Link href="/collections/sale" className="hover:text-gray-600">Make Room For The New</Link></li>
                </ul>
              </div>
            </div>

            {/* HELPFUL LINKS BLOCK */}
            <div className="w-full md:w-1/2 text-left text-nowrap p-2">
              <p className="text-base font-medium mb-4">
                <button
                  className="flex items-center justify-between w-full md:cursor-default"
                  onClick={toggleHelpfulLinks}
                >
                  <span>HELPFUL LINKS</span>
                  <span
                    className={`ml-2 transition-transform duration-500 ease-in-out md:hidden
                      ${isHelpfulLinksOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    {isHelpfulLinksOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
              </p>

              {/* COLLAPSIBLE CONTENT */}
              <div
                className={`transition-all duration-750 ease-in-out overflow-hidden 
                  ${isHelpfulLinksOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} 
                  md:max-h-none md:opacity-100`}
              >
                <ul className="space-y-2 py-2 md:py-0">
                  <li><Link href="/search" className="hover:text-gray-600">Search</Link></li>
                  <li><a href="http://elevationchurch.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">ElevationChurch.org</a></li>
                  <li><a href="http://elevationchurch.online" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">ElevationChurch.Online</a></li>
                  <li><Link href="/policies/refund-policy" className="hover:text-gray-600">Returns</Link></li>
                  <li><Link href="/policies/terms-of-service" className="hover:text-gray-600">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

          </div>

          {/* OUR MISSION & SHARE YOUR STORY BLOCK */}
          <div className="flex flex-col md:flex-row gap-6 xl:gap-24">
            
            {/* OUR MISSION BLOCK */}
            <div className="w-full md:w-1/2 text-left p-2">
              <p className="text-base font-medium mb-4">OUR MISSION</p>
              <div className="space-y-3 text-white text-wrap">
                <p>
                  Elevation Church Resources exists to provide <br className='xl:block hidden'/> opportunities for connection,
                  community, and <br className='xl:block hidden'/> conversation through tangible resources.
                </p>
                <p>
                  Learn more about Elevation Church{' '}
                  <a
                    href="https://elevationchurch.org/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    here
                  </a>.
                </p>
              </div>
            </div>

            {/* SHARE YOUR STORY BLOCK */}
            <div className="w-full md:w-1/2 text-left p-2">
              <p className="text-base font-medium mb-4">SHARE YOUR STORY</p>
              <div className="space-y-3 text-white text-wrap">
                <p>Has our merch impacted you in a positive way? <br className='xl:block hidden'/> Have a cool merch story to share?</p>
                <p>We&apos;d love to hear!</p>
                <p>Write to us at{' '}
                  <a
                    href="mailto:Resources@elevationchurch.org"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Resources@elevationchurch.org
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FIXED BOTTOM BANNER */}
      <Link
        href="/cart"
        className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-3 z-50"
      >
        Congratulations! Free shipping in the U.S.
      </Link>
    </footer>
  );
};

export default Footer;
