import React from "react";
import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      className="bg-[#181818] bg-opacity-95 p-6 md:p-10 rounded-xl shadow-xl my-10 border border-gray-700"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-2 border-red-600 pb-2 text-center">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
