import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TOC } from "@/components/toc";
import { JsonLd } from "@/components/json-ld";
import { mdxComponents } from "@/components/mdx-components";
import { getGuideBySlug, getGuides } from "@/lib/mdx";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

type GuideParams = {
  slug: string;
  content: string;
  toc: unknown;
  title?: string;
  description?: string;
};

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: String(guide.slug) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug) as unknown as GuideParams | null;
  if (!guide) return {};
  return {
    title: String(guide.title),
    description: String(guide.description),
    alternates: { canonical: `/resources/guides/${slug}` }
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug) as unknown as GuideParams | null;
  if (!guide) notFound();

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
          { name: "Guides", url: `${siteConfig.url}/resources/guides`, position: 3 },
          { name: String(guide.title), url: `${siteConfig.url}/resources/guides/${slug}`, position: 4 }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Guides", href: "/resources/guides" },
          { label: String(guide.title) }
        ]}
      />

      <article className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          {String(guide.title)}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{String(guide.description)}</p>
      </article>

      <div className="mt-10 grid gap-10 xl:grid-cols-[0.75fr_0.25fr]">
        <article className="prose-workstation">
          <MDXRemote
            source={String(guide.content)}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
              }
            }}
          />
        </article>
        <TOC items={guide.toc as Array<{ id: string; text: string }>} />
      </div>
    </div>
  );
}
