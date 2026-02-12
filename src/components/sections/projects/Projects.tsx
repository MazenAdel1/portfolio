"use client";

import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "./consts";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <section id="projects" className="py-10">
      <div className="flex w-full flex-col">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </section>
  );
}
