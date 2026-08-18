import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  HeartHandshake,
  Home as HomeIcon,
  Briefcase,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Established", value: "1995" },
  { label: "Incorporated", value: "2007" },
  { label: "Member Organizations, Partners & Affiliates", value: "20+" },
  { label: "Tax-Exempt Status", value: "501(c)(3)" },
];

const services = [
  {
    icon: Shield,
    title: "Benefits Assistance",
    description:
      "One-on-one help navigating VA claims, disability ratings, and federal benefits paperwork.",
  },
  {
    icon: HomeIcon,
    title: "Housing Support",
    description:
      "Emergency assistance and referrals for veterans facing housing instability or homelessness.",
  },
  {
    icon: Briefcase,
    title: "Employment Resources",
    description:
      "Job placement referrals, resume support, and connections to veteran-friendly employers.",
  },
  {
    icon: HeartHandshake,
    title: "Community & Fellowship",
    description:
      "Monthly meetings, honor events, and a network of fellow veterans who understand your journey.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="https://g.tlcdn.com/view/854aede791cf49fb9029beb2c7742bc7.jpg"
            alt="Combat boots, dog tags, and an American flag"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        </div>
        <div className="container relative py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-light">
              <Star className="h-3 w-3" /> Sebring, Florida
            </p>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-white md:text-6xl text-balance">
              Serving Those Who Served Us
            </h1>
            <p className="mt-6 text-lg text-khaki-light/90 md:text-xl">
              The Veterans Council of Highlands County unites veteran
              organizations, advocates for benefits, and stands beside every
              veteran and military family in our community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-oldglory-red hover:bg-oldglory-darkred text-white"
              >
                <Link href="/get-involved">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/programs">See Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-khaki-light">
        <div className="container grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl font-extrabold text-navy md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-navy/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Our Mission
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            To unify the veteran organizations and groups of Highlands
            County, giving a single voice to veterans, their families, and
            surviving spouses on issues before local, state, and national
            legislative bodies. We promote patriotism through parades, social
            functions, and memorial events, and we coordinate programs that
            serve the best interests of military members, veterans, their
            families, surviving spouses, and orphaned children &mdash;
            partnering with local, state, and national agencies dedicated to
            veteran welfare.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/60 py-20">
        <div className="container">
          <h2 className="text-center font-serif text-3xl font-bold text-navy md:text-4xl">
            How We Help
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.title} className="border-khaki-dark/30">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                    <s.icon className="h-6 w-6 text-gold-light" />
                  </div>
                  <CardTitle className="font-serif text-lg text-navy">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Stand With Highlands County Veterans
          </h2>
          <p className="max-w-xl text-khaki-light/90">
            Every donation and volunteer hour directly supports veterans in
            our community. Join us in honoring their service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-oldglory-red hover:bg-oldglory-darkred text-white">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
