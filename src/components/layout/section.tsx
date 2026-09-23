import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10", className)}
      {...props}
    />
  );
}

type SectionProps = ComponentProps<"section"> & {
  eyebrow: string;
  title: string;
  lede?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
  ...props
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
      {...props}
    >
      <Container>
        <div className="max-w-2xl">
          <p className="type-label text-muted-foreground">
            <span aria-hidden="true" className="mr-2 inline-block size-1.5 rounded-full bg-signal align-middle" />
            {eyebrow}
          </p>
          <h2 id={headingId} className="type-section mt-4 text-foreground">
            {title}
          </h2>
          {lede ? <p className="type-body mt-4">{lede}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
