import React from 'react';
import { motion } from 'framer-motion';
import azureAIFundamentals from '../assets/azure-ai-fundamentals.png';
import azureFundamentals from '../assets/azure-fundamentals.png';
import azureAIEngineerAssociate from '../assets/azure-ai-engineer-associate.png';

const certifications = [
    {
        title: 'Azure AI Fundamentals',
        image: azureAIFundamentals,
    },
    {
        title: 'Azure Fundamentals (AZ-900)',
        image: azureFundamentals,
    },
    {
        title: 'Azure Certified AI Engineer Associate',
        image: azureAIEngineerAssociate,
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="section-shell py-24">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Certifications
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 font-display">
                        Azure <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid gap-10 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.16, duration: 0.6, ease: 'easeOut' }}
                            className="relative pt-14"
                        >
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-slate-300 bg-white shadow-sm" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-7 bg-slate-300" />
                            <div className="absolute top-9 left-1/2 -translate-x-1/2 w-36 h-px">
                                <span className="absolute left-0 top-0 h-px w-1/2 bg-slate-300 origin-left" style={{ transform: 'rotate(-12deg)' }} />
                                <span className="absolute right-0 top-0 h-px w-1/2 bg-slate-300 origin-right" style={{ transform: 'rotate(12deg)' }} />
                            </div>
                            <div className="absolute top-11 left-1/2 -translate-x-1/2 w-24 h-3 rounded-full bg-slate-200" />

                            <div className="glass rounded-[26px] p-5 border border-slate-200/70 shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-20 h-2 rounded-full bg-slate-200 border border-slate-300/40" />
                                </div>
                                <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-3">
                                    <div className="w-full aspect-[3/2] rounded-xl bg-white border border-slate-200/70 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <h3 className="text-lg font-semibold text-slate-900">{cert.title}</h3>
                                    <p className="text-xs text-slate-500 mt-1">Microsoft Credential</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
