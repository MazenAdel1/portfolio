import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { ScrollSectionsProvider } from "@/hooks/useScrollSections";

export default function Header() {
  return (
    <ScrollSectionsProvider>
      <header className="glass corner-squircle fixed top-7 left-1/2 z-50 -translate-x-1/2 rounded-3xl px-6 py-4 md:top-10">
        <NavLinks />

        <MobileMenu />
      </header>
    </ScrollSectionsProvider>
  );
}
