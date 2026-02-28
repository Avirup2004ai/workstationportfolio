import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = {
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  highlights?: string[];
};

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  highlights = []
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Strategy + Creative + Technology
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
          <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {highlights.map((item) => (
              <p key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="glass relative rounded-3xl p-6">
          <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-secondary/20 blur-2xl" />
          <div className="space-y-4 rounded-2xl border border-border/70 bg-background/80 p-5">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Conversion Journey
            </p>
            <div className="space-y-3">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-semibold">Discover</p>
                <p className="text-xs text-muted-foreground">
                  SEO pages, guides, and tools attract high-intent visitors.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-semibold">Evaluate</p>
                <p className="text-xs text-muted-foreground">
                  Case studies, process clarity, and transparent pricing build trust.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-semibold">Convert</p>
                <p className="text-xs text-muted-foreground">
                  Low-friction proposal flow with validated contact capture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
