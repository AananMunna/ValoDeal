import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const BuyNowPopup = ({ isOpen, onClose, cart }) => {
  const { t } = useTranslation();
  const [selectedShipping, setSelectedShipping] = useState(70); // Default shipping cost
  const [orderNote, setOrderNote] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleShippingChange = (cost) => {
    setSelectedShipping(cost);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      ...formData,
      products: cart,
      totalPrice: cart.reduce((total, product) => total + product.price, 0) + selectedShipping,
      orderNote,
    };
    console.log("Order Details:", orderDetails);
    alert(t("popup.orderConfirmed"));
    onClose();
  };

  const subtotal = cart.reduce((total, product) => total + product.price, 0);
  const totalPrice = subtotal + selectedShipping;

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex z-[100] items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-hidden={!isOpen}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-500">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">
                  {t("popup.title")}
                </h2>
                <button
                  onClick={onClose}
                  className="text-2xl text-white hover:text-gray-200 transition-colors"
                  aria-label="Close"
                >
                  ✖
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6">
              {/* Input Fields */}
              <div className="space-y-4">
                <motion.input
                  type="text"
                  name="name"
                  required
                  placeholder={t("popup.name")}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  whileFocus={{ scale: 1.02 }}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <motion.input
                  type="text"
                  name="phone"
                  required
                  placeholder={t("popup.phone")}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  whileFocus={{ scale: 1.02 }}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <motion.input
                  type="text"
                  name="address"
                  required
                  placeholder={t("popup.address")}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  whileFocus={{ scale: 1.02 }}
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              {/* Shipping Method */}
              <div className="mt-6 space-y-3">
                <h3 className="font-medium text-lg text-gray-800">
                  {t("popup.shippingMethod")}
                </h3>
                {[
                  { label: t("popup.insideDhaka"), cost: 70 },
                  { label: t("popup.outSideDhaka"), cost: 130 },
                ].map((option, index) => (
                  <motion.label
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="radio"
                      name="shipping"
                      required
                      checked={selectedShipping === option.cost}
                      onChange={() => handleShippingChange(option.cost)}
                      className="w-5 h-5 accent-purple-500"
                    />
                    <span className="text-gray-700">
                      {option.label} - Tk {option.cost}
                    </span>
                  </motion.label>
                ))}
              </div>

              {/* Product Details */}
              <div className="mt-6 space-y-4">
                {cart.map((product, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">Tk {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-6 space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-700">{t("popup.subtotal")}</span>
                  <span className="text-gray-800">Tk {subtotal}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-700">{t("popup.shippingCost")}</span>
                  <span className="text-gray-800">Tk {selectedShipping}</span>
                </p>
                <hr className="my-2 border-gray-200" />
                <p className="flex justify-between font-bold text-lg">
                  <span className="text-gray-800">{t("popup.total")}</span>
                  <span className="text-purple-600">Tk {totalPrice}</span>
                </p>
              </div>

              {/* Order Note */}
              <motion.textarea
                placeholder={t("popup.note")}
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="w-full border p-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="3"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Footer */}
              <div className="p-6 border-t bg-gray-50">
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("popup.confirmOrder")}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Component
export default function ProductPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  // Example cart data (can be fetched from an API or state management)
  const [cart, setCart] = useState([
    {
      name: "Egyptian Medjool Small 1kg",
      price: 1700,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Organic Almonds 500g",
      price: 1200,
      image: "https://via.placeholder.com/100",
    },
  ]);

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
}