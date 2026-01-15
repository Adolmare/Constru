import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Construcción Industrial" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
        >
          SOLUCIONES EMPRESARIALES <span className="text-secondary">INTEGRALES</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Somos tu aliado en construcción, mantenimiento, energía y telecomunicaciones.
          Resultados duraderos con calidad e innovación.
        </motion.p>
        <div className="mt-10">
          <Link to="contacto" smooth={true} className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 cursor-pointer inline-block">
            Cotizar Proyecto
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
