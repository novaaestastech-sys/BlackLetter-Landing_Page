import useReveal from "@/hooks/useReveal";
import { Lock, Scale, ShieldCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description:
      "Built on a secure AWS infrastructure, creating a perimeter that keeps your sensitive case files strictly between you and your team.",
  },
  {
    icon: Scale,
    title: "Sovereign Compliance",
    description:
      "Engineered to align with strict legislative standards, ensuring your tools adhere to the same compliance rules as your advice.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Leak Architecture",
    description:
      "Our secure gateway ensures no sensitive data or API keys are ever exposed to the client-side. Your firm's intelligence stays within.",
  },
];

const SecuritySection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="relative py-36 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-soft-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          {/* Shield icon */}
          <div className="reveal inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border/50 mb-10">
            <Lock className="w-9 h-9 text-primary" />
          </div>

          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-4">
            <span className="text-foreground">Your Data. Your Rules.</span>
          </h2>
          <h3 className="reveal reveal-delay-2 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            <span className="text-metallic">Our Vault.</span>
          </h3>
        </div>

        {/* Security features */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${index + 1} group text-center`}
              >
                {/* Icon container */}
                <div className="relative mx-auto mb-8 w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl rotate-45 transition-transform duration-500 group-hover:rotate-[55deg]" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-foreground transition-colors duration-300 group-hover:text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="reveal reveal-delay-4 mt-24 flex flex-wrap justify-center gap-10 text-muted-foreground/60">
          {["SOC 2 Compliant", "GDPR Ready", "256-bit AES", "99.99% Uptime"].map((badge) => (
            <div key={badge} className="flex items-center gap-3 text-sm font-light tracking-wide">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;