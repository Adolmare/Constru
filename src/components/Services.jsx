import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hammer, Zap, Thermometer, 
  Trees, CheckCircle, HardHat, Cog, ChevronLeft, ChevronRight 
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ImageSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); 
    
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
     
      {images.map((img, i) => (
        <motion.img
          key={img}
          src={img}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05 
          }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeInOut" }, 
            scale: { duration: 3, ease: "linear" }  
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-transparent z-10" />
    </div>
  );
};

const services = [
  { 
    title: "Obra Civil", 
    icon: <HardHat />, 
    desc: "Pavimento, vías, edificaciones y urbanizaciones.", 
    details: ["Diseño y planeación", "Mantenimiento"], 
    images: ["/obracivil1.jpg", "/obracivil2.jpg", "/obracivil3.jpg", "/obracivil4.jpg","/obracivil5.jpg","/obracivil6.png"] 
  },
  { 
    title: "Ing. Eléctrica", 
    icon: <Zap />, 
    desc: "Media/baja tensión y energías renovables.", 
    details: ["Plantas eléctricas", "Certificación RETIE"], 
    images: ["/ingelectrica1.jpg", "/ingelectrica2.jpg", "/ingelectrica3.jpg", "/ingelectrica4.jpg","/ingelectrica5.png"] 
  },
  { 
    title: "Climatización/Mantenimiento", 
    icon: <Thermometer />, 
    desc: "Mantenimiento preventivo y correctivo industrial.", 
    details: ["Aires acondicionados", "Eficiencia"], 
    images: ["/mantenimiento1.jpg", "/mantenimiento2.jpg", "/mantenimiento3.jpg",] 
  },
  { 
    title: "Metalmecánica", 
    icon: <Hammer />, 
    desc: "Estructuras metálicas y carpintería.", 
    details: ["Torres", "Soldadura"], 
    images: ["/metalmecanica1.jpg", "/metalmecanica2.jpg", "/metalmecanica3.jpg","/metalmecanica4.jpg","/metalmecanica5.png","/metalmecanica6.jpg"] 
  },
  { 
    title: "Suministros", 
    icon: <Cog />, 
    desc: "Grupos electrógenos y combustible ACPM.", 
    details: ["Plantas electricas", "Transferencias"], 
    images: ["/suministro1.jpg", "/suministro2.jpg", "/suministro3.jpg", "/suministro4.jpg"] 
  }
];

const CompactServices = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-none">Nuestros Servicios</h2>
            <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
          </div>
          
          <div className="flex gap-2">
            <button className="prev-btn p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="next-btn p-2.5 rounded-xl bg-blue-600 text-white shadow-sm hover:opacity-90 transition-all">
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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4 }
          }}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg"
              >
                
                <ImageSlider images={service.images} title={service.title} />

                {/* Contenido */}
                <div className="relative z-20 h-full p-5 flex flex-col justify-end">
                  <div className="mb-3 w-fit p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                    {React.cloneElement(service.icon, { size: 20 })}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-gray-300 text-xs mb-4 line-clamp-2">{service.desc}</p>

                  <div className="flex flex-col gap-1.5 pt-4 border-t border-white/10">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-blue-400 flex-shrink-0" />
                        <span className="text-[11px] text-gray-200 font-medium truncate">{detail}</span>
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