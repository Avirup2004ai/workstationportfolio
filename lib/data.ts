import { FAQItem } from "@/lib/types";

export const teamMembers = [
  {
    name: "Arka Sen",
    role: "Founder & Growth Strategist",
    bio: "Arka leads growth strategy and performance planning for SME and D2C accounts. He focuses on building marketing systems that scale without bloated spend.",
    skills: ["Growth Strategy", "Paid Media", "Attribution"],
    certifications: ["Google Ads Search", "Meta Media Buying Professional"],
    image: "/images/testimonial1.png"
  },
  {
    name: "Madhurima Roy",
    role: "Head of Creative & Branding",
    bio: "Madhurima translates business positioning into high-performing creative systems across brand identity, campaigns, and content production pipelines.",
    skills: ["Brand Systems", "Art Direction", "Creative Ops"],
    certifications: ["Adobe Certified Expert", "Figma Advanced UI"],
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Sagnik Dutta",
    role: "Lead Web Engineer",
    bio: "Sagnik architects performant websites and analytics-ready frontends that improve conversion quality and technical SEO foundations.",
    skills: ["Next.js", "Technical SEO", "CRO Engineering"],
    certifications: ["Vercel Performance", "GA4 Implementation"],
    image: "/images/testimonial3.jpg"
  }
];

export const testimonials = [
  {
    quote:
      "Workstation helped us establish a strong digital foothold. Their team improved our online ordering presence and made the process seamless for our customers.",
    name: "Founder",
    company: "Royal Bengal Basket",
    rating: 5
  },
  {
    quote:
      "Working with Workstation completely transformed our social media branding. Their creative team is fast, responsive, and truly understands food & beverage marketing.",
    name: "Marketing Lead",
    company: "Jolkhabar",
    rating: 5
  },
  {
    quote:
      "The new e-commerce website was exactly what we needed. Fast load times and a beautiful design have significantly improved our conversion rates.",
    name: "Director",
    company: "Fashinoworld",
    rating: 5
  }
];

export const companyTimeline = [
  { year: "2023", event: "Workstation founded with a focus on web development and digital marketing." },
  { year: "2024", event: "Expanded services to include deep performance marketing and brand growth consultation." },
  { year: "2025", event: "Launched advanced E-commerce scaling systems for Indian FMCG and retail brands." },
  { year: "2026", event: "Scaling operations and expanding the multi-channel creative team to support D2C growth." }
];

export const pricingPackages = [
  {
    name: "Starter Momentum",
    price: "₹45,000/mo",
    bestFor: "Early-stage local businesses",
    includes: [
      "Social media management (2 channels)",
      "Monthly design bundle",
      "Landing page optimization",
      "Basic SEO hygiene"
    ]
  },
  {
    name: "Growth Engine",
    price: "₹95,000/mo",
    bestFor: "SMEs scaling acquisition",
    includes: [
      "Full-funnel paid + organic strategy",
      "Web CRO sprint every month",
      "Creative testing roadmap",
      "Bi-weekly analytics review"
    ]
  },
  {
    name: "Scale Partner",
    price: "Custom",
    bestFor: "Multi-product brands and regional expansion",
    includes: [
      "Dedicated growth pod",
      "Advanced attribution setup",
      "Channel expansion playbooks",
      "Leadership reporting cadence"
    ]
  }
];

export const commonFaqs: FAQItem[] = [
  {
    question: "Do you work only with Kolkata-based businesses?",
    answer:
      "No. While we are based in Kolkata, we work with clients across India and support distributed collaboration."
  },
  {
    question: "Can small businesses start with one service first?",
    answer:
      "Yes. Many engagements begin with one high-impact area such as website revamp or paid lead generation."
  },
  {
    question: "How do you report ROI?",
    answer:
      "We align tracking with business outcomes like qualified leads, conversion rate, and channel-level customer acquisition cost."
  },
  {
    question: "Do you provide bilingual content support?",
    answer:
      "Yes. We can support English, Bengali, and Hindi creative variations depending on your audience profile."
  },
  {
    question: "What minimum contract duration do you recommend?",
    answer:
      "For meaningful learning and optimization, we recommend at least a 3-month engagement cycle."
  },
  {
    question: "Can you collaborate with our in-house team?",
    answer:
      "Yes. We often work in hybrid mode with internal teams and existing vendors."
  }
];

export const leadMagnet = {
  title: "Social Media Content Calendar Template",
  description:
    "A practical planning template for monthly campaigns, hooks, offers, and KPI tracking.",
  ctaLabel: "Get the Free Template",
  assetUrl: "https://example.com/workstation-social-calendar-template"
};
