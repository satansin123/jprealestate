import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BgAnimation = () => {
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
  return (
    <>
      <motion.div
        initial={{
          width: 0,
          height: isSmallDevice ? "50vh" : "100vh",
        }}
        animate={{
          width: isSmallDevice ? "100vw" : "100vw",
          height: isSmallDevice ? "50vh" : "100vh",
        }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="bg-gradient-to-b from-slate-950 to-slate-700 h-screen z-0 absolute left-0 top-0"
      ></motion.div>

      {/* Adjusted the width and margin for better responsiveness */}
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: isSmallDevice ? "100vw" : "80vw",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className={`bg-slate-950 border-t-2 border-slate-700 h-[15vh] z-20 absolute left-0 bottom-20 ${isSmallDevice ? "flex justify-center items-center bottom-80 h-[15vh]" : ""}`}
      ></motion.div>

      {/* Adjusted the width, height, and position for better responsiveness */}
      <motion.div
        initial={{
          x: isSmallDevice ? "-50vw" : "-100vw",
          rotateZ:  20,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.7,
        }}
        
        className={`bg-gray-800 h-[170vh] w-[60vw] z-00 absolute -left-[10vw] -top-[50vh] ${isSmallDevice ? "h-[100vh]" : ""}`}
      >
        
      </motion.div>
    </>
  );
};

export default BgAnimation;
