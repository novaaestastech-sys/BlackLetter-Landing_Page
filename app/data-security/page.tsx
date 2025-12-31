"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye } from "lucide-react";

export default function DataSecurityPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-16">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center"
                    >
                        <span className="font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6 block">
                            Infrastructure
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
                            Data Security
                        </h1>
                        <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
                            Our security architecture is designed to exceed the standards of top-tier global banking institutions.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        <Section
                            title="Encryption at Rest & Transit"
                            icon={Lock}
                            content="All data is encrypted using AES-256 for data at rest and TLS 1.3 for data in transit. We employ envelope encryption with rotating keys managed by AWS KMS."
                        />

                        <Section
                            title="SOC2 Type II Compliant"
                            icon={Shield}
                            content="BlackLetter undergoes annual third-party audits. Our controls covering security, availability, and confidentiality are rigorously tested and verified."
                        />

                        <Section
                            title="Sovereign Infrastructure"
                            icon={Server}
                            content="Clients can choose regional data residency. Your legal data never leaves your chosen jurisdiction without explicit authorization."
                        />

                        <Section
                            title="Granular Access Control"
                            icon={Eye}
                            content="Role-Based Access Control (RBAC) allows you to define permissions at the document, clause, or comment level. Complete audit logs track every interaction."
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

function Section({ title, icon: Icon, content }: { title: string, icon: any, content: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 md:gap-8 border-t border-black/5 dark:border-white/5 pt-8"
        >
            <div className="shrink-0 mt-1">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <div>
                <h2 className="text-2xl font-serif text-primary mb-4">{title}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                    {content}
                </p>
            </div>
        </motion.div>
    )
}
