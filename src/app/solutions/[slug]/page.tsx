import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { getSolution, solutions } from "@/data/solutions";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {};
  }

  return {
    title: solution.title,
    description: solution.description,
    alternates: {
      canonical: solution.href
    }
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <p className="text-label text-accent">Solution</p>
        <Heading as="h1" className="mt-4" size="h1">
          {solution.title}
        </Heading>
        <p className="mt-6 max-w-2xl text-body-large text-text-secondary">{solution.description}</p>
        <div className="mt-9">
          <Button href="/contact">Discuss this solution</Button>
        </div>
      </Container>
    </Section>
  );
}
