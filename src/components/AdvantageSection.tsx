import { Shield, Zap, Clock, Users } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const benefits = [
  {
    icon: Shield,
    title: "Peace of Mind",
    subtitle: "Draft Without Doubt",
    description:
      "Experience the confidence of having a silent partner that validates your logic, checks blind spots, and ensures every clause is bulletproof.",
  },
  {
    icon: Zap,
    title: "The Flow State",
    subtitle: "Uninterrupted Excellence",
    description:
      "A sanctuary for your workflow where communication and creation happen in the same breath. Stay in the zone longer, finish complex tasks faster.",
  },
  {
    icon: Clock,
    title: "Total Recall",
    subtitle: "Never Lose the Narrative",
    description:
      "Capture the entire lifecycle of your legal strategy. Never ask 'what changed?' or 'why did we cut that clause?' ever again.",
  },
  {
    icon: Users,
    title: "Unity",
    subtitle: "The Hive Mind Advantage",
    description:
      "Turn your firm's collective experience into a synchronized force where knowledge flows freely and strategy is always aligned.",
  },
];

const AdvantageSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="relative py-36 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <p className="reveal text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
            The Advantage
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-8">
            <span className="text-metallic">Practice Law</span>
            <br />
            <span className="text-foreground">in High Definition</span>
          </h2>
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            We removed the friction so you can focus on the argument.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`reveal reveal-delay-${index + 1} group card-elegant rounded-2xl p-10`}
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary text-sm font-medium tracking-wide uppercase mb-5">
                {benefit.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;