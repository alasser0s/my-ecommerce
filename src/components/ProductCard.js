import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 dark:text-gray-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow flex flex-col items-center transform hover:scale-105"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      </Link>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{product.name}</h3>
      <p className="text-gray-500 dark:text-gray-300 mb-4">{product.description}</p>
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-bold text-gray-800 dark:text-gray-100">${product.price.toFixed(2)}</span>
        <Link
          to={`/product/${product.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          View
        </Link>
      </div>
    </motion.div>
  );
}
