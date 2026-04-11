import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { href: "https://github.com/s1ub1am", icon: <FaGithub size={18} />, label: "GitHub", color: "#0f766e" },
        { href: "https://linkedin.com/in/shubhamsabat", icon: <FaLinkedin size={18} />, label: "LinkedIn", color: "#0891b2" },
        { href: "mailto:shubhamsabat836@gmail.com", icon: <FaEnvelope size={18} />, label: "Email", color: "#7c3aed" },
    ];

    return (
        <footer id="contact" className="relative overflow-hidden py-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-white/80 to-transparent pointer-events-none" />
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            {/* Glow orbs */}
            <div className="absolute left-1/4 top-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-amber-300/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-neon-blue text-xs font-bold tracking-widest uppercase mb-6">
                        <HiSparkles size={12} className="text-neon-blue animate-pulse" />
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
                        Let's Build Something
                        <br />
                        <span className="text-gradient">Amazing Together</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-md mx-auto mb-8">
                        Open to exciting opportunities, collaborations, and building the future with AI.
                    </p>

                    <motion.a
                        href="mailto:shubhamsabat836@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 shimmer-btn px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl shadow-emerald-500/30"
                    >
                        <FaEnvelope /> Say Hello 👋
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
                            style={{}}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = social.color;
                                e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
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

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-slate-500 text-sm flex items-center justify-center gap-1.5"
                >
                    © {currentYear} Shubham Sabat. Crafted with
                    <FaHeart className="text-rose-500 text-xs animate-pulse" />
                    and lots of coffee ☕
                </motion.p>

                <p className="text-slate-500 text-xs mt-2 font-mono">
                    Building intelligent systems, one commit at a time.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
