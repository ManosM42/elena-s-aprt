import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Star, Calendar, Lightbulb, Tag } from "lucide-react";
import { placeById, categoryMeta } from "@/data/places";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/place/$id")({
  head: ({ params }) => {
    const place = placeById(params.id);
    return {
      meta: place
        ? [
            { title: `${place.name.en} — Elena's Apartment` },
            { name: "description", content: place.shortDescription.en },
          ]
        : [{ title: "Place not found" }],
    };
  },
  loader: ({ params }) => {
    const place = placeById(params.id);
    if (!place) throw notFound();
    return place;
  },
  component: PlaceDetailPage,
});

function PlaceDetailPage() {
  const place = Route.useLoaderData();
  const { lang } = useI18n();
  const meta = categoryMeta[place.category];

  const categoryPath = `/area/${place.category}`;
  const categoryLabel = meta[lang];

  const accentIsAzure =
    place.category === "beaches" ||
    place.category === "restaurants" ||
    place.category === "attractions";
  const accentVar = accentIsAzure ? "var(--azure)" : "var(--terracotta-raw)";

  const mapSrc =
    `https://www.google.com/maps?q=${place.lat},${place.lng}&z=15&output=embed`;

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={place.image}
          alt={place.name[lang]}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ animation: "slow-zoom 12s ease-out both" }}
        />
        {/* layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            to={categoryPath}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-sand/60 text-sm font-medium text-foreground hover:bg-white transition-all duration-200 shadow-sm"
          >
            <ArrowLeft size={14} />
            {categoryLabel}
          </Link>
        </div>

        {/* Category badge */}
        <div className="absolute top-6 right-6 z-10">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md"
            style={{ backgroundColor: `${accentVar}cc` }}
          >
            {meta.emoji} {meta[lang]}
          </span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10 pb-28">

        {/* Title card */}
        <div className="bg-card rounded-3xl border border-sand shadow-md p-8 md:p-12 mb-6">

          {/* Name + distance row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
            <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
              {place.name[lang]}
            </h1>
            <div
              className="flex-shrink-0 self-start flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium"
              style={{ borderColor: `${accentVar}50`, color: accentVar }}
            >
              <MapPin size={13} />
              {place.distance}
            </div>
          </div>

          {/* Short description */}
          <p className="text-sm font-medium text-foreground">{place.season[lang]}</p>
          <div className="h-px bg-sand mb-8" />

          {/* Long description */}
          <p className="text-base md:text-[1.05rem] text-foreground/80 leading-relaxed mb-10">
            {place.description[lang]}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Type */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-sand/30 border border-sand/60">
              <div
                className="mt-0.5 p-1.5 rounded-lg"
                style={{ backgroundColor: `${accentVar}18` }}
              >
                <Tag size={14} style={{ color: accentVar }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  {lang === "en" ? "Type" : "Τύπος"}
                </p>
                <p className="text-sm font-medium text-foreground">{place.type[lang]}</p>
              </div>
            </div>

            {/* Best season */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-sand/30 border border-sand/60">
              <div
                className="mt-0.5 p-1.5 rounded-lg"
                style={{ backgroundColor: `${accentVar}18` }}
              >
                <Calendar size={14} style={{ color: accentVar }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  {lang === "en" ? "Best time" : "Καλύτερη εποχή"}
                </p>
                <p className="text-sm font-medium text-foreground">{place.season[lang]}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-sand/30 border border-sand/60">
              <div
                className="mt-0.5 p-1.5 rounded-lg"
                style={{ backgroundColor: `${accentVar}18` }}
              >
                <Star size={14} style={{ color: accentVar }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  {lang === "en" ? "Rating" : "Βαθμολογία"}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {place.rating} <span className="text-muted-foreground">/ 5</span>
                </p>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div
            className="mt-6 flex items-start gap-3 p-5 rounded-2xl border"
            style={{
              backgroundColor: `${accentVar}0d`,
              borderColor: `${accentVar}30`,
            }}
          >
            <Lightbulb size={16} style={{ color: accentVar }} className="mt-0.5 flex-shrink-0" />
            <div>
              <p
                className="text-[10px] uppercase tracking-widest font-semibold mb-1"
                style={{ color: accentVar }}
              >
                {lang === "en" ? "Local tip" : "Τοπική συμβουλή"}
              </p>
              <p className="text-sm text-foreground/75 leading-relaxed">{place.tip[lang]}</p>
            </div>
          </div>
        </div>

        {/* ── Map ── */}
        <div className="bg-card rounded-3xl border border-sand shadow-md overflow-hidden">
          <div className="px-8 pt-8 pb-4">
            <h2 className="font-serif text-xl text-foreground">
              {lang === "en" ? "Find it on the map" : "Βρες το στον χάρτη"}
            </h2>
          </div>
          <div style={{ height: 400 }}>
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${place.name.en} on Google Maps`}
            />
          </div>
          <div className="px-8 py-4 border-t border-sand flex items-center gap-2">
            <MapPin size={13} className="text-muted-foreground" />
            <a
              href={`https://www.google.com/maps?q=${place.lat},${place.lng}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {lang === "en" ? "Open in Google Maps →" : "Άνοιγμα στο Google Maps →"}
            </a>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            to={categoryPath}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition"
            style={{ color: accentVar }}
          >
            <ArrowLeft size={14} />
            {lang === "en" ? `Back to ${meta.el}` : `Πίσω στα ${meta.gr}`}
          </Link>
        </div>
      </div>
    </div>
  );
}