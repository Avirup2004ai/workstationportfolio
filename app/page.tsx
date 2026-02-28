import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { BlogCard } from "@/components/blog-card";
import { LogoCloud } from "@/components/logo-cloud";
import { MetricsGrid } from "@/components/metrics-grid";
import { CTASection } from "@/components/cta-section";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { MotionReveal } from "@/components/motion-reveal";
import { clientLogos, ctaLinks, trustStats, siteConfig } from "@/lib/site";
import { testimonials } from "@/lib/data";
import { serviceSummaries } from "@/lib/services";
import { getCaseStudies, getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Digital Marketing + Creative Growth Partner for SMEs",
  description:
    "Workstation builds high-converting websites, brand systems, and demand-generation campaigns for Indian SMEs and growth-stage businesses.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const featuredCaseStudies = getCaseStudies().slice(0, 3);
  const featuredPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      <Hero
        title="Build a growth engine that looks premium and converts reliably."
        description="Workstation combines strategy, creative, and engineering to help ambitious brands improve discoverability, trust, and pipeline quality."
        primaryCta={{ href: ctaLinks.proposal, label: "Get a Free Proposal" }}
        secondaryCta={{ href: ctaLinks.bookCall, label: "Book a Call" }}
        highlights={[
          "Dedicated SEO service pages and knowledge hub",
          "Fast, accessible websites built for Core Web Vitals",
          "Integrated paid + organic growth strategy"
        ]}
      />

      <LogoCloud logos={clientLogos} />

      <section className="container py-16">
        <MotionReveal>
          <SectionHeading
            eyebrow="Why Workstation"
            title="A practical growth partner, not a vanity agency."
            description="We tie every deliverable to measurable outcomes, keep feedback loops short, and build systems your team can maintain."
          />
        </MotionReveal>
        <div className="mt-8">
          <MetricsGrid metrics={trustStats} />
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Services"
          title="Specialized services built for compounding growth."
          description="Each service includes strategy, execution, and optimization sprints."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceSummaries.map((service, index) => (
            <MotionReveal key={service.slug} delay={index * 0.06}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                outcomes={service.outcomes}
              />
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Proof"
            title="Recent case studies with real business metrics."
            description="Deep strategy and execution breakdowns across web, social, and performance marketing."
          />
          <Link href="/work" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            View all work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredCaseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              description={study.description}
              industry={study.industry}
              timeline={study.timeline}
              href={`/work/${study.slug}`}
              services={study.services}
            />
          ))}
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Social Proof"
          title="Client feedback from growth-stage teams."
          description="We stay lean, communicate clearly, and focus on outcomes your leadership team cares about."
        />
        <div className="mt-8">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Resources"
            title="Guides and playbooks for in-house teams."
            description="Use our resource hub to plan campaigns, improve reporting, and execute better."
          />
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Browse resources <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              href={`/resources/blog/${post.slug}`}
              category={post.category}
              date={new Date(post.date).toLocaleDateString("en-IN")}
              tags={post.tags}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to accelerate your brand's digital growth?"
        description="Call or WhatsApp us to discuss your goals, or drop us an email."
        primaryHref={`tel:${siteConfig.phone}`}
        primaryLabel="Call Us Now"
        secondaryHref={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
        secondaryLabel="WhatsApp Us"
      />
    </>
  );
}
