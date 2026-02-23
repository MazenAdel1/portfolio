import dynamic from "next/dynamic";
import { Landing, Experience, Skills, Contact } from "@/components/sections";

const Projects = dynamic(() => import("@/components/sections/projects/Projects"));
const About = dynamic(() => import("@/components/sections/about/About"));

export default function Home() {
  return (
    <>
      <div className="absolute top-0 size-0" id="home" />

      <main className="top-4 z-0 md:sticky md:top-6 lg:top-8">
        <Landing />
      </main>

      <div className="bg-background relative z-10 flex flex-col gap-22 pt-8 md:pt-10 lg:pt-12">
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
