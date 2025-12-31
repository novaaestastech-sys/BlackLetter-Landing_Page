import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Leadership } from "@/components/sections/Leadership";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Leadership />
      <Footer />
    </main>
  );
}
