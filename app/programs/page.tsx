import {
  Shield,
  Home as HomeIcon,
  Briefcase,
  GraduationCap,
  Utensils,
  HeartHandshake,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
  {
    icon: Shield,
    title: "VA Benefits Navigation",
    description:
      "Accredited service officers help veterans and dependents file, appeal, and track VA disability, pension, and healthcare claims at no cost.",
  },
  {
    icon: HomeIcon,
    title: "Emergency Housing Assistance",
    description:
      "Short-term rental and utility assistance, plus referrals to transitional and permanent housing programs for veterans at risk of homelessness.",
  },
  {
    icon: Briefcase,
    title: "Employment & Career Services",
    description:
      "Resume workshops, interview coaching, and direct connections to Highlands County employers who prioritize hiring veterans.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training Referrals",
    description:
      "Guidance on GI Bill benefits, vocational rehabilitation, and local scholarship opportunities for veterans and their families.",
  },
  {
    icon: Utensils,
    title: "Family Support & Food Assistance",
    description:
      "Holiday food drives, emergency pantry referrals, and family support resources coordinated with local partner charities.",
  },
  {
    icon: HeartHandshake,
    title: "Peer Support & Fellowship",
    description:
      "Monthly council meetings and social gatherings that connect veterans across every era of service for camaraderie and mutual support.",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Programs &amp; Services
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            How We Serve Highlands County Veterans
          </h1>
          <p className="mt-4 max-w-2xl text-khaki-light/90">
            Every program is offered free of charge to eligible veterans and
            their families, made possible through member organizations,
            volunteers, and community donations.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.title} className="border-khaki-dark/30">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <p.icon className="h-6 w-6 text-gold-light" />
                </div>
                <CardTitle className="font-serif text-lg text-navy">
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-khaki-light py-16">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Need Assistance?
          </h2>
          <p className="max-w-xl text-navy/70">
            Reach out and a service officer will follow up to walk you
            through the program that fits your situation.
          </p>
          <Button asChild size="lg" className="bg-oldglory-red hover:bg-oldglory-darkred text-white">
            <Link href="/contact">Request Assistance</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
