import { motion } from "framer-motion";
import Card from "./Card";

const filmes = [
  { id: 1, titulo: "Filme 1", imagem: "https://via.placeholder.com/200" },
  { id: 2, titulo: "Filme 2", imagem: "https://via.placeholder.com/200" },
  { id: 3, titulo: "Filme 3", imagem: "https://via.placeholder.com/200" },
  { id: 4, titulo: "Filme 4", imagem: "https://via.placeholder.com/200" }
];

const Catalog = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {filmes.map((filme) => (
        <Card key={filme.id} titulo={filme.titulo} imagem={filme.imagem} />
      ))}
    </motion.div>
  );
};

export default Catalog;
