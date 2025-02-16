import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import BuyNowPopup from "./BuyNowPopup"; // Import the popup component

const ProductDetails = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [isBuyNowPopupOpen, setIsBuyNowPopupOpen] = useState(false); // For Buy Now Popup

  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state; // Destructure the product from location.state
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  const handleBuyNow = () => {
    setIsBuyNowPopupOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-8">
        {/* Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section with Subtle Hover Effect */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name[currentLang]}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Product Information Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name[currentLang]}
            </h1>

            <p className="text-2xl font-semibold text-gray-800">
              {product.price[currentLang]}
            </p>

            <p className="text-gray-700">{product.desc[currentLang]}</p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col">
              <motion.button
                className="w-full bg-[#008ecc] text-white py-3 rounded-lg hover:bg-[#006fab] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
              >
                {t("cart.addToCart")}
              </motion.button>

              {/* Popup Message */}
              {showPopup && (
                <motion.div
                  className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-center shadow-md z-50 text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t("cart.addedToCart")}
                </motion.div>
              )}
                
                {/* Buy Now Popup */}
      <BuyNowPopup
        isOpen={isBuyNowPopupOpen}
        onClose={() => setIsBuyNowPopupOpen(false)}
        product={product}
      />
            </div>
          </motion.div>
        </div>
      </div>

      

      <Footer />
    </>
  );
};

export default ProductDetails;
