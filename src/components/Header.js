import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { totalItems } = useContext(CartContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-md">
      <motion.div
        className="text-2xl font-bold cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link to="/">MyStore</Link>
      </motion.div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
        <Link to="/shop" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Shop</Link>
        <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</Link>
        <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contact</Link>
        <Link to="/signin" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Sign In</Link>
        <Link to="/cart" className="relative hover:text-blue-600 dark:hover:text-blue-400 font-medium">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          title="Toggle Dark Mode"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}
