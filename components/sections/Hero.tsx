"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 bg-background text-foreground">

            <div className="z-10 container px-4 md:px-6 flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-6"
                >
                    <span className="font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                        Define The Future
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] text-primary">
                        The Operating System <br />
                        <span className="italic text-muted-foreground">for</span> Modern Law.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[32rem] text-lg md:text-xl text-muted-foreground font-sans leading-relaxed"
                >
                    Replace chaos with synchronicity. BlackLetter is the immutable backbone for high-stakes legal work.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {/*<a href="#contact">
                            <Button size="lg" className="h-14 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-wide text-sm font-semibold group w-full sm:w-auto">
                                Request Access
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <a href="#platform">
                            <Button variant="ghost" size="lg" className="h-14 rounded-full px-8 font-sans tracking-wide text-sm font-semibold hover:bg-black/5 w-full sm:w-auto">
                                View Documentation
                            </Button>
                        </a>*/}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
