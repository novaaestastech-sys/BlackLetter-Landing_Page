"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-background/80",
                scrolled ? "border-black/5" : ""
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo - Serif and elegant */}
                <Link
                    href="/"
                    className="font-serif font-bold text-2xl tracking-tight text-foreground"
                >
                    BlackLetter.
                </Link>

                {/* Desktop Menu - Sans-serif, small, uppercase */}
                <div className="hidden md:flex gap-10 items-center font-sans text-xs font-medium tracking-widest text-muted-foreground">
                    <Link href="/#vision" className="hover:text-foreground transition-colors">
                        VISION
                    </Link>
                    <Link
                        href="/#platform"
                        className="hover:text-foreground transition-colors"
                    >
                        PLATFORM
                    </Link>
                    <Link
                        href="/#leadership"
                        className="hover:text-foreground transition-colors"
                    >
                        LEADERSHIP
                    </Link>
                    <Link
                        href="/#contact"
                        className="hover:text-foreground transition-colors"
                    >
                        CONTACT
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-6 mt-10 font-sans text-lg font-medium tracking-widest text-muted-foreground">
                                <Link href="/#vision" className="hover:text-foreground transition-colors">
                                    VISION
                                </Link>
                                <Link href="/#platform" className="hover:text-foreground transition-colors">
                                    PLATFORM
                                </Link>
                                <Link href="/#leadership" className="hover:text-foreground transition-colors">
                                    LEADERSHIP
                                </Link>
                                <Link href="/#contact" className="hover:text-foreground transition-colors">
                                    CONTACT
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
