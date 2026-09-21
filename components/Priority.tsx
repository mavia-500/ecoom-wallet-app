import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { GiLeatherArmor } from "react-icons/gi";

const items = [
  { icon: TbTruckDelivery, label: "Express shipping" },
  { icon: HiMiniArrowPathRoundedSquare, label: "7-day returns" },
  { icon: BiSupport, label: "Dedicated support" },
  { icon: GrSecure, label: "Secure COD checkout" },
  { icon: GiLeatherArmor, label: "Leather warranty" },
];

const Priority = () => {
  return (
    <div className="mx-auto mt-14 max-w-7xl px-2">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center px-3 py-5 text-center"
          >
            <Icon className="mb-2 h-8 w-8 text-[var(--cognac)] sm:h-9 sm:w-9" />
            <span className="text-sm font-medium text-[var(--ink)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Priority;
