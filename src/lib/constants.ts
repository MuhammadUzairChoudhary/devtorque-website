export const siteConfig = {
  name: "DevTorque",
  url: "https://dev-torque.com",
  description:
    "DevTorque builds thoughtful software products, AI automation, voice agents, websites, and digital experiences with care in every detail.",
  email: "hello@devtorque.com",
  social: {
    linkedin: "https://www.linkedin.com/company/devtorque",
    instagram: "https://www.instagram.com/devtorque.ai/"
  }
} as const;

export const navItems = [
  { label: "Services", href: "/#solutions" },
  { label: "Why Choose Us", href: "/#quality" },
  { label: "Work", href: "/#work" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Our Process", href: "/#process" },
  { label: "Team", href: "/#team" }
] as const;
