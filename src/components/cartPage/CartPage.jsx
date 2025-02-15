
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext'; // Import the useCart hook

const CartPage = () => {
  const { t, i18n } = useTranslation();
  const { cart = [], removeFromCart, updateQuantity } = useCart();
  const currentLang = i18n.language || "en";
  const [totalPrice, setTotalPrice] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <>
      <Navbar />

      {/* Toast Message for product addition */}
      {toastMessage && (
        <motion.div
          className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-center shadow-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {toastMessage}
        </motion.div>
      )}

      <div className="container mx-auto py-12 px-5">
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">{t('cart.pageTitle')}</h1>

        {/* Cart Items */}
        <motion.div
          className="w-full lg:w-2/3 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {cart?.length === 0 ? (
            <p className="text-center text-lg text-gray-500">{t('cart.emptyMessage')}</p>
          ) : (
            cart.map((item) => (
              <motion.div
                key={item.id}
                className="flex justify-between items-center p-4 border-b rounded-xl mb-6 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <motion.img
                    src={item.imageUrl}
                    alt={item.name?.[currentLang] || item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name?.[currentLang] || item.name}</h2>
                    <p className="text-gray-500 text-sm">
                      ${typeof item.price === "number" ? item.price.toFixed(2) : "0.00"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition duration-200"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition duration-200"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <motion.button
                    className="ml-4 text-red-600 text-sm"
                    onClick={() => removeFromCart(item.id)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('cart.remove')}
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Cart Summary */}
        <motion.div
          className="w-full lg:w-1/3 mx-auto mt-8"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('cart.summary')}</h2>
            <div className="mb-6">
              <p className="text-lg text-gray-600">{t('cart.totalPrice')}: ${totalPrice.toFixed(2)}</p>
            </div>
            <motion.button
              className="w-full py-3 bg-[#008ecc] text-white rounded-lg text-lg shadow-md hover:bg-[#006fab] hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {t('cart.proceedCheckout')}
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;