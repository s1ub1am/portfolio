import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const educationData = [
    {
        institution: "Chandigarh University",
        location: "Chandigarh, India",
        degree: "MCA in AIML",
        year: "2026 - Present",
        desc: "Pursuing Master of Computer Applications with a specialization in AI & ML to deepen theoretical understanding and practical skills in advanced computing."
    },
    {
        institution: "Gayatri Institute of Computer and Management",
        location: "Berhampur, Odisha",
        degree: "B.Sc. in Computer Science",
        year: "2022 - 2025",
        desc: "Affiliated to Berhampur University. Specialized in core CS concepts, Data Structures, and graduating with a strong foundation in software engineering."
    },
    {
        institution: "Odisha Adarsha Vidyalaya",
        location: "Hinjilicut, Ganjam, Odisha",
        degree: "Higher Secondary (12th Grade)",
        year: "2020 - 2022",
        desc: "Focus on Science (PCM). Developed analytical skills and a passion for technology during these formative years."
    },
    {
        institution: "Odisha Adarsha Vidyalaya",
        location: "Bhatakumurada, Ganjam, Odisha",
        degree: "Secondary School (10th Grade)",
        year: "2020",
        desc: "Built a solid academic base with excellence in Mathematics and Science."
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Academic Background</span>
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900">
                        Education
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6 border-l-2 border-gray-100 dark:border-gray-800 ml-3">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8"
                            >
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark border-4 border-indigo-100 dark:border-indigo-900/50" >
                                    <div className="w-full h-full rounded-full bg-secondary" />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {item.institution}
                                    </h3>
                                    <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-0.5 rounded-full whitespace-nowrap order-first sm:order-last w-fit">
                                        {item.year}
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 text-sm mt-1">
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">{item.degree}</span>
                                    <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
                                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <FaMapMarkerAlt className="text-xs" /> {item.location}
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
