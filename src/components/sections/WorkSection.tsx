import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function WorkSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="bg-background py-[var(--section-y)]" id="work">
      <Container>
        <SectionHeading
          className="max-w-[560px]"
          eyebrow="Our Work"
          title={
            <>
              Projects that were
              <br /> delivered <span className="text-text-secondary-large">with care</span>
            </>
          }
        />

        <div className="reveal-stagger mx-auto mt-[var(--section-heading-gap)] grid max-w-[1180px] gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </Container>
    </section>
  );
}
