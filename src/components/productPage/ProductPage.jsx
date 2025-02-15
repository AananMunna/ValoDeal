import React, { useState } from "react";
import { productsData } from "../data/Data"; // Import product data
import ProductCard from "./ProductCard"; // Import the ProductCard component
import { useTranslation } from "react-i18next";

const ProductPage = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
  const [products, setProducts] = useState(productsData);

  return (
    <div className="container mx-auto lg:pb-10 mt-5 px-2">
      <h1 className="lg:text-3xl font-bold text-center mb-8">{t("allProduct")}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
