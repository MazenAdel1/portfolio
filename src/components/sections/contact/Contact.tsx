import { CONTACT_LINKS } from "./consts";
import ContactSection from "./ContactSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section flex flex-col justify-center gap-20 bg-[url(/contact/background.webp)] px-10 pt-10 md:pt-20"
    >
      <div className="absolute top-0 left-0 size-full bg-black/10" />

      <h2 className="font-telma -mt-10 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
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
