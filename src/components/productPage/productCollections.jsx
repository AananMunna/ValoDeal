import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Example product collections with categories
const productCollections = [
  {
    category: "Organic Oil",
    products: [
      {
        id: 1,
        name: "Pure Mustard Oil",
        price: "Tk 800.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/products/Olive-oil.jpg?v=1707771596&width=360",
      },
      {
        id: 2,
        name: "Olive Oil",
        price: "Tk 1200.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/products/italian-olive-oil.jpg?v=1707771591&width=360",
      },
    ],
  },
  {
    category: "HONEY",
    products: [
      {
        id: 3,
        name: "Organic Honey",
        price: "Tk 600.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
      },
      {
        id: 4,
        name: "Wild Honey",
        price: "Tk 850.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/files/WhatsAppImage2025-01-12at6.50.59PM.jpg?v=1736690220&width=360",
      },
    ],
  },
  {
    category: "Ghee",
    products: [
      {
        id: 5,
        name: "Gawa Ghee",
        price: "Tk 900.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
      },
      {
        id: 6,
        name: "Cow Ghee",
        price: "Tk 950.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/files/250gm-ghee.jpg?v=1722492356&width=533",
      },
    ],
  },
  {
    category: "Dates",
    products: [
      {
        id: 7,
        name: "Fresh Dates",
        price: "Tk 500.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/products/Egyptian-Medjool-Dates_6f3ab996-bc77-42f9-85af-c2b92f313430.png?v=1707771459&width=360",
      },
      {
        id: 8,
        name: "Premium Dates",
        price: "Tk 800.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/files/Large-Combo---8KG.png?v=1720522805&width=360",
      },
    ],
  },
  {
    category: "Tea/Snacks",
    products: [
      {
        id: 9,
        name: "Tea Biscuits",
        price: "Tk 120.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/products/tea-2.jpg?v=1707771628&width=360",
      },
      {
        id: 10,
        name: "Herbal Tea",
        price: "Tk 250.00",
        imageUrl: "https://ghorerbazar.com/cdn/shop/products/Maccoffee-Gold-95-Gram.jpg?v=1707771545&width=360",
      },
    ],
  },
];

const ProductCard = ({ product }) => {
    const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const { t } = useTranslation();
  return (
    <Link
    to={`/productDetails/${product.id}`} 
  state={{ product }}
    className="bg-white p-4 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img
          src={product.imageUrl}
          alt={t(`products.${product.name}`)}
          className="w-full h-48 object-cover rounded-xl shadow-sm mb-4"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
        {t(`products.${product.name[currentLang]}`)}
      </h2>
    </Link>
  );
};

const ProductCollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(productCollections[0].category);
  const { t } = useTranslation();

  // Map translated categories to original keys
  const handleCategoryChange = (translatedCategory) => {
    const originalCategory = productCollections.find(
      (collection) => t(`categories.${collection.category}`) === translatedCategory
    )?.category;

    setSelectedCategory(originalCategory || productCollections[0].category);
  };

  const selectedCollection = productCollections.find(
    (collection) => collection.category === selectedCategory
  );

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t("productCollections")}
      </h1>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {productCollections.map((collection) => (
          <button
            key={collection.category}
            className={`px-6 py-2 text-lg font-medium rounded-full my-2 ${
              selectedCategory === collection.category
                ? "bg-[#008ecc] block px-4 py-2 text-sm text-white cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:outline-none active:scale-95"
                : "bg-gray-200 text-gray-800 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:outline-none active:scale-95"
            } transition-colors duration-200 `}
            onClick={() => handleCategoryChange(t(`categories.${collection.category}`))}
          >
            {t(`categories.${collection.category}`)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {selectedCollection?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCollectionPage;
