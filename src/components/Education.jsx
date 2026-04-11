import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const educationData = [
    {
        institution: "Chandigarh University",
        location: "Chandigarh, India",
        degree: "MCA in AIML",
        year: "2026 – Present",
        desc: "Pursuing Master of Computer Applications with specialization in AI & ML to deepen theoretical understanding and practical skills in advanced computing.",
        accent: "#0f766e",
        emoji: "🎓",
        active: true,
    },
    {
        institution: "Gayatri Institute of Computer and Management",
        location: "Berhampur, Odisha",
        degree: "B.Sc. in Computer Science",
        year: "2022 – 2025",
        desc: "Affiliated to Berhampur University. Specialized in core CS concepts, Data Structures, graduating with a strong foundation in software engineering.",
        accent: "#f59e0b",
        emoji: "💻",
        active: false,
    },
    {
        institution: "Odisha Adarsha Vidyalaya",
        location: "Hinjilicut, Ganjam, Odisha",
        degree: "Higher Secondary (12th Grade)",
        year: "2020 – 2022",
        desc: "Focus on Science (PCM). Developed analytical skills and a passion for technology during these formative years.",
        accent: "#7c3aed",
        emoji: "⚡",
        active: false,
    },
    {
        institution: "Odisha Adarsha Vidyalaya",
        location: "Bhatakumurada, Ganjam, Odisha",
        degree: "Secondary School (10th Grade)",
        year: "2020",
        desc: "Built a solid academic base with excellence in Mathematics and Science.",
        accent: "#16a34a",
        emoji: "📚",
        active: false,
    }
];

const Education = () => {
    return (
        <section id="education" className="py-28 relative overflow-hidden">
            {/* Background blob */}
            <div className="absolute right-0 top-20 w-72 h-72 bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-neon-purple text-xs font-bold tracking-widest uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                        Academic Background
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        <span className="text-gradient">Education</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-6 border-l border-white/5">
                        {/* Gradient line overlay */}
                        <div className="absolute left-0 top-0 bottom-0 w-px"
                            style={{ background: 'linear-gradient(to bottom, #0f766e, #7c3aed, #0891b2, transparent)' }} />

                        <div className="space-y-8">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12, duration: 0.5 }}
                                    className="relative pl-10"
                                >
                                    {/* Dot */}
                                    <div
                                        className="absolute left-[-21px] top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                                        style={{
                                            borderColor: item.accent,
                                            backgroundColor: '#f7f6f2',
                                            boxShadow: `0 0 10px ${item.accent}60`
                                        }}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                                    </div>

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ x: 6, scale: 1.01 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        className="glass rounded-2xl p-6 border border-white/5 group relative overflow-hidden"
                                    >
                                        {/* Top row */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{item.emoji}</span>
                                                <div>
                                                    <h3 className="text-slate-900 font-bold text-lg group-hover:text-gradient transition-all duration-300">
                                                        {item.institution}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                                        <FaMapMarkerAlt size={10} style={{ color: item.accent }} />
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {item.active && (
                                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                        CURRENT
                                                    </span>
                                                )}
                                                <span className="px-3 py-1 rounded-full text-xs font-bold glass border border-white/10"
                                                    style={{ color: item.accent }}>
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                            <FaGraduationCap size={14} style={{ color: item.accent }} />
                                            <span className="text-sm font-semibold text-slate-700">{item.degree}</span>
                                        </div>

                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>

                                        {/* Glow bg */}
                                        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-[50px] opacity-10 pointer-events-none"
                                            style={{ backgroundColor: item.accent }} />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
