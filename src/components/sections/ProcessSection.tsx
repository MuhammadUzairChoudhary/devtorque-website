"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

const STEP_DURATION = 8_000;

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !("IntersectionObserver" in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setActiveStep(0);
        setCycle((current) => current + 1);
        setHasStarted(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveStep((current) => (current + 1) % processSteps.length);
      setCycle((current) => current + 1);
    }, STEP_DURATION);

    return () => window.clearTimeout(timeout);
  }, [activeStep, cycle, hasStarted]);

  function selectStep(index: number) {
    setActiveStep(index);
    setCycle((current) => current + 1);
  }

  function handleStepKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % processSteps.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + processSteps.length) % processSteps.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = processSteps.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectStep(nextIndex);
    document.getElementById(`process-tab-${processSteps[nextIndex].id}`)?.focus();
  }

  return (
    <section className="bg-background py-[var(--section-y)]" id="process" ref={sectionRef}>
      <Container>
        <SectionHeading
          className="max-w-[560px]"
          eyebrow="Our Process"
          title={
            <>
              The process for
              <br /> every <span className="text-text-secondary-large">successful project</span>
            </>
          }
        />

        <div className="reveal-stagger mx-auto mt-[var(--section-heading-gap)] grid max-w-[1180px] gap-8 md:grid-cols-[minmax(250px,0.72fr)_minmax(0,1.8fr)] md:items-stretch md:gap-10 lg:gap-14">
          <div className="relative min-h-[420px] overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-muted md:min-h-[540px] lg:min-h-[600px]" data-reveal>
            <Image
              alt="Two team members planning a software project together"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 34vw, 100vw"
              src="/illustrations/process Section image.png"
            />
            <div
              aria-hidden="true"
              className="project-card-blur absolute inset-x-0 bottom-0 z-10 h-[30%]"
            />
            <Link
              className="group absolute inset-x-4 bottom-5 z-20 inline-flex min-h-11 items-center justify-center gap-2 px-5 font-[var(--font-inter)] text-base font-semibold text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent"
              href="/contact"
            >
              Start a project
              <ArrowUpRight aria-hidden="true" className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} strokeWidth={2.3} />
            </Link>
          </div>

          <div
            aria-label="Our process steps"
            className="relative flex min-h-[480px] flex-col justify-between border-l-2 border-border md:min-h-[540px] lg:min-h-[600px]"
            data-reveal
            role="tablist"
          >
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <div className="relative" key={step.id}>
                  {isActive && hasStarted ? (
                    <span className="absolute -left-0.5 inset-y-0 w-1 overflow-hidden rounded-full bg-accent/15" aria-hidden="true">
                      <span className="process-step-progress-vertical block h-full w-full origin-top rounded-full bg-accent" key={`${step.id}-${cycle}`} />
                    </span>
                  ) : null}
                  <button
                    aria-controls={`process-panel-${step.id}`}
                    aria-selected={isActive}
                    className="group w-full py-3.5 pl-6 pr-3 text-left transition-[padding,color] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:pl-7 sm:pl-7 sm:hover:pl-8 md:py-4 lg:pl-8 lg:hover:pl-9"
                    id={`process-tab-${step.id}`}
                    onClick={() => selectStep(index)}
                    onKeyDown={(event) => handleStepKeyDown(event, index)}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                  >
                    <span className={`block font-[var(--font-geist)] font-medium leading-tight transition-[color,font-size] ${isActive ? "text-2xl text-text-primary" : "text-lg text-text-muted group-hover:text-text-primary"}`}>
                      {step.title}
                    </span>
                  </button>
                  <div
                    aria-labelledby={`process-tab-${step.id}`}
                    className="process-panel-enter -mt-1 max-w-[var(--measure-reading)] pb-4 pl-6 pr-4 text-card-description text-text-secondary sm:pl-7 md:pb-5 lg:pl-8"
                    hidden={!isActive}
                    id={`process-panel-${step.id}`}
                    role="tabpanel"
                  >
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
