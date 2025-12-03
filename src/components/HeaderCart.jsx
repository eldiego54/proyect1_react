"use client";

import { useContext, useState } from "react";
import { ShoppingCart } from "lucide-react"; // Asegúrate de tener lucide-react instalado
import { CartContext } from "../context/CartContext";
import Link from "next/link";

const HeaderCart = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow fixed top-0 w-full z-50">
      <h1 className="text-xl font-bold text-black">ElectroStore</h1>

      <div className="flex items-center gap-4">
        {/* Carrito */}
        <Link href="/cart" className="relative text-gray-900">
          <ShoppingCart size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Menú */}
        <button
          className="text-lg font-bold text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "≡"}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-14 right-4 bg-white shadow-lg rounded-md p-3">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Nosotros</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderCart;

