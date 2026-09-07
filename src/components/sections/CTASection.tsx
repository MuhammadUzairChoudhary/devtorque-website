import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function CTASection() {
  return (
    <section className="bg-background pb-[clamp(64px,6vw,96px)]">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[var(--radius-lg)] bg-accent px-6 py-14 text-center text-white sm:px-10 sm:py-16 lg:py-20" data-reveal>
          <div className="absolute inset-x-0 bottom-[-22%] -z-10 opacity-20" aria-hidden="true">
            <HeroVisual lineClassName="text-white" />
          </div>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-h2 text-white">Have something in mind?</h2>
            <p className="mx-auto mt-5 max-w-[620px] text-card-description text-white/85">
              Tell us what you are trying to build, improve, or automate. We will help you figure out what makes sense.
            </p>
          </div>
          <Button
            className="mt-7 bg-white hover:border-white hover:bg-surface-muted"
            href="/contact"
            size="compact"
            style={{ color: "var(--text-primary)" }}
            variant="secondary"
          >
            Start the conversation
          </Button>
        </div>
      </Container>
    </section>
  );
}
