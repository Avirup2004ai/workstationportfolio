import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="font-display text-5xl font-bold">404</h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for is unavailable or has moved.
      </p>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
