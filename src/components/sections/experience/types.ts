import { ClassNameValue } from "tailwind-merge";

export type ExperienceItemProps = {
  image: string;
  alt: string;
  title: string;
  type: string;
  date: string;
  description: string;
  direction?: "right" | "left";
  borderRadius: ClassNameValue;
  padding: ClassNameValue;
};
