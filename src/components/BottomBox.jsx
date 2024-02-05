import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import React, { useState, useEffect } from "react";

const boxVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};

const BottomBox = (props) => {
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
  const handleClick = () => {
    // Scroll to a particular section when the button is clicked
    scroll.scrollTo("sectionId", {
      duration: 10,  // Adjust the duration as needed
      smooth: "easeInOutQuart", // You can change the smooth scrolling effect
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={boxVariants}
      className={`bg-slate-800 uppercase text-white text-center text-base rounded-t-md flex justify-center items-center underline underline-offset-4 ${
        isSmallDevice ? " flex flex-display flex-col w-20 h-10 text-xs" : "" // Adjust the width and height for small devices
      }`}
      
    >
      {props.children}
    </motion.button>
  );
};

export default BottomBox;
