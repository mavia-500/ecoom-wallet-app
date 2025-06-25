import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface product {
    title: string;
    imageUrl: string;
    price: number;
    color: string;
  }
const LeatherWallet = ({productData}:{productData:product[]}) => {
   
  return (
    <div><h3 className="block text-center text-2xl font-semibold mt-10">
    Leather Wallet
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-9 ">
    {productData.map(({ title, color, price,imageUrl }) => {
      return (
        <div key={title}>
          <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* Image */}
            
            <img
              src={imageUrl}
              alt="loading image"
              className="w-full h-48 object-cover"/>
            

            <div className="p-4">
              {/* Title and Color */}
              <div className="flex justify-center  mb-2">
                <h2 className="text-center text-xl font-semibold text-gray-800">
                  {title}
                </h2>

                
              </div>
              {/* Price */}
              <p className="text-center text-lg font-bold text-gray-900">
                Rs{price}.00
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  <div className="flex justify-center mt-10">
    <Link className="" href={"/bifoldwallet"}>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
        View all
      </button>
    </Link>
  </div>
  </div>
  )
}

export default LeatherWallet