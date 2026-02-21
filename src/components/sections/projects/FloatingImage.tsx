import * as motion from "motion/react-client";
import Image from "next/image";
import { FloatingImageProps } from "./type";

export default function FloatingImage({
  x,
  y,
  isHovered,
  src,
  alt,
}: FloatingImageProps) {
  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none absolute top-0 left-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
    >
      <Image src={src} alt={alt} width={500} height={500} className="w-25" />
    </motion.div>
  );
}
