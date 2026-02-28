"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/case-study-card";
import { CaseStudyMeta } from "@/lib/types";

export function WorkFilters({ studies }: { studies: CaseStudyMeta[] }) {
  const [industry, setIndustry] = useState("all");
  const [service, setService] = useState("all");

  const industries = useMemo(
    () => ["all", ...Array.from(new Set(studies.map((study) => study.industry)))],
    [studies]
  );
  const services = useMemo(
    () => ["all", ...Array.from(new Set(studies.flatMap((study) => study.services)))],
    [studies]
  );

  const filtered = useMemo(() => {
    return studies.filter((study) => {
      const industryMatch = industry === "all" || study.industry === industry;
      const serviceMatch = service === "all" || study.services.includes(service);
      return industryMatch && serviceMatch;
    });
  }, [studies, industry, service]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted-foreground">Industry</span>
          <select
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            {industries.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "All industries" : item}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted-foreground">Service</span>
          <select
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            {services.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "All services" : item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study) => (
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
    </div>
  );
}
