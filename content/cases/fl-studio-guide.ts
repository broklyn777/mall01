import type { CaseItem } from "./types";

export const flStudioGuide: CaseItem = {
  slug: "fl-studio-guide",
  title: "FL Studio Guide",
  subtitle: "Mini-guide + hub med workflow, övningar och resurser",
  excerpt:
    "Ett content-drivet projekt med tydlig struktur och undersidor. Fokus på enkel navigering, snabb laddning och en grund som är lätt att bygga ut.",
  externalUrl: "https://start-pkt.vercel.app/",

  coverImage: "/case/fl-studio-guide/cover.png",
  ogImage: "/case/fl-studio-guide/og.png",

  overviewIntro:
    "Ett content-drivet projekt byggt för enkel navigering, snabb laddning och en struktur som är lätt att bygga ut.",
  stack: [
    "Next.js (App Router)",
    "Tailwind CSS + tokens (bg/fg/primary/accent)",
    "Komponentstruktur: UI + Sections",
    "Vercel hosting",
  ],
  principles: [
    "Låg kognitiv last: tydliga rubriker och korta block",
    "Konsekvent typografi och spacing",
    "Primary för actions, accent för highlights",
    "SEO: separata sidor + internlänkar",
  ],
  structureText:
    "Projektet är uppdelat i en guide-start, en hub för workflow/övningar och en resursdel, plus en kontaktsida. Detta gör innehållet lätt att scanna och lätt att expandera med fler guider.",
  links: [
    { label: "Besök sajten →", href: "https://start-pkt.vercel.app/" },
    { label: "Se hubben →", href: "https://start-pkt.vercel.app/fl-studio" },
  ],
  about: ["FL Studio", "Music Production", "Guide"],
};
