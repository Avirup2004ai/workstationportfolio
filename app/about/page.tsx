import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { companyTimeline } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { ctaLinks, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Workstation",
  description:
    "Learn about Workstation's story, values, and operating approach for high-performing digital growth partnerships.",
  alternates: { canonical: "/about" }
};

const values = [
  {
    title: "Clarity before execution",
    description:
      "We define outcomes, guardrails, and decision frameworks before launching campaigns or redesigns."
  },
  {
    title: "Speed with accountability",
    description:
      "Short planning cycles and transparent reporting keep momentum high while reducing avoidable rework."
  },
  {
    title: "Systems over hacks",
    description:
      "We build repeatable creative, channel, and measurement systems that keep compounding after launch."
  },
  {
    title: "Respect for context",
    description:
      "We adapt strategies for Indian market realities including regional language nuances, budget pressure, and distribution limits."
  }
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "About", url: `${siteConfig.url}/about`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            We build scalable websites, manage social media, and power brand growth engines.
          </h1>
          <p className="text-lg text-muted-foreground">
            Founded in 2023, Workstation exists to close the gap between marketing activity and
            business outcomes. We specialize in Web Development, Digital Marketing, Performance
            Marketing, and Brand Growth Consultation—specifically tailored for FMCG, Aqua, Beauty,
            Product companies, and E-commerce brands.
          </p>
          <p className="text-muted-foreground">
            Our process ensures that every piece of your digital presence works together seamlessly. We
            prioritize high-impact changes, launch controlled experiments, and build systems that leadership
            teams can trust.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card/70 p-6">
          <h2 className="font-display text-2xl font-bold">Why choose Workstation?</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>• Time-to-time followups and transparent communication.</li>
            <li>• 110% availability for our partners and active execution.</li>
            <li>• Faster response rates—we move at the speed of your ambition.</li>
            <li>• Unwavering dedication to client satisfaction as our primary motive.</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Values"
          title="Principles that shape our work"
          description="These values influence project planning, client communication, and quality expectations."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-border bg-card/70 p-6">
              <h3 className="font-display text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Journey"
          title="Company timeline"
          description="A quick look at how Workstation evolved into a full-stack growth partner."
        />
        <ol className="mt-8 space-y-4">
          {companyTimeline.map((item) => (
            <li key={item.year} className="rounded-2xl border border-border bg-card/70 p-5">
              <p className="text-sm font-semibold text-primary">{item.year}</p>
              <p className="mt-1 text-muted-foreground">{item.event}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection
        title="Want to evaluate fit before committing?"
        description="Book a discovery call and we will share our point of view on your current funnel, site, and acquisition mix."
        primaryHref={ctaLinks.bookCall}
        primaryLabel="Book a Call"
        secondaryHref={ctaLinks.proposal}
        secondaryLabel="Request Proposal"
      />
    </div>
  );
}
