import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function Cart() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  return React.createElement(
    PageTransition,
    null,
    React.createElement(
      'div',
      { className: 'p-8' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'Your Cart'),
      cart.length === 0
        ? React.createElement(
            'p',
            null,
            'Your cart is empty. ',
            React.createElement(
              Link,
              { to: '/shop', className: 'text-blue-600 underline' },
              'Shop now'
            )
          )
        : React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'div',
              { className: 'mb-6' },
              cart.map(item => React.createElement(CartItem, { key: item.id, item: item }))
            ),
            React.createElement(
              'div',
              { className: 'flex justify-between items-center mb-6' },
              React.createElement('h2', { className: 'text-2xl font-bold' }, `Total: $${totalPrice}`),
              React.createElement(
                'button',
                { onClick: clearCart, className: 'text-red-600 underline' },
                'Clear Cart'
              )
            ),
            React.createElement(
              Link,
              {
                to: '/checkout',
                className: 'inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700'
              },
              'Proceed to Checkout'
            )
          )
    )
  );
}

export default Cart;
