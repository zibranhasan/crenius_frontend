"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {
  return (
    <div className="relative bg-black text-white p-8 lg:flex lg:items-center lg:justify-center lg:space-x-4">
      {/* Left side: Image */}
      <motion.div
  className="lg:w-1/2 mb-8 lg:mb-0 relative"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Image Container with Elegant Blob Shape */}
  <div className="image-container">
    <Image
      src="/assets/2668382.jpg"
      width={400}
      height={300}
      alt="Elegant photo"
      className="elegant-blob-image"
    />
  </div>

  {/* Styles */}
  <style jsx>{`
    .image-container {
      position: relative;
      display: inline-block;
      padding: 20px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Soft shadow for elegance */
      overflow: hidden;
    }

    .elegant-blob-image {
      width: 100%;
      height: auto;
      clip-path: url(#elegantBlob); /* Referencing the SVG blob */
      transition: clip-path 0.8s ease-in-out; /* Smooth transition */
    }
  `}</style>

  {/* Inline SVG for Blob Shape */}
  <svg width="0" height="0">
    <defs>
      <clipPath id="elegantBlob" clipPathUnits="userSpaceOnUse">
        <path
          fill="#FF0066"
          d="M37.3,-59.1C51.7,-56.3,69.1,-53.1,78.1,-43.2C87.2,-33.3,87.9,-16.6,87.1,-0.5C86.2,15.7,83.8,31.3,76.7,44.6C69.6,57.9,57.8,68.8,44.2,77.3C30.7,85.8,15.3,91.9,1.6,89.2C-12.2,86.4,-24.4,74.9,-36.9,65.8C-49.4,56.7,-62.2,50,-72.1,39.4C-81.9,28.9,-88.9,14.4,-86.5,1.4C-84.1,-11.7,-72.4,23.4,-64.2,-36.8C-56,-50.3,-51.4,-65.6,-41.3,-70.9C-31.1,-76.2,-15.6,-71.5,-2.1,-67.9C11.4,-64.3,22.9,-61.9,37.3,-59.1Z"
          transform="translate(100 100)"
        />
      </clipPath>
    </defs>
  </svg>
</motion.div>
      {/* Right side: Text content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
{/* About Us Section */}
<div className="mb-10">
  <h2 className="text-3xl font-semibold mb-4 uppercase">About Us</h2>
  <p className="text-xl leading-relaxed">
    Welcome to Crenius Studio, your destination for{' '}
    <span className="inline-block" style={{ width: '200px' }}> {/* Adjust the width to fit the longest text */}
      <TypeAnimation
        sequence={[
          'Digital Marketing', 2000,
          'Graphic Design', 2000,
          'App Development', 2000,
          'Website Solutions', 2000,
        ]}
        speed={50}
        className="text-[#EBF700] text-2xl"
        wrapper="span"
        repeat={Infinity}
      />
    </span>.
    We blend creativity and expertise to bring your ideas to life. Our tailored services
    align with your brand&apos;s identity, delivering results that resonate with your audience and
    elevate your business. Let us transform your vision through innovation and excellence. 
    <span className="text-[#EBF700] font-bold">Contact us today</span> to explore how we can help you grow.
  </p>
</div>





        {/* Dynamic TypeAnimation Section */}
        

     
      </motion.div>

      {/* Experience Box */}
      <motion.div
        className="absolute bottom-8 left-8 bg-yellow-400 text-black p-6 rounded-md font-bold text-3xl lg:static"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        25+ <span className="text-lg block">Years of Experience</span>
      </motion.div>
    </div>
  );
};

export default AboutSection;
