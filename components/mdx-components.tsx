import Link from "next/link";
import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

function createHeading(level: "h2" | "h3") {
  return function Heading({ className, ...props }: HeadingProps) {
    const Comp = level;
    return <Comp className={cn("scroll-mt-24", className)} {...props} />;
  };
}

export const mdxComponents = {
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href ?? "";
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="text-primary underline-offset-4 hover:underline">
          {props.children}
        </Link>
      );
    }
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline-offset-4 hover:underline"
      />
    );
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} className="list-disc pl-6" />
};
