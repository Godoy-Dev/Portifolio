import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [canReplay, setCanReplay] = useState(false);

  useEffect(() => {
    // Cria a instância do áudio uma vez
    const audio = new Audio("/sounds/netflix-intro.mp3");
    audio.volume = 0.4;
    audioRef.current = audio;

    // Tenta tocar automaticamente
    audio
      .play()
      .then(() => {
        console.log("🎵 Som reproduzido com sucesso.");
        setAudioLoaded(true);
      })
      .catch((error) => {
        console.warn("🔇 Autoplay bloqueado. Reproduza manualmente.", error);
        setCanReplay(true);
      });
  }, []);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) =>
        console.error("Erro ao reproduzir manualmente:", error)
      );
    }
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#141414] to-black text-white py-16">

      {/* Camada escura por cima do fundo */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
        {/* Logo animado */}
        <motion.img
          src="/images/gabrielflix-logo.png"
          alt="GabrielFlix Logo"
          className="w-32 md:w-48 lg:w-56 mb-4 rounded-md drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9, filter: "brightness(1.5)" }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: [
              "brightness(1.5)",
              "brightness(0.9)",
              "brightness(1.2)",
              "brightness(1)",
            ],
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Título */}
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Cansado de Currículos Iguais?
        </motion.h1>

        {/* Sinopse */}
        <motion.p
          className="text-gray-300 text-lg max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Descubra um portfólio criativo, direto ao ponto e com um toque de personalidade.
        </motion.p>

        {/* Botões principais */}
        <div className="flex space-x-4 pt-4">
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition"
          >
            🎬 Assistir Agora
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition"
          >
            Contato
          </motion.a>
        </div>

        {/* Botão de som, caso autoplay seja bloqueado */}
        {canReplay && (
          <motion.button
            onClick={handlePlaySound}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            🔊 Reproduzir Som de Introdução
          </motion.button>
        )}
      </div>
    </section>
  );
}
