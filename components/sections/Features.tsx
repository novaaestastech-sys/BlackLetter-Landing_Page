"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Users, Shield } from "lucide-react";

const features = [
    {
        title: "Living Record",
        description: "Every keystroke is versioned. Replay the evolution of a clause from draft to verdict.",
        icon: FileText,
    },
    {
        title: "AI Analysis",
        description: "Instant risk detection and precedent matching powered by proprietary LLMs.",
        icon: Zap,
    },
    {
        title: "Hive Mind",
        description: "Real-time collaboration with granular permissions for partners and opposing counsel.",
        icon: Users,
    },
    {
        title: "Ironclad Security",
        description: "Bank-grade encryption and SOC2 Type II compliance built into the core.",
        icon: Shield,
    },
];

export function Features() {
    return (
        <section id="platform" className="w-full py-20 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-24"
                >
                    <span className="font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary">
                        Engineered for <br />
                        <span className="italic">precision</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-px bg-black/5 border border-black/5 ">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background p-6 md:p-8 min-h-[220px] md:min-h-[300px] flex flex-col justify-between hover:bg-secondary/50 delay-150 transition-colors"
                        >
                            <feature.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />

                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-medium text-primary">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
