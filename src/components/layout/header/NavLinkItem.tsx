"use client";

import { useCallback } from "react";
import Link from "next/link";
import { LINKS } from "./consts";
import { useScrollSections } from "@/hooks/useScrollSections";

export default function NavLinkItem({
  link,
  index,
  isLast,
}: {
  link: (typeof LINKS)[number];
  index: number;
  isLast: boolean;
}) {
  const { registerBar } = useScrollSections();

  const barCallbackRef = useCallback(
    (el: HTMLSpanElement | null) => {
      registerBar(index, el);
    },
    [registerBar, index],
  );

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
        ref={barCallbackRef}
        className={`absolute bottom-0 left-0 h-px rounded-full bg-yellow-300 ${
          isLast ? "transition-[width] duration-300 ease-out" : ""
        }`}
        style={{ width: "0%" }}
      />
    </li>
  );
}
