import { motion } from "framer-motion";
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
      <div
        className="relative bg-cover bg-position-[0%_90%] p-5"
        style={{ backgroundImage: `url(${project.images.background})` }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative flex gap-8">
          <Image
            src={project.images.main}
            alt={`${project.title} Demo Image`}
            width={1000}
            height={1000}
            className="size-80 object-contain"
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
                  <div key={i} className="flex items-center">
                    <span className="pr-1">{tech.title}:</span>
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
                          className="px-2.5 py-0.5 font-medium shadow-sm"
                        >
                          {t}
                        </span>
                      );
                    })}

                    {tech.partner && (
                      <Link
                        href={tech.partner.href}
                        target="_blank"
                        className="ml-2 font-medium underline hover:no-underline"
                      >
                        By {tech.partner.name}
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
                  className="underline hover:no-underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
