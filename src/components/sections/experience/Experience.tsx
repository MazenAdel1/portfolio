import { experiences } from "./consts";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col gap-10 text-black md:gap-0"
    >
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}
