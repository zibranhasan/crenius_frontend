"use client";
import { FaCheckSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    },
    {
      id: 2,
      title: "Graphics Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Ut lectus arcu bibendum at varius vel pharetra vel turpis laoreet sit amet.",
    },
    {
      id: 4,
      title: "Website Development",
      description:
        "Ut lectus arcu bibendum at varius vel pharetra vel turpis laoreet sit amet.",
    },
  ];

  // Animation function
  const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "tween",
          duration: 2.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.25],
        },
      },
    };
  };

  return (
    <div className="bg-black text-white py-16 px-10">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "Clash Display Variable", color: "#FFFFFF" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }} // This makes sure it re-triggers
        >
          Our Expertise & Services
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mb-12"
          style={{ color: "#EBF700", fontFamily: "Clash Display Variable" }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Mauris
          pellentesque pulvinar pellentesque habitant morbi.
        </motion.p>

        {/* Services cards with animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="p-6 border rounded-lg flex items-start justify-between shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#680DF5",
                fontFamily: "Clash Display Variable",
                color: "#000000",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn("up", index * 0.4)}
            >
              <div>
                {/* Icon and title with scale animation */}
                <motion.div
                  className="flex items-center space-x-2 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <FaCheckSquare className="text-[#680DF5]" />
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "Clash Display Variable",
                      color: "#000000",
                    }}
                  >
                    {service.title}
                  </h3>
                </motion.div>
                <p style={{ color: "#000000" }}>{service.description}</p>
              </div>

              {/* Number animation */}
              <motion.div
                className="bg-[#680DF5] text-white font-bold text-3xl p-3 rounded-lg ml-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {String(service.id).padStart(2, "0")}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
