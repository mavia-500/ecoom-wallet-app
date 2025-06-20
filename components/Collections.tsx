import Link from "next/link";
import React from "react";
import Priority from "./Priority";

const Collections = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center px-4 py-10">
        <div className="text-2xl font-semibold mb-4">Shop By Collections</div>

        <div className="max-w-xl">
          <p className="text-gray-700 leading-relaxed">
            Our leather goods are handcrafted using 100% rich full grain
            leather. Our dedication and experience help us create unique
            goodness in the work we make, and ensures your leather companion can
            last you a lifetime of happy service.
          </p>
        </div>
      </div>

      <div className="flex  flex-wrap gap-6">
        <div className="w-full max-w-sm mx-auto">
          <Link href="/bifoldwallet">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-2xl font-semibold mb-4">Bi Fold </h2>
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Link href="/trifoldwallet">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
              {/* Background image */}
              <img
                src="https://via.placeholder.com/400x300"
                alt="Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-2xl font-semibold mb-4">TriFold</h2>
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Link href="/cardholder">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
              {/* Background image */}
              <img
                src="https://via.placeholder.com/400x300"
                alt="Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-2xl font-semibold mb-4">Card Holder</h2>
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Link href="/longwallet">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
              {/* Background image */}
              <img
                src="https://via.placeholder.com/400x300"
                alt="Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-2xl font-semibold mb-4">Long Wallet</h2>
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Priority/>
    </div>
  );
};

export default Collections;
