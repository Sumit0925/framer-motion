import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [modal,setModal] = useState(false);



  useEffect(()=>{
    setTimeout(()=>{
      setModal(true)
    },5000)
  },[setModal])

  return (
    <>
      {modal && <Modal />}

      <motion.div
        className="container order"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Thank you for your order :&#41;</h2>
        <motion.p variants={childrenVariant}>
          You ordered a {pizza.base} pizza with:
        </motion.p>
        <motion.div variants={childrenVariant}>
          {pizza.toppings.map((topping) => (
            <div key={topping}>{topping}</div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Order;
