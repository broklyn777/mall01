import type { CaseItem } from "./types";

export const media3d: CaseItem = {
  slug: "media3d",
  title: "Media3d",
  subtitle: "Webbyrå-site / mall med SEO + case-struktur",
  excerpt:
    "En snabb Next.js-sajt med tydlig struktur för case, SEO och enkel utbyggnad.",
  externalUrl: "https://media3d.vercel.app/",

  // (valfritt men nice)
  coverImage: "/case/media3d/cover.png",
  ogImage: "/case/media3d/og.png",

  overviewIntro:
    "Mall/portfolio byggd för snabb laddning, tydlig SEO och enkel hantering av fler case.",
  stack: ["Next.js (App Router)", "Tailwind CSS", "Vercel"],
  principles: ["Tydlig struktur", "Snabbhet", "SEO-först"],
  structureText:
    "Case-sidorna är data-drivna via content/cases och genererar routes via slug.",
  links: [{ label: "Besök sajten →", href: "https://media3d.vercel.app/" }],
  about: ["Portfolio", "Next.js", "SEO"],
};
