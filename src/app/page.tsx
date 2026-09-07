import { BrandStatementSection } from "@/components/sections/BrandStatementSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <HeroSection />
      <SolutionsSection />
      <BrandStatementSection />
      <QualitySection />
      <WorkSection />
      <TestimonialsSection />
      <ProcessSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
