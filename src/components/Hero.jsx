import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/pfp.jpeg';

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-2xl font-semibold text-gradient font-display">{value}</div>
        <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
);

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = imgRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePos({ x, y });
    };

    return (
        <section id="hero" className="section-shell min-h-screen flex items-center justify-center pt-24">

                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="text-center md:text-left"
                        >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bright border border-slate-200/70 text-slate-700 text-sm font-medium mb-8"
                        >
                            <HiSparkles className="text-neon-blue" size={14} />
                            AI Engineer @ TCS
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-tight font-display"
                        >
                            <span className="text-slate-900">Hi, I'm </span>
                            <span className="text-gradient">Shubham</span>
                        </motion.h1>

                        {/* Typewriter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-slate-600 mb-6 h-8 font-mono"
                        >
                            <TypeAnimation
                                sequence={[
                                    'AI Engineer', 2000,
                                    'Full-Stack Developer', 2000,
                                    'Building practical AI products', 2000,
                                    'Shipping real-world solutions', 2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-slate-800"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-600 text-base md:text-lg mb-8 max-w-md leading-relaxed mx-auto md:mx-0"
                        >
                            I design and build AI-powered applications end-to-end, from model workflows to frontend experience, with a strong focus on reliability and clarity.
                        </motion.p>

                        {/* Currently Building */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg glass text-xs mb-8 text-slate-600 border border-slate-200/60"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Currently: Exploring agentic workflows with LangGraph
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-3 justify-center md:justify-start mb-8"
                        >
                            {[
                                { href: "https://github.com/s1ub1am", icon: <FaGithub size={18} />, label: "GitHub" },
                                { href: "https://linkedin.com/in/shubhamsabat", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
                                { href: "mailto:shubhamsabat836@gmail.com", icon: <FaEnvelope size={18} />, label: "Email" },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
                        >
                            <motion.a
                                href="#projects"
                                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="shimmer-btn px-7 py-3 rounded-xl font-semibold hover:-translate-y-0.5 transition-all duration-300"
                            >
                                View My Work ✦
                            </motion.a>
                            <motion.a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-7 py-3 rounded-xl font-semibold text-slate-700 bg-white/70 border border-slate-200/70 shadow-sm hover:shadow-md hover:bg-white hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex gap-8 justify-center md:justify-start"
                        >
                            <StatItem value="7+" label="Months Exp" />
                            <div className="w-px bg-slate-300/70" />
                            <StatItem value="2+" label="Projects" />
                            <div className="w-px bg-slate-300/70" />
                            <StatItem value="TCS" label="Current Role" />
                        </motion.div>
                        </motion.div>

                {/* Image — 3D Tilt */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                    className="flex justify-center"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                    ref={imgRef}
                >
                    <div
                        className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-visible"
                        style={{
                            transform: `perspective(800px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
                            transition: 'transform 0.1s ease',
                        }}
                    >
                        {/* Profile image */}
                        <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border border-slate-200 bg-white">
                            <img
                                src={profileImg}
                                alt="Shubham Sabat"
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                            className="absolute -top-4 -right-2 sm:-right-6 glass-bright rounded-xl px-3 py-2 text-xs font-medium text-slate-700 border border-slate-200/70"
                        >
                            🤖 Gen AI
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
                            className="absolute -bottom-4 -left-2 sm:-left-6 glass-bright rounded-xl px-3 py-2 text-xs font-medium text-slate-700 border border-slate-200/70"
                        >
                            💻 Full Stack
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute top-1/2 -right-4 sm:-right-10 glass-bright rounded-xl px-3 py-2 text-xs font-medium text-slate-700 border border-slate-200/70"
                        >
                            ⚡ TCS
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{ delay: 1.2, duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest uppercase text-slate-500">Scroll</span>
                <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <FaArrowDown size={16} className="text-slate-700" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
