import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col overflow-x-clip bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div id="top" className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
