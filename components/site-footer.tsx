import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-khaki-light/90">
      <div className="flag-stripe-divider" />
      <div className="container grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg"
              alt="Veterans Council of Highlands County logo"
              width={48}
              height={48}
              className="rounded-full border-2 border-gold"
            />
            <p className="font-serif font-bold text-white">
              Veterans Council
              <br />
              of Highlands County
            </p>
          </div>
          <p className="text-sm text-khaki-light/70">
            A 501(c)(3) tax-exempt Florida corporation serving all veterans
            and their families in Highlands County. Established 1995,
            incorporated 2007.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-gold-light">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              ["About", "/about"],
              ["Programs", "/programs"],
              ["Events", "/events"],
              ["Resources", "/resources"],
              ["Get Involved", "/get-involved"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-gold-light">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                Meetings: 7209 S George Blvd, Sebring, FL 33875
                <br />
                Mailing: P.O. Box 8201, Sebring, FL 33870
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              3rd Tuesday monthly &mdash; social hour 6 PM, meeting 7 PM
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              (863) 991-4165
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              highlandsvetscouncil@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-gold-light">
            Connect
          </h3>
          <a
            href="https://www.facebook.com/VCOHC/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-white"
          >
            <Facebook className="h-4 w-4 text-gold" />
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-khaki-light/60">
        &copy; {new Date().getFullYear()} Veterans Council of Highlands
        County. All rights reserved.
      </div>
    </footer>
  );
}
