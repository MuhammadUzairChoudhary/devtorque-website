import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected DevTorque projects and case study foundations.",
  alternates: {
    canonical: "/work"
  }
};

export default function WorkPage() {
  return (
    <Section>
      <Container size="wide">
        <div className="max-w-3xl">
          <SectionLabel>Work</SectionLabel>
          <Heading as="h1" className="mt-4" size="h1">
            Case studies will live on one shared content model.
          </Heading>
        </div>
        <div className="mt-12 grid gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
