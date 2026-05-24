import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Your Tutoring Center" },
      {
        name: "description",
        content:
          "Book a free assessment or ask us a question. We'll get back to you within one business day.",
      },
      { property: "og:title", content: "Contact — Your Tutoring Center" },
      {
        property: "og:description",
        content:
          "Book a free assessment or ask us a question. We'll get back to you within one business day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: wire this up to a real backend (Lovable Cloud) later.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
            Contact
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let's find the right plan for your student.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Fill out the form and we'll get back to you within one business day to schedule a
            free 30-minute assessment.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <div className="font-medium text-foreground">Visit us</div>
                <div className="text-muted-foreground">123 Learning Lane, Your City, ST 00000</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <div className="font-medium text-foreground">Call us</div>
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground">
                  (555) 123-4567
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground">
                  hello@example.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                <Clock className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <div className="font-medium text-foreground">Hours</div>
                <div className="text-muted-foreground">
                  Mon–Thu 3pm–8pm · Fri 3pm–6pm · Sat 9am–2pm
                </div>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Parent or student name</Label>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="grade">Student grade level</Label>
              <Input id="grade" name="grade" placeholder="e.g. 3rd grade or 10th grade" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us a little about your student's goals."
              />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="rounded-full">
              {submitting ? "Sending…" : "Request free assessment"}
            </Button>
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to be contacted about scheduling.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
