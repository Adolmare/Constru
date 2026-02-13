import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer,
  Zap,
  Thermometer,
  CheckCircle,
  HardHat,
  Cog,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ImageSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} - ${index}`}
          loading="lazy" 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 4, ease: "linear" },
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent z-10" />
    </div>
  );
};

const services = [
  {
    title: "Obra Civil",
    icon: <HardHat />,
    desc: "Pavimento, vías, edificaciones y urbanizaciones.",
    details: ["Diseño y planeación", "Mantenimiento"],
    images: ["/obracivil1.webp", "/obracivil2.webp", "/obracivil3.webp", "/obracivil4.webp", "/obracivil5.webp", "/obracivil6.webp"],
  },
  {
    title: "Ing. Eléctrica",
    icon: <Zap />,
    desc: "Media/baja tensión y energías renovables.",
    details: ["Plantas eléctricas", "Certificación RETIE"],
    images: ["/ingelectrica1.webp", "/ingelectrica2.webp", "/ingelectrica3.webp", "/ingelectrica4.webp", "/ingelectrica5.webp"],
  },
  {
    title: "Climatización",
    icon: <Thermometer />,
    desc: "Mantenimiento preventivo y correctivo industrial.",
    details: ["Aires acondicionados", "Eficiencia energética"],
    images: ["/mantenimiento1.webp", "/mantenimiento2.webp", "/mantenimiento3.webp"],
  },
  {
    title: "Metalmecánica",
    icon: <Hammer />,
    desc: "Estructuras metálicas y carpintería.",
    details: ["Torres de comunicación", "Soldadura especializada"],
    images: ["/metalmecanica1.webp", "/metalmecanica2.webp", "/metalmecanica3.webp", "/metalmecanica4.webp", "/metalmecanica5.webp", "/metalmecanica6.webp"],
  },
  {
    title: "Suministros",
    icon: <Cog />,
    desc: "Grupos electrógenos y combustible ACPM.",
    details: ["Plantas eléctricas", "Transferencias automáticas"],
    images: ["/suministro1.webp", "/suministro2.webp", "/suministro3.webp", "/suministro4.webp"],
  },
];

const CompactServices = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
       
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-none">
              Nuestros Servicios
            </h2>
            <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
          </div>

          <div className="flex gap-2">
            <button className="prev-btn p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-95">
              <ChevronLeft size={18} />
            </button>
            <button className="next-btn p-2.5 rounded-xl bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-all active:scale-95">
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
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-[420px] rounded-2xl overflow-hidden group shadow-lg bg-white"
              >
               
                <ImageSlider images={service.images} title={service.title} />

                
                <div className="relative z-20 h-full p-6 flex flex-col justify-end">
                  <div className="mb-4 w-fit p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                    {React.cloneElement(service.icon, { size: 22 })}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.desc}
                  </p>

                  <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle
                          size={14}
                          className="text-blue-400 flex-shrink-0"
                        />
                        <span className="text-xs text-gray-100 font-medium truncate">
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