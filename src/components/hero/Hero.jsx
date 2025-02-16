import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const carouselImages = [
    {
      url: "https://images.othoba.com/images/thumbs/0718474_Grocery-Combo-Website.jpeg",
      title: t("hero.best_grocery"),
      subtitle: t("hero.best_grocery_desc"),
    },
    {
      url: "https://images.othoba.com/images/thumbs/0723848_Atta%20top%20slider%20for%20web%20(1).jpeg",
      title: t("hero.daily_essentials"),
      subtitle: t("hero.daily_essentials_desc"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-[0.9] blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Text Overlay with Glassmorphism */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          key={carouselImages[currentIndex].title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white drop-shadow-lg">
            {carouselImages[currentIndex].title}
          </h1>
          <p className="text-lg md:text-2xl mt-2 text-gray-200 drop-shadow-lg">
            {carouselImages[currentIndex].subtitle}
          </p>
        </motion.div>

        {/* Premium Call-To-Action Button */}
        <motion.div
          className="mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link
            to="/filter"
            className="px-10 py-4 text-lg font-semibold text-white bg-[#008ECC] rounded-full 
              transition-all duration-300 ease-in-out relative group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#008ECC] via-[#00a2ff] to-[#008ECC] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10">{t("hero.shop_now")}</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
