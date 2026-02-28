import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-card/50">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <Link href="/">
            <Image
              src="/images/Workstation Logo and favicon/workstation Logo.png"
              alt="Workstation Logo"
              width={160}
              height={40}
              className="h-10 w-auto dark:invert"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            Digital growth systems for ambitious Indian brands.
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Explore
          </p>
          <div className="space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-foreground/80 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Contact
          </p>
          <a href={`mailto:${siteConfig.email}`} className="block text-sm hover:text-primary">
            Email Us
          </a>
          <a href={`tel:${siteConfig.phone}`} className="block text-sm hover:text-primary">
            Call Us
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-primary">
            WhatsApp
          </a>
          <a href={siteConfig.gmap} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-primary">
            Google Maps Location
          </a>
          <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Legal
          </p>
          <Link href="/privacy" className="block text-sm hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="block text-sm hover:text-primary">
            Terms of Service
          </Link>
          <Link href="/accessibility" className="block text-sm hover:text-primary">
            Accessibility Statement
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Workstation. All rights reserved.
      </div>
    </footer>
  );
}
