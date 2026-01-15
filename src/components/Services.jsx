import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, Zap, Thermometer, 
  Trees, CheckCircle, HardHat, Cog 
} from 'lucide-react';

const services = [
  {
    title: "Obra Civil y Construcción",
    icon: <HardHat className="w-10 h-10 text-secondary" />,
    desc: "Pavimento rígido/flexible, vías, edificaciones y urbanizaciones.",
    details: ["Diseño y planeación", "Remodelación y mantenimiento", "Infraestructura de telecomunicaciones"]
  },
  {
    title: "Ingeniería Eléctrica",
    icon: <Zap className="w-10 h-10 text-secondary" />,
    desc: "Soluciones de media y baja tensión, y energías renovables.",
    details: ["Instalación de plantas eléctricas", "Redes de telecomunicaciones (RF/Microondas)", "Certificación RETIE"]
  },
  {
    title: "Refrigeración y Climatización",
    icon: <Thermometer className="w-10 h-10 text-secondary" />,
    desc: "Mantenimiento preventivo y correctivo para industria y comercio.",
    details: ["Aires acondicionados", "Eficiencia energética", "Diseño de sistemas de frío"]
  },
  {
    title: "Metalmecánica y Soldadura",
    icon: <Hammer className="w-10 h-10 text-secondary" />,
    desc: "Estructuras metálicas robustas y carpintería especializada.",
    details: ["Torres de telecomunicaciones", "Jaulas de seguridad", "Mobiliario industrial y madera"]
  },
  {
    title: "Mantenimiento y Limpieza",
    icon: <Trees className="w-10 h-10 text-secondary" />,
    desc: "Servicios generales de limpieza en sitio y tala.",
    details: ["Retiro de escombros", "Fumigación", "Limpieza de estaciones base"]
  },
  {
    title: "Suministros y Electromecánica",
    icon: <Cog className="w-10 h-10 text-secondary" />,
    desc: "Atención a grupos electrógenos y suministro de combustible.",
    details: ["Suministro de ACPM", "Mantenimiento de generadores (Cummins, Perkins)", "Transferencias automáticas"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-gray-500">Portafolio integral para cubrir todas sus necesidades</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-secondary p-6"
            >
              <div className="flex justify-center mb-4 bg-gray-50 rounded-full w-20 h-20 mx-auto items-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
