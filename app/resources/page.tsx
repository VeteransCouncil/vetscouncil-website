import { ExternalLink, Phone, LifeBuoy, MapPin, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const resourceGroups = [
  {
    title: "VA Benefits & Claims",
    links: [
      { label: "VA.gov — Disability Compensation", href: "https://www.va.gov/disability/" },
      { label: "VA.gov — Health Care Benefits", href: "https://www.va.gov/health-care/" },
      { label: "eBenefits Portal", href: "https://www.va.gov/" },
    ],
  },
  {
    title: "Housing & Financial Assistance",
    links: [
      { label: "VA Homeless Programs", href: "https://www.va.gov/homeless/" },
      { label: "Florida Dept. of Veterans' Affairs", href: "https://www.floridavets.org/" },
      { label: "HUD-VASH Housing Vouchers", href: "https://www.va.gov/homeless/hud-vash.asp" },
    ],
  },
  {
    title: "Employment & Education",
    links: [
      { label: "GI Bill Benefits", href: "https://www.va.gov/education/" },
      { label: "CareerOneStop for Veterans", href: "https://www.careeronestop.org/Veterans/" },
      { label: "Florida Vet Success Program", href: "https://www.floridavets.org/" },
    ],
  },
  {
    title: "Mental Health & Crisis Support",
    links: [
      { label: "Veterans Crisis Line — Dial 988, Press 1", href: "https://www.veteranscrisisline.net/" },
      { label: "VA Mental Health Services", href: "https://www.mentalhealth.va.gov/" },
      { label: "Vet Centers (Readjustment Counseling)", href: "https://www.vetcenter.va.gov/" },
    ],
  },
];

const localOffices = [
  {
    name: "Highlands County Veteran Services Office (VSO)",
    description:
      "County-based service officers who help veterans, dependents, and survivors file VA claims for disability compensation, pensions, home loan certification, education benefits, and more — at no cost.",
    address: "7209 S. George Blvd., Sebring, FL 33875",
    phone: "863-402-6623",
    phoneHref: "tel:8634026623",
    fax: "863-402-6796",
    email: "dwilliams@highlandsfl.gov",
    hours: "Mon–Fri, 8:00 AM–4:30 PM (closed 12–1 PM for lunch)",
  },
  {
    name: "Sebring VA Clinic — Bay Pines VA Healthcare System",
    description:
      "Outpatient VA clinic (CBOC) offering primary care, mental health care, substance abuse treatment, PTSD support, labs, pharmacy, and nutrition counseling for enrolled veterans.",
    address: "2931 New Life Way, Sebring, FL 33870",
    phone: "863-471-6227",
    phoneHref: "tel:8634716227",
    email: "VHABAYWVP@va.gov",
    hours: "Mon–Fri, 7:30 AM–4:30 PM",
  },
];

const communityCareCategories = [
  {
    category: "Emergency Care (In-Network)",
    providers: [
      { name: "HCA Florida Highlands Hospital", address: "3600 S Highlands Ave, Sebring, FL 33870", phone: "863-385-6101" },
      { name: "AdventHealth Sebring", address: "4200 Sun N Lake Blvd, Sebring, FL 33872", phone: "863-314-4466" },
      { name: "AdventHealth Lake Placid", address: "1210 US 27 N, Lake Placid, FL 33852", phone: "863-465-3777" },
    ],
  },
  {
    category: "Primary & General Practice",
    providers: [
      { name: "AnywhereMD (Hernandez Cruz, Laura)", address: "2701 State Road 66, Sebring, FL 33875", phone: "786-948-6461" },
      { name: "Health Holdings / Domenech Family Practice", address: "263 US Hwy 27 N #249, Sebring, FL 33870", phone: "863-593-4333" },
      { name: "AdventHealth Sebring Medical Center", address: "4200 Sun N Lake Blvd Ste B, Sebring, FL 33872", phone: "863-402-3103" },
      { name: "Central Florida Health Care", address: "950 County Road 17A W, Avon Park, FL 33825", phone: "866-234-8534" },
      { name: "Health Holdings — Avon Park", address: "1221 W Stratford Rd, Avon Park, FL 33825", phone: "863-453-2500" },
    ],
  },
  {
    category: "Dental Care",
    providers: [
      { name: "Lake Placid Family Dental Group", address: "408 West Interlake Blvd, Lake Placid, FL 33852", phone: "863-465-2037" },
      { name: "Dental Care of Mid Florida", address: "1735 US Highway 27 South, Sebring, FL 33870", phone: "863-382-9090" },
      { name: "Coast Florida PA (Sebring Dental Group)", address: "901 US Highway 27 N Ste 60, Sebring, FL 33870", phone: "863-471-1176" },
    ],
  },
  {
    category: "Mental Health Counseling",
    providers: [
      { name: "Glen Cross Counseling", address: "137 Grape Rd NW, Lake Placid, FL 33852", phone: "401-450-6494" },
      { name: "Healing Hope Counseling LLC", address: "6723 US Highway 27 S & 103 N Ridgewood Dr, Sebring, FL", phone: "863-451-8448" },
      { name: "Terreros, Angela — Counseling", address: "1570 Lakeview Dr Ste 2, Sebring, FL 33870", phone: "863-546-1913" },
      { name: "Best Behavioral Solutions", address: "326 N Ridgewood Dr, Sebring, FL 33870", phone: "863-576-9091" },
    ],
  },
  {
    category: "Audiology & Hearing",
    providers: [
      { name: "Your Hearing Network", address: "263 US Highway 27 N, Sebring, FL 33870", phone: "888-861-2977" },
      { name: "AdventHealth Audiology (Ascent Audiology & Hearing)", address: "4206 Sebring Pkwy, Sebring, FL 33870", phone: "863-382-9210" },
    ],
  },
  {
    category: "Chiropractic Care",
    providers: [
      { name: "Brent Coons, DC", address: "2918 Sparta Rd, Sebring, FL 33870", phone: "813-416-3555" },
      { name: "Richard S. Taylor, DC & Associates", address: "525–527 US Highway 27 S, Sebring, FL 33870", phone: "863-382-3700" },
    ],
  },
  {
    category: "OB/GYN & Women's Health",
    providers: [
      { name: "AdventHealth Physician Group / FH Heartland Women's Wellness", address: "37 Ryant Blvd, Sebring, FL 33870", phone: "863-382-2225" },
      { name: "Florida Woman Care", address: "919 Mall Ring Rd & 410 Sebring Sq, Sebring, FL 33870", phone: "863-471-1703" },
      { name: "Dr. David Guerra", address: "3670 US Highway 27 N, Sebring, FL 33870", phone: "863-471-1236" },
    ],
  },
  {
    category: "Dermatology",
    providers: [
      { name: "Leach, Mark & Naples Ctr for Derm/Cosm Surgery", address: "4180 US Highway 27 S, Sebring, FL 33870", phone: "863-657-4022" },
      { name: "K Wade Foster, MD", address: "3200 Medical Way, Sebring, FL 33870", phone: "855-353-7546" },
      { name: "American Institute of Dermatology", address: "3109 Medical Way, Sebring, FL 33870", phone: "863-386-0786" },
      { name: "Blue Ocean Dermatology", address: "4110 US Highway 27 N Ste 102, Sebring, FL 33870", phone: "386-256-1444" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Resources
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            Veteran Benefit Resources
          </h1>
          <p className="mt-4 max-w-2xl text-khaki-light/90">
            Trusted links to federal and state resources, plus local
            Highlands County offices and community care providers who see
            VA-referred patients.
          </p>
        </div>
      </section>

      <section className="bg-oldglory-red">
        <div className="container flex flex-col items-center gap-2 py-6 text-center text-white sm:flex-row sm:justify-center sm:gap-4">
          <Phone className="h-5 w-5" />
          <p className="font-semibold">
            In crisis? Call or text 988, then press 1 — Veterans Crisis Line,
            available 24/7.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
          Local Highlands County Offices
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Start here — these are the two most important local contacts for
          any Highlands County veteran.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {localOffices.map((office) => (
            <Card key={office.name} className="border-khaki-dark/30">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-navy">
                  {office.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{office.description}</p>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-oldglory-red" />
                  {office.address}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-oldglory-red" />
                  <a href={office.phoneHref} className="hover:text-navy hover:underline">
                    {office.phone}
                  </a>
                  {office.fax && <span className="text-xs">(Fax: {office.fax})</span>}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-oldglory-red" />
                  {office.email}
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-oldglory-red" />
                  {office.hours}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Federal &amp; State Resources
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {resourceGroups.map((group) => (
              <Card key={group.title} className="border-khaki-dark/30">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-navy">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-navy hover:text-oldglory-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 shrink-0 text-oldglory-red" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
          Highlands County Community Care Providers
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          VA Community Care lets eligible veterans see local providers when
          VA care isn't available in a reasonable time or distance. The
          providers below participate in the Highlands County community
          care network.{" "}
          <span className="font-semibold text-navy">
            A referral from your VA medical center is required
          </span>{" "}
          unless noted otherwise — contact the Sebring VA Clinic or your VA
          care team to request one.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {communityCareCategories.map((cat) => (
            <Card key={cat.category} className="border-khaki-dark/30">
              <CardHeader className="flex flex-row items-center justify-between gap-2">
                <CardTitle className="font-serif text-lg text-navy">
                  {cat.category}
                </CardTitle>
                <Badge className="bg-navy text-white hover:bg-navy">
                  {cat.providers.length} listed
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {cat.providers.map((p) => (
                    <li key={p.name} className="border-t border-khaki-dark/20 pt-3 first:border-t-0 first:pt-0">
                      <p className="font-semibold text-navy">{p.name}</p>
                      <p className="mt-1 flex items-start gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-oldglory-red" />
                        {p.address}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Phone className="h-3.5 w-3.5 shrink-0 text-oldglory-red" />
                        {p.phone}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          This is a partial list drawn from the Council's 2025 Community Care
          Handbook. Provider networks change — always confirm current
          participation and referral requirements with your VA care
          coordinator before scheduling.
        </p>
      </section>

      <section className="bg-khaki-light py-14">
        <div className="container flex flex-col items-center gap-3 text-center">
          <LifeBuoy className="h-8 w-8 text-navy" />
          <h2 className="font-serif text-2xl font-bold text-navy">
            Don't see what you need?
          </h2>
          <p className="max-w-xl text-navy/70">
            Reach out through our Contact page and a service officer will
            point you in the right direction.
          </p>
        </div>
      </section>
    </main>
  );
}
