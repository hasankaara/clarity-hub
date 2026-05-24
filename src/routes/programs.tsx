import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import elementaryImg from "@/assets/program-elementary.jpg";
import middleHighImg from "@/assets/program-middle-high.jpg";
import testPrepImg from "@/assets/program-test-prep.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Your Tutoring Center" },
      {
        name: "description",
        content:
          "K-12 tutoring programs: elementary foundations, middle & high school subjects, and SAT/ACT test prep.",
      },
      { property: "og:title", content: "Programs — Your Tutoring Center" },
      {
        property: "og:description",
        content:
          "K-12 tutoring programs: elementary foundations, middle & high school subjects, and SAT/ACT test prep.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const programs = [
  {
    title: "Elementary (K–5)",
    summary: "Strong reading, writing, and math foundations through patient, playful sessions.",
    bullets: ["Phonics & reading fluency", "Writing fundamentals", "Math foundations", "Homework help"],
    img: elementaryImg,
  },
  {
    title: "Middle & High School (6–12)",
    summary: "Subject mastery, study skills, and confidence — built one session at a time.",
    bullets: ["Algebra through Calculus", "English & writing", "Sciences", "Study & exam skills"],
    img: middleHighImg,
  },
  {
    title: "Test Prep",
    summary: "Personalized SAT, ACT, and state exam plans with weekly practice and review.",
    bullets: ["Diagnostic test", "Custom study plan", "Weekly timed practice", "Strategy coaching"],
    img: testPrepImg,
  },
];

function Programs() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
            Programs
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Programs for every stage of school.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Choose the program that fits your student today. Every plan is personalized after a
            free 30-minute assessment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {programs.map((p, i) => (
          <article
            key={p.title}
            className={`grid items-center gap-10 rounded-3xl border border-border/60 bg-card p-6 sm:p-10 md:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt=""
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">{p.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.summary}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button asChild className="rounded-full px-6">
                  <Link to="/contact">Book a free assessment</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Flexible formats"
            title="In person, online, or a mix of both."
            description="We meet students where they're most focused. Choose what works for your week."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "In-person", text: "Calm, well-lit space designed for focused 1:1 and small group sessions." },
              { title: "Online", text: "Live, interactive sessions with shared whiteboards and screen sharing." },
              { title: "Hybrid", text: "Mix in-person and online sessions to fit busy schedules and weather days." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
