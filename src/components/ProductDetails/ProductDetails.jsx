import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state; // Destructure the product from location.state
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  if (!product) {
    return <div>Product not found</div>;
  }

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
              scale: 1.03, // Slightly scale up the image
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add a soft shadow
              transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
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
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name[currentLang]}
            </h1>

            {/* Product Price */}
            <p className="text-2xl font-semibold text-gray-800">
              {product.price[currentLang]}
            </p>

            {/* Product Description */}
            <p className="text-gray-700">
              {product.desc[currentLang]} {/* Add translation for description */}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col space-y-4">
              <motion.button
                className="w-full bg-[#008ecc] text-white py-3 rounded-lg hover:bg-[#006fab] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cart.addToCart')}
              </motion.button>
              <motion.button
                className="w-full bg-[#ff9900] text-white py-3 rounded-lg hover:bg-[#e68a00] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cart.buy')}
              </motion.button>
            </div>

            {/* Additional Product Details */}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
