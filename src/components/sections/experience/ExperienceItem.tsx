import Image from "next/image";
import { ExperienceItemProps } from "./types";

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
    <div
      className={`flex *:flex-1 ${direction === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className={`corner-squircle w-full overflow-hidden ${borderRadius}`}>
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
          className={`flex h-full w-full flex-col justify-center gap-1 pt-5 ${padding}`}
        >
          <div className="flex items-end gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>-
            <span className="text-base text-gray-700">
              {type} {date}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
