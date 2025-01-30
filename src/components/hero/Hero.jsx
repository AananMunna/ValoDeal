import React, { useState, useEffect } from "react";

const Hero = () => {
  // State to manage current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of carousel images
  const carouselImages = [
    "https://images.othoba.com/images/thumbs/0718474_Grocery-Combo-Website.jpeg",
    // "https://ghorerbazar.com/cdn/shop/files/Web_Banner_Crystal_Honey.png?v=1736946452&width=1500",
    // "https://scontent.fird1-1.fna.fbcdn.net/v/t39.30808-6/311478319_807478854007765_5716341093143722862_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEr-lDCb7mcneAxxW79RlC-KTzMkQgGQ78pPMyRCAZDvzH-yU4ujYJxins6Vnz0qywbnLizS4lOEPumik63Vuir&_nc_ohc=r4XfrjXfu2YQ7kNvgELDbVT&_nc_zt=23&_nc_ht=scontent.fird1-1.fna&_nc_gid=AEk8uKyPvkPLXFp0OZzlJPR&oh=00_AYB21VOxLCqQOXF7nZqIweJzGS_dIMTzg0oqpKKRZYmzRg&oe=67A1037B"
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="carousel w-full">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${index === currentIndex ? "block" : "hidden"}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default Hero;
