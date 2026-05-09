import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import urbannestImg from '../assets/urbannest.png';
import promptfallImg from '../assets/promptfall.jpg';
import keysniperImg from '../assets/keysniper.png';
import fintrackImg from '../assets/fintrack.png';
import elevatecvImg from '../assets/elevatecv.png';

const projects = [
    {
        title: "ElevateCV",
        desc: "Resume writing frustrates job seekers—formatting and ATS optimization take forever. ElevateCV handles it in minutes with live preview and proven compliance.",
        tags: ["MERN Stack", "Tailwind CSS"],
        github: "https://github.com/s1ub1am/ElevateCV.git",
        category: "Web",
        accent: "#0f766e",
        image: elevatecvImg,
        featured: true,
    },
    {
        title: "PromptFall",
        desc: "Prompt engineering feels like guesswork without deliberate practice. PromptFall gamifies LLM mastery through interactive challenges designed for real-world skills.",
        tags: ["AIML", "React", "Python", "PostgreSQL"],
        category: "AI",
        accent: "#1d4ed8",
        image: promptfallImg,
        featured: true,
    },
    {
        title: "FinTrack",
        desc: "Personal finance apps either overwhelm or bore—FinTrack keeps it simple. Track spending, see patterns, plan better without the complexity.",
        tags: ["React", "Tailwind", "Chart.js", "Vite"],
        github: "https://github.com/s1ub1am/FinTrack",
        live: "https://s1ub1am.github.io/FinTrack/",
        category: "Web",
        accent: "#b45309",
        image: fintrackImg,
    },
    {
        title: "UrbanNest",
        desc: "Students juggle housing and meal planning across platforms—UrbanNest unifies it. One place for verified hostels, food subscriptions, and seamless payments.",
        tags: ["PHP", "MySQL", "HTML/CSS", "Razorpay"],
        github: "https://github.com/s1ub1am",
        live: "http://urbannest.42web.io",
        category: "Web",
        accent: "#0b7285",
        image: urbannestImg,
    },
    {
        title: "KeySniper",
        desc: "Most typing games feel dated. KeySniper brings arcade energy—destroy enemies by typing faster, neon-soaked, addictive, and surprisingly challenging.",
        tags: ["JavaScript", "HTML/CSS", "Game Dev"],
        github: "https://github.com/s1ub1am/keysniper",
        live: "https://s1ub1am.github.io/keysniper/",
        category: "Game",
        accent: "#334155",
        image: keysniperImg,
    },
    {
        title: "Gesture Arcade",
        desc: "Game controls locked to keyboards? Gesture Arcade breaks free—play games using hand movements detected by computer vision, no controller needed.",
        tags: ["Python", "Pygame", "OpenCV", "MediaPipe"],
        category: "AI",
        accent: "#c2410c",
    }
];

const filters = ['All', 'AI', 'Web', 'Game'];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
        setTilt({ x, y });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(700px) rotateX(${-tilt.y * 0.5}deg) rotateY(${tilt.x * 0.5}deg)`,
                transition: 'transform 0.15s ease',
            }}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${project.featured ? 'md:col-span-1' : ''}`}
        >
            {/* Background */}
            <div className="absolute inset-0 glass border border-slate-200/60 group-hover:border-slate-300/60 transition-colors duration-300" />
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
            ) : (
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: project.accent }} />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            {/* Neon glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ boxShadow: `inset 0 0 30px ${project.accent}20, 0 0 30px ${project.accent}20` }} />

            {/* Content */}
            <div className="relative z-10 h-64 flex flex-col justify-between p-6">
                {/* Top links */}
                <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded-full glass-pill text-[10px] font-semibold tracking-wider"
                        style={{ color: project.accent }}>
                        {project.category}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors"
                                onClick={(e) => e.stopPropagation()}>
                                <FaGithub size={16} />
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors"
                                onClick={(e) => e.stopPropagation()}>
                                <FaExternalLinkAlt size={14} />
                            </a>
                        )}
                    </div>
                </div>

            {/* Bottom info */}
            <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wider text-slate-100 bg-slate-900/60 border border-white/20 backdrop-blur-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1.5 transition-colors duration-300 group-hover:text-slate-100">
                        {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                        {project.desc}
                    </p>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }} />
        </motion.div>
    );
};



const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 soft-gradient pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Portfolio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 font-display">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                    </div>
                    <a href="https://github.com/s1ub1am" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors glass px-4 py-2 rounded-xl border border-slate-200/60 hover:border-slate-300/60">
                        <FaGithub size={16} />
                        View all on GitHub
                    </a>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    {filters.map((f) => (
                        <motion.button
                            key={f}
                            onClick={() => setFilter(f)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${filter === f
                                ? 'shimmer-btn'
                                : 'glass border border-slate-200/60 text-slate-600 hover:text-slate-900 hover:border-slate-300/60'
                                }`}
                        >
                            {f}
                        </motion.button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {filtered.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
