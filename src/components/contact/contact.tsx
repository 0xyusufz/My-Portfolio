import { ArrowUpRight } from "lucide-react";
import { contactContent, profile, socials } from "@/lib/site";
import { Container, Section } from "@/components/layout/section";

/**
 * Contact — the final CTA. All destinations resolve from the central
 * `socials` config; nothing is hardcoded here and no contact method
 * is invented (no email, phone, form, or booking links).
 */
export function Contact() {
  const linkedIn = socials.find((social) => social.label === "LinkedIn");
  const secondary = socials.filter(
    (social) => social.label === "GitHub" || social.label === "X",
  );

  return (
    <Section id="contact" eyebrow={contactContent.eyebrow} title={contactContent.heading}>
      <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.015] px-6 py-12 text-center sm:px-10 md:mt-12 md:py-16">
        <Container className="max-w-2xl">
          <p className="type-body mx-auto max-w-xl">{contactContent.supporting}</p>

          {linkedIn ? (
            <div className="mt-8">
              <a
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${contactContent.primaryCtaLabel} — ${profile.handle} on LinkedIn`}
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-signal px-7 text-[15px] font-semibold text-[#111304] transition-[background-color,transform] duration-200 hover:bg-signal/85 active:translate-y-px"
              >
                {contactContent.primaryCtaLabel}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          ) : null}

          {secondary.length > 0 ? (
            <ul aria-label="More profiles" className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {secondary.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.handle} on ${social.label}`}
                    className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </div>
    </Section>
  );
}
