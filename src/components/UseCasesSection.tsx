import useReveal from "@/hooks/useReveal";
import { Rocket, Network, Eye, ArrowRight } from "lucide-react";

const personas = [
  {
    icon: Rocket,
    name: "For the Independent Titan",
    focus: "Punch Above Your Weight",
    description:
      "Replace administrative drag with automated precision. Our AI is your paralegal, researcher, and compliance officer—handle higher-value cases with zero burnout.",
  },
  {
    icon: Network,
    name: "For the Scalable Powerhouse",
    focus: "Unify Your Team",
    description:
      "You are growing fast, but your workflows are breaking. With integrated Gmail and real-time connectivity, associates and partners stay in perfect sync.",
  },
  {
    icon: Eye,
    name: "For the Strategic Guardians",
    focus: "Absolute Visibility",
    description:
      "Manage complex, evolving document lifecycles where a single missed edit can cost millions. Trace the DNA of every clause from the first draft to the final verdict.",
  },
];

const UseCasesSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="relative py-36 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <p className="reveal text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Solutions
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-6">
            <span className="text-foreground">We Don't Just Serve Law Firms.</span>
          </h2>
          <h3 className="reveal reveal-delay-2 font-display text-4xl md:text-5xl font-semibold">
            <span className="text-metallic">We Upgrade Them.</span>
          </h3>
          <p className="reveal reveal-delay-3 text-lg text-muted-foreground max-w-3xl mx-auto mt-8 font-light">
            Whether you are a solo practitioner redefining agility or a legacy firm
            scaling your intelligence, BlackLetter is the infrastructure for your ambition.
          </p>
        </div>

        {/* Personas */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <div
              key={persona.name}
              className={`reveal reveal-delay-${index + 1} group`}
            >
              <div className="h-full card-elegant rounded-2xl p-10 flex flex-col">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
                    <persona.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Persona name */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {persona.name}
                </h3>

                {/* Focus */}
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-5">
                  {persona.focus}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed flex-grow font-light">
                  {persona.description}
                </p>

                {/* Link */}
                <div className="mt-10 pt-8 border-t border-border/30">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary cursor-pointer">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;