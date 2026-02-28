import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { getGuides } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Pillar growth guides from Workstation covering website strategy, social operations, and performance marketing systems.",
  alternates: { canonical: "/resources/guides" }
};

export default function GuidesPage() {
  const guides = getGuides() as unknown as {
    slug: string;
    content: string;
    toc: unknown;
    title?: string;
    description?: string;
  }[];

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
          { name: "Guides", url: `${siteConfig.url}/resources/guides`, position: 3 }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Guides" }
        ]}
      />

      <SectionHeading
        eyebrow="Pillar Guides"
        title="Deep frameworks for marketing and growth execution."
        description="Long-form resources designed to help teams make better strategic decisions."
      />

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <article
            key={String(guide.slug)}
            className="rounded-2xl border border-border bg-card/70 p-6"
          >
            <h2 className="font-display text-2xl font-semibold">{String(guide.title)}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{String(guide.description)}</p>
            <Link
              href={`/resources/guides/${String(guide.slug)}`}
              className="mt-4 inline-block text-sm font-semibold text-primary"
            >
              Read guide →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
