import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { TOC } from "@/components/toc";
import { JsonLd } from "@/components/json-ld";
import { mdxComponents } from "@/components/mdx-components";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/mdx";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getBlogPostBySlug(slug);
  if (!item) return {};

  return {
    title: item.meta.title,
    description: item.meta.description,
    alternates: { canonical: `/resources/blog/${item.meta.slug}` },
    openGraph: {
      title: `${item.meta.title} | Workstation Blog`,
      description: item.meta.description,
      url: `${siteConfig.url}/resources/blog/${item.meta.slug}`,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const item = getBlogPostBySlug(slug);
  if (!item) notFound();

  const related = getBlogPosts()
    .filter((post) => post.slug !== item.meta.slug)
    .slice(0, 3);

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={articleSchema({
          headline: item.meta.title,
          description: item.meta.description,
          author: item.meta.author,
          datePublished: item.meta.date,
          dateModified: item.meta.lastUpdated ?? item.meta.date,
          url: `${siteConfig.url}/resources/blog/${item.meta.slug}`
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
          { name: "Blog", url: `${siteConfig.url}/resources/blog`, position: 3 },
          { name: item.meta.title, url: `${siteConfig.url}/resources/blog/${item.meta.slug}`, position: 4 }
        ])}
      />
      {item.meta.faqs?.length ? <JsonLd data={faqSchema(item.meta.faqs)} /> : null}

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog", href: "/resources/blog" },
          { label: item.meta.title }
        ]}
      />

      <article className="space-y-4">
        <p className="text-sm font-semibold text-primary">{item.meta.category}</p>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          {item.meta.title}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{item.meta.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span>By {item.meta.author}</span>
          <span>•</span>
          <span>Published {new Date(item.meta.date).toLocaleDateString("en-IN")}</span>
          <span>•</span>
          <span>Last updated {new Date(item.meta.lastUpdated ?? item.meta.date).toLocaleDateString("en-IN")}</span>
        </div>
      </article>

      <div className="mt-10 grid gap-10 xl:grid-cols-[0.75fr_0.25fr]">
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
          {item.meta.faqs?.length ? (
            <section className="mt-12">
              <h2 className="font-display text-3xl font-bold tracking-tight">FAQ</h2>
              <div className="mt-5">
                <FAQAccordion items={item.meta.faqs} />
              </div>
            </section>
          ) : null}
        </article>
        <TOC items={item.toc} />
      </div>

      <section className="mt-16 rounded-2xl border border-border bg-card/70 p-6">
        <h2 className="font-display text-2xl font-semibold">Explore related services</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Connect this strategy with execution support from our specialist service teams.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/services/seo" className="text-primary hover:underline">
            SEO Services
          </Link>
          <Link href="/services/web-development" className="text-primary hover:underline">
            Web Development
          </Link>
          <Link href="/services/social-media-marketing" className="text-primary hover:underline">
            Social Media Marketing
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Related posts</h2>
        <div className="mt-4 space-y-2">
          {related.map((post) => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="block text-primary hover:underline">
              {post.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
