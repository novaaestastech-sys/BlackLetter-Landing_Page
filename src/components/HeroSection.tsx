import useReveal from "@/hooks/useReveal";

const HeroSection = () => {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Warm ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-primary/8 to-transparent rounded-full blur-[120px] animate-soft-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Elegant tagline */}
        <div className="reveal mb-10">
          <span className="inline-block px-5 py-2.5 text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground border border-border/50 rounded-full bg-card/30 backdrop-blur-sm">
            Redefining Legal Intelligence
          </span>
        </div>

        {/* Main headline with metallic gradient */}
        <h1 className="reveal reveal-delay-1 font-display text-7xl md:text-8xl lg:text-[10rem] font-semibold tracking-tight mb-8 leading-[0.9]">
          <span className="text-metallic">BlackLetter</span>
        </h1>

        {/* Refined tagline */}
        <p className="reveal reveal-delay-2 font-display text-2xl md:text-3xl lg:text-4xl text-foreground/80 italic mb-10 max-w-3xl mx-auto font-light">
          The static file is dead—welcome to the living legal record.
        </p>

        {/* Body text */}
        <p className="reveal reveal-delay-3 text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-14 font-light">
          From the first AI-generated draft to the final verdict, track the DNA of your documents 
          across every email, every hearing, and every edit. Experience the future of legal practice.
        </p>

        {/* Elegant CTA */}
        <div className="reveal reveal-delay-4 flex justify-center">
          <a 
            href="/request-access"
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wide rounded-full overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover-lift"
          >
            <span className="relative z-10">Request Early Access</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 reveal reveal-delay-5">
          <div className="animate-gentle-bounce">
            <div className="w-6 h-10 border border-muted-foreground/20 rounded-full flex justify-center pt-2.5">
              <div className="w-1 h-2 bg-primary/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;