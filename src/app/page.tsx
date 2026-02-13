import {
  About,
  Landing,
  Projects,
  Experience,
  Skills,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 size-0" id="home" />
      <div className="sticky top-8 z-0">
        <Landing />
      </div>

      <div className="bg-background relative z-10 flex flex-col gap-22 pt-12">
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
