import React from "react";
import { motion } from "framer-motion";

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0,-30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        ease:"easeOut"
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease:"easeOut"
        
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate="animationOne"
      ></motion.div>
    </>
  );
};

export default Loader;
