// content/cases/_template.ts
import type { CaseItem } from "./types";

/**
 * 👉 KOPIERA DENNA FIL
 * 1. Duplicera filen
 * 2. Byt namn till ditt nya case (slug.ts)
 * 3. Fyll i fälten
 */

export const exampleCase: CaseItem = {
  slug: "project-slug",
  title: "Projektets namn",
  subtitle: "Kort underrubrik",
  excerpt: "Kort sammanfattning som visas i case-listor och SEO.",
  externalUrl: "https://example.com",

  // Bilder (lägg i /public/case/project-slug/)
  // coverImage: "/case/project-slug/cover.png",
  // ogImage: "/case/project-slug/og.png",

  overviewIntro: "Kort intro om projektets syfte och mål.",

  stack: ["Next.js", "Tailwind CSS", "Vercel"],

  principles: ["Tydlig struktur", "Snabb laddning", "SEO-först"],

  structureText: "Hur projektet är uppbyggt och varför.",

  links: [{ label: "Besök sajten →", href: "https://example.com" }],

  about: ["Webb", "SEO", "Case"],
};
