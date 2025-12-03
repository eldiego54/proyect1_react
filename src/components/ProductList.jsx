"use client";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios.get("http://localhost:3001/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Cargando productos...</p>;

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {products.map(product => (
        <article key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-400">{product.category}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Agregar al carrito
          </button>
        </article>
      ))}
    </section>
  );
};

export default ProductList;

// "use client";

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Auriculares Bluetooth",
//     price: 59.99,
//     image: "/images/auriculares.jpg",
//     category: "Audio",
//   },
//   {
//     id: 2,
//     name: "Smartphone 128GB",
//     price: 499.99,
//     image: "/images/smartphone.jpg",
//     category: "Móviles",
//   },
//   {
//     id: 3,
//     name: "Teclado Mecánico",
//     price: 89.99,
//     image: "/images/teclado.jpg",
//     category: "Periféricos",
//   },
//   {
//     id: 4,
//     name: "Mouse Gamer",
//     price: 39.99,
//     image: "/images/mouse.jpg",
//     category: "Periféricos",
//   },
//   {
//     id: 5,
//     name: "Monitor 24''",
//     price: 149.99,
//     image: "/images/monitor.jpg",
//     category: "Pantallas",
//   },
// ];

// const ProductList = () => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
//       {products.map((product) => (
//         <article
//           key={product.id}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-40 object-cover rounded mb-3"
//           />
//           <h2 className="text-lg font-semibold">{product.name}</h2>
//           <p className="text-gray-600">${product.price}</p>
//           <p className="text-sm text-gray-400">{product.category}</p>
//           <button
//             onClick={() => addToCart(product)}
//             className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Agregar al carrito
//           </button>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default ProductList;



