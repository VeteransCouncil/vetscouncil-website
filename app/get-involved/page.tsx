import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Users2, Building2, Megaphone } from "lucide-react";
import Link from "next/link";

const ways = [
  {
    icon: Users2,
    title: "Become a Member",
    description:
      "Veteran service organizations in Highlands County are invited to join the Council and participate in monthly meetings and joint initiatives.",
    cta: "Join the Council",
    href: "/contact",
    external: false,
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Help staff events, assist with benefits outreach, drive veterans to appointments, or lend your skills to a program that needs support.",
    cta: "Sign Up to Volunteer",
    href: "/contact",
    external: false,
  },
  {
    icon: Building2,
    title: "Corporate & Community Partners",
    description:
      "Local businesses can sponsor events, host hiring drives, or provide in-kind donations to support Highlands County veterans.",
    cta: "Become a Partner",
    href: "/contact",
    external: false,
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description:
      "Follow our Facebook page for the most up-to-date information — meeting reminders, event announcements, and schedule changes are posted there first. Share our posts to help make sure every veteran in the county knows the Council is here for them.",
    cta: "Follow on Facebook",
    href: "https://www.facebook.com/VCOHC/",
    external: true,
  },
];

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Get Involved
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            Join the Mission
          </h1>
          <p className="mt-4 max-w-2xl text-khaki-light/90">
            Whether you're a veteran, a family member, or a neighbor who
            wants to give back, there's a place for you at the Veterans
            Council of Highlands County.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ways.map((w) => (
            <Card key={w.title} className="border-khaki-dark/30">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <w.icon className="h-6 w-6 text-gold-light" />
                </div>
                <CardTitle className="font-serif text-xl text-navy">
                  {w.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {w.description}
                </p>
                {w.external ? (
                  <Button
                    asChild
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    <a href={w.href} target="_blank" rel="noreferrer">
                      {w.cta}
                    </a>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    <Link href={w.href}>{w.cta}</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
