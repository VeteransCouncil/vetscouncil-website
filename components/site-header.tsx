"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-khaki-dark/40 bg-navy shadow-md">
      <div className="flag-stripe-divider" />
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="https://g.tlcdn.com/view/2c5464cf5f6942398410ce519ba62f96.jpg"
            alt="Veterans Council of Highlands County logo"
            width={56}
            height={56}
            className="rounded-full border-2 border-gold shadow-sm"
          />
          <div className="leading-tight">
            <p className="font-serif text-lg font-bold text-khaki-light">
              Veterans Council
            </p>
            <p className="text-xs uppercase tracking-widest text-gold-light">
              of Highlands County
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-khaki-light/90 transition-colors hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/10 text-gold-light"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:8639914165"
            className="flex items-center gap-2 text-sm text-khaki-light/90 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            (863) 991-4165
          </a>
          <Button asChild className="bg-oldglory-red hover:bg-oldglory-darkred text-white">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-khaki-light"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-navy-dark px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-3 py-3 text-sm font-medium text-khaki-light/90 hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/10 text-gold-light"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full bg-oldglory-red hover:bg-oldglory-darkred text-white">
            <Link href="/donate" onClick={() => setOpen(false)}>
              Donate
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
