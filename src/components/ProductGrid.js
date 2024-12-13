import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductGrid({ products }) {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </motion.div>
  );
}
