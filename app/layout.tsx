import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700", "800"],
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL = "https://www.vetscouncil.org";
const SITE_NAME = "Veterans Council of Highlands County";
const SITE_DESCRIPTION =
  "The Veterans Council of Highlands County (VCOHC) unites veteran organizations in Sebring, Florida, advocating for veterans' benefits and providing community support. A 501(c)(3) nonprofit serving veterans, their families, and survivors in Highlands County, FL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Sebring, FL`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Veterans Council of Highlands County",
    "VCOHC",
    "Sebring FL veterans",
    "Highlands County veterans services",
    "veteran benefits Sebring Florida",
    "VA claims Highlands County",
    "veteran nonprofit Sebring",
    "Avon Park veterans",
    "Florida veterans organization",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Sebring, FL`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg",
        width: 478,
        height: 474,
        alt: "Veterans Council of Highlands County logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Sebring, FL`,
    description: SITE_DESCRIPTION,
    images: ["https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg",
    apple: "https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: "VCOHC",
  url: SITE_URL,
  logo: "https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg",
  description: SITE_DESCRIPTION,
  email: "highlandsvetscouncil@gmail.com",
  telephone: "+18639914165",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7209 S George Blvd",
    addressLocality: "Sebring",
    addressRegion: "FL",
    postalCode: "33875",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Highlands County, Florida",
  },
  sameAs: ["https://www.facebook.com/VCOHC/"],
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${sans.variable} font-sans`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
