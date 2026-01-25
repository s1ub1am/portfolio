import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython,
    FaGitAlt, FaLinux, FaBrain, FaCode
} from 'react-icons/fa';
import {
    SiTailwindcss, SiFramer, SiExpress, SiDjango, SiPostgresql,
    SiOpencv, SiPostman, SiVite
} from 'react-icons/si';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: <FaReact /> },
            { name: "JavaScript (ES6+)", icon: <FaJs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Framer Motion", icon: <SiFramer /> },
            { name: "HTML5/CSS3", icon: <FaHtml5 /> }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
        ]
    },
    {
        title: "AI & ML",
        skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "Gen AI (LLMs)", icon: <FaBrain /> }, // Generic Brain for Gen AI
            { name: "OpenCV", icon: <SiOpencv /> },
            { name: "Prompt Engineering", icon: <FaBrain /> }
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git/GitHub", icon: <FaGitAlt /> },
            { name: "VS Code", icon: <FaCode /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "Linux", icon: <FaLinux /> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-surface border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900">Technical Arsenal</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-surface text-gray-700 dark:text-gray-300 font-medium rounded-lg text-xs border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-default">
                                        <span className="text-primary text-sm">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
