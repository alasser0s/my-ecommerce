  import React, { createContext, useState } from 'react';

  export const CartContext = createContext();

  export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item));
      } else {
        setCart([...cart, { ...product, quantity }]);
      }
    };

    const removeFromCart = (productId) => {
      setCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity } : item));
    };

    const clearCart = () => {
      setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
        {children}
      </CartContext.Provider>
    );
  }
