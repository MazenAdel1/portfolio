import { MotionValue } from "motion";

type HrefTitle = "Demo Video" | "Github Repository" | "Live Website";

export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  href: {
    title: HrefTitle;
    url: string;
  }[];
  technologies: {
    title: string;
    technologies: string[];
    partner?: { name: string; href: string };
  }[];
  images: {
    main: string;
    background: string;
  };
};

export type ProjectItemProps = {
  project: ProjectProps;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export type ProjectDetailsProps = {
  isActive: boolean;
  project: ProjectProps;
};

export type FloatingImageProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isHovered: boolean;
  src: string;
  alt: string;
};
