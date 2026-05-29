import type { LucideIcon } from "lucide-react";

export interface PlaceItem {
  name: string;
  distance: string;
  desc: string;
}

interface Props {
  title: string;
  icon: LucideIcon;
  items: PlaceItem[];
  accent?: "azure" | "terracotta";
}

export function PlaceList({ title, icon: Icon, items, accent = "azure" }: Props) {
  const accentClass = accent === "azure" ? "text-azure bg-azure/10" : "text-terracotta bg-terracotta/10";
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className={`inline-flex p-4 rounded-full mb-6 ${accentClass}`}>
            <Icon size={28} strokeWidth={1.3} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
        </div>

        <div className="grid gap-4">
          {items.map((it) => (
            <article
              key={it.name}
              className="bg-card border border-sand rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:shadow-md transition"
            >
              <div className="flex-1">
                <div className="flex items-start gap-3 flex-wrap">
                  <h3 className="font-serif text-2xl">{it.name}</h3>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${accentClass}`}>
                    {it.distance}
                  </span>
                </div>
                <p className="text-foreground/70 mt-2 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
