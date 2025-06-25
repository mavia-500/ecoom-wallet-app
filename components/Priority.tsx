import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { GiLeatherArmor } from "react-icons/gi";

const Priority = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        <div className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
          <TbTruckDelivery className="h-8 w-8 text-blue-700 mb-2 sm:h-10 sm:w-10" />
          <span className="text-sm font-medium sm:text-base">Fast Express Shipping</span>
        </div>

        <div className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
          <HiMiniArrowPathRoundedSquare className="h-8 w-8 text-blue-700 mb-2 sm:h-10 sm:w-10" />
          <span className="text-sm font-medium sm:text-base">7 Days Return</span>
        </div>

        <div className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
          <BiSupport className="h-8 w-8 text-blue-700 mb-2 sm:h-10 sm:w-10" />
          <span className="text-sm font-medium sm:text-base">Top-Notch Support</span>
        </div>

        <div className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
          <GrSecure className="h-8 w-8 text-blue-700 mb-2 sm:h-10 sm:w-10" />
          <span className="text-sm font-medium sm:text-base">Flexible & Secure Payment</span>
        </div>

        <div className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
          <GiLeatherArmor className="h-8 w-8 text-blue-700 mb-2 sm:h-10 sm:w-10" />    <span className="text-sm font-medium sm:text-base" >Leather Warranty</span>
        </div>
      </div>
    </div>
  );
};

export default Priority;