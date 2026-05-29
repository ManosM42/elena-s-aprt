import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Waves, Landmark, Utensils, Music, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import areaHero from "@/assets/area-hero.avif";

export const Route = createFileRoute("/area")({
  head: () => ({
    meta: [
      { title: "The Area — Kokkini Hani, Crete | Elena's Apartment" },
      { name: "description", content: "Discover Kokkini Hani and Crete — beaches, attractions, restaurants and more, all within easy reach of Elena's Apartment." },
      { property: "og:title", content: "Discover Kokkini Hani & Crete" },
      { property: "og:description", content: "Beaches, attractions, restaurants near Elena's Apartment." },
    ],
  }),
  component: AreaLayout,
});

function AreaLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/area";
  return isIndex ? <AreaIndex /> : <Outlet />;
}

function AreaIndex() {
  const { t } = useI18n();
  const cards = [
    { to: "/area/beaches", icon: Waves, label: t("nav.beaches") },
    { to: "/area/attractions", icon: Landmark, label: t("nav.attractions") },
    { to: "/area/restaurants", icon: Utensils, label: t("nav.restaurants") },
    { to: "/area/entertainment", icon: Music, label: t("nav.entertainment") },
  ] as const;

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] -mt-20 overflow-hidden">
        <img src={areaHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/55" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-white/85 mb-4">The Area</p>
            <h1 className="font-serif text-5xl md:text-7xl">{t("area.title")}</h1>
            <p className="mt-4 text-white/85">{t("area.intro")}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="group bg-card border border-sand rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Icon size={36} className="text-azure mb-6" strokeWidth={1.3} />
              <h2 className="font-serif text-3xl">{label}</h2>
              <span className="inline-block mt-6 text-sm text-terracotta group-hover:translate-x-1 transition-transform">
                {t("cta.exploreMore")}
              </span>
            </Link>
          ))}
          <div className="bg-card/50 border border-dashed border-sand rounded-2xl p-10 flex flex-col items-start opacity-70">
            <Sparkles size={36} className="text-muted-foreground mb-6" strokeWidth={1.3} />
            <h2 className="font-serif text-3xl text-muted-foreground">{t("nav.coming")}</h2>
            <span className="inline-block mt-6 text-sm text-muted-foreground">···</span>
          </div>
        </div>
      </section>
    </>
  );
}
