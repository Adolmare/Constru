import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-bold text-xl text-white mb-2">CONSTRUENERGY INGENIERÍAS S.A.S</p>
        <p className="text-sm mb-6">Soluciones Integrales, Resultados Duraderos.</p>
        
        {/* Contenedor de Iconos */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a 
            href="https://www.instagram.com/construenergy_sas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
         
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Construenergy Ingenierías. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;