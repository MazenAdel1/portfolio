import Link from "next/link";
import { ContactSectionProps } from "./types";

export default function ContactSection({ title, links }: ContactSectionProps) {
  return (
    <div className="flex w-md flex-col gap-3">
      <h4 className="border-b-2 border-gray-200 text-2xl font-semibold">
        {title}
      </h4>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className="w-fit text-xl font-medium transition hover:text-yellow-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
