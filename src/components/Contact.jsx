import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-primary mb-6">Contáctanos</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Estamos listos para atender sus requerimientos en construcción, energía y mantenimiento.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teléfonos</p>
                  <a href="tel:+573024426120" className="block text-gray-600 hover:text-secondary">+57 302 4426120</a>
                  <a href="tel:+573041221833" className="block text-gray-600 hover:text-secondary">+57 304 1221833</a>
                  <a href="tel:+573186404765" className="block text-gray-600 hover:text-secondary">+57 318 6404765</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Correos Electrónicos</p>
                  <a href="mailto:construenergyingenieriasas@gmail.com" className="block text-gray-600 hover:text-secondary break-all">
                    construenergyingenieriasas@gmail.com
                  </a>
                  <a href="mailto:ledesma.lopez.fernando@gmail.com" className="block text-gray-600 hover:text-secondary break-all">
                    ledesma.lopez.fernando@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Colombia (Cobertura Nacional)</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border" placeholder="Su nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border" placeholder="correo@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Servicio de Interés</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border">
                  <option>Obra Civil</option>
                  <option>Electricidad</option>
                  <option>Refrigeración</option>
                  <option>Metalmecánica</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border" placeholder="Detalles de su proyecto..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
