import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { leadMagnet } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Download practical marketing templates including social media calendars and campaign planning sheets.",
  alternates: { canonical: "/resources/templates" }
};

export default function TemplatesPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
          { name: "Templates", url: `${siteConfig.url}/resources/templates`, position: 3 }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Templates" }
        ]}
      />

      <SectionHeading
        eyebrow="Templates"
        title="Ready-to-use templates for faster marketing execution."
        description="Use these resources to structure planning, reduce missed tasks, and improve campaign consistency."
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/70 p-6">
          <h2 className="font-display text-2xl font-semibold">Social Media Content Calendar</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Plan monthly themes, weekly content hooks, channel ownership, and KPI targets in one
            template.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Monthly and weekly planning views</li>
            <li>• CTA and funnel-stage mapping</li>
            <li>• Post-level performance tracker</li>
          </ul>
        </article>
        <NewsletterSignup assetTitle={leadMagnet.title} assetUrl={leadMagnet.assetUrl} />
      </section>
    </div>
  );
}
