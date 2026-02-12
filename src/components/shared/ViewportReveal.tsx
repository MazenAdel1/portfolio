"use client";

import { useEffect } from "react";

export default function ViewportReveal() {
  useEffect(() => {
    const update = () => {
      const x = window.scrollX + window.innerWidth / 2;
      const y = window.scrollY + window.innerHeight / 2;

      document.documentElement.style.setProperty("--reveal-x", `${x}px`);
      document.documentElement.style.setProperty("--reveal-y", `${y}px`);
    };

    const handleAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName === "appear-radial") {
        document.body.style.animation = "none";
        document.body.style.clipPath = "none";
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.body.addEventListener("animationend", handleAnimationEnd);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.body.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return null;
}
