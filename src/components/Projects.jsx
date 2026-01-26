import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import urbannestImg from '../assets/urbannest.png';
import promptfallImg from '../assets/promptfall.jpg';
import keysniperImg from '../assets/keysniper.png';
import fintrackImg from '../assets/fintrack.png';

const projects = [
    {
        title: "PromptFall",
        desc: "A gamified platform to master Prompt Engineering. I built this to help developers understand LLMs better through interactive challenges.",
        tags: ["Gen AI", "React", "Python", "PostgreSQL"],
        // No links for internal resource
        color: "bg-indigo-600",
        image: promptfallImg
    },
    {
        title: "FinTrack",
        desc: "Personal finance tracker to manage wealth. Track expenses, income, and view monthly trends with simplified analytics.",
        tags: ["React", "Tailwind", "Chart.js", "Vite"],
        github: "https://github.com/s1ub1am/FinTrack", // Assumed based on pattern and user provided live link
        live: "https://s1ub1am.github.io/FinTrack/",
        color: "bg-green-500",
        image: fintrackImg
    },
    {
        title: "UrbanNest",
        desc: "Complete accommodation solution. Connects students with vetted hostels and food subscriptions. Handles payments and fast approvals.",
        tags: ["PHP", "MySQL", "HTML/CSS", "JS", "Razorpay"],
        github: "https://github.com/s1ub1am",
        live: "http://urbannest.42web.io",
        color: "bg-rose-600",
        image: urbannestImg
    },
    {
        title: "KeySniper",
        desc: "A fast-paced neon typing game. Type words to destroy approaching enemies before they breach your defenses.",
        tags: ["JavaScript", "HTML/CSS", "Game Dev", "Typing"],
        github: "https://github.com/s1ub1am/keysniper",
        live: "https://s1ub1am.github.io/keysniper/",
        color: "bg-purple-600",
        image: keysniperImg
    },
    {
        title: "Gesture Arcade",
        desc: "Interactive game collection controlled entirely by hand gestures. Uses Computer Vision to map physical movements to in-game actions.",
        tags: ["Python", "Pygame", "OpenCV", "MediaPipe"],
        // No links (Private)
        color: "bg-orange-600"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6"
                >
                    <div className="text-center md:text-left">
                        <span className="text-secondary font-bold tracking-wider text-sm uppercase">Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 dark:text-white text-gray-900">Featured Projects</h2>
                    </div>
                    <a href="https://github.com/s1ub1am" className="text-gray-600 dark:text-gray-400 hover:text-primary flex items-center gap-2 transition-colors">
                        View all on GitHub <FaGithub />
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-64 rounded-xl overflow-hidden cursor-pointer" // Reduced height and rounded-xl
                        >
                            {/* Background Image or Color */}
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className={`absolute inset-0 ${project.color} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Links (Icons) */}
                            <div className="absolute top-4 right-4 flex gap-3 z-20">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all" title="View Code">
                                        <FaGithub size={18} />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all" title="Live Demo">
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                )}
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="flex flex-wrap gap-2 mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-foreground transition-colors">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
