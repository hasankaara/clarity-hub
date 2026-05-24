import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Your Tutoring Center" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for one-on-one and small group tutoring. Free assessment included.",
      },
      { property: "og:title", content: "Pricing — Your Tutoring Center" },
      {
        property: "og:description",
        content:
          "Simple, transparent pricing for one-on-one and small group tutoring. Free assessment included.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Single sessions",
    price: "$60",
    period: "/ hour",
    desc: "Drop-in support when your student needs a hand.",
    features: ["1-on-1 or pair sessions", "Flexible scheduling", "No long-term commitment"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Monthly plan",
    price: "$220",
    period: "/ month",
    desc: "Four weekly sessions with a consistent tutor and progress reports.",
    features: [
      "4 sessions per month",
      "Same tutor each week",
      "Monthly progress report",
      "Priority scheduling",
    ],
    cta: "Most popular",
    highlight: true,
  },
  {
    name: "Test prep package",
    price: "$899",
    period: "/ package",
    desc: "8-week intensive for SAT, ACT, or state exams.",
    features: [
      "Diagnostic + study plan",
      "8 weekly sessions",
      "Two full practice tests",
      "Strategy review",
    ],
    cta: "Plan my prep",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do you offer a free assessment?",
    a: "Yes. Every family starts with a free 30-minute assessment so we can understand goals and recommend a plan with no commitment.",
  },
  {
    q: "What if I need to reschedule a session?",
    a: "No problem — just give us 24 hours' notice and we'll move your session to another time that works for you.",
  },
  {
    q: "Are there discounts for siblings?",
    a: "Yes. We offer a 10% sibling discount on monthly plans.",
  },
  {
    q: "Can sessions happen online?",
    a: "Absolutely. You can choose in-person, online, or mix the two week to week.",
  },
];

function Pricing() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
            Pricing
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Simple pricing. No surprises.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Pick what fits your family today — you can always change plans as your student grows.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                t.highlight
                  ? "border-primary bg-primary text-primary-foreground shadow-xl"
                  : "border-border/60 bg-card"
              }`}
            >
              <h3 className="font-display text-lg font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">{t.price}</span>
                <span className={t.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {t.period}
                </span>
              </div>
              <p className={`mt-3 text-sm ${t.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {t.desc}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.highlight ? "text-primary-foreground" : "text-primary"
                      }`}
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={t.highlight ? "secondary" : "default"}
                className="mt-8 rounded-full"
              >
                <Link to="/contact">{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices are placeholders — update them with your real rates anytime.
        </p>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions." align="center" />
          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-display text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
