import React from 'react';

const processSteps = [
  { number: "01", title: "Consulta Inicial", desc: "Entendemos sus necesidades." },
  { number: "02", title: "Propuesta", desc: "Plan técnico y económico detallado." },
  { number: "03", title: "Contrato", desc: "Formalización y garantías." },
  { number: "04", title: "Ejecución", desc: "Desarrollo con estándares de calidad." },
  { number: "05", title: "Entrega", desc: "Satisfacción y seguimiento." }
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 bg-[#FA0004] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Modelo de Trabajo</h2>
          <p className="mt-4 text-white/90">Desde la consulta inicial hasta la entrega final.</p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white text-[#FA0004] rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-4 border-4 border-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-white/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
