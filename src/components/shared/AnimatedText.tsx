"use client";

import { motion, MotionProps, useInView, Variants } from "motion/react";
import React, { useMemo, useRef } from "react";

type AnimatedTextProps = {
  text: string;
  as?: React.ElementType;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  triggerOnLoad?: boolean;
  delay?: number;
  duration?: number;
} & MotionProps;

export default function AnimatedText({
  text,
  as: Tag = "p",
  staggerChildren = 0.05,
  delayChildren = 0,
  className = "",
  delay,
  duration = 0.5,
  animateImmediately = true,
  ...rest
}: AnimatedTextProps & { animateImmediately?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  const item = (index?: number): Variants => ({
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: (delay ?? 0) + (index ? index * staggerChildren : 0),
        duration,
      },
    },
  });

  const MotionTag = useMemo(() => motion.create(Tag), [Tag]);

  const words = text.split(" ");

  return (
    // eslint-disable-next-line react-hooks/static-components
    <MotionTag
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView || animateImmediately ? "visible" : "hidden"}
      {...rest}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          variants={item(index)}
        >
          {word} {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
