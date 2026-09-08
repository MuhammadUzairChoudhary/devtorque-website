import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Ali Rizwan",
    role: "Chief Executive Officer",
    image: "/images/brand/Ali Rizwan.png",
    linkedin: "https://www.linkedin.com/in/ali-rizwan-ar-07710a269/"
  },
  {
    name: "M. Uzair Choudhary",
    role: "Head of Product and Growth",
    image: "/images/brand/M. Uzair Choudhary.png",
    linkedin: "https://www.linkedin.com/in/muhammad-uzair-choudhary/"
  },
  {
    name: "Usman Asif",
    role: "Chief Strategy Officer",
    image: "/images/brand/Usman Asif.png",
    linkedin: "https://www.linkedin.com/in/usmanasif-sandhu/"
  }
] as const;

export function TeamSection() {
  return (
    <section className="overflow-hidden bg-background pb-[var(--section-y)]" id="team">
      <Container>
        <SectionHeading
          className="max-w-[560px]"
          eyebrow="Our Team"
          title={
            <>
              The people
              <br /> behind <span className="text-text-secondary-large">DevTorque</span>
            </>
          }
        />

        <div className="reveal-stagger -mx-[var(--page-gutter)] mt-[var(--section-heading-gap)] flex flex-col gap-5 overflow-hidden px-[var(--page-gutter)] pb-4 md:mx-auto md:grid md:max-w-[1180px] md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:gap-8">
          {teamMembers.map((member) => (
            <article
              className={cn(
                "group relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-surface-muted md:w-auto",
                member.name === "M. Uzair Choudhary" && "md:order-1",
                member.name === "Ali Rizwan" && "md:order-2",
                member.name === "Usman Asif" && "md:order-3"
              )}
              data-reveal
              key={member.name}
            >
              <Image
                alt={member.name}
                className="object-cover object-[center_28%] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-[1.02]"
                fill
                sizes="(min-width: 768px) 31vw, 82vw"
                src={member.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgb(22_22_22_/_0.18)_67%,rgb(22_22_22_/_0.9)_100%)]"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-[36%] flex-col justify-end p-5 text-white sm:p-6">
                <h3 className="text-card-title text-white">{member.name}</h3>
                <p className="mt-1 text-card-description text-white/80">{member.role}</p>
                <a
                  aria-label={`Visit ${member.name} on LinkedIn`}
                  className="mt-5 inline-flex w-fit items-center gap-2.5 text-card-description font-medium text-white transition-colors hover:text-white/75"
                  href={member.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="size-[18px] brightness-0 invert"
                    height={18}
                    src="/icons/Linkedin-Logo Streamline Logos-Block.svg"
                    width={18}
                  />
                  LinkedIn
                </a>
              </div>
            </article>
          ))}

        </div>
      </Container>
    </section>
  );
}
