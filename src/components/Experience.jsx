import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Experience = () => {
    // Ascending Order: Oldest (Bottom) -> Newest (Top)
    const timeline = [
        {
            year: "Sept 2025 - Present",
            role: "Graduate Trainee",
            company: "Tata Consultancy Services (Ignite)",
            desc: "Leading the charge in Gen AI. Building scalable enterprise solutions and mastering the art of prompt engineering.",
            color: "bg-indigo-50 dark:bg-indigo-900/20",
            border: "border-indigo-100 dark:border-indigo-800",
            icon: <FaBriefcase className="text-indigo-600 dark:text-indigo-400" />,
            active: true
        },

    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-dark overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Level Up</span>
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900">
                        My Journey
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative px-4 sm:px-0">
                    {/* Clean Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

                    <div className="flex flex-col-reverse gap-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Mobile: Connection Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-dark border-4 border-gray-300 dark:border-gray-600 rounded-full -translate-x-1/2 z-10 top-8" />

                                {/* Card */}
                                <div className={`w-full md:w-[calc(50%-30px)] pl-20 md:pl-0 ${index % 2 === 0 ? "md:pl-8 text-left" : "md:pr-8 md:text-right"}`}>
                                    <div className={`p-6 rounded-2xl border-2 ${item.border} ${item.color} relative group hover:shadow-lg transition-shadow duration-300`}>

                                        {/* Active Notification Badge (PFP) */}
                                        {item.active && (
                                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-white dark:border-dark shadow-md overflow-hidden z-20 animate-[bounce_2s_infinite]">
                                                <img src={profileImg} alt="Active" className="w-full h-full object-cover" />
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                            </div>
                                        )}

                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.active ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700"}`}>
                                            {item.year}
                                        </span>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                                        <h4 className="text-sm font-semibold text-secondary uppercase tracking-tight mb-3 flex items-center gap-2 md:justify-end">
                                            {/* Icon logic requires conditional flex alignment, simplified here: */}
                                            <span className={`flex items-center gap-2 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                                                {item.icon} {item.company}
                                            </span>
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for opposite side alignment */}
                                <div className="hidden md:block md:w-[calc(50%-30px)]" />

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
