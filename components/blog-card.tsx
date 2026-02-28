import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BlogCardProps = {
  title: string;
  description: string;
  href: string;
  category: string;
  date: string;
  tags: string[];
};

export function BlogCard({ title, description, href, category, date, tags }: BlogCardProps) {
  return (
    <Card className="glass h-full">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{category}</Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Read article
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
