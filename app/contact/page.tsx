import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Veterans Council of Highlands County — mailing address, meeting address, phone, email, and meeting schedule for veterans in Sebring, FL.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Contact
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            We're Here to Help
          </h1>
        </div>
      </section>

      <section className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
        <div className="space-y-6 md:col-span-1">
          <Card className="border-khaki-dark/30">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-navy">
                Visit or Reach Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-oldglory-red" />
                <span>
                  <span className="block font-semibold text-navy">
                    Mailing Address
                  </span>
                  P.O. Box 8201, Sebring, FL 33870
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-oldglory-red" />
                <span>
                  <span className="block font-semibold text-navy">
                    Meeting Address
                  </span>
                  7209 S George Blvd, Sebring, FL 33875
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-oldglory-red" />
                (863) 991-4165
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-oldglory-red" />
                highlandsvetscouncil@gmail.com
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-oldglory-red" />
                Council meets 3rd Tuesday of every month — social hour 6:00
                PM, meeting 7:00 PM
              </div>
            </CardContent>
          </Card>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
