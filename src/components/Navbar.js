import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-black text-white p-4"
    >
      <h1>Meu Portfólio</h1>
    </motion.nav>
  );
};

export default Navbar;
