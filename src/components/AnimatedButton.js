import React from "react";
import { motion } from "framer-motion";

export default function AnimatedButton({ text, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#E50914" }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
