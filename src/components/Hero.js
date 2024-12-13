import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/logo192.png';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="w-full md:w-1/2 mb-8 md:mb-0">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-800 dark:text-gray-100"
          variants={itemVariants}
        >
          Discover Your Next Favorite Product
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-6"
          variants={itemVariants}
        >
          Shop the latest trends with amazing discounts.
        </motion.p>
        <motion.a
          href="/shop"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-transform transform hover:scale-105"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.a>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={itemVariants}
      >
        <motion.img 
          src={heroImg} 
          alt="Hero" 
          className="max-w-full h-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </motion.div>
    </motion.section>
  );
}
