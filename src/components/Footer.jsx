import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-bold text-xl text-white mb-2">CONSTRUENERGY INGENIERÍAS S.A.S</p>
        <p className="text-sm mb-4">Soluciones Integrales, Resultados Duraderos.</p>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
