import { commonFaqs } from "@/lib/data";
import { serviceFaqs } from "@/lib/services";
import { FAQItem } from "@/lib/types";

type ProcessStep = {
  title: string;
  description: string;
};

type TimelineItem = {
  phase: string;
  duration: string;
  details: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  heroValueProp: string;
  outcomes: string[];
  whoItsFor: string[];
  deliverables: string[];
  process: ProcessStep[];
  timelines: TimelineItem[];
  longFormSections: { heading: string; paragraphs: string[] }[];
  faqs: FAQItem[];
  relatedCaseStudies: string[];
  relatedBlogSlugs: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "web-development",
    title: "Web Development Services",
    metaDescription:
      "Conversion-focused web development for Indian SMEs: fast, SEO-first, accessible websites designed to increase qualified inquiries and sales.",
    heroValueProp:
      "Build a high-performance website that turns traffic into qualified revenue conversations.",
    outcomes: [
      "Faster page speed and stronger Core Web Vitals",
      "Higher conversion rates from key landing pages",
      "Improved organic discoverability with technical SEO foundations",
      "Lower maintenance friction for internal teams"
    ],
    whoItsFor: [
      "SMEs scaling digital acquisition but losing conversions on outdated websites",
      "Brands needing a redesign without sacrificing existing search equity",
      "Founders preparing for paid media campaigns who need stronger landing experiences",
      "Teams that want a CMS and design system aligned with internal workflows"
    ],
    deliverables: [
      "Information architecture and funnel-focused UX wireframes",
      "UI system with responsive components and accessibility guardrails",
      "Next.js implementation with performance and SEO best practices",
      "Technical SEO baseline: schema, metadata, canonical structure, sitemap",
      "Analytics setup plan: conversion events, attribution placeholders, KPI dashboards",
      "Handover documentation and optimization roadmap"
    ],
    process: [
      {
        title: "Discovery and baseline audit",
        description:
          "We assess your current website, conversion paths, search visibility, and analytics quality to identify the highest-leverage opportunities."
      },
      {
        title: "UX strategy and content architecture",
        description:
          "We map user intent clusters and create page structures that support both organic discoverability and clear conversion paths."
      },
      {
        title: "Design system and visual direction",
        description:
          "We design reusable components and page templates to maintain consistency and accelerate future updates."
      },
      {
        title: "Engineering and QA",
        description:
          "The frontend is developed with performance budgets, accessibility checks, semantic structure, and robust cross-device validation."
      },
      {
        title: "Launch and optimization",
        description:
          "Post-launch, we monitor user behavior and run improvement sprints focused on conversion, content quality, and speed."
      }
    ],
    timelines: [
      {
        phase: "Phase 1: Discovery",
        duration: "1-2 weeks",
        details:
          "Stakeholder alignment, analytics review, content inventory, and competitor benchmarking."
      },
      {
        phase: "Phase 2: UX + UI",
        duration: "2-3 weeks",
        details:
          "Wireframes, content flow, component system, and responsive design approvals."
      },
      {
        phase: "Phase 3: Development",
        duration: "2-4 weeks",
        details:
          "Frontend implementation, SEO setup, quality assurance, and stakeholder UAT."
      },
      {
        phase: "Phase 4: Launch + Handover",
        duration: "1 week",
        details:
          "Deployment coordination, documentation, team walkthroughs, and post-launch checks."
      }
    ],
    longFormSections: [
      {
        heading: "Why most SME websites underperform",
        paragraphs: [
          "Most small and mid-sized business websites fail for the same reason: they are treated as a brochure, not a growth system. Pages are often built around what the business wants to say instead of what potential buyers need to understand before taking action. This creates friction. Visitors may browse but they do not find enough relevance, proof, or clarity to trust the next step. In high-competition categories, this gap becomes expensive because paid traffic leaks and organic traffic under-converts.",
          "Another common issue is technical debt. A site may look acceptable on desktop but perform poorly on mobile where most traffic now originates. Slow image delivery, layout shifts, bloated scripts, and weak caching compound into poor Core Web Vitals. Search engines interpret this as a quality signal problem, and users feel it immediately as a trust problem. If your page takes too long to stabilize, users leave before they evaluate your offer. That is not a branding issue, it is a pipeline issue."
        ]
      },
      {
        heading: "How Workstation approaches web development",
        paragraphs: [
          "We treat website development as a joint exercise in conversion design, technical SEO, and operational clarity. Before drawing screens, we map decision stages: awareness, comparison, credibility validation, and inquiry. This lets us design content hierarchy around buyer intent rather than internal assumptions. Each key page gets a specific role in the funnel, measurable action points, and supporting proof assets such as testimonials, outcomes, and process transparency.",
          "From a technical perspective, we engineer for performance from day one. That means responsive image strategy, lean JavaScript, modular components, and carefully controlled dependencies. We use semantic HTML, clear heading hierarchy, and schema markup to support search systems and AI-assisted answer engines. Every component is tested for keyboard access and focus visibility so the experience is inclusive and compliant. The result is a site that loads quickly, communicates clearly, and remains maintainable."
        ]
      },
      {
        heading: "What this means for your business outcomes",
        paragraphs: [
          "When structure, speed, and messaging align, your acquisition economics improve. Organic traffic that previously bounced starts engaging with deeper pages. Paid campaigns achieve better post-click behavior because landing experiences match ad intent. Sales teams spend less time correcting misunderstandings because the website already frames capabilities and delivery models accurately. This improves lead quality, reduces wasted calls, and shortens decision cycles.",
          "A high-performing website also compounds over time. With a reusable component system and a clear content architecture, your team can launch landing pages, add case studies, or publish resources without rebuilding from scratch. Instead of one large redesign every few years, you get continuous improvement. That is how digital presence becomes an asset rather than a recurring emergency project. Workstation’s goal is to build that operating model, not just ship pages."
        ]
      },
      {
        heading: "Measurement and optimization after launch",
        paragraphs: [
          "Many agencies stop at deployment, but launch is where meaningful learning begins. We define event tracking and conversion checkpoints so each month produces usable insight. Which pages assist proposals? Which sections are ignored? Where do mobile users hesitate? These questions guide prioritization. Without structured measurement, teams chase opinions. With structured measurement, teams make fewer but better changes.",
          "Our post-launch sprints usually focus on three tracks: conversion copy tests, content depth expansion for high-intent topics, and performance maintenance as content scales. This approach keeps your site aligned with evolving search behavior and buyer expectations. Over time, these steady improvements often deliver larger ROI than one-time redesigns. If your business is serious about digital growth, this discipline is non-negotiable."
        ]
      }
    ],
    faqs: serviceFaqs["web-development"],
    relatedCaseStudies: ["royal-bengal-basket", "fashinoworld"],
    relatedBlogSlugs: [
      "seo-first-website-architecture-for-indian-smes",
      "core-web-vitals-playbook-for-marketing-sites"
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design Services",
    metaDescription:
      "Strategic graphic design for growth-stage brands: identity systems, campaign creative, ad assets, and conversion-ready visuals.",
    heroValueProp:
      "Creative assets engineered for recall, consistency, and measurable campaign performance.",
    outcomes: [
      "Stronger visual consistency across channels",
      "Higher ad engagement and click-through rates",
      "Faster creative turnaround for campaign cycles",
      "Brand assets that are easy to scale with teams"
    ],
    whoItsFor: [
      "Businesses with fragmented brand visuals across social, web, and sales materials",
      "Teams running paid campaigns that need continuous creative testing",
      "Founders preparing for expansion who need stronger market positioning",
      "Marketing teams that need a reusable system, not one-off design files"
    ],
    deliverables: [
      "Visual identity system (logo usage, typography, color, iconography)",
      "Campaign creative kits for Meta, Google Display, and social channels",
      "Landing page and web design assets aligned with conversion goals",
      "Sales collateral templates (pitch decks, brochures, brand one-pagers)",
      "Design production workflows with file naming and handoff standards",
      "Creative testing matrix tied to funnel stages"
    ],
    process: [
      {
        title: "Brand and audience discovery",
        description:
          "We assess your current visual language, market positioning, competitor patterns, and audience expectations."
      },
      {
        title: "Creative direction and concepting",
        description:
          "We define visual direction routes and align with campaign objectives before high-volume production starts."
      },
      {
        title: "System design and asset production",
        description:
          "We create scalable design libraries and channel-specific assets with quality controls for consistency."
      },
      {
        title: "Performance feedback loop",
        description:
          "Creative results from paid and organic channels feed back into the next production cycle."
      }
    ],
    timelines: [
      {
        phase: "Week 1",
        duration: "Discovery + direction",
        details: "Brand audit, messaging context, visual route exploration."
      },
      {
        phase: "Week 2-3",
        duration: "Core system build",
        details: "Identity refinements, typography/color system, base templates."
      },
      {
        phase: "Week 4 onwards",
        duration: "Campaign production",
        details: "Monthly creative batches, testing variations, optimization refresh."
      }
    ],
    longFormSections: [
      {
        heading: "Design is a growth lever, not decoration",
        paragraphs: [
          "In many organizations, design is treated as the final polish applied after strategy decisions are already made. That approach creates a hidden cost: campaign assets may look attractive but fail to drive action because the visual hierarchy does not support the offer. Strong graphic design does more than make a brand look modern. It guides attention, reduces cognitive effort, and reinforces message clarity. When done correctly, design helps users understand what matters, trust the brand faster, and take the next step with confidence.",
          "For Indian SMEs, this challenge is often amplified by speed pressure. Teams need assets for social content, paid campaigns, festive promotions, distributor communication, and sales collateral, all at once. Without a system, output becomes inconsistent. Fonts shift, colors drift, and message framing changes from one channel to another. Audience trust weakens because the brand appears fragmented. Workstation solves this by building practical design systems that balance quality with execution velocity."
        ]
      },
      {
        heading: "Our design methodology for high-output teams",
        paragraphs: [
          "We begin by clarifying business objectives and decision contexts. Is this creative meant to generate awareness, drive clicks, or support closing conversations? Each goal requires different visual treatment. Instead of generic templates, we define channel-specific design principles: hook density for social feeds, clarity-first layouts for landing pages, and authority cues for B2B sales decks. This ensures creative choices are strategic, not subjective.",
          "Once direction is approved, we build modular asset structures so your team can produce quickly without compromising brand consistency. For example, we may define a hero module format for product posts, a testimonial card framework for trust-led ads, and a conversion-focused CTA block for remarketing creatives. These modules reduce production bottlenecks while preserving coherence across platforms. Designers, marketers, and founders can collaborate with less confusion and fewer rework cycles."
        ]
      },
      {
        heading: "Creative performance and iteration",
        paragraphs: [
          "Creative effectiveness improves when teams treat design as an iterative performance layer. We set up simple testing matrices where variables are intentional: headline emphasis, visual contrast, offer framing, or social proof placement. Instead of changing everything at once, we change one or two variables per batch to isolate what affects engagement and conversion quality. This produces insights that are easier to trust and apply.",
          "The outcome is a feedback-driven design engine. Winning patterns become part of your standard creative toolkit, while weak patterns are retired quickly. Over a quarter, this approach can materially improve ad efficiency and organic engagement while reducing decision fatigue for internal teams. Workstation’s role is to operationalize this loop so design supports business growth at scale, not just isolated campaign bursts."
        ]
      },
      {
        heading: "Scaling design maturity across teams",
        paragraphs: [
          "As businesses grow, design quality often drops because more contributors are involved. The fix is not tighter control by one designer; it is a clear operating system. We provide usable documentation, file structures, and naming conventions so teams know where assets live and how to adapt them without breaking brand logic. We also align design language with web components and content strategy so your website, ads, and social channels feel like one coherent experience.",
          "This systems-first approach is especially valuable during seasonal campaigns, product launches, and regional expansion. You can create faster, maintain consistency, and preserve quality under deadline pressure. That reliability translates directly into better brand recall and more efficient customer acquisition."
        ]
      }
    ],
    faqs: serviceFaqs["graphic-design"],
    relatedCaseStudies: ["royal-bengal-basket", "jolkhabar"],
    relatedBlogSlugs: [
      "creative-testing-framework-for-meta-and-google-ads",
      "brand-identity-checklist-for-growing-sme-businesses"
    ]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing Services",
    metaDescription:
      "Full-funnel social media marketing for Indian businesses, combining content strategy, creative production, community management, and paid amplification.",
    heroValueProp:
      "Turn social channels into a reliable demand engine with strategy, content, and measurable outcomes.",
    outcomes: [
      "Higher engagement quality and audience retention",
      "Improved lead volume from social touchpoints",
      "More consistent brand voice across platforms",
      "Stronger alignment between organic and paid campaigns"
    ],
    whoItsFor: [
      "SMEs posting inconsistently without clear content strategy",
      "Brands running paid social without integrated organic support",
      "Teams needing bilingual or regional audience communication",
      "Founders who want social channels tied to pipeline goals"
    ],
    deliverables: [
      "Social channel strategy with audience segments and content pillars",
      "Monthly content calendar with hooks, topics, and CTA mapping",
      "Creative production for posts, reels, shorts, and story formats",
      "Community response playbook and engagement SOPs",
      "Paid social amplification aligned to high-performing content clusters",
      "Monthly reporting dashboard with both engagement and business metrics"
    ],
    process: [
      {
        title: "Audience and channel audit",
        description:
          "We map existing audience behavior, content performance, and competitor format trends."
      },
      {
        title: "Content system design",
        description:
          "We define recurring content pillars, narrative arcs, and production cadence tied to funnel stages."
      },
      {
        title: "Execution and publishing",
        description:
          "Creative assets are produced in batches and scheduled with channel-specific optimization."
      },
      {
        title: "Amplification and optimization",
        description:
          "Top-performing organic assets are promoted through paid campaigns with controlled experiments."
      }
    ],
    timelines: [
      {
        phase: "Onboarding",
        duration: "1 week",
        details: "Brand immersion, audience profiling, KPI alignment, and workflow setup."
      },
      {
        phase: "Month 1",
        duration: "2-4 weeks",
        details: "Content strategy, initial creative batches, and first performance baselines."
      },
      {
        phase: "Month 2+",
        duration: "Ongoing",
        details:
          "Iteration cycles across creative formats, engagement tactics, and paid amplification."
      }
    ],
    longFormSections: [
      {
        heading: "Why social media feels busy but not productive",
        paragraphs: [
          "Many teams are active on social media but still feel disconnected from business outcomes. The feed is full, yet inbound leads remain unpredictable. This usually happens when social execution is driven by posting frequency rather than audience intent. Content may look polished, but it does not guide prospects through awareness, trust, and action in a consistent way. Without that journey design, social effort becomes noise that consumes time without creating reliable demand.",
          "Another frequent challenge is channel fragmentation. Different people manage Instagram, Facebook, and LinkedIn with no shared strategy. Visual style, tone, and offers change every week. As a result, audiences receive mixed signals and do not develop clear brand recall. For growing SMEs, this inconsistency can directly affect conversion quality because potential buyers struggle to understand the real value proposition."
        ]
      },
      {
        heading: "Our full-funnel social framework",
        paragraphs: [
          "Workstation builds social systems around three layers: attention, trust, and conversion. Attention content earns initial reach through relevant hooks and format discipline. Trust content deepens credibility using education, process transparency, and proof. Conversion content creates clear next steps such as consultations, audits, or offer-specific landing pages. Each piece of content is mapped to one layer so the channel becomes intentional rather than random.",
          "We also integrate organic and paid from the beginning. Instead of treating paid campaigns as separate operations, we use organic performance data to identify creative themes worth amplifying. This reduces waste and improves ad learning velocity. Likewise, paid campaign insights reveal which audience objections to address in organic content. The two loops reinforce each other, improving both engagement and acquisition efficiency."
        ]
      },
      {
        heading: "Execution model for Indian SMEs",
        paragraphs: [
          "Indian market contexts require practical adaptation. Audience behavior differs across metros and tier-two cities. Language preferences vary by segment, and campaign timing often depends on festivals, regional events, and local buying cycles. Our planning process accounts for these realities through modular calendars and contextual messaging. This makes your social strategy relevant without turning operations into chaos.",
          "Production is handled in structured monthly sprints. We lock strategic themes, produce creative batches, and keep room for reactive content where necessary. Community management guidelines ensure responses remain consistent even when team members rotate. The result is a professional, responsive presence that strengthens buyer confidence over time."
        ]
      },
      {
        heading: "How we measure meaningful social ROI",
        paragraphs: [
          "Vanity metrics like follower count can be misleading. We track indicators that better reflect business impact: save and share rates for intent depth, profile-to-website click behavior, lead form quality, and assisted conversions across journeys. This gives leadership teams a clearer view of channel contribution. If content is engaging but not generating qualified action, we adjust quickly.",
          "Over sustained cycles, this discipline builds a social program that compounds. You gain reusable content systems, stronger audience trust, and improved acquisition economics. Social stops being a low-priority chore and becomes a strategic growth asset."
        ]
      }
    ],
    faqs: serviceFaqs["social-media-marketing"],
    relatedCaseStudies: ["jolkhabar", "royal-bengal-basket"],
    relatedBlogSlugs: [
      "social-media-content-calendar-for-indian-businesses",
      "social-engagement-rate-benchmarks-and-calculation-guide"
    ]
  },
  {
    slug: "seo",
    title: "SEO Services",
    metaDescription:
      "Technical SEO, on-page optimization, and content strategy for sustained organic growth in local and national search.",
    heroValueProp:
      "Improve discoverability and lead quality with a structured, technical-first SEO program.",
    outcomes: ["Higher quality organic traffic", "Better topical relevance", "Sustainable inbound growth"],
    whoItsFor: [
      "Businesses dependent on paid traffic",
      "Sites with indexing and technical issues",
      "Teams ready to publish consistent expert content"
    ],
    deliverables: [
      "Technical SEO audit",
      "Content cluster map",
      "On-page optimization framework",
      "Internal linking architecture",
      "Schema and SERP enhancement setup",
      "Monthly SEO reporting"
    ],
    process: [
      {
        title: "Audit and prioritization",
        description: "Technical fixes and keyword opportunity mapping."
      },
      {
        title: "Execution and content alignment",
        description: "On-page improvements and supporting content expansion."
      },
      {
        title: "Measurement and refinement",
        description: "Ranking quality tracking and conversion-led optimization."
      }
    ],
    timelines: [
      {
        phase: "Month 1",
        duration: "Setup",
        details: "Audit, roadmap, and critical technical issue fixes."
      },
      {
        phase: "Month 2-3",
        duration: "Execution",
        details: "Content and on-page improvements begin compounding."
      },
      {
        phase: "Month 4+",
        duration: "Scale",
        details: "Authority signals and intent-depth coverage expansion."
      }
    ],
    longFormSections: [
      {
        heading: "SEO that supports business outcomes",
        paragraphs: [
          "Our SEO approach focuses on intent quality and conversion relevance, not only rankings. We prioritize technical health, semantic depth, and internal linking so search visibility compounds while user journeys stay clear."
        ]
      }
    ],
    faqs: commonFaqs,
    relatedCaseStudies: ["fashinoworld"],
    relatedBlogSlugs: ["seo-first-website-architecture-for-indian-smes"]
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing Services",
    metaDescription:
      "Performance marketing across Meta and Google with disciplined testing, attribution hygiene, and CAC-focused optimization.",
    heroValueProp: "Scale paid acquisition with cleaner attribution and stronger creative feedback loops.",
    outcomes: ["Lower CAC", "Improved lead quality", "More predictable demand generation"],
    whoItsFor: [
      "Brands struggling with ad account volatility",
      "Teams with weak attribution discipline",
      "Businesses scaling lead generation"
    ],
    deliverables: [
      "Channel strategy and budget allocation model",
      "Campaign architecture and audience framework",
      "Creative testing roadmap",
      "Landing page experiment queue",
      "Weekly optimization log",
      "Attribution reporting dashboard"
    ],
    process: [
      {
        title: "Audit and reset",
        description: "Campaign structure cleanup and data baseline correction."
      },
      {
        title: "Scale with controls",
        description: "Iterative testing across audience, creative, and landing pages."
      },
      {
        title: "Operationalize learnings",
        description: "Codify winning patterns into repeatable playbooks."
      }
    ],
    timelines: [
      {
        phase: "Week 1-2",
        duration: "Audit",
        details: "Performance baseline and tracking sanity checks."
      },
      {
        phase: "Week 3-6",
        duration: "Optimization",
        details: "Testing rounds and budget reallocation."
      },
      {
        phase: "Week 7+",
        duration: "Scale",
        details: "Scale winners while protecting efficiency."
      }
    ],
    longFormSections: [
      {
        heading: "Paid growth with financial discipline",
        paragraphs: [
          "We build paid media systems where channel expansion is grounded in contribution margin logic, not vanity spend. This protects cash flow while improving lead quality."
        ]
      }
    ],
    faqs: commonFaqs,
    relatedCaseStudies: ["jolkhabar", "royal-bengal-basket"],
    relatedBlogSlugs: ["marketing-roi-calculator-how-to-use-it-correctly"]
  },
  {
    slug: "branding",
    title: "Branding Services",
    metaDescription:
      "Positioning, messaging, and identity services that align your brand narrative with business growth goals.",
    heroValueProp:
      "Create a brand foundation that improves consistency, conversion confidence, and long-term recall.",
    outcomes: ["Sharper positioning", "Consistent communication", "Higher trust in buyer conversations"],
    whoItsFor: [
      "Businesses preparing for expansion",
      "Founders rebranding after product-market shifts",
      "Teams needing stronger market differentiation"
    ],
    deliverables: [
      "Positioning workshop and messaging framework",
      "Brand voice guide",
      "Visual identity refinement",
      "Campaign narrative architecture",
      "Sales and website messaging alignment",
      "Brand governance toolkit"
    ],
    process: [
      {
        title: "Positioning diagnosis",
        description: "Audience perception, category mapping, and value proposition audit."
      },
      {
        title: "Narrative design",
        description: "Messaging hierarchy and proof narrative development."
      },
      {
        title: "Rollout plan",
        description: "Practical activation across website, social, and sales assets."
      }
    ],
    timelines: [
      {
        phase: "Week 1",
        duration: "Research",
        details: "Stakeholder interviews and market signal analysis."
      },
      {
        phase: "Week 2-3",
        duration: "Strategy",
        details: "Messaging and identity direction finalization."
      },
      {
        phase: "Week 4+",
        duration: "Activation",
        details: "Cross-channel rollout and internal enablement."
      }
    ],
    longFormSections: [
      {
        heading: "Brand clarity that supports growth execution",
        paragraphs: [
          "Branding is most valuable when it removes ambiguity for both buyers and internal teams. We build positioning and messaging systems that improve decision quality across marketing and sales."
        ]
      }
    ],
    faqs: commonFaqs,
    relatedCaseStudies: ["royal-bengal-basket"],
    relatedBlogSlugs: ["brand-identity-checklist-for-growing-sme-businesses"]
  }
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
