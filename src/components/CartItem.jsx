"use client";

import { useContext } from "react";
import { CartContext } from "./context/cartcontext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border-b border-gray-300">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg font-medium text-gray-900">{item.name}</p>
            <p className="text-gray-500 text-sm mt-1">Cantidad: {item.qty}</p>
          </div>
          <p className="text-lg font-medium text-gray-900">
            ${(item.price * (item.qty || 1)).toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <button 
            onClick={() => decreaseQty(item.id)}
            className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
          >
            −
          </button>
          <span className="w-6 text-center text-gray-600">{item.qty}</span>
          <button 
            onClick={() => increaseQty(item.id)}
            className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
          >
            +
          </button>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-500 hover:text-red-600 text-sm"
          >
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
