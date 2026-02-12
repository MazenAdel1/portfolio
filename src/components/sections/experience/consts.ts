import { ExperienceItemProps } from "./types";

export const experiences: ExperienceItemProps[] = [
  {
    image: "/experience/experience-fruitex.png",
    alt: "Fruitex",
    title: "Fruitex",
    type: "Freelance",
    date: "Oct 2025 - Nov 2025",
    description:
      "Built fruit-ex.com website from the planning to deployment using Next.js for Front-End in the landing page and for Back-End in the admin dashboard",
    borderRadius: "rounded-l-4xl rounded-t-4xl",
    padding: "pl-5",
  },
  {
    image: "/experience/experience-semesteer.png",
    alt: "Semesteer",
    title: "Semesteer",
    type: "Freelance",
    date: "Mid 2024 - Early 2025",
    description:
      " Built the main client portal Application that Semesteer uses to manage their data using Next.js and Mongodb",
    direction: "right",
    borderRadius: "rounded-r-4xl",
    padding: "pr-5",
  },
  {
    image: "/experience/experience-alembic-soft.png",
    alt: "Alembic Soft",
    title: "Alembic Soft",
    type: "Internship",
    date: "Late 2023 - Mid 2025",
    description:
      "Built full stack management application for developers that makes life easier using Next.js, Bootstrap, Express.js, and Jest",
    borderRadius: "rounded-l-4xl rounded-b-4xl",
    padding: "pl-5",
  },
];
