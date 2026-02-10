import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = ({ 
  phoneNumber = "573186404765", 
  message = "Hola, estoy interesado en sus servicios." 
}) => {

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end group">
      
     
      <div className="hidden md:flex items-center mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="bg-white text-gray-800 text-sm font-semibold py-1 px-3 rounded shadow-md border border-gray-100 whitespace-nowrap">
          ¡Contactanos!
        </span>
      </div>

      
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors"
   
        style={{ width: '3.5rem', height: '3.5rem' }} 
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
  
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>

        
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 md:w-9 md:h-9" // Icono ligeramente más grande en desktop
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.235c0-5.443 4.429-9.876 9.878-9.876 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.444-4.432 9.876-9.88 9.876m9.925-17.39C19.298 1.71 15.936 0 12.05 0 5.496 0 .16 5.335.16 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.236-6.17-3.486-8.42z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;