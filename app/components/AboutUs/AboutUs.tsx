"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {
  return (
    <div className="relative bg-black text-white p-8 lg:flex lg:items-center lg:justify-between lg:space-x-8">
      {/* Left side: Image */}
      <motion.div
      className="lg:w-1/2 mb-8 lg:mb-0 relative" // Ensuring relative position
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Container */}
      <div className="image-container">
        <Image
          src="/assets/2668382.jpg"
          width={300}
          height={300}
          alt="Framed photo"
          className="framed-image"
        />
      </div>

      {/* Styles */}
      <style jsx>{`
        .image-container {
          position: relative;
          display: inline-block;
          padding: 10px;
          background-color: white; /* Background for the frame */
          border: 2px solid #ccc;   /* Optional border */
          border-radius: 20px;      /* Rounded corners for the frame */
          overflow: hidden;
        }

        /* Shape the image using clip-path */
        .framed-image {
          width: 100%;
          height: auto;
          clip-path: polygon(0 0, 100% 10%, 100% 100%, 10% 100%); /* Custom shape */
        }
      `}</style>
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
