import Image from "next/image";
import * as motion from "motion/react-client";

export default function Gdg() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 1 }}
      className="mx-auto -my-10"
    >
      <Image src="/gdg.svg" alt="GDG Damanhour logo" width={700} height={200} />
    </motion.div>
  );
}
