"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fadeIn = (direction: any, delay: any) => {
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
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Projects = () => {
  return (
    <section className="section p-10 bg-black" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src="/assets/2668382.jpg"
                height={200}
                width={200}
                alt="Car Wash Management System"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient"> Full Stack Project</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 mb-2">
                <span className="text-1xl text-white font-bold mb-2">
                  Car Wash Management System
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <div className="flex gap-4 mb-2">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://car-wash-booking-system-livid.vercel.app/"
                  >
                    Live Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Car-wash-booking-system-frontend"
                  >
                    Client Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Car-Wash-Booking-System_backend"
                  >
                    Server Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-8"
          >
            {/* Electric Gadgets Project */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src="/assets/FAQ.jpg"
                height={200}
                width={200}
                alt="Electric Gadgets Management System"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Project</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 mb-5">
                <span className="text-1xl text-white font-bold">
                  Electric Gadgets Management System
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50 mt-2">
                <div className="flex gap-4 mt-5">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://assignment-6-gilt-nine.vercel.app/"
                  >
                    Live Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Electric-gadgets-management-system-frontend"
                  >
                    Client Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Electric-gadgets-management-system-backend"
                  >
                    Server Link
                  </a>
                </div>
              </div>
            </div>

            {/* Lost and Found Item Project */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src="/assets/PrevW1.jpg"
                height={200}
                width={200}
                alt="Lost and Found Item System"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Project</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 mb-2">
                <span className="text-1xl text-white font-bold">
                  Lost and Found Item System
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <div className="flex gap-4 mb-2">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://lost-and-found-item-frontend.vercel.app/"
                  >
                    Live Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/lost-and-found-item-backend"
                  >
                    Server Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Lost-And-Found-Items-Frontend_Nextjs_RTK-Query_antd"
                  >
                    Client Link
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
