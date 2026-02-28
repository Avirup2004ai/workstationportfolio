import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Workstation terms of service for website usage and service engagement.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
      <article className="prose-workstation max-w-4xl">
        <h1>Terms of Service</h1>
        <p>Last updated: February 28, 2026</p>

        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing this website, you agree to these terms. If you do not agree, please do not
          use this site.
        </p>

        <h2>2. Use of content</h2>
        <p>
          Website content is for informational purposes and may not be copied or redistributed
          without prior written permission.
        </p>

        <h2>3. Service proposals</h2>
        <p>
          Any proposal or pricing shared through this site is non-binding until both parties execute
          a signed agreement.
        </p>

        <h2>4. Limitation of liability</h2>
        <p>
          Workstation is not liable for indirect or consequential damages arising from website use.
        </p>

        <h2>5. External links</h2>
        <p>
          We may link to third-party websites. We are not responsible for their policies, accuracy,
          or content.
        </p>

        <h2>6. Governing law</h2>
        <p>
          These terms are governed by the applicable laws of India. For legal requests, contact{" "}
          {siteConfig.email}.
        </p>
      </article>
    </div>
  );
}
