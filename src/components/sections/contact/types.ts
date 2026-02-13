export type ContactSectionProps = {
  title: string;
  links: { name: string; href: string }[];
};

export type ContactSectionTitles = "hireMe" | "social" | "openSource";

export type ContactLinksProps = {
  [key in ContactSectionTitles]: ContactSectionProps["links"];
};
