// app/case/page.tsx
import Link from "next/link";
import Image from "next/image";

import { makeMetadata } from "@/lib/seo";
import { cases } from "@/content/cases";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const metadata = makeMetadata({
  title: "Case – tekniska översikter & projekt",
  description:
    "Projekt och exempel på hur Media3d bygger struktur, design och teknik i praktiken.",
  path: "/case",
});

export default function CasePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Case</h1>
        <p className="mt-2 max-w-2xl text-fg/70">
          Projekt och experiment som visar hur vi jobbar med struktur, design
          och SEO.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <Card key={c.slug} className="h-full overflow-hidden flex flex-col">
            {c.coverImage ? (
              <div className="border-b border-fg/10">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={c.coverImage}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={c.slug === "fl-studio-guide"}
                  />
                </div>
              </div>
            ) : null}

            <CardHeader className="space-y-2">
              <CardTitle>{c.title}</CardTitle>
              <CardDescription className="text-fg/70 line-clamp-2">
                {c.subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-sm text-fg/75 line-clamp-3">{c.excerpt}</p>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {c.externalUrl ? (
                  <a
                    href={c.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                  >
                    Besök sajten →
                  </a>
                ) : null}

                <Link
                  href={`/case/${c.slug}`}
                  className="inline-flex items-center rounded-xl border border-fg/15 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/5"
                >
                  Teknisk översikt →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
