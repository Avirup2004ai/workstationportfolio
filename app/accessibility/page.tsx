import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility statement for workstation.agency covering standards, support channels, and ongoing improvements.",
  alternates: { canonical: "/accessibility" }
};

export default function AccessibilityPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility Statement" }]} />
      <article className="prose-workstation max-w-4xl">
        <h1>Accessibility Statement</h1>
        <p>Last updated: February 28, 2026</p>

        <h2>Our commitment</h2>
        <p>
          Workstation is committed to providing an accessible digital experience across devices and
          assistive technologies.
        </p>

        <h2>Accessibility practices</h2>
        <ul>
          <li>Semantic HTML structure with meaningful headings</li>
          <li>Keyboard navigable interactions and visible focus states</li>
          <li>Color contrast and readable typography standards</li>
          <li>Reduced-motion support for motion-sensitive users</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          Some third-party embeds may have accessibility limitations outside our direct control. We
          provide alternative contact methods when needed.
        </p>

        <h2>Feedback and support</h2>
        <p>
          If you encounter an accessibility barrier, email {siteConfig.email}. We review requests
          and aim to respond within 5 business days.
        </p>
      </article>
    </div>
  );
}
