import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { 
  Hammer, Zap, Thermometer, 
  Trees, CheckCircle, HardHat, Cog, ChevronLeft, ChevronRight 
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  { title: "Obra Civil", icon: <HardHat />, desc: "Pavimento, vías, edificaciones y urbanizaciones.", details: ["Diseño y planeación", "Mantenimiento"], image:"/Ingenería.png" },
  { title: "Ing. Eléctrica", icon: <Zap />, desc: "Media/baja tensión y energías renovables.", details: ["Plantas eléctricas", "Certificación RETIE"], image:"/electrico.png" },
  { title: "Climatización", icon: <Thermometer />, desc: "Mantenimiento preventivo y correctivo industrial.", details: ["Aires acondicionados", "Eficiencia"], image:"/frio.png" },
  { title: "Metalmecánica", icon: <Hammer />, desc: "Estructuras metálicas y carpintería.", details: ["Torres", "Soldadura"], image:"/soldadura2.png" },
  { title: "Mantenimiento", icon: <Trees />, desc: "Limpieza en sitio, tala y servicios generales.", details: ["Fumigación", "Descapote"], image:"/maquina.png" },
  { title: "Suministros", icon: <Cog />, desc: "Grupos electrógenos y combustible ACPM.", details: ["Plantas electricas", "Transferencias"], image:"/ultima.png" }
];

const CompactServices = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Compacto */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-none">Nuestros Servicios</h2>
            <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
          </div>
          
          <div className="flex gap-2">
            <button className="prev-btn p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="next-btn p-2.5 rounded-xl bg-primary text-white shadow-sm hover:opacity-90 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 }, // Más tarjetas visibles
            1280: { slidesPerView: 4 }   // Tamaño compacto en desktop
          }}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="relative h-[380px] rounded-2xl overflow-hidden group shadow-lg"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent z-10" />
                </div>

                {/* Contenido Reducido */}
                <div className="relative z-20 h-full p-5 flex flex-col justify-end">
                  
                  <div className="mb-3 w-fit p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                    {React.cloneElement(service.icon, { size: 20 })}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs mb-4 line-clamp-2">
                    {service.desc}
                  </p>

                  {/* Detalles minimalistas */}
                  <div className="flex flex-col gap-1.5 pt-4 border-t border-white/10">
                    {service.details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary flex-shrink-0" />
                        <span className="text-[11px] text-gray-200 font-medium truncate">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompactServices;