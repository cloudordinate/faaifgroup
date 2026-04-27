interface StackItem {
  name: string;
  icon: string;
  text: string;
  tags: string[];
}

export function TechStack({ items }: { items: StackItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
            {item.icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-navy-900">{item.name}</h3>
          <p className="mb-4 text-sm leading-6 text-slate-600">{item.text}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
