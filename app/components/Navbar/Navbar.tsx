"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: '#000000', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      className="bg-black text-white"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center w-22 h-12">
          <Image
            src="/assets/logo white (1).svg"
            alt="Zeroxe Logo"
            width={195}
            height={195}
            className="m-0 p-0 block" // Ensure it's a block-level element to avoid spacing
          />
        </div>

        {/* Middle: Menu Items (Hidden on mobile, shown on md and above) */}
        <div className="hidden md:flex space-x-8">
          <div className="group relative">
            <button className="hover:text-yellow-300">HOME</button>
          </div>
          <div className="group relative">
            <button className="hover:text-yellow-300">PAGE</button>
          </div>
          <div className="group relative">
            <button className="hover:text-yellow-300">SERVICES</button>
          </div>
          <div className="group relative">
            <button className="hover:text-yellow-300">PROJECT</button>
          </div>
          <div className="group relative">
            <button className="hover:text-yellow-300">NEWS & ARTICLE</button>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="hidden md:flex items-center space-x-2 bg-gray-700 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9.75v-3h-7.5v3m7.5 0h-7.5m0 6v3h7.5v-3m-7.5 0h7.5"
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm">Call anytime</span>
            <span className="text-yellow-300 font-semibold">(+880) - 1234 - 234</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 p-4 bg-gray-800">
            <button className="hover:text-yellow-300" onClick={toggleMobileMenu}>HOME</button>
            <button className="hover:text-yellow-300" onClick={toggleMobileMenu}>PAGE</button>
            <button className="hover:text-yellow-300" onClick={toggleMobileMenu}>SERVICES</button>
            <button className="hover:text-yellow-300" onClick={toggleMobileMenu}>PROJECT</button>
            <button className="hover:text-yellow-300" onClick={toggleMobileMenu}>NEWS & ARTICLE</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
