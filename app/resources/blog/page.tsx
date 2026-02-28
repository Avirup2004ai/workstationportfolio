import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogFilters } from "@/components/blog-filters";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { getBlogPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Workstation blog articles on technical SEO, social strategy, creative performance, and conversion optimization.",
  alternates: { canonical: "/resources/blog" }
};

export default function BlogListingPage() {
  const posts = getBlogPosts();

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
          { name: "Blog", url: `${siteConfig.url}/resources/blog`, position: 3 }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog" }
        ]}
      />
      <SectionHeading
        eyebrow="Blog"
        title="Guidance for marketing and growth execution."
        description="Filter by category and tags to find relevant playbooks for your current priorities."
      />
      <div className="mt-8">
        <BlogFilters posts={posts} />
      </div>
    </div>
  );
}
