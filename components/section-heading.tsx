import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="text-muted-foreground">{description}</p> : null}
    </div>
  );
}
