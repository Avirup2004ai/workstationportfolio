import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Workstation team across strategy, creative, and engineering with skills and certifications.",
  alternates: { canonical: "/team" }
};

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url, position: 1 },
          { name: "Team", url: `${siteConfig.url}/team`, position: 2 }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Team" }]} />
      <SectionHeading
        eyebrow="Team"
        title="Cross-functional specialists focused on measurable growth."
        description="Workstation pods combine strategy, design, and engineering so decisions are faster and execution quality stays high."
      />

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} className="rounded-2xl border border-border bg-card/70 p-5">
            <Image
              src={member.image}
              alt={`${member.name} portrait`}
              width={500}
              height={500}
              className="h-56 w-full rounded-xl object-cover"
            />
            <h2 className="mt-4 font-display text-2xl font-semibold">{member.name}</h2>
            <p className="text-sm font-medium text-primary">{member.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Expertise
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {member.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Certifications
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {member.certifications.map((cert) => (
                  <li key={cert}>• {cert}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
