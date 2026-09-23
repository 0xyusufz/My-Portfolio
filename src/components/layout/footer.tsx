import { footerContent, navLinks, site } from "@/lib/site";
import { Container } from "@/components/layout/section";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.06]">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between md:py-12">
        <div className="max-w-xs">
          <a
            href="#top"
            aria-label={`${site.name} — back to top`}
            className="rounded-sm font-mono text-[15px] font-semibold tracking-tight text-foreground"
          >
            {site.name}
            <span aria-hidden="true" className="text-signal">
              .
            </span>
          </a>
          <p className="type-meta mt-3">{footerContent.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="type-label text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/[0.06]">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-meta">{footerContent.copyright}</p>
          <p className="type-meta">Designed & built from scratch.</p>
        </Container>
      </div>
    </footer>
  );
}
