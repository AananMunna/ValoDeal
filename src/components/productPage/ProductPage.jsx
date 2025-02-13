import React, { useState } from "react";
import { productsData } from "../data/Data"; // Import product data
import ProductCard from "./ProductCard"; // Import the ProductCard component

const ProductPage = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="container mx-auto pb-10 mt-10 px-2">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
