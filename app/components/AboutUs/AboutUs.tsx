"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeIn = (direction: any, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};

const AboutSection = () => {
  return (
    <div className="relative bg-black text-white p-8 lg:flex lg:items-center lg:justify-center lg:space-x-4">
      {/* Left side: Image */}
      <motion.div
        className="lg:w-1/2 mb-8 lg:mb-0 relative ml-6"
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show" // Triggers the animation when in view
        viewport={{ once: false, amount: 0.3 }} // Configures how much should be in view to trigger
      >
        {/* Image Container with Elegant Blob Shape */}
        <div className="image-container">
          <Image
            src="/assets/7.png"
            width={470}
            height={250}
            alt="Elegant photo"
          />
        </div>
      </motion.div>

      {/* Right side: Text content */}
      <motion.div
        className="lg:w-1/2"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show" // Trigger the animation when the text content is in view
        viewport={{ once: false, amount: 0.3 }} // Adjust the scroll amount required to trigger the animation
      >
        {/* About Us Section */}
        <div className="mb-10 mr-5">
          <h2 className="text-3xl font-semibold mb-4 uppercase">About Us</h2>
          <p className="text-xl leading-relaxed">
            Welcome to Crenius Studio, your destination for{" "}
            <span className="inline-block" style={{ width: "200px" }}>
              {" "}
              {/* Adjust the width to fit the longest text */}
              <TypeAnimation
                sequence={[
                  "Digital Marketing",
                  2000,
                  "Graphic Design",
                  2000,
                  "App Development",
                  2000,
                  "Website Solutions",
                  2000,
                ]}
                speed={50}
                className="text-[#EBF700] text-2xl"
                wrapper="span"
                repeat={Infinity}
              />
            </span>
            . We blend creativity and expertise to bring your ideas to life. Our
            tailored services align with your brand&apos;s identity, delivering
            results that resonate with your audience and elevate your business.
            Let us transform your vision through innovation and excellence.
            <span className="text-[#EBF700] font-bold">
              Contact us today
            </span>{" "}
            to explore how we can help you grow.
          </p>
        </div>
      </motion.div>

      {/* Experience Box */}
      {/* <motion.div
        className="absolute bottom-8 left-8 bg-yellow-400 text-black p-6 rounded-md font-bold text-3xl lg:static"
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show" // Trigger the animation when the experience box is in view
        viewport={{ once: false, amount: 0.3 }}
      >
        25+ <span className="text-lg block">Years of Experience</span>
      </motion.div> */}
    </div>
  );
};

export default AboutSection;
