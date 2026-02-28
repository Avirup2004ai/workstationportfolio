import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Workstation privacy policy explaining data collection, usage, retention, and user rights.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <article className="prose-workstation max-w-4xl">
        <h1>Privacy Policy</h1>
        <p>Last updated: February 28, 2026</p>

        <h2>1. Information we collect</h2>
        <p>
          We collect contact details and project information submitted through forms, including
          name, email, company, and message content. We may also collect basic analytics signals
          when analytics is enabled.
        </p>

        <h2>2. How we use your information</h2>
        <p>
          We use submitted information to respond to inquiries, prepare proposals, and improve
          service delivery. We do not sell personal data.
        </p>

        <h2>3. Data retention</h2>
        <p>
          Inquiry data is retained only as long as needed for communication, service management, and
          legal compliance.
        </p>

        <h2>4. Third-party services</h2>
        <p>
          Form submissions may be processed through third-party endpoints configured by Workstation.
          Review their policies before use.
        </p>

        <h2>5. Your rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data by emailing{" "}
          {siteConfig.email}.
        </p>

        <h2>6. Contact</h2>
        <p>For privacy-related questions, contact us at {siteConfig.email}.</p>
      </article>
    </div>
  );
}
