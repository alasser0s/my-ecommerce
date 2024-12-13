import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-[calc(100vh-72px)]"
    >
      {children}
    </motion.div>
  );
}
