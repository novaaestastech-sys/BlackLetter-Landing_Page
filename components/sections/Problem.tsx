"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const problems = [
    {
        id: "01",
        title: "Fragmented Reality",
        description: "Legal teams lose 30% of billable hours reconciling email chains and version conflicts.",
    },
    {
        id: "02",
        title: "Data Leakage",
        description: "Sensitive clauses exposed through unsecured draft sharing and lack of access granularity.",
    },
    {
        id: "03",
        title: "Compliance Drift",
        description: "Manual redlining misses critical regulatory updates, exposing firms to liability.",
    },
];

export function Problem() {
    return (
        <section id="vision" className="w-full py-20 md:py-32 bg-background border-t border-black/5">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            The status quo <br />
                            is <span className="italic text-muted-foreground">unsustainable</span>.
                        </h2>
                        <p className="text-lg font-sans text-muted-foreground leading-relaxed max-w-sm">
                            Traditional legal workflows are built on static documents.
                            Modern law requires a living operating system.
                        </p>
                    </motion.div>

                    {/* Typography List */}
                    <div className="space-y-12">
                        {problems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group border-b border-black/10 pb-8 last:border-0"
                            >
                                <div className="flex items-baseline justify-between mb-2">
                                    <h3 className="text-2xl font-serif text-primary group-hover:pl-4 transition-all duration-300">
                                        {item.title}
                                    </h3>
                                    <span className="font-sans text-xs text-muted-foreground font-medium">/{item.id}</span>
                                </div>

                                <p className="font-sans text-muted-foreground leading-relaxed group-hover:pl-4 transition-all duration-300 delay-75">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
