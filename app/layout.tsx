import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { makeMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = makeMetadata({
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: site.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-bg text-fg antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
