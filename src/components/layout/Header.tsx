import Link from "next/link";

export default function Header() {
  const LINKS = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="glass corner-squircle fixed top-10 left-1/2 z-50 -translate-x-1/2 rounded-3xl px-6 py-4">
      <ul className="flex gap-6">
        {LINKS.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-lg transition hover:text-yellow-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
