import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { AnalyticsHooks } from "@/components/analytics-hooks";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Workstation | Digital Marketing & Creative Agency",
    template: "%s | Workstation"
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Workstation | Digital Marketing & Creative Agency",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Workstation | Digital Marketing & Creative Agency",
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <JsonLd data={organizationSchema()} />
          <AnalyticsHooks />
          <SiteHeader />
          <PageTransition>
            <main id="main-content" className="min-h-[70vh]">
              {children}
            </main>
          </PageTransition>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
