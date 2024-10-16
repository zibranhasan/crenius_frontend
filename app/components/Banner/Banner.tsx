"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const fadeIn = (direction, delay) =>{
    return {
        hidden:{
            y:direction === 'up'?80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80  : direction === 'right' ? -80:0
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.25]
            }
        }
    }
}

const Banner = () => {
  return (
    <section className="min-h-[75vh] lg:min-h-[78vh] p-8 flex items-center bg-black" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="mb-6 flex-1 text-center font-secondary lg:text-left">
            {/* Name */}
            <motion.div
  variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView={"show"}
  viewport={{
    once: false,
    amount: 0.7,
  }}
  className="text-white font-secondary leading-tight lg:text-[50px] text-[30px]"
>
  <div className="text-[60px] lg:text-[80px]">CRENIUS</div>
  <div className="text-[#EBF700] text-[40px] lg:text-[60px]">UNLOCK DIGITAL EXCELLENCE</div>
</motion.div>


            {/* Animated Text */}
            <motion.div
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{
    once: false,
    amount: 0.7,
  }}
  className="mb-6 text-[28px] lg:text-[48px] font-secondary font-semibold uppercase leading-[1.2] h-auto flex items-center text-white whitespace-nowrap" // Adjusted text size and whitespace to prevent wrapping
>
  <span className="text-[#680DF5] mr-2">Services Are</span>
  <TypeAnimation
    sequence={[
      "Digital Marketing", 
      2000, 
      "Graphics Design", 
      2000, 
      "Mobile App Dev", 
      2000, 
      "Website Dev", 
      2000,
    ]}
    speed={50}
    className="text-[#EBF700]"
    wrapper="span"
    repeat={Infinity}
  />
</motion.div>


            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-gray-300"
            >
              Welcome to Crenius Studio, your premier destination for top-notch graphic design, digital marketing, app development, and website solutions.
            </motion.p>

        
          </div>



    <motion.div
  variants={fadeIn("down", 0.5)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.7 }}
  className="lg:flex flex-1 max-w-[220px] lg:max-w-[250px] mx-auto shadow-lg shadow-[#680DF5] transition duration-300 relative mt-[-30px] mb-12"
>
  <div className="circle-container">
    <div className="text text1">Graphics Design</div>
    <div className="text text2">Website Development</div>
    <div className="text text3">Mobile App</div>
    <div className="text text4">Digital Marketing</div>
  </div>
  <style jsx>
  {`
    .circle-container {
      position: relative;
      width: 80%; /* Ensure it fills the container */
      max-width: 150px; /* Set a maximum width */
      height: 100%; /* Maintain aspect ratio */
      max-height: 250px; /* Set a maximum height */
      transform-style: preserve-3d;
      animation: rotate 10s linear infinite;
  
    }

    .circle-container .text {
      position: absolute;
      font-size: 14px; /* Adjust text size for better fit */
      font-weight: bold;
      width: 60px; /* Adjust size based on the container */
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.9);
      border: 1px solid #ccc;
      border-radius: 50%;
  
      transform-origin: center center 0px; /* Keep text closer to the container */
    }

    .text.text1 {
      transform: rotateY(0deg) translateZ(80px); /* Confine within fixed space */
    }

    .text.text2 {
      transform: rotateY(90deg) translateZ(80px); /* Confine within fixed space */
    }

    .text.text3 {
      transform: rotateY(180deg) translateZ(80px); /* Confine within fixed space */
    }

    .text.text4 {
      transform: rotateY(270deg) translateZ(80px); /* Confine within fixed space */
    }

    @keyframes rotate {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(360deg);
      }
    }
  `}
</style>

</motion.div>








    
        </div>
      </div>
    </section>
  );
};

export default Banner;
