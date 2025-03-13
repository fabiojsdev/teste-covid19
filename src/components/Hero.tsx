import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Fundo animado com gradiente */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 z-0"
      ></motion.div>

      {/* Conteúdo centralizado */}
      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Título com Animação */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Monitoramento COVID-19
        </motion.h1>

        {/* Descrição com Animação */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          Acompanhe os dados atualizados sobre casos, óbitos e recuperações da COVID-19 no Brasil e no mundo.
        </motion.p>

        {/* Botão de Chamada para Ação (CTA) com Animação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://covid19-brazil-api-docs.vercel.app/#req_0962a88e26be4feba9e0c6c4490105c6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Ver Dados
          </a>
        </motion.div>
      </div>

      {/* Efeito de onda no fundo (opcional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent z-0"
      ></motion.div>
    </section>
  );
};

export default Hero;