"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { LINKS } from "./consts";
import Link from "next/link";
import { useScrollSections } from "@/hooks/useScrollSections";

/** Returns true only on the client, false during SSR — no effects needed. */
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useIsMounted();
  const { activeName } = useScrollSections();

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-2 md:hidden"
        aria-label="Toggle menu"
      >
        <Image src="/icons/menu.svg" alt="menu icon" width={24} height={24} />
        <span>{activeName}</span>
      </button>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-100 flex flex-col bg-white md:hidden"
              >
                {/* Header row */}
                <div className="flex items-center justify-between px-6 py-5">
                  <span className="text-lg font-semibold">{activeName}</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="flex cursor-pointer items-center justify-center rounded-full bg-gray-800 p-2 transition hover:bg-gray-700"
                  >
                    <Image
                      src="/icons/menu.svg"
                      alt="close icon"
                      width={24}
                      height={24}
                      className="rotate-90"
                    />
                  </button>
                </div>

                {/* Nav links */}
                <motion.ul
                  transition={{ duration: 0.25, delay: 0.05 }}
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1, delayChildren: 0.25 },
                    },
                    exit: { opacity: 0 },
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-1 px-4"
                >
                  {LINKS.map((link, i) => {
                    const isActive = link.name === activeName;
                    return (
                      <motion.li
                        key={i}
                        variants={{
                          initial: { y: -10, opacity: 0, filter: "blur(5px)" },
                          animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                          exit: { y: -10, opacity: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-xl px-4 py-3 text-lg transition ${
                            isActive
                              ? "bg-gray-50 font-semibold text-yellow-500"
                              : "text-black hover:bg-gray-100"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
