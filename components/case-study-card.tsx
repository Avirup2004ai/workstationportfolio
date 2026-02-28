import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CaseStudyCardProps = {
  title: string;
  description: string;
  industry: string;
  timeline: string;
  href: string;
  services: string[];
};

export function CaseStudyCard({
  title,
  description,
  industry,
  timeline,
  href,
  services
}: CaseStudyCardProps) {
  return (
    <Card className="glass h-full">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{industry}</Badge>
          <Badge variant="secondary">{timeline}</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <Badge key={service} variant="default">
              {service}
            </Badge>
          ))}
        </div>
        <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          View case study <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
