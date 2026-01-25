import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-12 bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6">Let's Connect</h2>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/s1ub1am" target="_blank" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/shubhamsabat" target="_blank" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:your-shubhamsabat836@gmail.com" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="text-slate-500 text-sm">
                    &copy; {currentYear} Shubham. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
