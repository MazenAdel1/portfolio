"use client";

import { useFollowPointer } from "@/hooks/useFollowPointer";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import FloatingImage from "./FloatingImage";
import ProjectDetails from "./ProjectDetails";
import { ProjectItemProps } from "./type";

export default function ProjectItem({
  project: { images, title, id, ...rest },
  activeTab,
  setActiveTab,
}: ProjectItemProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { x, y } = useFollowPointer(buttonRef);
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeTab === id.toString();

  return (
    <div>
      <div className="relative">
        <button
          ref={buttonRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            setActiveTab(isActive ? "" : id.toString());
          }}
          className="relative flex h-30 w-full cursor-pointer items-center justify-between overflow-hidden bg-cover px-4 text-2xl font-semibold transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${images.background})`,
            backgroundPosition: isHovered || isActive ? "0% 70%" : "0% 90%",
          }}
        >
          <span>{id.toString().padStart(2, "0")}</span>
          <h3 className="font-telma drop-shadow-solid">{title}</h3>
          <motion.span
            animate={{
              rotate: isActive ? 90 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </button>

        <FloatingImage
          x={x}
          y={y}
          isHovered={isHovered}
          src={images.main}
          alt={`${title} Logo`}
        />
      </div>

      <ProjectDetails
        project={{ id, title, images, ...rest }}
        isActive={isActive}
      />
    </div>
  );
}
