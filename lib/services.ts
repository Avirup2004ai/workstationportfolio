import { FAQItem, ServiceSummary } from "@/lib/types";

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Conversion-focused websites and web apps built for speed, search visibility, and measurable pipeline growth.",
    outcomes: ["Fast Core Web Vitals", "Higher conversion rates", "Scalable architecture"],
    icon: "Code2"
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Brand systems and campaign creatives that improve recall, consistency, and click-through across channels.",
    outcomes: ["Cohesive brand identity", "Higher ad CTR", "Creative production velocity"],
    icon: "Palette"
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Audience-first social strategy, content, and paid amplification designed to drive inbound demand.",
    outcomes: ["Better engagement rate", "More qualified leads", "Consistent brand voice"],
    icon: "Megaphone"
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "Technical, on-page, and authority-building SEO programs designed for local and national discoverability.",
    outcomes: ["Sustained traffic growth", "Better ranking quality", "Lower paid acquisition dependence"],
    icon: "Search"
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Data-driven ad operations for Meta and Google with tighter attribution and smarter budget allocation.",
    outcomes: ["Lower CAC", "Higher ROAS", "Predictable lead volume"],
    icon: "LineChart"
  },
  {
    slug: "branding",
    title: "Branding",
    description:
      "Positioning, messaging, and identity frameworks that make growth campaigns easier to execute and scale.",
    outcomes: ["Sharper positioning", "Consistent messaging", "Improved close rates"],
    icon: "Sparkles"
  }
];

export const serviceFaqs: Record<string, FAQItem[]> = {
  "web-development": [
    {
      question: "How long does a business website project usually take?",
      answer:
        "Most SME websites ship in 6 to 10 weeks depending on content readiness, feature complexity, and review turnaround."
    },
    {
      question: "Do you redesign existing websites or only build from scratch?",
      answer:
        "We do both. For redesigns we start with a UX and SEO audit, then rebuild key journeys while preserving critical rankings."
    },
    {
      question: "Will the website be optimized for Core Web Vitals?",
      answer:
        "Yes. We prioritize image strategy, component-level performance budgets, and script hygiene to hit strong LCP, CLS, and INP targets."
    },
    {
      question: "Can we manage content internally after launch?",
      answer:
        "Yes. We provide structured content blocks and a handover playbook so your internal team can update content safely."
    },
    {
      question: "Do you support multilingual pages for regional audiences?",
      answer:
        "Yes. We can implement English plus regional-language landing pages with clean URL architecture and localized metadata."
    },
    {
      question: "What happens after launch?",
      answer:
        "You can choose monthly optimization retainers covering speed, CRO experiments, search updates, and iterative UX improvements."
    }
  ],
  "graphic-design": [
    {
      question: "Can you design both digital and print assets?",
      answer:
        "Yes. We create ad creatives, social posts, sales collateral, packaging, and print-ready files with production-safe specifications."
    },
    {
      question: "How do revisions work?",
      answer:
        "We work in short cycles with defined revision windows so feedback is consolidated and the creative process remains efficient."
    },
    {
      question: "Do you create complete brand guidelines?",
      answer:
        "Yes. We build practical guidelines that teams can actually use across social, web, performance ads, and sales material."
    },
    {
      question: "Will your designs be optimized for ad performance?",
      answer:
        "Yes. We design with channel constraints, attention spans, and funnel stages in mind to improve CTR and conversion quality."
    },
    {
      question: "Can you support fast turnaround campaigns?",
      answer:
        "Yes. For clients on retainers we run sprint-based design pipelines that reduce bottlenecks during sales seasons."
    },
    {
      question: "What tools do you use?",
      answer:
        "Typical stack includes Figma, Adobe Illustrator, Photoshop, and After Effects depending on the output format."
    }
  ],
  "social-media-marketing": [
    {
      question: "Which platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, LinkedIn, YouTube Shorts, and can extend to emerging platforms based on audience relevance."
    },
    {
      question: "Do you only create organic content?",
      answer:
        "No. We align organic and paid efforts so winning content formats feed paid campaigns and improve efficiency."
    },
    {
      question: "How do you measure success?",
      answer:
        "We track leading indicators like watch time and saves, plus business metrics such as leads, CAC, and assisted conversions."
    },
    {
      question: "Is this suitable for local businesses in India?",
      answer:
        "Yes. We regularly work with local and regional brands where location-led messaging and local language context are critical."
    },
    {
      question: "How often do you publish?",
      answer:
        "Cadence depends on your category and bandwidth, but most retainers run 12 to 20 primary content pieces per month."
    },
    {
      question: "Can you train our in-house team?",
      answer:
        "Yes. We can run playbook workshops covering strategy, content systems, and performance review frameworks."
    }
  ]
};
