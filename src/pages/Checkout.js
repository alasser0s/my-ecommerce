import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, title: 'Shipping Details' },
  { id: 2, title: 'Payment Info' },
  { id: 3, title: 'Review & Confirm' }
];

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  exit: { opacity: 0, x: -50 }
};

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form states
  const [shippingData, setShippingData] = useState({ name: '', address: '', city: '', zip: '' });
  const [paymentData, setPaymentData] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOrder = () => {
    // Validate final data or handle order logic here
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <PageTransition>
        <div className="p-8 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Thank You For Your Order!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Your order has been placed successfully. We’ll send you an email confirmation shortly.</p>
          <Link to="/shop" className="underline text-blue-600 dark:text-blue-400">Continue Shopping</Link>
        </div>
      </PageTransition>
    );
  }

  // Progress Indicator
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <PageTransition>
      <div className="p-8 dark:bg-gray-900 dark:text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="relative h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
            <div 
              className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{width: `${progressPercentage}%`}}
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map(step => (
              <div key={step.id} className={`text-sm ${currentStep >= step.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                {step.title}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Main Checkout Form */}
          <div className="md:w-2/3 mb-8 md:mb-0">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="shipping"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      value={shippingData.name}
                      onChange={(e) => setShippingData({...shippingData, name: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="Address"
                      value={shippingData.address}
                      onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="City"
                      value={shippingData.city}
                      onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="Zip Code"
                      value={shippingData.zip}
                      onChange={(e) => setShippingData({...shippingData, zip: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button 
                      onClick={handleNext} 
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentStep === 2 && (
                <motion.div
                  key="payment"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h2 className="text-2xl font-semibold mb-4">Payment Info</h2>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <input 
                      type="text" 
                      placeholder="Card Number"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="Expiry Date"
                      value={paymentData.expiry}
                      onChange={(e) => setPaymentData({...paymentData, expiry: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="CVV"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                      className="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <button 
                      onClick={handleBack} 
                      className="text-gray-700 dark:text-gray-300 underline"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="review"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h2 className="text-2xl font-semibold mb-4">Review & Confirm</h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Please review your information before placing the order.
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
                    <p>{shippingData.name}, {shippingData.address}, {shippingData.city}, {shippingData.zip}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
                    <p>Card Number: **** **** **** {paymentData.cardNumber.slice(-4)}</p>
                    <p>Expiry: {paymentData.expiry}</p>
                  </div>
                  <div className="flex justify-between">
                    <button 
                      onClick={handleBack} 
                      className="text-gray-700 dark:text-gray-300 underline"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleOrder} 
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                    >
                      Place Order
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Order Summary</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="mb-4 max-h-48 overflow-y-auto border-b dark:border-gray-700 pb-4">
                    {cart.map((item) => (
                      <li key={item.id} className="flex justify-between mb-2">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Subtotal:</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Shipping:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span>${totalPrice}</span>
                  </div>
                </>
              )}
              <Link to="/cart" className="underline text-blue-600 dark:text-blue-400 text-sm">
                Edit Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
