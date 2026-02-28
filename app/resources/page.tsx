import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore Workstation resources: blog articles, growth guides, downloadable templates, and free marketing tools.",
  alternates: { canonical: "/resources" }
};

const resourceCards = [
  {
    title: "Blog",
    href: "/resources/blog",
    description: "Actionable articles on SEO, social media, and growth systems."
  },
  {
    title: "Guides",
    href: "/resources/guides",
    description: "Pillar content and frameworks for planning and execution."
  },
  {
    title: "Templates",
    href: "/resources/templates",
    description: "Free templates to speed up marketing operations."
  },
  {
    title: "Tools",
    href: "/resources/tools",
    description: "Interactive calculators and checklists for fast diagnostics."
  }
];

export default function ResourcesPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

      <SectionHeading
        eyebrow="Resource Hub"
        title="Practical learning assets for growth teams."
        description="Use these resources to plan campaigns, improve measurement, and implement high-leverage optimizations."
      />
      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {resourceCards.map((item) => (
          <article key={item.href} className="rounded-2xl border border-border bg-card/70 p-6">
            <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-primary">
              Explore {item.title} →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
