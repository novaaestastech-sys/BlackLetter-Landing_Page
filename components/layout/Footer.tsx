import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer id="contact" className="w-full py-16 bg-muted/30 border-t border-black/5 dark:border-white/5">
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
                    Ready to practise law in <span className="text-primary italic">High Definition</span>?
                </h2>

                <Button size="lg" className="h-14 px-8 text-lg font-sans font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Enquire for Enterprise Access
                </Button>

                <div className="flex flex-col md:flex-row gap-8 mt-12 text-sm font-sans text-muted-foreground font-medium">
                    <Link href="/data-security" className="hover:text-foreground transition-colors">Data Security</Link>
                    <Link href="/compliance" className="hover:text-foreground transition-colors">Compliance</Link>
                    <a href="mailto:novaaestastech@gmail.com" className="hover:text-foreground transition-colors">Contact Support</a>
                </div>

                <div className="pt-8 text-xs font-sans text-muted-foreground/50">
                    © {new Date().getFullYear()} BLACKLETTER. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}
