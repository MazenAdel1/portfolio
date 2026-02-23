"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LINKS } from "@/components/layout/header/consts";

const ACTIVATION_OFFSET = 200;
const sectionIds = LINKS.map((l) => l.href.replace("/#", ""));
const SECTION_COUNT = sectionIds.length;

type ScrollSectionsContextValue = {
  activeIndex: number;
  activeName: string;
  registerBar: (index: number, el: HTMLSpanElement | null) => void;
};

const ScrollSectionsContext = createContext<ScrollSectionsContextValue>({
  activeIndex: 0,
  activeName: LINKS[0].name,
  registerBar: () => {},
});

export function ScrollSectionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIdxRef = useRef(0);
  const barRefs = useRef<(HTMLSpanElement | null)[]>(
    new Array(SECTION_COUNT).fill(null),
  );

  const registerBar = useCallback(
    (index: number, el: HTMLSpanElement | null) => {
      barRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        ticking = false;

        // Compute active section index
        let idx = 0;
        for (let i = 0; i < SECTION_COUNT; i++) {
          const el = document.getElementById(sectionIds[i]);
          if (!el) continue;
          if (-el.getBoundingClientRect().top + ACTIVATION_OFFSET >= 0) {
            idx = i;
          }
        }
        if (idx !== activeIdxRef.current) {
          activeIdxRef.current = idx;
          setActiveIndex(idx);
        }

        // Compute and apply underline percentages via direct DOM writes
        const vh = window.innerHeight;
        const atBottom =
          window.scrollY + vh >= document.documentElement.scrollHeight - 2;

        for (let i = 0; i < SECTION_COUNT; i++) {
          const bar = barRefs.current[i];
          if (!bar) continue;

          let percent = 0;

          if (i === 0) {
            // Home (sticky): use next section's position
            const nextEl = document.getElementById(sectionIds[1]);
            if (nextEl) {
              const nextRect = nextEl.getBoundingClientRect();
              percent = ((vh - nextRect.top) / vh) * 100;
              percent = Math.max(0, Math.min(100, percent));
            }
          } else {
            const el = document.getElementById(sectionIds[i]);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            const relScroll = -Math.round(rect.top);
            const sectionHeight = Math.round(rect.height);

            if (relScroll >= 0 && relScroll <= sectionHeight) {
              percent = (relScroll * 100) / sectionHeight;
            } else if (relScroll > sectionHeight) {
              percent = 100;
            }

            // Last section: fill when page bottom reached
            if (i === SECTION_COUNT - 1 && atBottom) {
              percent = 100;
            }
          }

          bar.style.width = `${percent}%`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ScrollSectionsContext.Provider
      value={{
        activeIndex,
        activeName: LINKS[activeIndex]?.name ?? "Home",
        registerBar,
      }}
    >
      {children}
    </ScrollSectionsContext.Provider>
  );
}

export function useScrollSections() {
  return useContext(ScrollSectionsContext);
}
