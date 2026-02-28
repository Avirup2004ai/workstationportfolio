import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  outcomes: string[];
};

export function ServiceCard({ title, description, href, outcomes }: ServiceCardProps) {
  return (
    <Card className="glass transition duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <ul className="space-y-1 text-sm text-foreground/85">
          {outcomes.map((outcome) => (
            <li key={outcome}>• {outcome}</li>
          ))}
        </ul>
        <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Explore service
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
