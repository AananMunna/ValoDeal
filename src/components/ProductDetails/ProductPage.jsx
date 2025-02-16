import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BuyNowPopup from "./BuyNowPopup";
import { useCart } from "../../context/CartContext"; // Import the useCart hook

const ProductPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();
  const { cart } = useCart(); // Use the cart state from the context

  return (
    <div className="p-5">
      {/* Buy Now Button */}
      <motion.button
        onClick={() => setIsPopupOpen(true)}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t("cart.buy")}
      </motion.button>

      {/* Buy Now Popup */}
      <BuyNowPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        cart={cart}
      />
    </div>
  );
};

export default ProductPage;