import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 tracking-wide">
                        SOFTWARE DEVELOPER | GEN AI
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight dark:text-white text-gray-900 tracking-tight">
                        Hi, I'm <br />
                        <span className="text-primary">Shubham</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
Software Developer Trainee with experience in Full-Stack Engineering and emerging AI technologies, focused on learning and contributing to scalable, real-world software solutions.                    </p>

                    <div className="flex gap-4 justify-center md:justify-start mb-8">
                        <a href="https://github.com/s1ub1am" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/shubhamsabat" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:your-shubhamsabat836@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                            <FaEnvelope size={24} />
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-primary hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2"
                        >
                            View Work
                        </motion.a>
                        <a href="#contact" className="px-8 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-500 text-gray-900 dark:text-white rounded-lg font-medium transition-all">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-80 md:h-80">
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
                            <img
                                src={profileImg}
                                alt="Shubham"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Minimalist decoration */}
                        <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-gray-200 dark:border-gray-800 rounded-2xl" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600"
            >
                <a href="#about" aria-label="Scroll Down">
                    <FaArrowDown size={24} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
