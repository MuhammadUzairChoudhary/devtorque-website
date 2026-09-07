import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { getProject, projects } from "@/data/projects";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`
    }
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <p className="text-label text-accent">{project.category}</p>
        <Heading as="h1" className="mt-4" size="h1">
          {project.title}
        </Heading>
        <p className="mt-6 max-w-2xl text-body-large text-text-secondary">{project.description}</p>
        <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-label text-text-muted">Services</dt>
            <dd className="mt-3 text-body-small text-text-primary">{project.services.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-label text-text-muted">Year</dt>
            <dd className="mt-3 text-body-small text-text-primary">{project.year ?? "Pending"}</dd>
          </div>
          <div>
            <dt className="text-label text-text-muted">Client</dt>
            <dd className="mt-3 text-body-small text-text-primary">{project.client ?? "Pending approval"}</dd>
          </div>
        </dl>
      </Container>
    </Section>
  );
}
