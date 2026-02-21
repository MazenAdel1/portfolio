import { LINKS } from "./consts";
import NavLinkItem from "./NavLinkItem";

export default function NavLinks() {
  return (
    <nav>
      <ul className="hidden gap-6 md:flex">
        {LINKS.map((link, i) => (
          <NavLinkItem
            key={i}
            link={link}
            index={i}
            isLast={i === LINKS.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
}
