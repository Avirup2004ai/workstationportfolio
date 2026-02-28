import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TOC } from "@/components/toc";
import { ChartBlock } from "@/components/chart-block";
import { MetricsGrid } from "@/components/metrics-grid";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { mdxComponents } from "@/components/mdx-components";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";
import { ctaLinks, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) return {};

  return {
    title: item.meta.title,
    description: item.meta.description,
    alternates: { canonical: `/work/${item.meta.slug}` },
    openGraph: {
      title: `${item.meta.title} | Workstation Case Study`,
      description: item.meta.description,
      url: `${siteConfig.url}/work/${item.meta.slug}`
    }
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) notFound();

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={caseStudySchema({
          title: item.meta.title,
          description: item.meta.description,
          url: `${siteConfig.url}/work/${item.meta.slug}`,
          datePublished: item.meta.date
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Work", url: `${siteConfig.url}/work`, position: 2 },
          { name: item.meta.title, url: `${siteConfig.url}/work/${item.meta.slug}`, position: 3 }
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: item.meta.title }
        ]}
      />

      <section className="space-y-4">
        <p className="text-sm font-semibold text-primary">{item.meta.industry}</p>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          {item.meta.title}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{item.meta.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span>Client: {item.meta.client}</span>
          <span>•</span>
          <span>Timeline: {item.meta.timeline}</span>
        </div>
      </section>

      {item.meta.metrics?.length ? (
        <section className="mt-10">
          <MetricsGrid metrics={item.meta.metrics} />
        </section>
      ) : null}

      {item.meta.chartData?.length ? (
        <section className="mt-8">
          <ChartBlock
            title="Performance trend"
            description="Illustrative progression across the project timeline."
            data={item.meta.chartData}
          />
        </section>
      ) : null}

      <div className="mt-12 grid gap-10 xl:grid-cols-[0.75fr_0.25fr]">
        <article className="prose-workstation">
          <MDXRemote
            source={item.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
              }
            }}
          />
          {item.meta.tools?.length ? (
            <section className="mt-10 rounded-xl border border-border bg-card/70 p-5">
              <h2 className="font-display text-2xl font-semibold">Tools used</h2>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {item.meta.tools.map((tool) => (
                  <li key={tool}>• {tool}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {item.meta.testimonial ? (
            <section className="mt-10 rounded-xl border border-border bg-card/70 p-5">
              <h2 className="font-display text-2xl font-semibold">Client testimonial</h2>
              <blockquote className="mt-3 border-l-2 border-primary pl-4 text-muted-foreground">
                “{item.meta.testimonial}”
              </blockquote>
            </section>
          ) : null}
        </article>
        <TOC items={item.toc} />
      </div>

      <CTASection
        title="Want similar results in your category?"
        description="We can build a tailored growth plan around your current team, budget, and timeline constraints."
        primaryHref={ctaLinks.proposal}
        primaryLabel="Request a Proposal"
        secondaryHref={ctaLinks.bookCall}
        secondaryLabel="Book a Call"
      />
    </div>
  );
}
