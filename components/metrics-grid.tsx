type Metric = {
  label: string;
  value: string;
};

export function MetricsGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-border bg-card/70 p-5">
          <p className="font-display text-3xl font-bold text-primary">{metric.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
