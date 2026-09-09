import { Container } from "@/components/layout/Container";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { TextLink } from "@/components/ui/TextLink";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-background pb-0 pt-10 sm:pt-12 lg:pt-16">
      <Container className="text-center" size="wide">
        <div className="reveal-stagger mx-auto flex max-w-[var(--measure-hero)] flex-col items-center">
          <h1 className="text-hero text-balance text-text-primary" data-reveal>
            <span className="block">Software built with</span>
            <span className="text-hero-accent -mt-2 block pb-2 sm:-mt-3">
              meticulous care.
            </span>
          </h1>
          <p className="mt-4 max-w-[var(--measure-reading)] text-balance font-[var(--font-geist)] text-[clamp(1.05rem,1.25vw,1.375rem)] leading-[1.18] text-text-secondary-large" data-reveal>
            We help businesses solve real problems with technology
            <br className="hidden sm:block" /> and make everyday work simpler.
          </p>
          <div className="mt-14 flex flex-row items-center justify-center gap-3 sm:gap-12 lg:gap-12" data-reveal>
            <TextLink href="/contact" variant="accent">
              Start a project
            </TextLink>
            <TextLink href="/#solutions" showIcon={false}>
              See our services
            </TextLink>
          </div>
        </div>
      </Container>
      <div className="mt-4 sm:-mt-14 lg:-mt-10" data-reveal>
        <HeroVisual />
      </div>
    </section>
  );
}
