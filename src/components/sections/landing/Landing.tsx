"use client";

import { AnimatedText } from "@/components/shared";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const { scrollYProgress } = useScroll();

  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-40%"]);
  const textBlur = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["blur(0px)", "blur(5px)"],
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bottomY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-60%"]);

  return (
    <main className="corner-squircle h-[calc(100dvh-4rem)] overflow-hidden rounded-[50px] bg-[url('/landing/home-background.jpg')] bg-cover bg-center">
      <motion.div
        style={{ y: textY, filter: textBlur, opacity: textOpacity }}
        className="font-telma absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <AnimatedText
          text="Mazen Adel"
          as={"h1"}
          staggerChildren={0.33}
          duration={0.33}
          delay={0.67}
          className="text-[150px] font-black uppercase text-shadow-(--drop-shadow-solid)"
        />
        <AnimatedText
          text="Front-End Developer"
          as={"h2"}
          staggerChildren={0.33}
          duration={0.33}
          delay={1.33}
          className="-mt-12 text-6xl font-semibold capitalize"
        />
      </motion.div>

      <motion.div
        style={{ y: bottomY, filter: textBlur, opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col"
      >
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2, duration: 0.33, ease: "easeOut" }}
        >
          <Image
            src="/arrow-down.svg"
            alt="vector"
            width={100}
            height={100}
            className="translate-x-12 translate-y-5"
          />
          <Link
            href="/#projects"
            className="block -translate-y-6 stroke-[0.5px] text-xl text-shadow-lg"
          >
            See Projects
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
