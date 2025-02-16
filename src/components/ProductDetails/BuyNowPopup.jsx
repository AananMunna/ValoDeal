import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const BuyNowPopup = ({ isOpen, onClose, product }) => {
  const [selectedShipping, setSelectedShipping] = useState(70); // Default shipping cost
  const [orderNote, setOrderNote] = useState("");

  const handleShippingChange = (cost) => {
    setSelectedShipping(cost);
  };



  const totalPrice = product.price + selectedShipping;

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
          className="fixed inset-0 flex z-[100] items-center justify-center bg-black bg-opacity-50"
          aria-modal="true"
          role="dialog"
          aria-hidden={!isOpen}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-[90%] max-w-md rounded-xl shadow-lg flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  ক্যাশ অন ডেলিভারিতে <br /> অর্ডার করতে আপনার তথ্য দিন
                </h2>
                <button
                  onClick={onClose}
                  className="text-2xl text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  ✖
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6">
              {/* Input Fields */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="ফোন নাম্বার"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="এড্রেস"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Shipping Method */}
              <div className="mt-6 space-y-3">
                <h3 className="font-medium text-lg">শিপিং যেখানে</h3>
                {[
                  { label: "ঢাকা সিটির ভিতরে", cost: 70 },
                  { label: "উপগ্রাম সিটির ভিতরে", cost: 70 },
                  { label: "ঢাকা এবং উপগ্রাম সিটির বাহিরে", cost: 130 },
                ].map((option, index) => (
                  <label key={index} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={selectedShipping === option.cost}
                      onChange={() => handleShippingChange(option.cost)}
                      className="w-5 h-5"
                    />
                    <span className="text-gray-700">
                      {option.label} - Tk {option.cost}
                    </span>
                  </label>
                ))}
              </div>

              {/* Product Details */}
              <div className="mt-6 flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500">Tk {product.price}</p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="mt-6 space-y-2">
                <p className="flex justify-between">
                  <span>সাব টোটাল</span>
                  <span>Tk {product.price}</span>
                </p>
                <p className="flex justify-between">
                  <span>ডেলিভারি চার্জ</span>
                  <span>Tk {selectedShipping}</span>
                </p>
                <hr className="my-2" />
                <p className="flex justify-between font-bold text-lg">
                  <span>সর্বমোট</span>
                  <span>Tk {totalPrice}</span>
                </p>
              </div>

              {/* Order Note */}
              <textarea
                placeholder="Order note"
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="w-full border p-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>

            {/* Footer */}
            <div className="p-6 border-t">
              <button
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => alert("Order Confirmed!")}
              >
                আপনার অর্ডার কনফার্ম করতে ক্লিক করুন
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Component
export default function ProductPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const product = {
    name: "Egyptian Medjool Small 1kg",
    price: 1700,
    image: "https://via.placeholder.com/100",
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div className="p-5">
      {/* Buy Now Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="w-full bg-[#ff9900] text-white py-3 rounded-lg hover:bg-[#e68a00] transition-all duration-300"
      >
        {t("cart.buy")}
      </button>

      {/* Buy Now Popup */}
      <BuyNowPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        product={product}
      />
    </div>
  );
}