"use client";

import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bottomY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="section flex flex-col items-center justify-center gap-5 overflow-hidden text-center"
    >
      <Image
        src="/about/self-background.webp"
        alt="a self portrait in romanticism style"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <motion.div
        style={{ y: bottomY }}
        className="absolute bottom-[-10%] left-1/2 w-160 -translate-x-1/2 opacity-75 sm:bottom-[-15%] sm:w-180 md:bottom-[-20%] md:w-200 md:opacity-100"
      >
        <Image
          src="/about/self-no-background.webp"
          alt="self portrait in romanticism style"
          width={1024}
          height={1024}
          sizes="(max-width: 640px) 640px, 800px"
          className="w-full"
        />
      </motion.div>
      <h2 className="font-telma mb-3 text-[10dvw] font-semibold tracking-widest [word-spacing:0.5rem] md:text-8xl">
        Mazen Adel
      </h2>
      <p className="drop-shadow-solid relative max-w-3xl text-lg tracking-wide capitalize [word-spacing:0.05rem]">
        I&apos;m a passionate web developer and computer science student with a
        love for creating pixel-perfect websites and systems that solve
        real-world problems using modern technologies.
      </p>
    </section>
  );
}
