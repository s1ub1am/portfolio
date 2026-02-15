import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
            {/* Subtle background blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Headline & Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-gray-900 leading-tight">
                            Building with <span className="text-primary">purpose</span>.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                I’m a software developer who believes good code should be reliable, readable, and useful.
                            </p>
                            <p>
                                I chose Computer Science because I enjoy solving real problems with logic and systems that actually hold up in practice.
                                Over time, that mindset naturally pushed me toward building things that work beyond demos.
                            </p>
                            <p>
                                Currently, I work as a <strong className="text-gray-900 dark:text-white">GenAI Developer at TCS</strong>,
                                where I focus on applying Large Language Models to real enterprise use cases.
                                The work sits at the intersection of engineering and experimentation — turning ideas into systems that teams can depend on.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Stats / Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="p-8 bg-gray-50 dark:bg-surface rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Gen AI</h3>
                            <p className="text-gray-500 text-sm">LLMs & Agents</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-surface rounded-2xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Full Stack</h3>
                            <p className="text-gray-500 text-sm">MERN & Django</p>
                        </div>
                        <div className="col-span-2 p-8 bg-primary/10 rounded-2xl border border-primary/20">
                            <p className="text-primary font-medium italic text-center">
                                "Simplicity is the soul of efficiency."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
