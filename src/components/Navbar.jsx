import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (href) => {
        setIsOpen(false);
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen
                ? 'paper-panel backdrop-blur-md border-b border-slate-200/70'
                : 'bg-transparent'
                }`}>
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.a
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl paper-panel flex items-center justify-center">
                            <span className="font-display text-xl text-slate-900">S</span>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Portfolio</div>
                            <div className="text-sm font-semibold text-slate-900">Shubham Sabat</div>
                        </div>
                    </motion.a>

                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => handleNavClick(link.href)}
                                className="px-3 py-2 text-xs uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setIsOpen((open) => !open)}
                        className="md:hidden p-2 rounded-lg paper-panel text-slate-700"
                    >
                        {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <motion.button
                            type="button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm"
                        />
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                            className="relative mt-20 mx-6 paper-panel rounded-2xl border border-slate-200/70"
                        >
                            <div className="px-6 py-4 space-y-2">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        type="button"
                                        onClick={() => handleNavClick(link.href)}
                                        className="w-full text-left py-3 text-sm uppercase tracking-widest text-slate-700"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
