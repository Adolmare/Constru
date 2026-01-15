import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Sobre Nosotros</h2>
          <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Proveer soluciones innovadoras y eficientes en el campo de la construcción y mantenimiento, 
              garantizando la durabilidad y funcionalidad de los proyectos a través de un servicio excepcional.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-secondary">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser reconocidos como líderes en la industria de la construcción y mantenimiento, 
              destacándonos por nuestra calidad, innovación y compromiso con la sostenibilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
