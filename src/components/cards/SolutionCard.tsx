import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import type { Solution } from "@/types/content";
import { cn } from "@/lib/utils";

export function SolutionCard({ solution }: { solution: Solution }) {
  const isVoiceAgent = solution.slug === "voice-agents";
  const isAutomation = solution.slug === "ai-automation";
  const isWebDevelopment = solution.slug === "web-development";
  const isUiUxDesign = solution.slug === "ui-ux-design";
  const isLiftedImage = solution.slug === "ui-ux-design" || solution.slug === "app-development";

  return (
    <Link
      aria-label={`${solution.title}: ${solution.description}`}
      data-reveal
      className={cn(
        "block h-full focus-visible:rounded-[var(--radius-card)]",
        solution.span === 8
          ? "col-span-12 md:col-span-12 lg:col-span-8"
          : "col-span-12 md:col-span-6 lg:col-span-4",
        solution.slug === "app-development" && "md:col-span-12 lg:col-span-4"
      )}
      href={solution.href}
    >
      <CardShell className={cn("min-h-[520px] p-6 sm:p-7 lg:p-10", solution.variant === "wide" && "lg:min-h-[520px]")}>
        <div
          className={cn(
            "flex min-h-[260px] items-center justify-center rounded-[var(--radius-lg)]",
            solution.variant === "wide" ? "lg:min-h-[320px]" : "lg:min-h-[300px]",
            isVoiceAgent && "flex-col",
            isAutomation &&
              "-mx-6 -mt-6 px-6 pt-6 sm:-mx-7 sm:-mt-7 sm:px-7 sm:pt-7 lg:-mx-10 lg:-mt-10 lg:px-10 lg:pt-10 service-media-grid"
          )}
        >
          <div
            className={cn(
              "relative flex w-full items-center justify-center",
              isAutomation && "max-w-[620px]",
              isVoiceAgent && "max-w-[170px]",
              !isAutomation && !isVoiceAgent && "max-w-full"
            )}
          >
            <Image
              alt={solution.imageAlt}
              className={cn(
                "h-auto object-contain transition-transform duration-[var(--duration-slow)] ease-[var(--ease-standard)] group-hover:scale-[1.018]",
                (isAutomation || isVoiceAgent) && "w-full",
                isWebDevelopment && "w-[92%]",
                isLiftedImage && "service-image-lifted",
                isLiftedImage && !isUiUxDesign && "w-full",
                isUiUxDesign && "w-[88%]",
                !isAutomation && !isVoiceAgent && !isWebDevelopment && !isLiftedImage && "w-full"
              )}
              height={solution.imageHeight}
              src={solution.image}
              width={solution.imageWidth}
            />
          </div>

          {isVoiceAgent ? (
            <>
              <p className="mt-3 font-[var(--font-inter)] text-[1.125rem] font-medium leading-none text-text-primary">
                Listening...
              </p>
              {solution.secondaryImage ? (
                <Image
                  alt={solution.secondaryImageAlt ?? ""}
                  className="mt-5 h-6 w-auto object-contain"
                  height={solution.secondaryImageHeight}
                  src={solution.secondaryImage}
                  width={solution.secondaryImageWidth}
                />
              ) : null}
            </>
          ) : null}
        </div>

        {solution.secondaryImage && !isVoiceAgent ? (
          <Image
            alt={solution.secondaryImageAlt ?? ""}
            className="mx-auto -mt-7 mb-9 h-7 w-auto object-contain"
            height={solution.secondaryImageHeight}
            src={solution.secondaryImage}
            width={solution.secondaryImageWidth}
          />
        ) : null}

        <div className="service-card-copy-gradient -mx-6 -mb-6 mt-auto flex min-h-[220px] flex-col px-6 pb-6 pt-6 sm:-mx-7 sm:-mb-7 sm:px-7 sm:pb-7 lg:-mx-10 lg:-mb-10 lg:min-h-[230px] lg:px-10 lg:pb-10 lg:pt-7">
          <h3 className="text-card-title text-text-primary">
            {solution.title}
          </h3>
          <p className="mt-3 max-w-[24rem] text-card-description text-text-secondary">
            {solution.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-8 font-[var(--font-inter)] text-[0.9375rem] font-semibold leading-none text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:text-accent">
            Explore {solution.title === "AI Voice Agent" ? "voice agents" : solution.title}
            <ArrowUpRight aria-hidden="true" className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} strokeWidth={2.25} />
          </span>
        </div>
      </CardShell>
    </Link>
  );
}
