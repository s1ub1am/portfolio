import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];
        const observers = sections.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.3 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            setTimeout(() => {
                window.scrollTo({ top, behavior: 'smooth' });
            }, 0);
        }
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${(scrolled || isOpen)
            ? 'glass border-b border-slate-200/60'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-9 h-9 rounded-lg glass-bright flex items-center justify-center neon-border group-hover:neon-glow transition-all duration-300">
                        <span className="text-gradient font-display font-bold text-sm">S</span>
                    </div>
                    <span className="font-display font-bold text-slate-900 tracking-wider hidden sm:block text-sm">
                        SHUBHAM<span className="text-gradient">.</span>
                    </span>
                </motion.a>

                {/* Desktop Menu */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:flex items-center gap-1"
                >
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive
                                    ? 'text-neon-blue'
                                    : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-lg glass-bright"
                                        style={{ zIndex: -1 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}

                    {/* Hire Me CTA */}
                    <motion.a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-slate-900 neon-border flex items-center gap-1.5 hover:neon-glow transition-all duration-300"
                    >
                        <HiSparkles size={14} className="text-neon-blue" />
                        Hire Me
                    </motion.a>
                </motion.div>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsOpen((open) => !open)}
                    className="md:hidden p-2 rounded-lg glass-bright text-slate-700 hover:text-slate-900 transition-colors"
                >
                    {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        id="mobile-menu"
                        className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200/60 shadow-lg pointer-events-auto"
                    >
                        <div className="flex flex-col py-4 px-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className="py-3 px-4 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 transition-colors font-medium"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                                className="mt-2 py-3 px-4 rounded-lg text-center text-slate-900 font-semibold neon-border"
                            >
                                Hire Me ✨
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
