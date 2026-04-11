import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }, []);

  return (
    <div className="bg-light text-slate-900 font-sans min-h-screen relative overflow-x-hidden">
      {/* Aurora Background Orbs */}
      <div className="aurora-bg pointer-events-none">
        <div className="aurora-orb w-96 h-96 bg-teal-400/15 top-0 left-1/4" />
        <div className="aurora-orb w-80 h-80 bg-violet-400/10 top-1/4 right-0 delay-1000" style={{ animationDelay: '2s' }} />
        <div className="aurora-orb w-72 h-72 bg-sky-400/10 bottom-1/3 left-0" style={{ animationDelay: '4s' }} />
        <div className="aurora-orb w-96 h-96 bg-emerald-300/10 bottom-0 right-1/4" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
