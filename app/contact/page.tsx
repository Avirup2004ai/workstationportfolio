import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Workstation for project proposals, discovery calls, and growth consultation across web, creative, and performance marketing.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div className="container py-12 md:py-16">
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Contact", url: `${siteConfig.url}/contact`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let us build your next growth sprint.
          </h1>
          <p className="text-muted-foreground">
            Share your goals, constraints, and timelines. We typically respond within one business
            day.
          </p>
          <div className="rounded-2xl border border-border bg-card/70 p-5 text-sm text-muted-foreground">
            <p>
              <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">{siteConfig.phone}</a>
            </p>
            <p>
              <strong>WhatsApp:</strong> <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{siteConfig.phone}</a>
            </p>
            <p>
              <strong>Location:</strong> <a href={siteConfig.gmap} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{siteConfig.location}</a>
            </p>
            <p>
              <strong>Hours:</strong> {siteConfig.hours}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Workstation location map"
              src="https://www.google.com/maps?q=Tisha,+Kharsarai,+Begampur,+Hooghly,+West+Bengal+712304&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ContactForm />
      </section>

      {calendlyUrl ? (
        <section className="mt-12 rounded-2xl border border-border bg-card/70 p-5">
          <h2 className="font-display text-2xl font-semibold">Book a call directly</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Prefer direct scheduling? Use the embedded calendar below.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Calendly scheduler"
              src={calendlyUrl}
              width="100%"
              height="700"
              loading="lazy"
            />
          </div>
        </section>
      ) : null}
    </div>
  );
}
