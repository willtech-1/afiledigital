import React from "react";
import { motion } from "framer-motion";
import "./Backdrop.css";

const Backdrop = ({ children, onSubmit }) => {
  return (
    <motion.div

      className="backdrop"
      onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;