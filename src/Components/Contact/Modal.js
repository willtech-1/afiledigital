import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./Modal.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
        <div className="modal-text"><h2>{text}</h2></div>
        <div className="modal-btn-container">
          <button className="close-modal-btn" onClick={handleClose}>Close</button>
        </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;