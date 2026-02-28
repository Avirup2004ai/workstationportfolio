export const siteConfig = {
  name: "WORKSTATION",
  legalName: "Workstation",
  description:
    "Workstation is a digital marketing and creative agency specializing in scalable websites, social media management, brand growth engines, and consulting for FMCG, Aqua, Beauty, and E-commerce brands.",
  url: "https://www.workstation.agency",
  email: "workstationexperts@gmail.com",
  phone: "+91 9062547010",
  whatsapp: "https://wa.me/919062547010",
  gmap: "https://maps.app.goo.gl/FRM5WoWuvQDAnSHZA",
  location: "Tisha, Kharsarai, Begampur, Hooghly, Tisa, West Bengal 712304",
  hours: "Mon-Sat, 10:00 AM - 7:00 PM IST",
  social: {
    linkedin: "https://www.linkedin.com/company/workstationexperts/",
    instagram: "https://www.instagram.com/workstationexperts/",
    facebook: "https://www.facebook.com/profile.php?id=100094868930309",
    twitter: "https://x.com/WORKSTATIO29803?t=D-0uIpaQhCfH07aa7YjASQ&s=09"
  }
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/graphic-design", label: "Graphic Design" },
      { href: "/services/social-media-marketing", label: "Social Media Marketing" },
      { href: "/services/seo", label: "SEO" },
      { href: "/services/performance-marketing", label: "Performance Marketing" },
      { href: "/services/branding", label: "Branding" }
    ]
  },
  { href: "/work", label: "Work" },
  {
    href: "/resources",
    label: "Resources",
    children: [
      { href: "/resources/blog", label: "Blog" },
      { href: "/resources/guides", label: "Guides" },
      { href: "/resources/templates", label: "Templates" },
      { href: "/resources/tools", label: "Free Tools" }
    ]
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export const ctaLinks = {
  proposal: "/contact?intent=proposal",
  bookCall: "/contact?intent=book-call"
};

export const clientLogos = [
  "Royal Bengal Basket",
  "Jolkhabar",
  "Fashinoworld",
  "Tintaluz"
];

export const trustStats = [
  { label: "Campaigns Launched", value: "220+" },
  { label: "Average Lead Cost Reduction", value: "34%" },
  { label: "Avg. Organic Traffic Growth", value: "3.1x" },
  { label: "Client Retention (12+ months)", value: "82%" }
];
