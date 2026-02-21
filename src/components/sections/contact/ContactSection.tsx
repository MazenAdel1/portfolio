import Link from "next/link";
import { ContactSectionProps } from "./types";
import * as motion from "motion/react-client";

export default function ContactSection({ title, links }: ContactSectionProps) {
  return (
    <div className="flex w-full flex-col gap-3 md:w-md">
      <h3 className="border-b-2 border-gray-200 text-xl font-semibold md:text-2xl">
        {title}
      </h3>
      {links.map((link) => (
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.33, delay: 0.2 }}
          viewport={{ once: true }}
          key={link.href}
        >
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="w-fit text-lg font-medium transition hover:text-yellow-300 md:text-xl"
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
