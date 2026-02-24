import {
  About,
  Landing,
  Projects,
  Experience,
  Skills,
  Contact,
  Gdg,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 size-0" id="home" />

      <main className="sticky top-4 z-0 md:top-6 lg:top-8">
        <Landing />
      </main>

      <div className="bg-background relative z-10 flex flex-col gap-22 pt-8 md:pt-10 lg:pt-12">
        <Projects />
        <About />
        <Gdg />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
