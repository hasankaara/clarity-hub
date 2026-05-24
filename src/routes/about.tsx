import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import aboutImg from "@/assets/about-space.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Your Tutoring Center" },
      {
        name: "description",
        content:
          "Meet the tutors and learn about our calm, student-first approach to learning.",
      },
      { property: "og:title", content: "About — Your Tutoring Center" },
      {
        property: "og:description",
        content:
          "Meet the tutors and learn about our calm, student-first approach to learning.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const team = [
  { name: "Alex Morgan", role: "Founder & Lead Tutor", img: team1 },
  { name: "Jordan Lee", role: "Math & Science Specialist", img: team2 },
  { name: "Sam Rivera", role: "Reading & Writing Coach", img: team3 },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
              About us
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A calm space built around how students actually learn.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We started with a simple belief: every student can grow when they're met with
              patience, structure, and a tutor who really listens. That belief still shapes
              every session we run today.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our space is intentionally quiet, warm, and bright — designed to make learning
              feel less like pressure and more like progress.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-lg">
            <img
              src={aboutImg}
              alt="The bright, plant-filled interior of our tutoring space"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our values" title="What guides every session." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Patience first", text: "Real understanding takes time. We never rush a student past the basics." },
              { title: "Honest feedback", text: "Families always know how their student is doing — no jargon, no surprises." },
              { title: "Joyful learning", text: "Curiosity is the engine. We protect it in every session." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/60 bg-card p-7">
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our team"
          title="Tutors who love teaching."
          description="Every tutor is certified, background-checked, and matched to your student's learning style."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-3xl border border-border/60 bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
