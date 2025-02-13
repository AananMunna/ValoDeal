import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation(); // Get language function from react-i18next
  const currentLang = i18n.language || "en"; // Default to English if no language is set

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
      whileHover={{ scale: 1.05, y: -5 }} // On hover, scale up and move the card slightly
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link to={`/productDetails/${product.id}`} state={{ product }}>
        {/* Product Image */}
        <motion.img
          src={product.imageUrl}
          alt={product.name[currentLang]}
          className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
          whileHover={{ scale: 1.1 }} // Zoom effect on hover
          transition={{ duration: 0.3 }}
        />

        {/* Product Name */}
        <h2 className="text-sm sm:text-md font-semibold text-gray-900 mb-2 truncate">
          {product.name[currentLang]}
        </h2>

        {/* Product Price */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg sm:text-xl font-semibold text-gray-900">
            {product.price[currentLang]}
          </p>
          {product.discountPrice && (
            <p className="text-sm sm:text-md text-red-600 line-through">
              {product.discountPrice[currentLang]}
            </p>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full bg-blue-600 text-white py-3 sm:py-2 rounded-lg mt-2 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.3 }}
          onClick={() => addToCart(product)}
        >
          {t("cart.addToCart")}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
