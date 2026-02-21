import Image from "next/image";
import { SKILLS } from "./consts";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section flex items-center justify-center overflow-hidden text-black"
      style={{ backgroundImage: "url('/skills/background.webp')" }}
    >
      <div className="absolute size-full backdrop-blur-xs" />
      <div className="glass corner-squircle relative grid grid-cols-5 overflow-hidden rounded-3xl bg-white/10! sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="group relative flex h-fit items-center justify-center border border-white/20 p-3 hover:border-black/20"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white uppercase opacity-0 transition-opacity group-hover:opacity-100">
              {skill}
            </div>
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
