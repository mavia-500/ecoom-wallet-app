import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-gray-300">
      <div className="flex justify-between flex-wrap m-10">
        <div>
          <h3>About the Shop</h3>
          <div className="flex">
            <p className=" max-w-md ">
              Hilyah offers premium hand-stitched leather products. All of our
              goods are crafted by hilyah ensuring that each product gets 100%
              attention to detail. We hope you enjoy your visit.
            </p>
          </div>
        </div>

        <div>
          <div>
            <h3>Customer Care</h3>
          </div>
          <div>
            <Link href={"/policy"}>Refund & Exchange Policy</Link>
          </div>

          <div>
            <Link href={"/policy"}>shipping Policy</Link>
          </div>

          <div>
            <Link href={"/policy"}>Privacy Policy</Link>
          </div>

          <div>
            <Link href={"/contact"}>Contact</Link>
          </div>

          <div>
            <Link href={"/about"}>About Us</Link>
          </div>
        </div>

        <div>
            <div className="flex"><p className="max-w-50">Subscribe to receive updates, access to exclusive deals, and more.</p>
            </div>
            <div>
                <input type="email" placeholder="email" className="mt-5 w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
 />
            </div>
            <div className="mt-5">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200">
                SUBSCRIBE</button>
            </div>
            
        </div>
      </div>
      <SocialMediaLinks/>
      <div className="flex justify-center items-center ">
  <p className="text-gray-600 text-lg">@2025-Hilyah</p>
</div>
    </div>
  );
};

export default Footer;
