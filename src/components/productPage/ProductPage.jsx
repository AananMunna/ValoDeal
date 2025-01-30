import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Gawa Ghee/গাওয়া ঘি",
    price: "Tk 900.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
  },
  {
    id: 2,
    name: "Kashmiri sidr Honey",
    price: "Tk 1,500.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
  {
    id: 3,
    name: "KHEJURI Jhola Gurr/ঝোলা",
    price: "Tk 780.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
  {
    id: 1,
    name: "Gawa Ghee/গাওয়া ঘি",
    price: "Tk 900.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
  },
  {
    id: 2,
    name: "Kashmiri sidr Honey",
    price: "Tk 1,500.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
  {
    id: 3,
    name: "KHEJURI Jhola Gurr/ঝোলা",
    price: "Tk 780.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
  {
    id: 1,
    name: "Gawa Ghee/গাওয়া ঘি",
    price: "Tk 900.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
  },
  {
    id: 2,
    name: "Kashmiri sidr Honey",
    price: "Tk 1,500.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
  {
    id: 3,
    name: "KHEJURI Jhola Gurr/ঝোলা",
    price: "Tk 780.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
  {
    id: 3,
    name: "KHEJURI Jhola Gurr/ঝোলা",
    price: "Tk 780.00",
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2 truncate">{product.name}</h2> {/* Apply truncate here */}
      <p className="text-md font-bold text-gray-800 mb-3">{product.price}</p>
      <button className="w-full bg-[#008ecc] text-white py-2 rounded-lg hover:bg-[#006fab]">
        Add to Cart
      </button>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
