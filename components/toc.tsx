type TOCItem = {
  id: string;
  text: string;
};

export function TOC({ items }: { items: TOCItem[] }) {
  if (!items.length) return null;

  return (
    <aside className="sticky top-24 hidden max-h-[70vh] overflow-auto rounded-2xl border border-border bg-card/60 p-5 xl:block">
      <p className="mb-3 text-sm font-semibold">On this page</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="transition hover:text-primary">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
