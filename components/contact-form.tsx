"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      reason: formData.get("reason")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <Card className="border-khaki-dark/30 md:col-span-2">
      <CardHeader>
        <CardTitle className="font-serif text-lg text-navy">
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <CheckCircle className="h-10 w-10 text-navy" />
            <p className="font-medium text-navy">
              Thank you — your message has been sent to
              highlandsvetscouncil@gmail.com. A team member will follow up
              soon.
            </p>
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white"
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  disabled={status === "submitting"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  disabled={status === "submitting"}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Contact</Label>
              <Input
                id="reason"
                name="reason"
                placeholder="Benefits assistance, volunteering, general inquiry..."
                disabled={status === "submitting"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                disabled={status === "submitting"}
              />
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-md border border-oldglory-red/40 bg-oldglory-red/10 p-3 text-sm text-oldglory-darkred">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="bg-oldglory-red hover:bg-oldglory-darkred text-white"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
