import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, Users, LineChart, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import heroImg from "@/assets/hero-tutoring.jpg";
import elementaryImg from "@/assets/program-elementary.jpg";
import middleHighImg from "@/assets/program-middle-high.jpg";
import testPrepImg from "@/assets/program-test-prep.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Tutoring Center — Personalized learning, real progress" },
      {
        name: "description",
        content:
          "Friendly, certified tutors and small group sessions for K-12 students. Book a free assessment today.",
      },
      { property: "og:title", content: "Your Tutoring Center" },
      {
        property: "og:description",
        content:
          "Friendly, certified tutors and small group sessions for K-12 students. Book a free assessment today.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const programs = [
  {
    title: "Elementary (K–5)",
    description: "Reading, writing and math foundations with patient, playful instruction.",
    img: elementaryImg,
  },
  {
    title: "Middle & High (6–12)",
    description: "Subject support that builds confidence and study skills students keep for life.",
    img: middleHighImg,
  },
  {
    title: "Test Prep",
    description: "SAT, ACT and state exams — practice plans tailored to each student.",
    img: testPrepImg,
  },
];

const features = [
  { icon: Users, title: "Certified tutors", text: "Vetted educators with classroom experience." },
  { icon: Sparkles, title: "Personalized plans", text: "Every student gets a plan built for them." },
  { icon: BookOpen, title: "Small groups", text: "Never more than four students per tutor." },
  { icon: LineChart, title: "Progress tracking", text: "Clear monthly updates for families." },
];

const steps = [
  {
    n: "01",
    title: "Free assessment",
    text: "We meet your student, learn their goals, and pinpoint where to focus first.",
  },
  {
    n: "02",
    title: "Matched with a tutor",
    text: "We pair them with a tutor whose style and subject expertise fit best.",
  },
  {
    n: "03",
    title: "Steady, visible growth",
    text: "Weekly sessions, monthly progress reports, and quarterly goal reviews.",
  },
];

const testimonials = [
  {
    quote:
      "My daughter went from dreading math homework to asking when her next session is. The difference is night and day.",
    name: "Parent of a 4th grader",
  },
  {
    quote:
      "The tutors actually listen. They built a plan around how I learn instead of just handing me worksheets.",
    name: "10th grade student",
  },
  {
    quote:
      "We finally feel like we have a partner in our son's education. Communication is clear and consistent.",
    name: "Parent of an 8th grader",
  },
];

function Home() {
  return (
    <>
      {/* Hero — split screen */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> Now enrolling
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Personalized tutoring that helps students{" "}
              <span className="text-primary">grow with confidence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We pair every student with a tutor who fits the way they learn — then build a plan
              that turns small wins into lasting progress.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">
                  Book a free assessment <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/programs">Browse programs</Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Certified tutors", "Small group sizes", "Flexible scheduling"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/30 blur-2xl" aria-hidden />
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl">
              <img
                src={heroImg}
                alt="A tutor and student studying together at a sunlit table"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-foreground">Loved by local families</p>
              <p className="text-xs text-muted-foreground">Based on parent feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-8 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:px-6 lg:px-8">
          <span>Trusted by families at</span>
          <span>Riverside Elementary</span>
          <span>Lincoln Middle</span>
          <span>Westview High</span>
          <span>Oakwood Academy</span>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Support for every stage of school."
          description="Pick the program that fits your student today — we'll meet them right where they are."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <Link
              key={p.title}
              to="/programs"
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why families choose us"
            title="A calm, focused space designed for real progress."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/40 text-primary">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A simple path from first call to steady growth."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl border border-border/60 bg-card p-7">
              <span className="font-display text-sm font-semibold text-primary">{s.n}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kind words"
            title="What students and parents are saying."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7">
                <div className="flex items-center gap-1 text-primary" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-muted-foreground">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
