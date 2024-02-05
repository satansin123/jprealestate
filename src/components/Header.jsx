import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const pathMatchRoute = (route) => route === location.pathname;

  return (
    <div>
      <motion.div
        initial={{
          width: 0,
          height: isSmallDevice ? '17vh' : '5vw',
        }}
        animate={{
          width: '100vw',
          height: isSmallDevice ? '17vh' : '5vw',
        }}
        transition={{
          duration: 1.1,
          ease: 'easeInOut',
          delay: 0.2,
        }}
        className="bg-gradient-to-b from-slate-950 to-slate-700 h-screen z-0 absolute left-0 top-0"
        ></motion.div>
        <div className={`shadow-sm sticky top-0 z-40 ${isSmallDevice ? "px-2" : ""}`}>
          <header className={`flex justify-between items-center px-3 max-w-6xl mx-auto ${isSmallDevice ? "flex justify-around" : ""}`}>
            <button onClick={() => navigate("/")}>
              <Logo />
            </button>
            <div>
            <ul className={`flex ${isSmallDevice ? "flex-col items-around" : "space-x-10"}`}>
            <NavItem
              path="/"
              text="Home"
              pathMatchRoute={pathMatchRoute}
              navigate={navigate}
            />
            <NavItem
              path="/offers"
              text="Offers"
              pathMatchRoute={pathMatchRoute}
              navigate={navigate}
            />
            <NavItem
              path="/sign-in"
              text="Sign In"
              pathMatchRoute={pathMatchRoute}
              navigate={navigate}
            />
          </ul>
        </div>
      </header>
    </div>
    </div>
  );
};

const NavItem = ({ path, text, pathMatchRoute, navigate }) => (
  <motion.li
    initial={{
      opacity: 0,
      y: -20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 3,
      ease: 'easeInOut',
    }}
    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
      pathMatchRoute(path) && "text-black border-b-red-500"
    }`}
    onClick={() => navigate(path)}
  >
    {text}
  </motion.li>
);


export default Header;