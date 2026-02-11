import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, CheckCircle2, XCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Estado para el modal
  const [modal, setModal] = useState({
    show: false,
    type: "success", // 'success' o 'error'
    title: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setModal({
          show: true,
          type: "success",
          title: "¡Envío Exitoso!",
          message:
            "Gracias por contactarnos. Nuestro equipo técnico se comunicará contigo a la brevedad.",
        });
        form.current.reset();
      })
      .catch((error) => {
        setModal({
          show: true,
          type: "error",
          title: "Error al enviar",
          message:
            "Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo o llámanos directamente.",
        });
        console.error("EmailJS Error:", error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contacto" className="py-20 bg-white relative">
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-gray-100">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* ... tus campos de formulario se mantienen igual ... */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre Completo
            </label>
            <input
              name="user_name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 border outline-none transition-all"
              placeholder="Su nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              name="user_email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 border outline-none transition-all"
              placeholder="correo@empresa.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de Teléfono
            </label>
            <div className="mt-1 flex gap-2">
              <select
                name="country_code"
                className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 border outline-none transition-all bg-white"
              >
                <option value="+57">🇨🇴 +57</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+54">🇦🇷 +54</option>
                <option value="+56">🇨🇱 +56</option>
                <option value="+51">🇵🇪 +51</option>
              
              </select>
              <input
                name="user_phone"
                type="tel"
                required
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 border outline-none transition-all"
                placeholder="300 123 4567"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Servicio de Interés
            </label>
            <select
              name="service"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 border outline-none transition-all"
            >
              <option>Obra Civil</option>
              <option>Electricidad</option>
              <option>Refrigeración</option>
              <option>Metalmecánica</option>
              <option>Electromecánica</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 border outline-none transition-all"
              placeholder="Detalles de su proyecto..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-semibold text-white transition-all duration-300 transform active:scale-95 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"}`}
          >
            {isSending ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </form>
      </div>

      {/* --- MODAL FLUIDO --- */}
      <AnimatePresence>
        {modal.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal({ ...modal, show: false })}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Contenido del Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative z-10 text-center"
            >
              <button
                onClick={() => setModal({ ...modal, show: false })}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-4 flex justify-center">
                {modal.type === "success" ? (
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 size={48} className="text-green-600" />
                  </div>
                ) : (
                  <div className="bg-red-100 p-3 rounded-full">
                    <XCircle size={48} className="text-red-600" />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {modal.title}
              </h3>
              <p className="text-gray-600 mb-6">{modal.message}</p>

              <button
                onClick={() => setModal({ ...modal, show: false })}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-colors ${modal.type === "success" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
