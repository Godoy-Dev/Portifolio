import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-md 
                 hover:bg-red-700 hover:scale-105 transition-transform 
                 focus:outline-none focus:ring-4 focus:ring-red-400 
                 active:scale-95"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
