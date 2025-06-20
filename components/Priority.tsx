import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { GiLeatherArmor } from "react-icons/gi";

const Priority = () => {
  return (
    <div className="flex flex-wrap justify-between m-10">
      <div className="flex flex-col">
        <div className=""><TbTruckDelivery className="h-10 w-35 text-blue-700" /></div>
        <div>Fast Express Shipping</div>
      </div>

      <div className="flex flex-col">
        <div><HiMiniArrowPathRoundedSquare className="h-10 w-30 text-blue-700" /></div>
        <div>7 Days Return</div>
      </div>

      <div className="flex flex-col">
        <div><BiSupport className="h-10 w-35 text-blue-700"/></div>
        <div>Top-Notch Support</div>
      </div>

      <div className="flex flex-col">
        <div><GrSecure className="h-10 w-35 text-blue-700"/></div>
        <div>Flexible & Secure Payment</div>
      </div>

      <div className="flex flex-col">
        <div><GiLeatherArmor className="h-10 w-35 text-blue-700"/></div>
        <div>Leather Warranty</div>
      </div>
    </div>
  );
};

export default Priority;
