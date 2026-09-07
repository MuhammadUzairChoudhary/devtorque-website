import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    description:
      "We learn your goals, users, and the problem you are trying to solve so we can build the right thing from the start."
  },
  {
    id: "plan",
    number: "02",
    title: "Plan",
    description:
      "We define the scope, priorities, timeline, and approach so everyone knows what is being built and why."
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "We turn the plan into a working product, keeping the process clear and involving you as it takes shape."
  },
  {
    id: "refine",
    number: "04",
    title: "Refine",
    description:
      "We review the experience, improve the details, and remove friction so the product feels polished and easy to use."
  },
  {
    id: "test",
    number: "05",
    title: "Test",
    description:
      "We check the important flows, edge cases, devices, and functionality to make sure everything works as expected."
  },
  {
    id: "deliver",
    number: "06",
    title: "Deliver",
    description:
      "We hand over the finished product with the access, documentation, and clarity you need to move forward confidently."
  }
];
