import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import profileImg from '../assets/pfp.jpeg';

const Experience = () => {
    const timeline = [
        {
            year: "Feb 2026 - Present",
            role: "AI Engineer",
            company: "Tata Consultancy Services (TCS)",
            desc: "Spearheading AI initiatives—building agentic workflows, LLM pipelines, and pushing the boundaries of what's possible with enterprise AI.",
            tags: ["LLMs", "Agentic AI", "LangGraph", "Python"],
            color: "from-teal-600/12 to-blue-600/10",
            accent: "#0f766e",
            active: true,
        },
        {
            year: "Sept 2025 - Jan 2026",
            role: "Graduate Trainee",
            company: "Tata Consultancy Services (Ignite Training)",
            desc: "Completed TCS Ignite training — built a strong foundation in full-stack technologies.",
            tags: ["Full Stack", "React", "Node.js", "REST APIs"],
            color: "from-amber-500/12 to-orange-500/10",
            accent: "#b45309",
            active: false,
        },
    ];

    return (
        <section id="experience" className="section-shell py-28">

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Career
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 font-display">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 md:-translate-x-1/2"
                        style={{ background: 'linear-gradient(to bottom, #0f766e, #1d4ed8, #b45309, transparent)' }} />

                    <div className="flex flex-col gap-10">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.22, ease: 'easeOut' }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 z-10">
                                    <div
                                        className="relative w-4 h-4 rounded-full border-2 border-current flex items-center justify-center ring-4 ring-white/80"
                                        style={{ borderColor: item.accent, backgroundColor: '#f7f6f2', boxShadow: `0 0 12px ${item.accent}` }}
                                    >
                                        {item.active && (
                                            <div className="absolute inset-0 rounded-full"
                                                style={{ backgroundColor: item.accent, opacity: 0.2 }} />
                                        )}
                                        <div className="relative z-10 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className={`w-full md:w-[calc(50%-32px)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className={`relative glass rounded-2xl p-6 border border-slate-200/60 bg-gradient-to-br ${item.color} overflow-hidden group`}
                                    >
                                        {/* Active badge */}
                                        {item.active && (
                                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/30">
                                                    <img src={profileImg} alt="Active" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-700 text-[10px] font-semibold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                    NOW
                                                </span>
                                            </div>
                                        )}

                                        {/* Year pill */}
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                                            style={{ backgroundColor: `${item.accent}20`, color: item.accent }}>
                                            <FaBriefcase size={10} />
                                            {item.year}
                                        </span>

                                        <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.role}</h3>
                                        <p className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
                                            <HiSparkles size={12} style={{ color: item.accent }} />
                                            {item.company}
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, i) => (
                                                <span key={i} className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider glass-pill"
                                                    style={{ color: item.accent }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Glow effect */}
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-20 pointer-events-none"
                                            style={{ backgroundColor: item.accent }} />
                                    </motion.div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-[calc(50%-32px)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
