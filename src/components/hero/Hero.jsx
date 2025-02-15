import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [
    "https://images.othoba.com/images/thumbs/0718474_Grocery-Combo-Website.jpeg",
    "https://images.othoba.com/images/thumbs/0723809_Top%20Slider%20Web.png",
    "https://images.othoba.com/images/thumbs/0723848_Atta%20top%20slider%20for%20web%20(1).jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to='/filter'>
    <div className="relative w-full h-[200px] sm:h-[400px] md:h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={carouselImages[currentIndex]}
          src={carouselImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 1, scale: 1.7 }} // Start slightly zoomed in
          animate={{ opacity: 1, scale: .95 }} // Zoom out
          exit={{ opacity: 1, scale: 1.7 }} // Zoom in
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
        />
      </AnimatePresence>
    </div>
    </Link>
  );
};

export default Hero;