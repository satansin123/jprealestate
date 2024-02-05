import React, { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';

const images = [
  "https://anuhar.com/blog/wp-content/uploads/2022/11/apartment-in-Hyderabad.png",
  "https://nestcon.com/wp-content/uploads/2022/03/DHRUA-TARA-ELEVATION.jpg",
  "https://sumadhuragroup.com/wp-content/uploads/2017/11/Luxury-Apartments-In-Hyderabad-Near-Hitec-City.jpg",
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const imgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Carousel = ({ isSmallDevice }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      // You need to handle resizing logic here if necessary
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const autoChangeInterval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(autoChangeInterval);
    };
  }, [currentImageIndex]); // Trigger auto-change when the currentImageIndex changes

  const nextImage = () => {
    controls.start({ opacity: 0 }).then(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      controls.start({ opacity: 1 });
    });
  };

  const prevImage = () => {
    controls.start({ opacity: 0 }).then(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      controls.start({ opacity: 1 });
    });
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative z-40 ${isSmallDevice ? "flex flex-col" : ""}`}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            variants={imgVariants}
            custom={index}
            src={src}
            className={`h-[20vh] w-full relative object-cover z-10 top-20 ${
              index === currentImageIndex ? '' : 'hidden'
            }`}
            animate={controls}
          />
        ))}
      </motion.div>
      <button onClick={prevImage}></button>
      <button onClick={nextImage}></button>
    </div>
  );
};

export default Carousel;
