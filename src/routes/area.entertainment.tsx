import { createFileRoute, Link } from "@tanstack/react-router";
import { Music } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/area/entertainment")({
  head: () => ({
    meta: [
      { title: "Nearby Entertainment — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Entertainment and nightlife near Kokkini Hani, Crete. Coming soon." },
    ],
  }),
  component: EntertainmentPage,
});

function EntertainmentPage() {
  const { t } = useI18n();
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex p-5 rounded-full bg-card border border-sand mb-8">
          <Music size={32} className="text-terracotta" strokeWidth={1.3} />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Entertainment</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-6">{t("ent.title")}</h1>
        <p className="text-foreground/75 leading-relaxed max-w-lg mx-auto">{t("ent.body")}</p>
        <Link
          to="/contact"
          className="inline-block mt-10 px-7 py-3.5 rounded-full bg-azure text-white font-medium hover:opacity-90 transition"
        >
          {t("ent.cta")}
        </Link>
      </div>
    </section>
  );
}
