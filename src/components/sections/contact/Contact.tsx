import { CONTACT_LINKS } from "./consts";
import ContactSection from "./ContactSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="corner-squircle flex h-[calc(100dvh-4rem)] flex-col gap-20 rounded-[50px] bg-[url(/contact/background.jpg)] bg-cover bg-center px-10 pt-20"
    >
      <h2 className="font-telma text-center text-7xl font-bold">
        Keep in Touch
      </h2>
      <div className="flex flex-col items-center gap-10">
        <ContactSection title="Hire Me" links={CONTACT_LINKS.hireMe} />
        <ContactSection title="Socials" links={CONTACT_LINKS.social} />
        <ContactSection title="Open Source" links={CONTACT_LINKS.openSource} />
      </div>
    </section>
  );
}
