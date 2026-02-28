export function LogoCloud({ logos }: { logos: string[] }) {
  return (
    <section className="container py-8" aria-label="Client logos">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by growing brands
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex h-14 items-center justify-center rounded-xl border border-border bg-card/70 text-sm font-semibold text-foreground/80"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
