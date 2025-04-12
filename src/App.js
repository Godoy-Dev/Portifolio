import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Section from "./components/Section";


function App() {
  return (
    <Router>
      <motion.div
        className="bg-[#141414] text-white min-h-screen font-['Montserrat'] flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <div className="w-full max-w-[1200px] px-4">
          {/* HERO com fundo de imagem estilo Netflix */}
          <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
  {/* 🎥 Vídeo de fundo estilo Netflix */}

  {/* 🔲 Camada escura sobre o vídeo */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

  {/* Componente Hero por cima */}
  <div className="relative z-20">
    <Hero />
  </div>
</div>


          {/* Seções estilizadas */}
          <Section title="💻 Sobre Mim">
  <section className="bg-black text-white px-6 py-16 w-full">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
      
      {/* 📸 Imagem do Perfil */}
      <img
        src="/images/perfil.jpg"
        alt="Gabriel Godoy"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-red-600"
      />

      {/* 📝 Texto Sobre Mim */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">🎥 Sobre o Criador</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
          Olá! Meu nome é <strong>Gabriel Godoy</strong> e sou <strong>Almoxarife na Aptiv</strong>,
          atualmente em transição de carreira para a área de <strong>Desenvolvimento Full Stack</strong>.
          Sou apaixonado por tecnologia, design moderno e soluções práticas.
        </p>
        <p className="mt-4 text-gray-400">
          Com formação em Gestão da Tecnologia da Informação, venho estudando e desenvolvendo projetos com <strong>React, Node.js e MySQL</strong>,
          sempre buscando criar experiências únicas e impactantes — como esse portfólio estilo Netflix 🎬.
        </p>
      </div>
    </div>
  </section>
</Section>

          <Section title="⚡ Minhas Habilidades">
            <Skills />
          </Section>
          <Section title="🏆 Experiência Profissional">
            <Experience />
          </Section>
          <Section title="📜 Certificações">
            <Certifications />
          </Section>
          <Section title="🚀 Projetos em Destaque">
            <Projects />
          </Section>
          <Section title="🗣️ Depoimentos">
            <Testimonials />
          </Section>
          <Section title="📩 Entre em Contato">
            <Contact />
          </Section>
        </div>
        <Footer />
      </motion.div>
    </Router>
  );
}

/* 🔥 Projetos com Figurinhas Centralizados */
const ProjectsWithStickers = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
    {[
      {
        title: "Sistema de Estoque 📦",
        image: "/images/estoque.jpg",
        description: "Gerenciamento completo de produtos.",
      },
      {
        title: "Portfólio Profissional 🎨",
        image: "/images/portfolio.jpg",
        description: "Meu site pessoal e profissional.",
      },
      {
        title: "Dashboard Financeiro 💰",
        image: "/images/finance.jpg",
        description: "Controle de gastos e receitas.",
      },
    ].map((project, index) => (
      <motion.div
        key={index}
        className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
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
        </div>
      </motion.div>
    ))}
  </div>
);

/* 🔥 Contato com Ícone Animado Centralizado */
const ContactWithIcon = () => (
  <div className="text-center">
    <motion.div
      className="text-6xl mb-4"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      📩
    </motion.div>
    <p className="text-lg text-gray-300">
      Vamos trabalhar juntos! Fale comigo para dúvidas ou propostas.
    </p>
    <motion.a
      href="#contact"
      className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-red-700 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Enviar Mensagem
    </motion.a>
  </div>
);

export default App;
