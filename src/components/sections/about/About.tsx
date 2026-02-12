"use client";

import { useScroll, useTransform, motion } from "framer-motion";
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
      className="corner-squircle relative flex h-[calc(100dvh-4rem)] flex-col items-center justify-center gap-5 overflow-hidden rounded-[50px] bg-[url('/about/self-background.png')] bg-cover bg-center p-5 text-center"
    >
      <motion.div
        style={{ y: bottomY }}
        className="absolute bottom-[-20%] left-1/2 w-200 -translate-x-1/2"
      >
        <Image
          src="/about/self-no-background.png"
          alt="self portrait in romanticism style"
          width={1000}
          height={1000}
          className="w-full"
        />
      </motion.div>
      <h2 className="font-telma mb-3 text-8xl font-semibold tracking-widest [word-spacing:0.5rem]">
        Mazen Adel
      </h2>
      <p className="drop-shadow-solid relative text-lg tracking-wide capitalize [word-spacing:0.05rem]">
        I&apos;m a passionate web developer and computer science student with a
        love for creating pixel-perfect websites and systems that solve
        real-world problems using modern technologies.
      </p>
    </section>
  );
}
