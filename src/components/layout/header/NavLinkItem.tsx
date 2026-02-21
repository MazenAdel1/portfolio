"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
import { LINKS } from "./consts";

const sectionIds = LINKS.map((l) => l.href.replace("/#", ""));

export default function NavLinkItem({
  link,
  index,
  isLast,
}: {
  link: (typeof LINKS)[number];
  index: number;
  isLast: boolean;
}) {
  const barRef = useRef<HTMLSpanElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (!barRef.current) return;

    let percent = 0;

    if (index === 0) {
      // Home's Landing is sticky — its rect.top is always ~0.
      // Drive home's progress by how far the next section has scrolled in:
      // 0% when next section bottom is at viewport bottom, 100% when its top reaches viewport top.
      const nextEl = document.getElementById(sectionIds[1]);
      if (nextEl) {
        const nextRect = nextEl.getBoundingClientRect();
        // 0% when Projects bottom-edge is at viewport bottom,
        // 100% when Projects top-edge reaches viewport top
        percent =
          ((window.innerHeight - nextRect.top) / window.innerHeight) * 100;
        percent = Math.max(0, Math.min(100, percent));
      }
    } else {
      const el = document.getElementById(sectionIds[index]);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const relScroll = -Math.round(rect.top);
      const sectionHeight = Math.round(rect.height);

      if (relScroll >= 0 && relScroll <= sectionHeight) {
        percent = (relScroll * 100) / sectionHeight;
      } else if (relScroll > sectionHeight) {
        percent = 100;
      }

      // Last section: fill 100% when page bottom is reached
      if (
        isLast &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      ) {
        percent = 100;
      }
    }

    barRef.current.style.width = `${percent}%`;
  });

  return (
    <li className="relative">
      <Link
        href={link.href}
        className="text-lg transition hover:text-yellow-300"
      >
        {link.name}
      </Link>

      {/* Underline track */}
      <span className="absolute bottom-0 left-0 h-px w-full rounded-full bg-white/20" />

      {/* Active underline */}
      <span
        ref={barRef}
        className={`absolute bottom-0 left-0 h-px rounded-full bg-yellow-300 ${
          isLast ? "transition-[width] duration-300 ease-out" : ""
        }`}
        style={{ width: "0%" }}
      />
    </li>
  );
}
