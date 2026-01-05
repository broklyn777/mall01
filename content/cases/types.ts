export type CaseLink = { label: string; href: string };

export type CaseItem = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  externalUrl: string;

  coverImage?: string;
  ogImage?: string;

  overviewIntro?: string;
  stack?: string[];
  principles?: string[];
  structureText?: string;

  links?: CaseLink[];
  about?: string[];
};
