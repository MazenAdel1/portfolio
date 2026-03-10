import {
  About,
  Landing,
  Projects,
  Experience,
  Skills,
  Contact,
  Gdg,
} from "@/components/sections";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mazen Adel",
  url: "https://mazen-adel.vercel.app",
  jobTitle: "Software Engineer",
  description:
    "A passionate software engineer and computer science student with a love for creating pixel-perfect websites and systems that solve real-world problems using modern technologies.",
  email: "mazenadel.dev@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/mazen-adel-dev",
    "https://github.com/MazenAdel1",
  ],
  knowsAbout: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Shadcn UI",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Git",
    "GitHub",
    "Jira",
    "Firebase",
    "Jest",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute top-0 size-0" id="home" />

      <main className="sticky top-4 z-0 md:top-6 lg:top-8">
        <Landing />
      </main>

      <div className="bg-background relative z-10 flex flex-col gap-22 pt-8 md:pt-10 lg:pt-12">
        <Projects />
        <About />
        <Gdg />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
