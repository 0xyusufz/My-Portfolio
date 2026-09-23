import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/section";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Container className="flex flex-1 flex-col items-start justify-center py-28 md:py-40">
        <p className="type-label text-muted-foreground">
          <span
            aria-hidden="true"
            className="mr-2.5 inline-block size-1.5 rounded-full bg-signal align-middle"
          />
          404
        </p>
        <h1 className="type-section mt-4 text-foreground">
          This page doesn&apos;t exist.
        </h1>
        <p className="type-body mt-4 max-w-md">
          The link may be outdated, or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back home
        </Link>
      </Container>
    </main>
  );
}
