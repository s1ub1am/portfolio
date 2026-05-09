import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }, []);

  return (
    <div className="text-slate-900 font-sans min-h-screen relative overflow-x-hidden">
      {/* Aurora Background Orbs */}
      <div className="aurora-bg pointer-events-none">
        <div className="aurora-orb w-96 h-96 bg-teal-400/12 top-0 left-1/4" />
        <div className="aurora-orb w-80 h-80 bg-sky-400/10 top-1/4 right-0" style={{ animationDelay: '3s' }} />
        <div className="aurora-orb w-72 h-72 bg-emerald-300/10 bottom-1/3 left-0" style={{ animationDelay: '6s' }} />
        <div className="aurora-orb w-96 h-96 bg-blue-400/10 bottom-0 right-1/4" style={{ animationDelay: '1s' }} />
      </div>


      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
