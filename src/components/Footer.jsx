import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { href: "https://github.com/s1ub1am", icon: <FaGithub size={18} />, label: "GitHub", color: "#0f766e" },
        { href: "https://linkedin.com/in/shubhamsabat", icon: <FaLinkedin size={18} />, label: "LinkedIn", color: "#1d4ed8" },
        { href: "mailto:shubhamsabat836@gmail.com", icon: <FaEnvelope size={18} />, label: "Email", color: "#b45309" },
    ];

    return (
        <footer id="contact" className="section-shell py-20 text-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-white/80 to-transparent pointer-events-none" />
            <div className="absolute inset-0 soft-gradient pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-slate-700 text-xs font-semibold tracking-widest uppercase mb-6">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 font-display">
                        Have an idea in mind?
                        <br />
                        <span className="text-gradient">Let&apos;s build it well.</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                        I work on AI and full-stack products with a focus on clear UX, maintainable code, and production reliability.
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-slate-600 mb-8">
                        Based in India
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        Usually replies within 24 hours
                    </div>

                    <motion.a
                        href="mailto:shubhamsabat836@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 shimmer-btn px-8 py-3.5 rounded-2xl font-semibold text-base"
                    >
                        <FaEnvelope /> Email Shubham
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    {socials.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-slate-600 transition-all duration-300 border border-slate-200/60"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = social.color;
                                e.currentTarget.style.boxShadow = `0 10px 22px ${social.color}30`;
                                e.currentTarget.style.borderColor = `${social.color}40`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '';
                                e.currentTarget.style.boxShadow = '';
                                e.currentTarget.style.borderColor = '';
                            }}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="section-divider mb-8 max-w-xs mx-auto" />

                <div className="flex justify-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">
                    {[
                        { label: 'About', href: '#about' },
                        { label: 'Projects', href: '#projects' },
                        { label: 'Top', href: '#hero' },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="hover:text-slate-800 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-slate-500 text-sm"
                >
                    © {currentYear} Shubham Sabat
                </motion.p>

                <p className="text-slate-500 text-xs mt-2 font-mono">
                    AI Engineer at TCS · Full-Stack Builder
                </p>
            </div>
        </footer>
    );
};

export default Footer;
