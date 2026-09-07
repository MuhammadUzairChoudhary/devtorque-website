import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  {
    title: "We get it",
    description:
      "We understand what you are trying to achieve, even when it is difficult to put into words.",
    image: "/illustrations/We%20get%20it.svg"
  },
  {
    title: "Always on track",
    description:
      "We deliver what was agreed, within the defined scope, timeline, and budget.",
    image: "/illustrations/Always%20on%20track.svg"
  },
  {
    title: "Transparency",
    description:
      "We keep you informed throughout the project and explain the decisions we make along the way.",
    image: "/illustrations/Transparency.png"
  },
  {
    title: "No vendor lock-in",
    description:
      "You receive complete project documentation and everything you need to stay in control, without being tied to us.",
    image: "/illustrations/No%20vendor%20lock-in.svg"
  },
  {
    title: "Direct access",
    description:
      "With a small team, you work directly with the people building your product, without layers of handoffs or approvals.",
    image: "/illustrations/Direct%20access.svg"
  }
];

export function QualitySection() {
  return (
    <section className="bg-background pb-[clamp(96px,9vw,160px)] pt-[clamp(24px,4vw,64px)]" id="quality">
      <Container>
        <SectionHeading
          className="max-w-[520px]"
          eyebrow="Why DevTorque"
          title={
            <>
              Our commitment
              <br /> to <span className="text-text-secondary-large">quality</span>
            </>
          }
        />

        <div className="reveal-stagger mx-auto mt-[var(--section-heading-gap)] grid max-w-[1180px] gap-y-12 lg:gap-y-14">
          {commitments.map((item) => (
            <article
              className="grid items-center gap-5 md:grid-cols-[minmax(340px,420px)_1fr] md:gap-5 lg:grid-cols-[minmax(380px,460px)_1fr] lg:gap-6"
              data-reveal
              key={item.title}
            >
              <div className="grid grid-cols-[clamp(132px,12vw,176px)_1fr] items-center gap-12 lg:gap-14">
                <div className="flex size-[clamp(132px,12vw,176px)] items-center justify-center">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-auto max-h-full w-auto object-contain"
                    height={160}
                    src={item.image}
                    width={160}
                  />
                </div>
                <h3 className="text-card-title text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-[var(--measure-reading)] text-card-description text-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
