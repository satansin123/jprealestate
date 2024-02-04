import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import BottomBox from "./BottomBox";

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.4,
    },
  },
};

const BottomGrid = () => {
  const handleScrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="grid grid-cols-3 gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg mx-auto z-30 h-[10vh]"
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
