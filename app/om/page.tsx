// app/om/page.tsx
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Om",
  description: "Lite fakta om oss på Media3d.",
  path: "/om",
});

export default function OmPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Om</h1>
      <p className="mt-2 text-fg/70">Beskriv team, process och värderingar.</p>
    </main>
  );
}
