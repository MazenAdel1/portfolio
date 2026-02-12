import Image from "next/image";

export default function Skills() {
  const skills = [
    "html",
    "css",
    "js",
    "ts",
    "bootstrap",
    "tailwind",
    "react",
    "next",
    "node",
    "express",
    "mongo",
    "postgres",
    "prisma",
    "jest",
    "firebase",
    "motion",
    "git",
    "github",
  ];
  return (
    <section
      id="skills"
      className="corner-squircle relative flex h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden rounded-[50px] bg-[url(/skills/background.png)] bg-cover bg-center p-4 text-black"
    >
      <div className="absolute size-full backdrop-blur-xs" />
      <div className="glass corner-squircle relative grid grid-cols-9 overflow-hidden rounded-3xl bg-white/10!">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex h-fit items-center justify-center border border-white/20 p-3"
          >
            <Image
              src={`/skills/${skill}.svg`}
              alt={skill}
              width={120}
              height={120}
              className="size-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
