import Link from "next/link";
import React from "react";
import Priority from "./Priority";
import BiFoldImage from '/images/GGemini_Generated_Image_wm8m9uwm8m9uwm8m.webp';


const Collections = () => {
  return (
    <div className="px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-xl font-semibold mb-3 sm:text-2xl">
          Shop By Collections
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed max-w-md sm:text-base sm:max-w-lg">
          Our leather goods are handcrafted using 100% rich full grain leather.
          Our dedication and experience help us create unique goodness in the
          work we make, and ensures your leather companion can last you a
          lifetime of happy service.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Bi Fold Wallet */}
        <div className="w-full">
          <Link href="/bifoldwallet">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group">
              <img
                src="/images/wem.webp"
                alt="Bi Fold Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white px-3">
                <h2 className="text-lg font-semibold mb-3 sm:text-xl">
                  Bi Fold
                </h2>
                <button className="px-3 py-1.5 bg-white text-black text-sm rounded hover:bg-gray-200 transition sm:px-4 sm:py-2 sm:text-base">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Tri Fold Wallet */}
        <div className="w-full">
          <Link href="/trifoldwallet">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group">
              <img
                src="/images/ad.webp"
                alt="Tri Fold Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white px-3">
                <h2 className="text-lg font-semibold mb-3 sm:text-xl">
                  Tri Fold
                </h2>
                <button className="px-3 py-1.5 bg-white text-black text-sm rounded hover:bg-gray-200 transition sm:px-4 sm:py-2 sm:text-base">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Card Holder */}
        <div className="w-full">
          <Link href="/cardholder">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group">
              <img
                src="images/cardh.webp"
                alt="Card Holder"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white px-3">
                <h2 className="text-lg font-semibold mb-3 sm:text-xl">
                  Card Holder
                </h2>
                <button className="px-3 py-1.5 bg-white text-black text-sm rounded hover:bg-gray-200 transition sm:px-4 sm:py-2 sm:text-base">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Long Wallet */}
        <div className="w-full">
          <Link href="/longwallet">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group">
              <img
                src="images/d.webp"
                alt="Long Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white px-3">
                <h2 className="text-lg font-semibold mb-3 sm:text-xl">
                  Long Wallet
                </h2>
                <button className="px-3 py-1.5 bg-white text-black text-sm rounded hover:bg-gray-200 transition sm:px-4 sm:py-2 sm:text-base">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Priority />
    </div>
  );
};

export default Collections;
