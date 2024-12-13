import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const relatedProducts = products.slice(0, 4); // Example subset for "Related Products"

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if(!product) {
    return (
      <PageTransition>
        <div className="p-8 min-h-screen dark:bg-gray-900 dark:text-white">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="text-blue-600 underline">Go Back to Shop</Link>
        </div>
      </PageTransition>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Example additional images (in a real scenario, product might have an images array)
  const additionalImages = [
    product.image,
    '/assets/products/smartwatch.jpg',
    '/assets/products/headphones.jpg'
  ];

  return (
    <PageTransition>
      <motion.div 
        className="p-8 dark:bg-gray-900 dark:text-white min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-col md:flex-row" variants={itemVariants}>
          {/* Left side: Image Gallery */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="mb-4">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {additionalImages.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)} 
                  className={`border-2 rounded overflow-hidden ${selectedImage === img ? 'border-blue-600' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Product variant ${idx}`} className="w-20 h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right side: Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {product.description} - A must-have item to elevate your lifestyle.
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">${product.price.toFixed(2)}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>High-quality materials</li>
                <li>1-year warranty included</li>
                <li>Available in multiple colors</li>
                <li>Free shipping for orders over $100</li>
              </ul>
            </div>

            <div className="flex items-center mb-4 space-x-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-16 border rounded p-1 dark:border-gray-700 dark:bg-gray-800"
              />
              <motion.button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
            <Link to="/shop" className="text-blue-600 underline">Back to Shop</Link>
          </div>
        </motion.div>

        {/* Detailed Description Section */}
        <motion.div className="mt-12" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida pretium leo, vel interdum 
            dui luctus at. Curabitur blandit arcu a fermentum sollicitudin. Donec pretium eleifend purus, at ultrices 
            quam placerat sed. Nunc euismod mauris a sem feugiat bibendum.
          </p>
        </motion.div>

        {/* Related Products */}
        <motion.div className="mt-12" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map(rp => (
              <Link 
                key={rp.id} 
                to={`/product/${rp.id}`} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <img src={rp.image} alt={rp.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{rp.name}</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-2">{rp.description}</p>
                <p className="font-bold text-gray-800 dark:text-gray-100">${rp.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
