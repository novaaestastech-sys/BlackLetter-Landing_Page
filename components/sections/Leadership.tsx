"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leaders = [
    {
        name: "Apurva Malasi",
        role: "Co-Founder & CEO",
        quote:
            "I believe in the barter system. Firms give us their trust and we give them invulnerability.",
        initials: "AM",
        image: "/founders/Apurv.jpeg",
    },
    {
        name: "Nalin Tiwary",
        role: "Co-Founder & CTO",
        quote: "Code is only as good as the compliance it enforces.",
        initials: "NT",
        image: "/founders/nalin.jpeg",
    },
    {
        name: "Rudra Kumar",
        role: "Co-Founder & COO",
        quote:
            "Execution is the silent discipline that turns vision into market reality.",
        initials: "RK",
        image: "/founders/rudra.jpeg",
    },
    {
        name: "Piyush Yadav",
        role: "Founding Engineer",
        quote: "The best way to predict the future is to invent it.",
        initials: "PY",
        image: "/founders/piyush.jpeg",
    },
    {
        name: "Kinshuk Saini",
        role: "Founding Engineer",
        quote: "The only way to do great work is to love what you do.",
        initials: "KS",
        image: "/founders/kinshuk.jpeg",
    }
];

export function Leadership() {
    return (
        <section
            id="leadership"
            className="w-full py-20 md:py-32 bg-background border-t border-black/5"
        >
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-16 md:mb-20 space-y-4">
                    <span className="font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                        Leadership
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-primary"
                    >
                        The Visionaries
                    </motion.h2>
                </div>

                {/* First row: 3 leaders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {leaders.slice(0, 3).map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-6"
                        >
                            <Avatar className="h-32 w-32 grayscale hover:grayscale-0 transition-all duration-500">
                                <AvatarImage src={leader.image} alt={`${leader.name} portrait`} />
                                <AvatarFallback className="bg-secondary text-2xl font-serif text-primary">
                                    {leader.initials}
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-2">
                                <h3 className="text-xl font-serif text-primary">
                                    {leader.name}
                                </h3>
                                <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest">
                                    {leader.role}
                                </p>
                            </div>
                            <p className="text-muted-foreground italic font-serif text-lg leading-relaxed max-w-xs">
                                &#34;{leader.quote}&#34;
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Second row: 2 leaders, centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto mt-12">
                    {leaders.slice(3).map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-6"
                        >
                            <Avatar className="h-32 w-32 grayscale hover:grayscale-0 transition-all duration-500">
                                <AvatarImage src={leader.image} alt={`${leader.name} portrait`} />
                                <AvatarFallback className="bg-secondary text-2xl font-serif text-primary">
                                    {leader.initials}
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-2">
                                <h3 className="text-xl font-serif text-primary">
                                    {leader.name}
                                </h3>
                                <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest">
                                    {leader.role}
                                </p>
                            </div>
                            <p className="text-muted-foreground italic font-serif text-lg leading-relaxed max-w-xs">
                                &#34;{leader.quote}&#34;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
