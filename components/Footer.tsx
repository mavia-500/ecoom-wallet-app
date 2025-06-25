import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Hilyah</h3>
            <p className="text-sm leading-relaxed max-w-md">
              Hilyah offers premium hand-stitched leather products, crafted with meticulous attention to detail. Experience the artistry and quality in every piece we create.
            </p>
          </div>

          {/* Customer Care Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/policy" className="hover:text-blue-300 transition-colors duration-200">
                  Refund & Exchange Policy
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-blue-300 transition-colors duration-200">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-blue-300 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
            <p className="text-sm max-w-xs">
              Subscribe for updates, exclusive deals, and more.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10">
          <SocialMediaLinks />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Hilyah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;