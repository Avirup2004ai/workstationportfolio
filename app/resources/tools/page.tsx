import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { SocialEngagementCalculator } from "@/components/tools/social-engagement-calculator";
import { ROICalculator } from "@/components/tools/roi-calculator";
import { AuditChecklistGenerator } from "@/components/tools/audit-checklist-generator";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQItem } from "@/lib/types";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Marketing Tools",
  description:
    "Use Workstation's free tools: social engagement rate calculator, marketing ROI calculator, and website audit checklist generator.",
  alternates: { canonical: "/resources/tools" }
};

const toolFaqs: FAQItem[] = [
  {
    question: "Are these tools free to use?",
    answer:
      "Yes. These tools are free and designed for marketing teams that need quick planning support."
  },
  {
    question: "Do these tools store our data?",
    answer:
      "No personal data is persisted by default. Inputs are calculated in the browser for privacy-friendly usage."
  },
  {
    question: "Can I use these calculations for client reporting?",
    answer:
      "Yes. They are useful for first-pass diagnostics, but validate with your analytics source of truth."
  },
  {
    question: "What is a good engagement rate benchmark in India?",
    answer:
      "Benchmarks vary by category and audience size, but 2% to 5% is often a useful directional range."
  },
  {
    question: "Why can ROI seem high but lead quality stay low?",
    answer:
      "Revenue attribution can over-credit campaigns without lead quality filters and assisted conversion analysis."
  },
  {
    question: "Can Workstation help implement these frameworks?",
    answer:
      "Yes. We can operationalize tracking, reporting, and campaign workflows for your team."
  }
];

export default function ToolsPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
          { name: "Tools", url: `${siteConfig.url}/resources/tools`, position: 3 }
        ])}
      />
      <JsonLd data={faqSchema(toolFaqs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Tools" }
        ]}
      />

      <SectionHeading
        eyebrow="Free Tools"
        title="Quick calculators and generators for growth teams."
        description="Each tool includes context and benchmark framing so you can make practical decisions faster."
      />

      <section className="mt-8 grid gap-6">
        <SocialEngagementCalculator />
        <ROICalculator />
        <AuditChecklistGenerator />
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-card/70 p-6">
        <h2 className="font-display text-2xl font-semibold">How to use these tools effectively</h2>
        <p className="mt-2 text-muted-foreground">
          Use these tools as diagnostic accelerators. Pair outputs with channel context, sales
          feedback, and conversion quality signals for better decision-making. If metrics look good
          but revenue quality is weak, investigate landing page alignment, offer clarity, and lead
          qualification logic.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-bold tracking-tight">FAQ</h2>
        <div className="mt-5">
          <FAQAccordion items={toolFaqs} />
        </div>
      </section>
    </div>
  );
}
