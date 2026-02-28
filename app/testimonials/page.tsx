import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LogoCloud } from "@/components/logo-cloud";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { clientLogos, siteConfig } from "@/lib/site";
import { testimonials } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Client reviews and social proof from Workstation engagements across web, creative, and performance marketing.",
  alternates: { canonical: "/testimonials" }
};

export default function TestimonialsPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Testimonials", url: `${siteConfig.url}/testimonials`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
      <SectionHeading
        eyebrow="Client Feedback"
        title="Proof that strategy and execution can stay practical."
        description="These snippets summarize what clients value most: clarity, responsiveness, and commercial outcomes."
      />
      <div className="mt-8">
        <TestimonialSlider items={testimonials} />
      </div>
      <div className="mt-12">
        <LogoCloud logos={clientLogos} />
      </div>
    </div>
  );
}
