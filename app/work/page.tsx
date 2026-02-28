import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { WorkFilters } from "@/components/work-filters";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { getCaseStudies } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Workstation case studies with challenge, strategy, execution, and measurable outcomes.",
  alternates: { canonical: "/work" }
};

export default function WorkPage() {
  const studies = getCaseStudies();

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Work", url: `${siteConfig.url}/work`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work" }]} />
      <SectionHeading
        eyebrow="Case Studies"
        title="Real projects, clear constraints, measurable outcomes."
        description="Filter by industry and service to see examples relevant to your current growth goals."
      />
      <div className="mt-8">
        <WorkFilters studies={studies} />
      </div>
    </div>
  );
}
