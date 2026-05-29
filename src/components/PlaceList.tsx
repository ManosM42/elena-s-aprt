import { Link } from "@tanstack/react-router";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { type Place, categoryMeta } from "@/data/places";
import { useI18n } from "@/i18n/I18nProvider";

interface Props {
  places: Place[];
  accent?: "azure" | "terracotta";
}

export function PlaceList({ places, accent = "azure" }: Props) {
  const { lang } = useI18n();

  if (!places || places.length === 0) return null;

  const category = places[0].category;
  const meta = categoryMeta[category];
  const accentVar = accent === "azure" ? "var(--azure)" : "var(--terracotta-raw)";

  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-3" style={{ color: accentVar }}>
            {meta.emoji} {meta[lang]}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{meta[lang]}</h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">{meta.tagline[lang]}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {places.map((place) => (
            <Link
              key={place.id}
              to="/place/$id"
              params={{ id: place.id }}
              className="group block bg-card rounded-2xl border border-sand overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                    <MapPin size={10} />
                    {place.distance}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                    <Star size={10} />
                    {place.rating}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: accentVar }}>
                  {place.type[lang]}
                </p>
                <h3 className="font-serif text-lg text-foreground leading-snug mb-2 group-hover:opacity-80 transition-opacity">
                  {place.name[lang]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {place.shortDescription[lang]}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: accentVar }}>
                  {lang === "en" ? "Explore" : "Περισσότερα"}
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}