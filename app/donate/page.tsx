import { Button } from "@/components/ui/button";
import { ShieldCheck, ReceiptText, HeartHandshake, Mail, Phone } from "lucide-react";

export default function DonatePage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Donate
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            Support Highlands County Veterans
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-khaki-light/90">
            Your gift directly funds benefits assistance, emergency support,
            and community programs for veterans and their families.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-khaki-dark/30 bg-khaki-light p-10 text-center">
            <HeartHandshake className="h-10 w-10 text-navy" />
            <h2 className="font-serif text-2xl font-bold text-navy">
              Ready to Give?
            </h2>
            <p className="max-w-md text-navy/70">
              We don't have an online donation partner set up yet, so
              donations can currently be made by mail or by contacting us
              directly.
            </p>

            <div className="mt-2 flex flex-col gap-3 text-sm text-navy sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-oldglory-red" />
                P.O. Box 8201, Sebring, FL 33870
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-oldglory-red" />
                (863) 991-4165
              </span>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-2 bg-oldglory-red hover:bg-oldglory-darkred text-white"
            >
              <a href="/contact">Contact Us About Donating</a>
            </Button>
            <p className="text-xs text-navy/60">
              Make checks payable to "Veterans Council of Highlands County"
              and mail to the address above.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-oldglory-red" />
              <p className="text-sm text-muted-foreground">
                VCOHC is a registered 501(c)(3) nonprofit. Your donation may
                be tax-deductible to the extent allowed by law.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ReceiptText className="mt-1 h-6 w-6 shrink-0 text-oldglory-red" />
              <p className="text-sm text-muted-foreground">
                A donation receipt will be provided for your tax records upon
                request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
