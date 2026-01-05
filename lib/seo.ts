// lib/seo.ts
import type { Metadata } from "next";
import { site } from "@/lib/site";

type MakeMetadataInput = {
  title?: Metadata["title"];
  description?: string;

  // NYTT: stöd för path (t.ex. "/case" eller `/case/${slug}`)
  path?: string;

  // valfritt override
  url?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function makeMetadata(input: MakeMetadataInput = {}): Metadata {
  const {
    title = site.title,
    description = site.description,
    path,
    url,
    ogImage = site.ogImage,
    noIndex = false,
  } = input;

  const metadataBase = new URL(site.url);

  // Om url inte skickas in: bygg från path (om path finns), annars site.url
  const resolvedUrl =
    url ?? (path ? new URL(path, site.url).toString() : site.url);

  return {
    metadataBase,
    title,
    description,

    robots: noIndex ? { index: false, follow: false } : undefined,

    openGraph: {
      title: typeof title === "string" ? title : site.title,
      description,
      url: resolvedUrl,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : site.title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
