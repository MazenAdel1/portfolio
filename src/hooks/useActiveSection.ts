"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { LINKS } from "@/components/layout/header/consts";

const ACTIVATION_OFFSET = 200;
const sectionIds = LINKS.map((l) => l.href.replace("/#", ""));

export type ActiveSectionResult = {
  activeIndex: number;
  activeId: string;
  activeName: string;
};

export function useActiveSection(): ActiveSectionResult {
  const { scrollY } = useScroll();

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useMotionValueEvent(scrollY, "change", () => {
    let idx = 0;
    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      // Section is active once its top is within ACTIVATION_OFFSET of viewport top
      if (-rect.top + ACTIVATION_OFFSET >= 0) {
        idx = i;
      }
    }
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  });

  return {
    activeIndex,
    activeId: sectionIds[activeIndex],
    activeName: LINKS[activeIndex]?.name ?? "Home",
  };
}
