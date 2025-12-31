"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Globe, FileText, Scale } from "lucide-react";

export default function CompliancePage() {
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
                            Standards
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
                            Compliance
                        </h1>
                        <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
                            Built to withstand the scrutiny of regulatory bodies worldwide.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ComplianceCard
                            title="GDPR & CCPA"
                            icon={Globe}
                            content="Full support for 'Right to be Forgotten' and data portability requests. Automated PII detection ensures client privacy."
                        />
                        <ComplianceCard
                            title="ISO 27001"
                            icon={CheckCircle}
                            content="Our Information Security Management System (ISMS) is certified to international standards for managing information risks."
                        />
                        <ComplianceCard
                            title="Audit Trails"
                            icon={FileText}
                            content="Immutable logs for all system actions. Reconstruct the entire history of a matter for internal investigations or external audits."
                        />
                        <ComplianceCard
                            title="Legal Privilege"
                            icon={Scale}
                            content="Specific technical controls to uphold attorney-client privilege, including separate encryption keys for privileged workspaces."
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

function ComplianceCard({ title, icon: Icon, content }: { title: string, icon: any, content: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-8 border border-black/5 dark:border-white/5 flex flex-col items-start gap-4 hover:bg-secondary/40 transition-colors"
        >
            <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            <div>
                <h3 className="text-xl font-serif text-primary mb-2">{title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                    {content}
                </p>
            </div>
        </motion.div>
    )
}
