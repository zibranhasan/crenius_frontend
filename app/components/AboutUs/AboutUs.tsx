"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeIn = (direction:any, delay:any) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.25]
      }
    }
  }
}

const AboutSection = () => {
  return (
    <div className="relative bg-black text-white p-8 lg:flex lg:items-center lg:justify-center lg:space-x-4">
      {/* Left side: Image */}
      <motion.div
        className="lg:w-1/2 mb-8 lg:mb-0 relative"
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView="show"  // Triggers the animation when in view
        viewport={{ once: false, amount: 0.3 }}  // Configures how much should be in view to trigger
      >
        {/* Image Container with Elegant Blob Shape */}
        <div className="image-container">
          <Image
            src="/assets/2668382.jpg"
            width={350}
            height={250}
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
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        whileInView="show"  // Trigger the animation when the text content is in view
        viewport={{ once: false, amount: 0.3 }}  // Adjust the scroll amount required to trigger the animation
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
      </motion.div>

      {/* Experience Box */}
      <motion.div
        className="absolute bottom-8 left-8 bg-yellow-400 text-black p-6 rounded-md font-bold text-3xl lg:static"
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"  // Trigger the animation when the experience box is in view
        viewport={{ once: false, amount: 0.3 }}
      >
        25+ <span className="text-lg block">Years of Experience</span>
      </motion.div>
    </div>
  );
};

export default AboutSection;
