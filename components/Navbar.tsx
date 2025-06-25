"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 0; // Example cart item count, replace with dynamic data as needed

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar (Always Visible) */}
        <div className="pt-4 pb-2">
          <div className="relative max-w-lg mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 h-5 w-5 transition-transform duration-300 group-hover:scale-125" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-md hover:shadow-lg focus:shadow-xl"
            />
          </div>
        </div>

        {/* Main Navbar Content */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home">
              <img
                src="/images/logo1.webp"
                alt="Hilyah Logo"
                className="h-12 w-auto sm:h-16 transition-transform duration-300 hover:scale-110 hover:rotate-3"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
            <Link
              href="/bifoldwallet"
              className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Bi-Fold Wallet
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
            <Link
              href="/trifoldwallet"
              className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Tri-Fold Wallet
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
            <Link
              href="/cardholder"
              className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Card Holder
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
            <Link
              href="/longwallet"
              className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Long Wallet
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
            <Link
              href="/gifts"
              className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Gifts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
          </div>

          {/* Right Section (Sign-in, Cart, Hamburger) */}
          <div className="flex items-center space-x-6">
            <Link
              href="/signin"
              className="hidden sm:block text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              Sign In
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
            </Link>
            <Link href="/cart" className="relative">
              <FiShoppingCart className="h-7 w-7 text-gray-800 hover:text-indigo-600 transition-colors duration-200 hover:scale-110" />
              {cartItemCount >= 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="h-7 w-7 transition-transform duration-300 rotate-90" />
              ) : (
                <FiMenu className="h-7 w-7 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-slide-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/home"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/bifoldwallet"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Bi-Fold Wallet
              </Link>
              <Link
                href="/trifoldwallet"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Tri-Fold Wallet
              </Link>
              <Link
                href="/cardholder"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Card Holder
              </Link>
              <Link
                href="/longwallet"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Long Wallet
              </Link>
              <Link
                href="/gifts"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Gifts
              </Link>
              <Link
                href="/signin"
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
