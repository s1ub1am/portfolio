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
            className="glass rounded-2xl p-6 border border-white/5 card-hover group"
        >
            <div className={`text-4xl font-bold font-display ${color} mb-1`}>
                {num}{suffix}
            </div>
            <div className="text-sm text-slate-400 font-medium">{label}</div>
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
        <section id="about" className="py-28 relative overflow-hidden">
            {/* decorative blobs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-64 h-64 bg-sky-300/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-bright text-neon-blue text-xs font-bold tracking-widest uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                            About Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
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
                                <span className="text-neon-blue font-semibold">AIML Engineer at TCS</span>,
                                applying Large Language Models to enterprise use cases—turning cutting-edge research into systems teams can actually depend on.
                            </p>
                        </div>

                        {/* Quote block */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 glass rounded-xl p-4 border-l-2 border-neon-cyan"
                        >
                            <p className="font-mono text-sm text-neon-cyan">
                                <span className="text-slate-500">$</span> philosophy --quote
                            </p>
                            <p className="text-slate-600 italic mt-1 text-sm">
                                "Simplicity is the soul of efficiency."
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Stats */}
                    <div ref={ref}>
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard value="1" suffix="+" label="Years of Experience" color="text-neon-blue" delay={0.1} shouldCount={inView} />
                            <StatCard value="2" suffix="+" label="Projects Shipped" color="text-neon-purple" delay={0.2} shouldCount={inView} />
                            <StatCard value="2" suffix="+" label="AIML Systems Built" color="text-neon-cyan" delay={0.3} shouldCount={inView} />
                            <StatCard value="100" suffix="%" label="Passion Guaranteed" color="text-neon-green" delay={0.4} shouldCount={inView} />
                        </div>

                        {/* Specialty cards */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <TiltCard>
                                <div className="glass rounded-2xl p-5 border border-blue-500/20 hover:border-blue-500/40 transition-colors h-full">
                                    <div className="text-2xl mb-2">🤖</div>
                                    <h3 className="text-slate-900 font-bold mb-1">AIML</h3>
                                    <p className="text-slate-500 text-xs">LLMs & Agents</p>
                                </div>
                            </TiltCard>
                            <TiltCard>
                                <div className="glass rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/40 transition-colors h-full">
                                    <div className="text-2xl mb-2">⚡</div>
                                    <h3 className="text-slate-900 font-bold mb-1">Full Stack</h3>
                                    <p className="text-slate-500 text-xs">MERN & Django</p>
                                </div>
                            </TiltCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
