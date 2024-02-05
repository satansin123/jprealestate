import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        delay: 1.3,
        type: "spring",
        stiffness: 110,
      }}
      className="text-slate-100"
    >
      <div className={`text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase`}>
        JP Real Estate
      </div>
      <div className={`text-xs md:text-sm text-slate-500 uppercase tracking-widest`}>
        Best in the market right now
      </div>
    </motion.div>
  );
};

export default Logo;
