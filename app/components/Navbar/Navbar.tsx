
import React from 'react';


const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#001529' }} className="bg-gray-800 text-white #001529">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://ibb.co.com/GVBy71H" 
            alt="Zeroxe Logo"
            className="w-10 h-10"
          />
          <div className="text-2xl font-bold">CRENIUS</div>
          <span className="text-sm font-light">Consulting Company</span>
        </div>

        {/* Middle: Menu Items */}
        <div className="flex space-x-8">
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
        <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-lg">
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
      </div>
    </nav>
  );
};

export default Navbar;
