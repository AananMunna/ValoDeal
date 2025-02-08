import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

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
          {/* Product Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={product.imageUrl}
              alt={product.name[currentLang]}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Product Information Section */}
          <div className="space-y-6">
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
              <button className="w-full bg-[#008ecc] text-white py-3 rounded-lg hover:bg-[#006fab] transition-all duration-300">
                {t('cart.addToCart')}
              </button>
              <button className="w-full bg-[#ff9900] text-white py-3 rounded-lg hover:bg-[#e68a00] transition-all duration-300">
                {t('cart.buy')}
              </button>
            </div>

            {/* Additional Product Details */}
             
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;