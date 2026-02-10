import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, Zap, Thermometer, 
  Trees, CheckCircle, HardHat, Cog 
} from 'lucide-react';

const services = [
  {
    title: "Obra Civil y Construcción",
    icon: <HardHat className="w-10 h-10" />,
    desc: "Pavimento rígido/flexible, vías, edificaciones y urbanizaciones.",
    details: ["Diseño y planeación", "Remodelación y mantenimiento", "Infraestructura de telecomunicaciones"],
    image:"/Ingenería.png", // Asegúrate de que tengan la barra al inicio si están en la raíz de public
  },
  {
    title: "Ingeniería Eléctrica",
    icon: <Zap className="w-10 h-10" />,
    desc: "Soluciones de media y baja tensión, y energías renovables.",
    details: ["Instalación de plantas eléctricas", "Redes de telecomunicaciones (RF/Microondas)", "Certificación RETIE"],
    image:"/electrico.png",
  },
  {
    title: "Refrigeración y Climatización",
    icon: <Thermometer className="w-10 h-10" />,
    desc: "Mantenimiento preventivo y correctivo para industria y comercio.",
    details: ["Aires acondicionados", "Eficiencia energética", "Diseño de sistemas de frío"],
    image:"/frio.png",
  },
  {
    title: "Metalmecánica y Soldadura",
    icon: <Hammer className="w-10 h-10" />,
    desc: "Estructuras metálicas robustas y carpintería especializada.",
    details: ["Torres de telecomunicaciones", "Jaulas de seguridad", "Mobiliario industrial y madera"],
    image:"/soldadura2.png",
  },
  {
    title: "Mantenimiento y Limpieza",
    icon: <Trees className="w-10 h-10" />,
    desc: "Servicios generales de limpieza en sitio y tala.",
    details: ["Retiro de escombros", "Fumigación", "Limpieza de estaciones base"],
    image:"/maquina.png",
  },
  {
    title: "Suministros y Electromecánica",
    icon: <Cog className="w-10 h-10" />,
    desc: "Atención a grupos electrógenos y suministro de combustible.",
    details: ["Suministro de ACPM", "Mantenimiento de generadores (Cummins, Perkins, Modasa, Yorking, Kipor, y otras)", "Transferencias automáticas"],
    image:"/ultima.png",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              // CAMBIO PRINCIPAL 1: Estructura del contenedor
              // - Se eliminó 'bg-white' y 'p-6' para que la imagen llegue a los bordes.
              // - Se eliminó el borde superior de color para un look más limpio de imagen completa.
              // - Se añadió 'relative', 'h-full' y 'min-h-[450px]' para darle altura a la tarjeta.
              className="relative overflow-hidden rounded-2xl shadow-xl group h-full min-h-[450px] flex flex-col justify-end"
            >
              
              {/* CAPA 1 (z-0): Imagen de fondo */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  // La imagen siempre se ve. El hover solo hace un ligero zoom.
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  onError={(e) => {
                    e.target.style.display = 'none'; 
                    e.target.parentElement.style.backgroundColor = '#1f2937'; 
                  }}
                />
              </div>

              {/* CAMBIO PRINCIPAL 2: Capa de opacidad (Overlay) */}
              {/* CAPA 2 (z-10): Esta capa oscura se coloca SOBRE la imagen pero DEBAJO del texto */}
              {/* Usamos un degradado para que sea más oscuro abajo donde está el texto */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

             {/* CAPA 3 (z-20): Contenido */}
             {/* Aquí es donde ahora colocamos el padding (p-8) */}
             <div className="relative z-20 p-8 flex flex-col h-full pointer-events-none justify-end">
                <div className="mb-auto pointer-events-auto"> 
                   <div className="inline-flex p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-inner">
                    {React.cloneElement(service.icon, { className: `w-8 h-8 text-white` })}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 mt-4 text-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 mb-2 border-t border-white/20 pt-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300 font-medium">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;