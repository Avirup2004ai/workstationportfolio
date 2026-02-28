import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CTASectionProps) {
  return (
    <section className="container py-16">
      <div className="glass rounded-3xl p-8 md:p-12">
        <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold tracking-tight">{title}</h2>
            <p className="max-w-2xl text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap justify-start gap-3 md:justify-end">
            <Button asChild>
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button variant="outline" asChild>
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
