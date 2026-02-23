import { frame, useSpring } from "motion/react";
import { RefObject, useEffect } from "react";

const spring = { damping: 20, stiffness: 200, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    // Skip on touch-only devices — FloatingImage is hidden on mobile anyway
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      const rect = element.getBoundingClientRect();

      frame.read(() => {
        x.set(clientX - rect.left);
        y.set(clientY - rect.top);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}
