import { ExperienceItemProps } from "./types";

export const experiences: ExperienceItemProps[] = [
  {
    image: "/experience/experience-fruitex.webp",
    alt: "Fruitex",
    title: "Fruitex",
    type: "Freelance",
    date: "Oct 2025 - Nov 2025",
    description:
      "Built fruit-ex.com website from the planning to deployment using Next.js for Front-End in the landing page and for Back-End in the admin dashboard",
    borderRadius:
      "md:rounded-l-4xl md:rounded-t-4xl md:rounded-br-none rounded-4xl",
    padding: "md:pl-5 pl-2",
  },
  {
    image: "/experience/experience-semesteer.webp",
    alt: "Semesteer",
    title: "Semesteer",
    type: "Freelance",
    date: "Mid 2024 - Early 2025",
    description:
      " Built the main client portal Application that Semesteer uses to manage their data using Next.js and Mongodb",
    direction: "right",
    borderRadius: "md:rounded-r-4xl md:rounded-l-none rounded-4xl",
    padding: "md:pr-5 pl-2",
  },
  {
    image: "/experience/experience-alembic-soft.webp",
    alt: "Alembic Soft",
    title: "Alembic Soft",
    type: "Internship",
    date: "Late 2023 - Mid 2025",
    description:
      "Built full stack management application for developers that makes life easier using Next.js, Bootstrap, Express.js, and Jest",
    borderRadius:
      "md:rounded-l-4xl md:rounded-b-4xl md:rounded-tr-none rounded-4xl",
    padding: "md:pl-5 pl-2",
  },
];
