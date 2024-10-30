"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* Semi-circle background */}
      <div className="relative w-full max-w-2xl p-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-9 w-[150%] h-[80vh] bg-[#680DF5] rounded-b-full"
        ></motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-24 space-y-4">
          <h1 className="text-3xl font-bold text-white">
            Get Your Free Growth Playbook.
          </h1>
          <p className="text-white text-sm max-w-md">
            Ready to grow your investor base, mobilize existing investors, or
            build your personal brand?
          </p>

          {/* Input fields */}
          <div className="space-y-3 w-full max-w-xs">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button className="w-full py-3 mt-2 font-semibold bg-white text-[#680DF5] rounded-md hover:bg-gray-200 transition-colors">
              Next
            </button>
          </div>

          {/* Footer icons and text */}
          <div className="mt-8 flex space-x-6 text-white">
            <FaLinkedin size={24} />
            <FaTwitter size={24} />
            <FaFacebook size={24} />
          </div>

          <p className="text-xs text-white mt-6">
            © Genrevv 2023. All rights reserved
          </p>
          <p className="text-xs text-white">Designed by Black Peak Creative</p>
        </div>

        {/* Footer links */}
        <div className="relative z-10 mt-8 flex space-x-6 text-xs text-gray-200">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Shortform
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
