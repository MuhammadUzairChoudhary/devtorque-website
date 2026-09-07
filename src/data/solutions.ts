import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "voice-agents",
    title: "AI Voice Agent",
    description:
      "Custom voice agents built around your business, available whenever your customers call.",
    href: "/solutions/voice-agents",
    image: "/images/services/AI-Voice-Agent-service-image.png",
    imageAlt: "Warm orange voice agent listening orb",
    imageWidth: 971,
    imageHeight: 1025,
    secondaryImage: "/images/services/audio-waves.svg",
    secondaryImageAlt: "Audio waveform",
    secondaryImageWidth: 267,
    secondaryImageHeight: 48,
    featured: true,
    span: 4
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Automate repetitive work and let your team focus on what actually needs them.",
    href: "/solutions/ai-automation",
    image: "/images/services/AI-Automation-service-image.svg",
    imageAlt: "Workflow automation diagram connecting lead, qualification, CRM, and follow-up tasks",
    imageWidth: 845,
    imageHeight: 420,
    featured: true,
    span: 8,
    variant: "wide"
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom websites built around your brand, business, and customers.",
    href: "/solutions/web-development",
    image: "/images/services/Web-Development-service-image.png",
    imageAlt: "Desktop website design preview on a monitor",
    imageWidth: 1332,
    imageHeight: 1273,
    featured: true,
    span: 4
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clear and thoughtful experiences designed around the people using your product.",
    href: "/solutions/ui-ux-design",
    image: "/images/services/UI-UX-Design-service-image.png",
    imageAlt: "Mobile product interface screens for UI and UX design",
    imageWidth: 998,
    imageHeight: 1143,
    featured: true,
    span: 4
  },
  {
    slug: "app-development",
    title: "App Development",
    description:
      "Custom apps built around the way your business actually works.",
    href: "/solutions/app-development",
    image: "/images/services/App-Development-service-image.png",
    imageAlt: "Hand holding a phone with a custom mobile app interface",
    imageWidth: 1488,
    imageHeight: 1416,
    featured: true,
    span: 4
  }
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
