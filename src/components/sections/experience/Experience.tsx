import { experiences } from "./consts";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col text-black">
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}
