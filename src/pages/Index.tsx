import HeroSection from "@/components/HeroSection";
import AdvantageSection from "@/components/AdvantageSection";
import UseCasesSection from "@/components/UseCasesSection";
import SecuritySection from "@/components/SecuritySection";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-background min-h-screen">
      <HeroSection />
      <AdvantageSection />
      <UseCasesSection />
      <SecuritySection />
      <FoundersSection />
      <Footer />
    </main>
  );
};

export default Index;
