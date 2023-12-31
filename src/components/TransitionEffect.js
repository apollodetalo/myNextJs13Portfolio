import React from "react";
import { motion } from "framer-motion";

//This is where the transition magic effect happens
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-nvidia"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", w: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", w: "0%" }}
        transition={{ delay: 0.1, duration: 0.1, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", w: "0%" }}
        transition={{ delay: 0.1, duration: 0.1, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
