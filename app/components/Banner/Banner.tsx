"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
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
    <section className="min-h-[85vh] lg:min-h-[78vh] p-8 flex items-center bg-black" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="mb-6 flex-1 text-center font-secondary lg:text-left">
            {/* Name */}
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="text-[40px] font-secondary leading-[0.8] lg:text-[90px] text-white"
            >
              CRENIUS<span className="text-[#EBF700]"> CONSULTING</span>
            </motion.h1>

            {/* Animated Text */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] h-[60px] lg:h-[70px] flex items-center text-white"
            >
              <span className="text-[#680DF5] mr-2">Empowering</span>
              <TypeAnimation
                sequence={["Businesses", 2000, "Startups", 2000, "Innovators", 2000]}
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
              At Crenius, we provide expert consultancy services designed to help you grow, innovate, and lead in your industry. Let’s collaborate to turn your vision into reality.
            </motion.p>

            {/* Portfolio Link */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="#"
                className="text-[#680DF5] bg-[#EBF700] px-4 py-2 rounded-lg text-lg font-semibold hover:bg-white transition duration-300"
              >
                Our Services
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0 text-white"
            >
              <a
                href="https://www.facebook.com"
                className="hover:text-[#EBF700] transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com"
                className="hover:text-[#EBF700] transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-[#EBF700] transition duration-300"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="lg:flex flex-1 max-w-[220px] lg:max-w-[350px] mx-auto shadow-lg shadow-[#680DF5]  transition duration-300 relative"
    > */}
      {/* Circular Text Animation */}
      {/* <div className="circle-container">
        <div className="text1">Graphics Design</div>
        <div className="text2">Web Design</div>
        <div className="text3">UI/UX Design</div>
        <div className="text4">SEO</div>
      
      </div> */}

      {/* <style jsx>{`
        .circle-container {
          position: relative;
          width: 300px;
          height: 300px;
          animation: rotate 10s linear infinite;
        }

        .circle-container div {
          position: absolute;
          font-size: 16px;
          font-weight: bold;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .text1 { top: 10px; left: 50%; transform: translateX(-50%); }
        .text2 { top: 50%; left: 90%; transform: translateY(-50%); }
        .text3 { top: 90%; left: 50%; transform: translate(-50%, -100%); }
        .text4 { top: 50%; left: 10%; transform: translateY(-50%); }
      `}</style> */}
    {/* </motion.div> */}


<motion.div variants={fadeIn("down", 0.5)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount:0.7}}
className="lg:flex flex-1 max-w-[220px] lg:max-w-[350px] mx-auto shadow-lg shadow-[#680DF5] transition duration-300 relative"
>
  <div className="circle-container">
    <div className="text1">Graphics Design</div>
    <div className="text2">Web Design</div>
    <div className="text3">UI/UX Design</div>
    <div className="text4">SEO</div>
  </div>

</motion.div>






    
        </div>
      </div>
    </section>
  );
};

export default Banner;
