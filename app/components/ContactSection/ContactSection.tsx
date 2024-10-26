"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = (direction, delay) => ({
  hidden: { opacity: 0, y: direction === 'up' ? 20 : 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    try {
      const res = await fetch('https://formspree.io/f/xrgvjbzb', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <section className="p-10 bg-black text-white font-sans" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Heading Section */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }} // Trigger each time the section is in view
            className="flex-1"
          >
            <h4 className="text-sm uppercase text-yellow-400 mb-2">Contact</h4>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's create something amazing</h2>
          </motion.div>

          {/* Form Section */}
          <motion.form
            onSubmit={handleFormSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }} // Trigger each time the section is in view
            className="flex-1 p-6 bg-gray-900 rounded-lg shadow-md"
          >
            <input
              className="bg-transparent border-b border-gray-600 py-2 mb-4 w-full placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              className="bg-transparent border-b border-gray-600 py-2 mb-4 w-full placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all"
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />
            <textarea
              className="bg-transparent border-b border-gray-600 py-2 mb-6 w-full placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all resize-none"
              placeholder="Your message"
              name="message"
              required
            />
            <button
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-all"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            {submitted && <p className="text-green-400 mt-4">Thank you! Your message has been sent.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
