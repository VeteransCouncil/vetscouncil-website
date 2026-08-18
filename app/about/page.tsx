import Image from "next/image";
import { Users, Award, Landmark } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Unity",
    text: "Bringing together every veteran organization in Highlands County under one shared mission.",
  },
  {
    icon: Award,
    title: "Honor",
    text: "Recognizing the sacrifice of every veteran, regardless of era, branch, or discharge status.",
  },
  {
    icon: Landmark,
    title: "Advocacy",
    text: "Standing up for veterans' rights and benefits at the local, state, and federal level.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            About Us
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            Our Story &amp; Mission
          </h1>
        </div>
      </section>

      <section className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            A Coalition Built on Service
          </h2>
          <p className="mt-4 text-muted-foreground">
            The Veterans Council of Highlands County (VCOHC) is a 501(c)(3)
            tax-exempt Florida corporation based in Sebring, Florida. Founded
            by local veterans who saw the need for a unified voice, VCOHC
            brings together the many veteran service organizations across
            Highlands County to coordinate resources, share information, and
            amplify advocacy efforts on behalf of every veteran in our area.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today, the Council continues that work — hosting community
            events, connecting veterans with benefits and services, and
            ensuring that no veteran in Highlands County has to navigate the
            system alone.
          </p>
        </div>
        <div className="relative h-72 overflow-hidden rounded-xl shadow-lg md:h-96">
          <Image
            src="https://g.tlcdn.com/view/854aede791cf49fb9029beb2c7742bc7.jpg"
            alt="American flag with military boots and dog tags"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-khaki-light py-16">
        <div className="container">
          <h2 className="text-center font-serif text-3xl font-bold text-navy">
            What We Stand For
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                  <v.icon className="h-7 w-7 text-gold-light" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-navy/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-3xl rounded-xl border border-khaki-dark/30 bg-muted/50 p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy">
            501(c)(3) Nonprofit Status
          </h2>
          <p className="mt-3 text-muted-foreground">
            The Veterans Council of Highlands County is recognized by the IRS
            as a tax-exempt, nonprofit organization. Donations made to VCOHC
            may be tax-deductible to the extent allowed by law. Our EIN and
            annual filings are available upon request.
          </p>
        </div>
      </section>
    </main>
  );
}
