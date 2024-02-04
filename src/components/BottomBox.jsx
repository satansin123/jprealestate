import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const boxVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};

const BottomBox = (props) => {
  const handleClick = () => {
    // Scroll to a particular section when the button is clicked
    scroll.scrollTo("sectionId", {
      duration: 1000,  // Adjust the duration as needed
      smooth: "easeInOutQuart", // You can change the smooth scrolling effect
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={boxVariants}
      className="bg-gray-500 uppercase text-gray-200 text-center text-base rounded-t-md flex justify-center items-center underline underline-offset-4"
    >
      {props.children}
    </motion.button>
  );
};

export default BottomBox;
