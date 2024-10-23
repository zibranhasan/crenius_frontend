"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Image from 'next/image';

const faqItems = [
  { question: 'What is business consulting?', answer: 'Business consulting provides expert advice to businesses to help them improve efficiency and performance.' },
  { question: 'How do I choose the right business consultant?', answer: 'Look for consultants with experience in your industry, a good track record, and excellent communication skills.' },
  { question: 'How long do consulting projects typically last?', answer: 'It varies based on the scope of the project, but most last between 3 to 6 months.' },
  { question: 'Are consulting services confidential?', answer: 'Yes, consultants follow strict confidentiality agreements to protect your business information.' }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#000000] text-white p-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-6 px-4">
      {/* FAQ Title and Downloads */}
      <div className="md:w-1/3">
        <h2 className="text-4xl font-bold mb-4 font-ClashDisplay">
          Frequently asked questions.
        </h2>
        <p className="text-[#EBF700] mb-4">
          Posuere urna nec tincidunt praesent semper. At urna condimentum mattis pellentesque id nibh tortor id senectus et netus et malesuada.
        </p>
        <div className="mt-6">
          <h3 className="text-lg mb-3">Download & Open with pdf</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-[#EBF700] mr-2">🟡</span> Beginner and tutorial
            </li>
            <li className="flex items-center">
              <span className="text-[#EBF700] mr-2">🟡</span> Conditions for joining
            </li>
            <li className="flex items-center">
              <span className="text-[#EBF700] mr-2">🟡</span> Early history of zeroxe company
            </li>
            <li className="flex items-center">
              <span className="text-[#EBF700] mr-2">🟡</span> What my services are available
            </li>
          </ul>
        </div>
      </div>
  
      {/* Image in the middle */}
      <div className="md:w-1/3 flex justify-center items-center min-h-[400px]">
        <Image
          src="/assets/FAQ.jpg"
          height={1900}
          width={900}
          alt="Consultant"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
  
      {/* FAQ Accordion */}
      <div className="md:w-1/3">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-4 bg-[#1a1a1a] p-4 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h4 className="text-lg font-medium">{item.question}</h4>
              {openIndex === index ? (
                <AiOutlineMinus className="text-xl text-[#EBF700]" />
              ) : (
                <AiOutlinePlus className="text-xl text-[#EBF700]" />
              )}
            </div>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2"
              >
                <p>{item.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default FaqSection;
