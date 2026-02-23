"use client";

import { useInView, motion, MotionProps } from "motion/react";
import React, { useMemo, useRef } from "react";

type Props<T extends React.ElementType = "div"> = {
  children?: React.ReactNode;
  as?: T;
  className?: string;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["animate"];
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "className"> &
  MotionProps;

export default function AnimationWrapper<T extends React.ElementType = "div">({
  children,
  as,
  className,
  initial,
  whileInView,
  ...rest
}: Props<T>) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const MotionTag = useMemo(
    () =>
      motion.create(as || "div") as unknown as React.ComponentType<
        Record<string, unknown>
      >,
    [as],
  );

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? whileInView : initial}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
