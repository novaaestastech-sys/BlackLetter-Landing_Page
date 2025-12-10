import useReveal from "@/hooks/useReveal";

const founders = [
  {
    name: "Apurva Malasi",
    title: "Co-Founder & CEO",
    role: "The Product Visionary",
    quote:
      "I believe in the barter system. Firms give us their trust and we give them invulnerability.",
    initials: "AM",
  },
  {
    name: "Nalin Tiwary",
    title: "Co-Founder & CTO",
    role: "The Technical Visionary",
    quote: "Code is only as good as the compliance it enforces.",
    initials: "NT",
  },
  {
    name: "Rudra Kumar",
    title: "Co-founder & COO",
    role: "The Strategic Visionary",
    quote:
      "Execution is the silent discipline that turns vision into market reality.",
    initials: "RK",
  },
];

const FoundersSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="relative py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <p className="reveal text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Leadership
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-semibold">
            <span className="text-metallic">The Visionaries</span>
          </h2>
        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`reveal reveal-delay-${index + 1} group text-center`}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-10 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/15 rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card to-secondary border border-border/50 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary/30">
                  <span className="font-display text-3xl font-semibold text-metallic">
                    {founder.initials}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                {founder.name}
              </h3>

              {/* Title */}
              <p className="text-muted-foreground text-sm mb-1 font-light">{founder.title}</p>
              <p className="text-primary text-xs font-medium tracking-wide uppercase mb-8">
                {founder.role}
              </p>

              {/* Quote */}
              <blockquote className="relative px-4">
                <span className="absolute -top-2 left-0 text-3xl text-primary/20 font-display">
                  "
                </span>
                <p className="text-muted-foreground italic leading-relaxed font-light text-sm">
                  {founder.quote}
                </p>
                <span className="absolute -bottom-2 right-0 text-3xl text-primary/20 font-display">
                  "
                </span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;