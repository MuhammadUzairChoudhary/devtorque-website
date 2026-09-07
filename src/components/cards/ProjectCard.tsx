import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? `/work/${project.slug}`;
  const isExternal = Boolean(project.liveUrl);

  return (
    <Link
      className="group block focus-visible:outline-none"
      data-reveal
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <article className="relative isolate aspect-[1.16/1] overflow-hidden rounded-[var(--radius-lg)] bg-surface ring-1 ring-border-subtle transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:-translate-y-1 group-focus-visible:-translate-y-1 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-accent">
        <Image
          alt={project.title}
          className="size-full object-cover transition duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
          height={640}
          src={project.thumbnail}
          width={1024}
        />
        <div className="project-card-blur absolute inset-x-0 bottom-0 z-10 h-[42%] transition-[height] duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:h-[64%] group-focus-visible:h-[64%]" />
        <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
          <div className="translate-y-[calc(100%-2.2rem)] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <h3 className="flex items-center gap-2 text-card-title text-text-primary">
              <span>{project.title}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="shrink-0 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={18}
                strokeWidth={2.25}
              />
            </h3>
            <p className="mt-3 line-clamp-4 max-w-[34rem] text-card-description text-text-secondary opacity-0 transition-opacity delay-75 duration-[var(--duration-normal)] ease-[var(--ease-standard)] group-hover:opacity-100 group-focus-visible:opacity-100">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
