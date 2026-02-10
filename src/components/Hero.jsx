import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      /* pt-24 asegura que el contenido baje para no chocar con el navbar fijo */
      className="relative min-h-screen flex items-center justify-center bg-gray-900 pt-24 pb-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero.png"
          alt="Construcción Industrial"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Container - Ajustado para bajarlo más */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} // Viene un poco de arriba hacia abajo
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 mb-10 md:mt-16 md:mb-12" // He añadido margen superior para bajarlo
          >
            <img 
              src="/logoconstru.png" 
              alt="logo" 
              className="w-40 sm:w-56 md:w-72 h-auto mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" 
            />
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            CONSTRUENERGY <br className="hidden md:block" /> 
            <span className="text-red-600">INGENIERÍAS S.A.S</span>
          </motion.h1>

          {/* Párrafo descriptivo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 px-2"
          >
            Somos tu aliado en construcción, mantenimiento, energía y
            telecomunicaciones. Resultados duraderos con calidad e innovación.
          </motion.p>

          {/* Botón de Acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="contacto"
              smooth={true}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer inline-block text-lg"
            >
              Cotizar Proyecto
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;