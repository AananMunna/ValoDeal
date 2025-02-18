import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const sections = [
  { id: "aboutUs", title: "About Us" },
  { id: "returnPolicy", title: "Return Policy" },
  { id: "refundPolicy", title: "Refund Policy" },
  { id: "customerService", title: "Customer Service" },
];

const AboutUs = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("About Us");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const section = sections.find((s) => s.id === hash);
    setPageTitle(section ? section.title : "About Us");
  }, [location]);

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Animated Title */}
      <motion.h1
        className="text-5xl font-bold text-gray-900 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {pageTitle}
      </motion.h1>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg font-medium px-4 py-2 rounded-lg bg-gray-100 hover:bg-[#008ecc] hover:text-white transition-all duration-300"
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* About Us Section */}
      <motion.div
        id="aboutUs"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/luxury-shopping.svg" alt="Shopping" className="w-full rounded-xl shadow-xl" />
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Your Ultimate Shopping Destination</h2>
          <p className="text-gray-600 text-lg">
            We provide top-quality products at unbeatable prices, ensuring a smooth and premium shopping experience.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          { title: "Fast Delivery", icon: "🚀", desc: "Quick & secure shipping." },
          { title: "100% Secure", icon: "🔒", desc: "Your payments are protected." },
          { title: "24/7 Support", icon: "📞", desc: "We’re here anytime you need us." },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-xl rounded-xl text-center transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Return & Refund Policy */}
      {["returnPolicy", "refundPolicy"].map((section, index) => (
        <motion.div
          id={section}
          key={section}
          className="mb-16 bg-gray-100 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900">{sections.find((s) => s.id === section).title}</h2>
          <p className="text-gray-600 text-lg mt-4">
            {section === "returnPolicy"
              ? "You can return products within 7 days for an exchange."
              : "Refunds are processed within 3-5 business days after we receive the return."}
          </p>
        </motion.div>
      ))}

      {/* Customer Service */}
      <motion.div
        id="customerService"
        className="mb-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900">Customer Service</h2>
        <p className="text-gray-600 text-lg mt-4">Need help? Contact us anytime.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="tel:+8801234567890" className="px-4 py-2 bg-[#008ecc] text-white rounded-lg hover:bg-[#0077b6]">
            Call Now
          </a>
          <a href="mailto:support@valodeal.com" className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
            Email Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
