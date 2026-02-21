import * as motion from "motion/react-client";
import Image from "next/image";
import { ProjectDetailsProps } from "./type";
import Link from "next/link";

export default function ProjectDetails({
  isActive,
  project,
}: ProjectDetailsProps) {
  return (
    <motion.div
      className="overflow-hidden bg-black"
      initial={{ height: 0 }}
      animate={{
        height: isActive ? "auto" : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="relative border-y border-yellow-200 bg-linear-to-br bg-[radial-gradient(#535860_1px,transparent_1px)] from-gray-700 via-black to-gray-700 bg-size-[16px_16px] p-5">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
          <Image
            src={project.images.main}
            alt={`${project.title} Demo Image`}
            width={1000}
            height={1000}
            className="size-40 self-center object-contain md:size-60 md:self-start lg:size-80"
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl text-white">{project.description}</p>
            <div className="flex flex-col gap-1">
              {/* techs in gradient background colors */}
              {project.technologies.map((tech, i) => {
                const prevTechsCount = project.technologies
                  .slice(0, i)
                  .reduce((sum, t) => sum + t.technologies.length, 0);

                return (
                  <div key={i} className="flex flex-wrap items-center">
                    <span className="inline-block w-25 pr-1 text-lg font-medium">
                      {tech.title}:
                    </span>
                    {tech.technologies.map((t, j) => {
                      const globalIndex = prevTechsCount + j;
                      const totalTechs = project.technologies.reduce(
                        (sum, t) => sum + t.technologies.length,
                        0,
                      );
                      const hue = (globalIndex / totalTechs) * 300 + 180;

                      return (
                        <span
                          key={j}
                          style={{
                            backgroundColor: `oklch(65% 0.19 ${hue}deg)`,
                          }}
                          className="px-1 shadow-sm md:px-2.5 md:py-0.5"
                        >
                          {t}
                        </span>
                      );
                    })}

                    {tech.partner && (
                      <Link
                        href={tech.partner.href}
                        target="_blank"
                        className="ml-2 flex gap-1 font-medium hover:underline"
                      >
                        By {tech.partner.name}{" "}
                        <Image
                          src="/icons/external-link.svg"
                          alt="external link icon"
                          width={16}
                          height={16}
                        />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              {project.href.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="flex gap-1 hover:underline"
                >
                  {link.title}{" "}
                  <Image
                    src="/icons/external-link.svg"
                    alt="external link icon"
                    width={16}
                    height={16}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
