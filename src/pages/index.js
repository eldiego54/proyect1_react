import HeaderCart from "../components/HeaderCart";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con carrito */}
      <HeaderCart />

      {/* Espacio para que el header fijo no tape el contenido */}
      <div className="pt-20">
        {/* Título principal */}
        <section className="container mx-auto px-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">ElectroShop</h1>
          <p className="text-gray-600 mt-2">
            La mejor tienda de electrónica online
          </p>
        </section>

        {/* Lista de productos */}
        <ProductList />
      </div>
    </div>
  );
}

