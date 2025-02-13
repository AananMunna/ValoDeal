// src/pages/CartPage.js
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from 'framer-motion';
// Import product data
import { sampleProducts, productsData } from "../data/Data";

const CartPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toastMessage, setToastMessage] = useState(""); // Toast message state

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setToastMessage(`${product.name[currentLang]} ${t('cart.addedToCart')}`); // Set Toast message
    setTimeout(() => {
      setToastMessage(""); // Hide the message after 3 seconds
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  React.useEffect(() => {
    calculateTotal();
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
          {cart.length === 0 ? (
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
                    alt={item.name[currentLang]}
                    className="w-16 h-16 object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name[currentLang]}</h2>
                    <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition duration-200"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
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

        {/* Product List */}
        <div className="my-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">{t('cart.products')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={product.imageUrl}
                  alt={product.name[currentLang]}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name[currentLang]}</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <motion.button
                  className="w-full py-3 bg-[#008ecc] text-white rounded-lg text-lg shadow-md hover:bg-[#006fab] transition duration-300"
                  onClick={() => addToCart(product)}
                  whileHover={{ scale: 1.05 }}
                >
                  {t('cart.addToCart')}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
