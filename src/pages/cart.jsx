"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const router = useRouter();

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-6">
        Mi Carrito ({cart.length} productos)
      </h1>

      <a href="/" className="text-blue-700 hover:underline block mb-6">
        ← Seguir comprando
      </a>

      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Cantidad: {item.qty}</p>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Eliminar
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-200 px-2 rounded"
                      >
                        -
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-200 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <p className="font-semibold">
                  ${(item.price * (item.qty || 1)).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Resumen</h2>

            <p className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>
                $
                {cart
                  .reduce((t, i) => t + i.price * (i.qty || 1), 0)
                  .toFixed(2)}
              </span>
            </p>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-blue-700 text-white font-bold py-3 rounded mt-6"
            >
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;


