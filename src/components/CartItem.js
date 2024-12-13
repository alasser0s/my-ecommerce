import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between mb-4 p-4 border rounded">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
          className="w-16 border rounded p-1"
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
