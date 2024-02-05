import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import BottomBox from "./BottomBox";
import React, { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0, translateY: 50 }, // Hidden initially with translateY
  visible: { opacity: 1, translateY: 0, transition: { delay: 2 } }, // Visible after animation with delay
  animate: {
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.4,
    },
  },
};

const BottomGrid = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 700);
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

  const handleScrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 absolute bottom-20 ml-10   w-full max-w-screen-lg mx-auto z-30 h-[10vh] ${
        isSmallDevice ? "grid grid-cols-3 bottom-80 gap-3 ml-3" : ""
      }`}
    >
      <BottomBox onClick={() => handleScrollToSection("bestDealsSection")}>
        Check For Best Deals
      </BottomBox>
      <BottomBox onClick={() => handleScrollToSection("aboutUsSection")}>
        About Us
      </BottomBox>
      <BottomBox onClick={() => handleScrollToSection("someDealsSection")}>
        Some of our Deals
      </BottomBox>
    </motion.div>
  );
};

export default BottomGrid;
