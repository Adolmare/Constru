import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="font-sans text-gray-800 antialiased bg-gray-50">
        <Helmet>
          <title>Construenergy Ingenierías S.A.S | Soluciones Integrales</title>
          <meta name="description" content="Líderes en construcción, ingeniería eléctrica, refrigeración y mantenimiento en Colombia. Soluciones empresariales integrales." />
          <meta name="keywords" content="construcción, electricidad, refrigeración, mantenimiento, ingeniería, Colombia" />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
