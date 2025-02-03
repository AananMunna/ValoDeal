import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Sample Product Data (you would usually fetch this data from an API)
const sampleProducts = [
  {
    id: 1,
    name: { en: "Pure Mustard Oil", bn: "বিশুদ্ধ সরিষার তেল" },
    price: 800.0,
    imageUrl: "https://ghorerbazar.com/cdn/shop/products/Olive-oil.jpg?v=1707771596&width=360",
  },
  {
    id: 2,
    name: { en: "Olive Oil", bn: "জলপাই তেল" },
    price: 1200.0,
    imageUrl: "https://ghorerbazar.com/cdn/shop/products/italian-olive-oil.jpg?v=1707771591&width=360",
  },
  {
    id: 3,
    name: { en: "Organic Honey", bn: "জৈব মধু" },
    price: 600.0,
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
];

const CartPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">{t('cart.pageTitle')}</h1>

        <div className="flex flex-wrap">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            {cart.length === 0 ? (
              <p>{t('cart.emptyMessage')}</p> 
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name[currentLang]}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <h2 className="font-semibold">{item.name[currentLang]}</h2>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-lg"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-lg"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      {t('cart.remove')}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t('cart.summary')}</h2>
              <div className="mb-4">
                <p className="text-lg">{t('cart.totalPrice')}: ${totalPrice.toFixed(2)}</p>
              </div>
              <button className="w-full bg-[#008ecc] text-white py-2 rounded-lg hover:bg-[#006fab]">
                {t('cart.proceedCheckout')}
              </button>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="my-24">
          <h2 className="text-2xl font-bold mb-4">{t('cart.products')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-32">
            {sampleProducts.map((product) => (
              <div key={product.id} className="p-4 border rounded-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name[currentLang]}
                  className="w-full h-full object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name[currentLang]}</h3>
                <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
                <button
                  className="w-full bg-[#008ecc] text-white py-2 rounded-lg"
                  onClick={() => addToCart(product)}
                >
                  {t('cart.addToCart')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
