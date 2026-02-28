import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { serviceSummaries } from "@/lib/services";
import { ctaLinks, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Workstation services: web development, graphic design, social media marketing, SEO, performance marketing, and branding.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Services", url: `${siteConfig.url}/services`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <section className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Services built for measurable growth, not vanity activity.
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Each service combines strategic planning, execution quality, and optimization cycles.
          You can start with one service or combine multiple tracks under a single growth plan.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {serviceSummaries.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            outcomes={service.outcomes}
            href={`/services/${service.slug}`}
          />
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-border bg-card/70 p-8">
        <SectionHeading
          eyebrow="How engagement works"
          title="Choose the operating model that fits your current growth stage."
          description="Most clients start with a focused sprint and then move into a monthly growth retainer."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">1. Diagnostic Sprint</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              2-4 week audit and priority roadmap to identify the highest-impact changes.
            </p>
          </article>
          <article className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">2. Execution Sprint</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Focused implementation on one channel or journey bottleneck.
            </p>
          </article>
          <article className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">3. Growth Retainer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ongoing strategic and execution support with reporting cadence.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-card/70 p-6">
        <h2 className="font-display text-2xl font-bold">Looking for package-level pricing?</h2>
        <p className="mt-2 text-muted-foreground">
          View transparent plans and what each package includes before requesting a custom scope.
        </p>
        <Link href="/pricing" className="mt-4 inline-block text-sm font-semibold text-primary">
          Go to pricing →
        </Link>
      </section>

      <CTASection
        title="Need help deciding which service to start with?"
        description="Share your targets and current bottlenecks. We will recommend a practical first sprint with clear milestones."
        primaryHref={ctaLinks.proposal}
        primaryLabel="Get a Free Proposal"
      />
    </div>
  );
}
