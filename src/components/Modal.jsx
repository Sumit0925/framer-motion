import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariant = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255) ",
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Modal = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div>
            <motion.div className="modal" variants={modalVariant} >
              <motion.p>Want to make another Pizza?</motion.p>
              <Link to="/">
                <motion.button variants={buttonVariant} whileHover="hover">
                  Start Again
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
