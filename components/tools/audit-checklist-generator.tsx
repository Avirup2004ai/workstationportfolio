"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const options = [
  { id: "technical-seo", label: "Technical SEO" },
  { id: "onpage-seo", label: "On-page SEO" },
  { id: "content-quality", label: "Content Quality" },
  { id: "analytics", label: "Analytics Setup" },
  { id: "conversion", label: "Conversion Journey" },
  { id: "speed", label: "Performance & Speed" }
];

const checklistLibrary: Record<string, string[]> = {
  "technical-seo": [
    "Validate robots.txt and XML sitemap indexability",
    "Check canonical consistency across core pages",
    "Audit crawl errors and redirect chains"
  ],
  "onpage-seo": [
    "Review title/meta uniqueness for top traffic pages",
    "Ensure one H1 per page and clean heading hierarchy",
    "Add schema for services, FAQs, and articles"
  ],
  "content-quality": [
    "Expand thin pages with intent-matched depth",
    "Add author and last-updated metadata for trust",
    "Improve internal links to relevant service pages"
  ],
  analytics: [
    "Confirm conversion events and thank-you triggers",
    "Map channel UTM parameters with naming standards",
    "Check dashboard alignment with business KPIs"
  ],
  conversion: [
    "Test mobile CTA visibility above and below fold",
    "Reduce form friction and improve field labels",
    "Add proof blocks near high-intent CTAs"
  ],
  speed: [
    "Compress hero media and responsive image sizes",
    "Audit third-party scripts and defer non-critical tags",
    "Monitor LCP and CLS on high-traffic templates"
  ]
};

export function AuditChecklistGenerator() {
  const [selected, setSelected] = useState<string[]>(["technical-seo", "conversion"]);
  const [showResults, setShowResults] = useState(false);

  const checklist = useMemo(() => {
    return selected.flatMap((item) => checklistLibrary[item] ?? []);
  }, [selected]);

  return (
    <article className="rounded-2xl border border-border bg-card/70 p-6">
      <h3 className="font-display text-2xl font-semibold">Website Audit Checklist Generator</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Select focus areas and generate a practical checklist for your next optimization sprint.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option.id} className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={(event) => {
                setSelected((prev) =>
                  event.target.checked ? [...prev, option.id] : prev.filter((item) => item !== option.id)
                );
              }}
            />
            {option.label}
          </label>
        ))}
      </div>
      <Button className="mt-4" onClick={() => setShowResults(true)} type="button">
        Generate Checklist
      </Button>

      {showResults ? (
        <ul className="mt-4 space-y-2 rounded-xl border border-border bg-background/50 p-4 text-sm">
          {checklist.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
