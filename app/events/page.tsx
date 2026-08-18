import { Calendar, MapPin, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MEETING_LOCATION = "7209 S George Blvd, Sebring, FL 33875";
const MEETING_TIME = "Social hour 6:00 PM • Meeting 7:00 PM";

type EventItem = {
  date: { day: string; month: string; year: string };
  title: string;
  time?: string;
  location?: string;
  tag: "Rescheduled" | "Meeting" | "Observance" | "Parade";
  note?: string;
};

const events: EventItem[] = [
  {
    date: { day: "25", month: "AUG", year: "2026" },
    title: "Monthly Council Meeting — Rescheduled",
    time: MEETING_TIME,
    location: MEETING_LOCATION,
    tag: "Rescheduled",
    note: "Postponed one week from the regular 3rd Tuesday (Aug 18) to Tuesday, August 25.",
  },
  {
    date: { day: "11", month: "SEP", year: "2026" },
    title: "9/11 Remembrance Day",
    tag: "Observance",
  },
  {
    date: { day: "15", month: "SEP", year: "2026" },
    title: "Monthly Council Meeting",
    time: MEETING_TIME,
    location: MEETING_LOCATION,
    tag: "Meeting",
  },
  {
    date: { day: "18", month: "SEP", year: "2026" },
    title: "U.S. Air Force Birthday",
    tag: "Observance",
  },
  {
    date: { day: "19", month: "SEP", year: "2026" },
    title: "POW/MIA Recognition Day",
    tag: "Observance",
  },
  {
    date: { day: "27", month: "SEP", year: "2026" },
    title: "Gold Star Mother & Family Day",
    tag: "Observance",
  },
  {
    date: { day: "13", month: "OCT", year: "2026" },
    title: "Navy Birthday",
    tag: "Observance",
  },
  {
    date: { day: "20", month: "OCT", year: "2026" },
    title: "Monthly Council Meeting",
    time: MEETING_TIME,
    location: MEETING_LOCATION,
    tag: "Meeting",
  },
  {
    date: { day: "26", month: "OCT", year: "2026" },
    title: "National Day of the Deployed",
    tag: "Observance",
  },
  {
    date: { day: "10", month: "NOV", year: "2026" },
    title: "Marine Corps Birthday",
    tag: "Observance",
  },
  {
    date: { day: "11", month: "NOV", year: "2026" },
    title: "Veterans Day Parade",
    location: "The Circle, Sebring, FL",
    tag: "Parade",
  },
  {
    date: { day: "17", month: "NOV", year: "2026" },
    title: "Monthly Council Meeting",
    time: MEETING_TIME,
    location: MEETING_LOCATION,
    tag: "Meeting",
  },
  {
    date: { day: "07", month: "DEC", year: "2026" },
    title: "Pearl Harbor Remembrance Day",
    tag: "Observance",
  },
  {
    date: { day: "13", month: "DEC", year: "2026" },
    title: "National Guard Birthday",
    tag: "Observance",
  },
  {
    date: { day: "15", month: "DEC", year: "2026" },
    title: "Monthly Council Meeting",
    time: MEETING_TIME,
    location: MEETING_LOCATION,
    tag: "Meeting",
  },
  {
    date: { day: "20", month: "DEC", year: "2026" },
    title: "National Wreaths Across America Day",
    tag: "Observance",
  },
  {
    date: { day: "20", month: "DEC", year: "2026" },
    title: "Space Force Birthday",
    tag: "Observance",
  },
];

const tagStyles: Record<EventItem["tag"], string> = {
  Rescheduled: "bg-oldglory-red text-white hover:bg-oldglory-red",
  Meeting: "bg-navy text-white hover:bg-navy",
  Observance: "bg-khaki-dark text-navy hover:bg-khaki-dark",
  Parade: "bg-gold text-navy hover:bg-gold",
};

export default function EventsPage() {
  return (
    <main>
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Events &amp; Calendar
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold text-white md:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-2xl text-khaki-light/90">
            The Council meets regularly on the 3rd Tuesday of every month.
            Below you'll also find military and remembrance observances
            throughout the rest of 2026.
          </p>
        </div>
      </section>

      <section className="bg-oldglory-red">
        <div className="container flex flex-col items-center gap-2 py-4 text-center text-white sm:flex-row sm:justify-center sm:gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">
            Notice: The August meeting is postponed one week — new date
            Tuesday, August 25, 2026.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {events.map((e) => (
            <Card
              key={e.title + e.date.day + e.date.month}
              className="border-khaki-dark/30"
            >
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-navy py-3 text-white">
                  <span className="text-2xl font-extrabold leading-none">
                    {e.date.day}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                    {e.date.month}
                  </span>
                  <span className="text-[10px] text-khaki-light/70">
                    {e.date.year}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <CardTitle className="font-serif text-lg text-navy">
                      {e.title}
                    </CardTitle>
                    <Badge className={tagStyles[e.tag]}>{e.tag}</Badge>
                  </div>
                  {(e.time || e.location) && (
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                      {e.time && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-oldglory-red" />{" "}
                          {e.time}
                        </span>
                      )}
                      {e.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-oldglory-red" />{" "}
                          {e.location}
                        </span>
                      )}
                    </div>
                  )}
                  {e.note && (
                    <p className="mt-2 text-sm font-medium text-oldglory-red">
                      {e.note}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-khaki-light py-14">
        <div className="container flex flex-col items-center gap-3 text-center">
          <Calendar className="h-8 w-8 text-navy" />
          <h2 className="font-serif text-2xl font-bold text-navy">
            Want events added to your calendar?
          </h2>
          <p className="max-w-xl text-navy/70">
            Contact us and we'll add you to our email list for meeting
            reminders and event announcements.
          </p>
        </div>
      </section>
    </main>
  );
}
