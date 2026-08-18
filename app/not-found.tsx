import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-oldglory-red">
        404
      </p>
      <h1 className="font-serif text-3xl font-bold text-navy md:text-4xl">
        Page Not Found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button asChild className="bg-oldglory-red hover:bg-oldglory-darkred text-white">
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  );
}
