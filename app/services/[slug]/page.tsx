import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { getServiceBySlug, servicePages } from "@/lib/service-pages";
import { getCaseStudies, getBlogPosts } from "@/lib/mdx";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { ctaLinks, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Workstation`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const caseStudies = getCaseStudies().filter((study) =>
    service.relatedCaseStudies.includes(study.slug)
  );
  const posts = getBlogPosts().filter((post) => service.relatedBlogSlugs.includes(post.slug));

  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.metaDescription,
          url: `${siteConfig.url}/services/${service.slug}`
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Services", url: `${siteConfig.url}/services`, position: 2 },
          { name: service.title, url: `${siteConfig.url}/services/${service.slug}`, position: 3 }
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title.replace(" Services", "") }
        ]}
      />

      <section className="space-y-5">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          {service.heroValueProp}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{service.metaDescription}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.outcomes.map((outcome) => (
            <div key={outcome} className="rounded-xl border border-border bg-card/70 px-4 py-3 text-sm">
              {outcome}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="space-y-6">
          <SectionHeading
            eyebrow="Who It Is For"
            title="Ideal fit"
            description="This service works best when these conditions are true."
          />
          <ul className="space-y-2 text-muted-foreground">
            {service.whoItsFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="space-y-6">
          <SectionHeading
            eyebrow="Deliverables"
            title="What you get"
            description="Concrete outputs included in this service engagement."
          />
          <ul className="space-y-2 text-muted-foreground">
            {service.deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Process"
          title="How we execute"
          description="A structured workflow that keeps strategy and implementation connected."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {service.process.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-border bg-card/70 p-5">
              <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Timelines"
          title="Typical delivery windows"
          description="Exact duration depends on scope depth and stakeholder turnaround."
        />
        <div className="mt-6 space-y-3">
          {service.timelines.map((item) => (
            <div key={item.phase} className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold text-primary">
                {item.phase} • {item.duration}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-12">
        {service.longFormSections.map((section) => (
          <article key={section.heading} className="space-y-4">
            <h2 className="font-display text-3xl font-bold tracking-tight">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-8 text-foreground/90">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common questions from SME teams"
          description="If you need a custom scope, we can tailor delivery around your priorities."
        />
        <div className="mt-6">
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/70 p-6">
          <h2 className="font-display text-2xl font-semibold">Related case studies</h2>
          <div className="mt-4 space-y-2">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="block text-primary hover:underline">
                {study.title}
              </Link>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card/70 p-6">
          <h2 className="font-display text-2xl font-semibold">Related resources</h2>
          <div className="mt-4 space-y-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="block text-primary hover:underline"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <CTASection
        title="Ready for a scoped proposal?"
        description="Share your current growth goals and we will recommend the right service scope, timeline, and execution model."
        primaryHref={ctaLinks.proposal}
        primaryLabel="Get a Free Proposal"
        secondaryHref={ctaLinks.bookCall}
        secondaryLabel="Book a Call"
      />
    </div>
  );
}
