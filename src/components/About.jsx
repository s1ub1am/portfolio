import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const useCountUp = (target, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!shouldStart) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, shouldStart]);
    return count;
};

const StatCard = ({ value, suffix, label, color, delay, shouldCount }) => {
    const num = useCountUp(parseInt(value), 1500, shouldCount);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="glass rounded-2xl p-6 border border-slate-200/60 card-hover group"
        >
            <div className={`text-4xl font-semibold font-display ${color} mb-1`}>
                {num}{suffix}
            </div>
            <div className="text-sm text-slate-500 font-medium">{label}</div>
        </motion.div>
    );
};

const TiltCard = ({ children, className = '' }) => {
    const ref = useRef(null);
    const handleMouseMove = (e) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
        card.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(10px)`;
    };
    const handleMouseLeave = () => {
        if (ref.current) ref.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    };
    return (
        <div
            ref={ref}
            className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section-shell py-28">

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-slate-700 text-xs font-semibold tracking-widest uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            About Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-slate-900 font-display">
                            Building with{' '}
                            <span className="text-gradient">purpose</span>
                            <br />& <span className="text-gradient-gold">precision</span>.
                        </h2>

                        <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                            <p>
                                I'm a software developer and I believe good code should be reliable, readable, and actually useful in the real world.
                            </p>
                            <p>
                                I chose Computer Science because I enjoy solving real problems with logic and systems that hold up well beyond demos. That mindset pushed me toward building production-grade solutions.
                            </p>
                            <p>
                                Currently, I work as a{' '}
                                <span className="text-slate-900 font-semibold">AI Engineer at TCS</span>,
                                applying Large Language Models to enterprise use cases—turning cutting-edge research into systems teams can actually depend on.
                            </p>
                        </div>


                        {/* Quote block */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 glass rounded-xl p-4 border-l-2 border-emerald-500"
                        >
                            <p className="font-mono text-sm text-slate-700">
                                <span className="text-slate-500">$</span> philosophy --quote
                            </p>
                            <p className="text-slate-600 italic mt-1 text-sm">
                                "Simplicity is the soul of efficiency."
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Stats */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard value="7" suffix="+" label="Months of Experience" color="text-neon-blue" delay={0.1} shouldCount={inView} />
                            <StatCard value="2" suffix="+" label="Projects Built" color="text-gradient-gold" delay={0.2} shouldCount={inView} />
                            <StatCard value="2" suffix="+" label="AI Workflows Deployed" color="text-neon-cyan" delay={0.3} shouldCount={inView} />
                            <StatCard value="100" suffix="%" label="Quality Focus" color="text-neon-green" delay={0.4} shouldCount={inView} />
                        </div>

                        {/* Specialty cards */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <TiltCard>
                                <div className="glass rounded-2xl p-5 border border-blue-500/20 hover:border-blue-500/40 transition-colors h-full">
                                    <div className="text-2xl mb-2">🤖</div>
                                    <h3 className="text-slate-900 font-semibold mb-1">AIML</h3>
                                    <p className="text-slate-500 text-xs">LLMs & Agents</p>
                                </div>
                            </TiltCard>
                            <TiltCard>
                                <div className="glass rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/40 transition-colors h-full">
                                    <div className="text-2xl mb-2">⚡</div>
                                    <h3 className="text-slate-900 font-semibold mb-1">Full Stack</h3>
                                    <p className="text-slate-500 text-xs">MERN & Django</p>
                                </div>
                            </TiltCard>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
