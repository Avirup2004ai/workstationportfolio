import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { pricingPackages } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { ctaLinks, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent Workstation pricing packages with inclusions and custom quote options for growth-focused businesses.",
  alternates: { canonical: "/pricing" }
};

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Pricing", url: `${siteConfig.url}/pricing`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
      <SectionHeading
        eyebrow="Pricing"
        title="Flexible engagement models for different growth stages."
        description="Start with a focused package or request a custom quote aligned to your goals and internal capacity."
      />

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {pricingPackages.map((item) => (
          <article key={item.name} className="rounded-2xl border border-border bg-card/70 p-6">
            <h2 className="font-display text-2xl font-semibold">{item.name}</h2>
            <p className="mt-2 text-3xl font-bold text-primary">{item.price}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.bestFor}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {item.includes.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-card/70 p-6">
        <h2 className="font-display text-2xl font-semibold">Need a custom quote?</h2>
        <p className="mt-2 text-muted-foreground">
          If your requirement includes multi-channel execution, regional expansion, or deeper
          analytics support, we can design a custom delivery model.
        </p>
      </section>

      <CTASection
        title="Get a tailored scope and commercial proposal."
        description="Share your current funnel metrics, target geographies, and preferred timelines."
        primaryHref={ctaLinks.proposal}
        primaryLabel="Request Custom Quote"
      />
    </div>
  );
}
