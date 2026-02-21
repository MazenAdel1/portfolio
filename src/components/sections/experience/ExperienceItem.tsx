import Image from "next/image";
import { ExperienceItemProps } from "./types";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

export default function ExperienceItem({
  image,
  alt,
  title,
  type,
  date,
  description,
  direction = "left",
  borderRadius,
  padding,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        `flex flex-col *:flex-1 md:flex-row`,
        direction === "right" && "md:flex-row-reverse",
      )}
    >
      <div
        className={cn(`corner-squircle w-full overflow-hidden`, borderRadius)}
      >
        <Image
          src={image}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div>
        <div
          className={cn(
            `flex h-full w-full flex-col justify-center gap-1 pt-3 md:pt-5`,
            padding,
          )}
        >
          <h3 className="text-lg font-semibold md:text-xl">
            {title}
            <span className="ml-1 text-sm font-normal text-gray-700 md:text-base">
              - {type} {date}
            </span>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
