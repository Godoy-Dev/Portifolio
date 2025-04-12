import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Sistema de Estoque",
    image: "/images/estoque.jpg",
    description: "App completo com controle de entrada e saída de produtos.",
    technologies: ["React", "Node.js", "MySQL"]
  },
  {
    title: "Portfólio Profissional",
    image: "/images/portfolio.jpg",
    description: "Site pessoal com projetos, contato e mais.",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    title: "Dashboard Financeiro",
    image: "/images/finance.jpg",
    description: "Painel interativo para controle de gastos.",
    technologies: ["Next.js", "Chart.js"]
  },
  {
    title: "E-commerce Completo",
    image: "/images/ecommerce.jpg",
    description: "Loja virtual com pagamentos e carrinho de compras.",
    technologies: ["React", "Stripe", "MongoDB"]
  }
];

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-red-600"
      onClick={onClick}
    >
      <FaArrowRight size={28} />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-red-600"
      onClick={onClick}
    >
      <FaArrowLeft size={28} />
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <motion.section
      id="projects"
      className="bg-black text-white py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">🚀 Projetos em Destaque</h2>

      <Slider {...settings} className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg mx-2 border-2 border-transparent hover:border-red-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-red-600 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-200"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver Detalhes
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* Modal de detalhes */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black max-w-lg p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-4 text-xl font-bold text-red-600"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="text-sm mb-3">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-red-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Acessar Projeto
            </a>
          </div>
        </div>
      )}
    </motion.section>
  );
}
