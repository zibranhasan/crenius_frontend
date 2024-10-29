"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-lg p-8 bg-white shadow-lg rounded-xl overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-indigo-600 rounded-full"
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">
            Get Your Free Growth Playbook.
          </h1>
          <p className="text-white">
            Ready to grow your investor base, mobilize existing investors, or
            build your personal brand?
          </p>

          <div className="space-y-3 w-full">
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
            <button className="w-full py-3 mt-2 font-semibold bg-white text-indigo-600 rounded-md hover:bg-gray-200 transition-colors">
              Next
            </button>
          </div>

          <div className="mt-6 flex space-x-4 text-white">
            <FaLinkedin size={24} />
            <FaTwitter size={24} />
            <FaFacebook size={24} />
          </div>

          <p className="text-sm text-white mt-6">
            © Genrevv 2023. All rights reserved
          </p>
          <p className="text-xs text-white">Designed by Black Peak Creative</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
