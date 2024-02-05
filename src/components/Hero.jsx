import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Add this line
import Carousel from './Carousel'; // Import your Carousel component

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.6,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
    rotateZ: 20,
  },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: custom === 0 ? -20 : custom === 1 ? 0 : 20,
  }),
};

const Hero = () => {
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

  const containerVariants = {
    animate: {
      transition: {
        delayChildren: isSmallDevice ? 0 : 2,
        staggerChildren: isSmallDevice ? 0 : 0.6,
      },
    },
  };

  return (
    <div className={`grid ${isSmallDevice ? "grid-cols-1" : "grid-cols-3"} mx-auto max-w-screen-xl w-full ${isSmallDevice ? "flex flex-row justify-center items-center " : ""}`}>
      <div className={`z-40 text-left col-span-2 flex gap-3 relative flex-col pt-[15vh] ${isSmallDevice ? "p-4 top-200 text-center  pt-[5vh]" : ""}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full"
        >
          <h1 className={`bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300 text-4xl uppercase tracking-wide ${isSmallDevice ? "text-3xl" : ""}`}>
            Looking For Something
          </h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300 text-7xl">
            More than a Home
          </h1>
          <p className="uppercase py-2 text-slate-500 text-base tracking-wider">
            Check Out Some New Deals For Your Loved Ones
          </p>
          <button className={`py-2 border border-white text-white w-[20vw] px-4 text-md tracking-widest uppercase mt-3 ${isSmallDevice ? "w-[40vw]" : ""}`}>
            See More
          </button>
        </motion.div>
      </div>
      {/* Conditionally render the motion.div based on isSmallDevice */}
      {!isSmallDevice ? (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative z-40 ${isSmallDevice ? "flex flex-col" : ""}`}
        >
          <motion.img
            variants={imgVariants}
            custom={0}
            src="https://anuhar.com/blog/wp-content/uploads/2022/11/apartment-in-Hyderabad.png"
            className="h-[70vh] w-full -left-[10vw] -rotate-12 absolute object-cover z-10 top-5"
          />
          <motion.img
            custom={1}
            variants={imgVariants}
            src="https://nestcon.com/wp-content/uploads/2022/03/DHRUA-TARA-ELEVATION.jpg"
            className="h-[70vh] w-full absolute object-cover z-10 top-5"
          />
          <motion.img
            custom={2}
            variants={imgVariants}
            src="https://sumadhuragroup.com/wp-content/uploads/2017/11/Luxury-Apartments-In-Hyderabad-Near-Hitec-City.jpg"
            className="h-[70vh] left-[10vw] rotate-12 w-full absolute object-cover z-10 top-5"
          />
        </motion.div>
      ) : (
        <Carousel />
      )}
    </div>
  );
};

export default Hero;
