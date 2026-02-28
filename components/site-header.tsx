"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { mainNav, ctaLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = useMemo(
    () => pathname === href || pathname.startsWith(`${href}/`),
    [pathname, href]
  );

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition hover:text-primary",
        isActive ? "text-primary" : "text-foreground/80"
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Workstation Logo and favicon/workstation Logo.png"
            alt="Workstation Logo"
            width={160}
            height={40}
            className="h-8 w-auto dark:invert"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="text-sm font-medium text-foreground/80 transition hover:text-primary">
                  {item.label}
                </button>
                <div className="pointer-events-none absolute left-0 top-8 w-64 rounded-xl border border-border bg-card p-3 opacity-0 shadow-lg transition-all group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="grid gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-md px-3 py-2 text-sm text-foreground/80 transition hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} />
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href={ctaLinks.proposal}>Get a Free Proposal</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="container space-y-2 py-4" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <div key={item.label} className="space-y-2">
                <NavLink href={item.href} label={item.label} />
                {item.children ? (
                  <div className="grid gap-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="py-1 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button asChild size="sm">
                <Link href={ctaLinks.proposal}>Get a Free Proposal</Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
