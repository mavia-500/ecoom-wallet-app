import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between ">
    <div className="flex items-center">
        <img src="image" alt="logo" />
    </div>
      <div className=" flex space-x-6 items-center">
        <Link href={"/home"}>Home</Link>
        <Link href={"/bifoldwallet"}>Bi-Fold-Wallet</Link>
        <Link href={"/trifoldwallet"}>Tri-Fold-Wallet</Link>
        <Link href={"/cardholder"}>Card Hoder</Link>
        <Link href={"/longwallet"}>Long Wallet</Link>
      </div>

      <div className="flex space-x-6 items-center">
       <span><Link href={'/signin'}>Sign-in</Link></span> 
        <input type="search" placeholder="search here" className=" max-w-sm px-5 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  placeholder-gray-400"/>

        <span><img src="image" alt="cartlogo" /></span>
      </div>
      
      </div>
    </>
  );
};

export default Navbar;
