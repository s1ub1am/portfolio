import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaReact, FaJs, FaHtml5, FaNodeJs, FaPython,
    FaGitAlt, FaLinux, FaBrain, FaCode
} from 'react-icons/fa';
import {
    SiTailwindcss, SiFramer, SiExpress, SiDjango, SiPostgresql,
    SiOpencv, SiPostman, SiMongodb, SiVite
} from 'react-icons/si';

const categories = [
    {
        title: "Frontend",
        emoji: "🎨",
        accent: "#0f766e",
        skills: [
            { name: "React", icon: <FaReact />, level: 90 },
            { name: "JavaScript", icon: <FaJs />, level: 88 },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
            { name: "Framer Motion", icon: <SiFramer />, level: 80 },
            { name: "HTML5/CSS3", icon: <FaHtml5 />, level: 92 },
        ]
    },
    {
        title: "Backend",
        emoji: "⚙️",
        accent: "#1d4ed8",
        skills: [
            { name: "Node.js", icon: <FaNodeJs />, level: 82 },
            { name: "Express", icon: <SiExpress />, level: 80 },
            { name: "Django", icon: <SiDjango />, level: 75 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 78 },
            { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        ]
    },
    {
        title: "AIML",
        emoji: "🤖",
        accent: "#0b7285",
        skills: [
            { name: "Python", icon: <FaPython />, level: 90 },
            { name: "Gen AI (LLMs)", icon: <FaBrain />, level: 88 },
            { name: "Agentic AI", icon: <FaBrain />, level: 85 },
            { name: "LangGraph", icon: <FaCode />, level: 78 },
            { name: "OpenCV", icon: <SiOpencv />, level: 72 },
            { name: "Prompt Eng.", icon: <FaBrain />, level: 90 },
        ]
    },
    {
        title: "Tools",
        emoji: "🛠️",
        accent: "#b45309",
        skills: [
            { name: "Git/GitHub", icon: <FaGitAlt />, level: 88 },
            { name: "VS Code", icon: <FaCode />, level: 95 },
            { name: "Postman", icon: <SiPostman />, level: 85 },
            { name: "Vite", icon: <SiVite />, level: 82 },
            { name: "Linux", icon: <FaLinux />, level: 75 },
        ]
    }
];

const Skills = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="skills" className="section-shell py-28">

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 font-display">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setActive(i)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${active === i
                                ? 'text-slate-900'
                                : 'glass border border-slate-200/60 text-slate-600 hover:text-slate-900'
                                }`}
                            style={active === i ? {
                                backgroundColor: `${cat.accent}14`,
                                borderColor: `${cat.accent}40`,
                                boxShadow: `0 12px 24px ${cat.accent}20`,
                                border: `1px solid ${cat.accent}40`
                            } : {}}
                        >
                            {cat.emoji} {cat.title}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Skill chips */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {categories[active].skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    whileHover={{ scale: 1.08, y: -4 }}
                                    className="skill-chip flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default"
                                    style={{ '--chip-accent': categories[active].accent }}
                                >
                                    <span style={{ color: categories[active].accent, fontSize: '1rem' }}>
                                        {skill.icon}
                                    </span>
                                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skill bars */}
                        <div className="max-w-2xl mx-auto space-y-4">
                            {categories[active].skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="glass rounded-xl p-4 border border-slate-200/60"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span style={{ color: categories[active].accent }}>{skill.icon}</span>
                                            <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                                        </div>
                                        <span className="text-xs font-semibold" style={{ color: categories[active].accent }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ delay: i * 0.08 + 0.2, duration: 0.8, ease: 'easeOut' }}
                                            className="h-full rounded-full progress-bar-fill"
                                            style={{
                                                background: `linear-gradient(90deg, ${categories[active].accent}, ${categories[active].accent}90)`,
                                                boxShadow: `0 0 8px ${categories[active].accent}60`
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
