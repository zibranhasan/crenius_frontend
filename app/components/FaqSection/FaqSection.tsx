"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Image from 'next/image';

// Sample FAQs divided into two categories
const adEspressoFaqs = [
  { question: 'How do I pay for my online advertising?', answer: 'You can pay for online advertising through various methods including credit card, PayPal, and wire transfer.' },
  { question: 'What happens to my campaigns if I cancel my AdEspresso subscription?', answer: 'Your campaigns will pause, but you can reactivate them by resubscribing.' }
];

const onlineAdvertisingFaqs = [
  { question: 'Do I need a website to run Facebook ads?', answer: 'No, you can run Facebook ads without a website, but having one improves your ad performance.' },
  { question: 'What is the minimum budget I can use to run Facebook ads?', answer: 'The minimum budget depends on the objective, but typically starts at $1 per day.' }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-gray-800 py-10">
      <div className="container mx-auto">
          {/* Image Section */}
    <div className="flex justify-center mb-8">
      <Image
        src="/assets/FAQ.jpg" // Update this with your image path
        alt="FAQ image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Do You Have Questions?</h2>
          <p className="text-lg text-gray-600">We have answers (well, most of the times!)</p>
          <p className="mt-2">Below you'll find answers to the most common questions. If you still can’t find the answer you’re looking for, just <a href="#" className="text-blue-600 underline">Contact us!</a></p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          {/* AdEspresso FAQs */}
          <div className="md:w-1/2">
          
            <h3 className="text-2xl font-semibold mb-6">AdEspresso FAQs</h3>
            {adEspressoFaqs.map((item, index) => (
              <motion.div
                key={index}
                className="mb-4 bg-gray-100 p-4 rounded-md shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-blue-600">{index + 1}</span>
                    <h4 className="text-lg font-medium">{item.question}</h4>
                  </div>
                  {openIndex === index ? (
                    <AiOutlineMinus className="text-xl text-blue-600" />
                  ) : (
                    <AiOutlinePlus className="text-xl text-blue-600" />
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

          {/* Online Advertising FAQs */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Online Advertising FAQs</h3>
            {onlineAdvertisingFaqs.map((item, index) => (
              <motion.div
                key={index}
                className="mb-4 bg-gray-100 p-4 rounded-md shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index + adEspressoFaqs.length)}
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-blue-600">{index + 1}</span>
                    <h4 className="text-lg font-medium">{item.question}</h4>
                  </div>
                  {openIndex === index + adEspressoFaqs.length ? (
                    <AiOutlineMinus className="text-xl text-blue-600" />
                  ) : (
                    <AiOutlinePlus className="text-xl text-blue-600" />
                  )}
                </div>
                {openIndex === index + adEspressoFaqs.length && (
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
    </div>
  );
};

export default FaqSection;
