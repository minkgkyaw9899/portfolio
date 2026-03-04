"use client";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({
  label,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div data-gsap="heading" className="max-w-2xl opacity-0">
      <div className="mb-4 flex items-center gap-4">
        <span className="h-px w-10 bg-accent" />
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {label}
        </span>
      </div>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
