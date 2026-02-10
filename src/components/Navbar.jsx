import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoconstru.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Inicio', 'Nosotros', 'Servicios', 'Proceso', 'Contacto'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Texto - Identidad Corporativa */}
          <Link to="inicio" smooth={true} className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Construenergy Logo" className="h-10 w-auto md:h-14" />
            
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm md:text-xl tracking-wider text-blue-900">
                CONSTRUENERGY
              </span>
              <span className="font-semibold text-xs md:text-lg uppercase text-blue-800">
                Ingenierías S.A.S
              </span>
              {/* Texto actualizado según tu solicitud */}
              <span className="font-medium text-[9px] md:text-xs tracking-tight text-blue-700">
                Soluciones Integrales Empresariales
              </span>
            </div>
          </Link>
          
          {/* Menú Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="px-3 py-2 text-sm font-bold text-blue-900 hover:text-red-600 transition-all cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-blue-900 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="text-blue-900 hover:bg-gray-50 hover:text-red-600 block px-3 py-4 rounded-md text-base font-bold border-b border-gray-50"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;