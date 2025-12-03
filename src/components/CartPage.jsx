"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import CartItem from "../CartItem";

const CartPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const router = useRouter();

  const total = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <main className="bg-white container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-3">
        Mi Carrito ({cart.length} productos)
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 divide-y divide-gray-300">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Resumen */}
          <div className="lg:col-span-1 border border-gray-300 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Resumen del pedido</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-800">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Envío</span>
              <span className="font-medium text-gray-500">Gratis</span>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-4 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-500">Total</span>
              <span className="text-2xl font-bold text-blue-700">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors mb-2"
            >
              Proceder al pago
            </button>

            <button
              onClick={clearCart}
              className="w-full bg-gray-200 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
