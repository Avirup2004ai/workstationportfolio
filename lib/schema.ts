import { siteConfig } from "@/lib/site";
import { FAQItem } from "@/lib/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: `${siteConfig.url}/images/logo.svg`,
    sameAs: Object.values(siteConfig.social)
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/office-placeholder.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN"
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    openingHours: "Mo-Sa 10:00-19:00"
  };
}

export function serviceSchema({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: "India",
    description,
    url
  };
}

export function articleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  url
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.svg`
      }
    },
    mainEntityOfPage: url
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function breadcrumbSchema(
  entries: Array<{ name: string; url: string; position: number }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry) => ({
      "@type": "ListItem",
      position: entry.position,
      name: entry.name,
      item: entry.url
    }))
  };
}

export function caseStudySchema({
  title,
  description,
  url,
  datePublished
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    datePublished,
    url,
    creator: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };
}
