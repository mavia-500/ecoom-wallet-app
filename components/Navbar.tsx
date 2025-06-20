import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between ">
    <div>
        <img src="" alt="logo" />
    </div>
      <div className=" flex space-x-6">
        <Link href={"/home"}>Home</Link>
        <Link href={"/bifoldwallet"}>Bi-Fold-Wallet</Link>
        <Link href={"/trifoldwallet"}>Tri-Fold-Wallet</Link>
        <Link href={"/cardholder"}>Card Hoder</Link>
      </div>

      <div>
        sign-in
        <input type="search" placeholder="search here"/>
        <span>cart logo</span>
      </div>
      
      </div>
    </>
  );
};

export default Navbar;
