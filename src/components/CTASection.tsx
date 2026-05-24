import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:px-14">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to see your student thrive?
          </h2>
          <p className="mt-4 text-base text-primary-foreground/85">
            Book a free 30-minute assessment. We'll listen to your goals and recommend a plan —
            no commitment required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
              <Link to="/contact">
                Book free assessment <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/programs">Browse programs</Link>
            </Button>
          </div>
        </div>
        <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-sage-soft/30 blur-3xl" />
      </div>
    </section>
  );
}
