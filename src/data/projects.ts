import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "travelrecs",
    title: "TravelRecs",
    category: "Travel discovery",
    description:
      "A travel discovery platform that turns Reddit recommendations into curated destinations and experiences, helping travelers find places through real community insights.",
    services: ["Product design", "Web development", "Automation"],
    year: "2026",
    thumbnail: "/images/projects/TravelRecs.png",
    liveUrl: "https://reddit-recs-frontend.vercel.app/",
    featured: true
  },
  {
    slug: "exaa-schools",
    title: "Exaa Schools",
    category: "Education",
    description:
      "A modern school website designed to present campuses, academic programs, activities, admissions information, and the school's educational approach in a clear and accessible experience for parents and students.",
    services: ["Brand website", "UI/UX design", "Web development"],
    year: "2026",
    thumbnail: "/images/projects/Exaa Schools.png",
    liveUrl: "https://exaxschool.vercel.app/",
    featured: true
  },
  {
    slug: "remento-gift-shop",
    title: "Remento Gift Shop",
    category: "E-commerce",
    description:
      "A warm e-commerce experience for handmade crochet gifts, with simple product discovery, cart ordering, and a checkout flow designed around local customers in Jordan.",
    services: ["UI/UX design", "E-commerce", "Web development"],
    year: "2026",
    thumbnail: "/images/projects/Remento%20Gift%20Shop.png",
    liveUrl: "https://rementogiftshop.netlify.app/",
    featured: true
  },
  {
    slug: "ashal-travel-tours",
    title: "Ashal Travel & Tours",
    category: "Travel agency",
    description:
      "A modern travel agency website designed to showcase destinations, travel services, and packages while making it easy for customers to explore and enquire.",
    services: ["Brand website", "UI/UX design", "Web development"],
    year: "2026",
    thumbnail: "/images/projects/Ashal%20Travel%20%26%20Tours.png",
    liveUrl: "https://ashaltravels.com/",
    featured: true
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
