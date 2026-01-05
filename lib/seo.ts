// lib/seo.ts
import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title?: string; // "Kontakt"
  description?: string; // page description
  path?: string; // "/kontakt"
  image?: string; // "/og.jpg"
  noIndex?: boolean;
};

export function makeMetadata(input: SeoInput = {}): Metadata {
  const titleText = input.title ?? site.title;
  const description = input.description ?? site.description;

  // VIKTIGT:
  // - Layouten äger template: "%s | Media3d"
  // - makeMetadata får INTE bygga "Kontakt | Media3d"
  // - Om ingen input.title: lämna title undefined så layoutens default gäller
  const title: Metadata["title"] = input.title ? input.title : undefined;

  const canonical = input.path
    ? new URL(input.path, site.url)
    : new URL(site.url);

  const imagePath = input.image ?? site.ogImage;
  const imageUrl = new URL(imagePath, site.url);

  return {
    metadataBase: new URL(site.url),

    title,
    description,
    alternates: { canonical },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title: titleText,
      description,
      locale: site.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [imageUrl.toString()],
      creator: site.twitterHandle || undefined,
      title: titleText,
      description,
    },

    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
