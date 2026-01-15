import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoconstru.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Inicio', 'Nosotros', 'Servicios', 'Proceso', 'Contacto'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-primary z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="inicio" smooth={true} className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Construenergy Logo" className="h-10 w-auto md:h-12" />
            <span className="text-white font-bold text-lg md:text-xl tracking-wider hidden sm:block">
              CONSTRUENERGY
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white hover:border-b-2 border-secondary px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      { <div className="md:hidden bg-primary pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
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
