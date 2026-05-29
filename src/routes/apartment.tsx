import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Users, Building2, Waves, Car } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import hero2 from "@/assets/hero-2.avif";
import hero3 from "@/assets/hero-3.avif";
import hero5 from "@/assets/hero-5.avif";
import hero6 from "@/assets/hero-6.avif";
import bathroom from "@/assets/room-bathroom.avif";
import hero1 from "@/assets/hero-1.avif";

export const Route = createFileRoute("/apartment")({
  head: () => ({
    meta: [
      { title: "The Apartment — Elena's Apartment, Kokkini Hani Crete" },
      { name: "description", content: "Inside Elena's Apartment: living room with fireplace, sea-view balcony, fully equipped kitchen, double bedroom and bathtub." },
      { property: "og:title", content: "The Apartment — Elena's Apartment" },
      { property: "og:description", content: "Inside our boutique sea-view apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: ApartmentPage,
});

function ApartmentPage() {
  const { t } = useI18n();

  const sections = [
    { img: hero2, titleKey: "apt.living", bodyKey: "apt.livingTxt" },
    { img: hero3, titleKey: "apt.bedroom", bodyKey: "apt.bedroomTxt" },
    { img: hero5, titleKey: "apt.kitchen", bodyKey: "apt.kitchenTxt" },
    { img: bathroom, titleKey: "apt.bath", bodyKey: "apt.bathTxt" },
    { img: hero6, titleKey: "apt.balcony", bodyKey: "apt.balconyTxt" },
  ] as const;

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] -mt-20 overflow-hidden">
        <img src={hero1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/85 mb-3">The Apartment</p>
            <h1 className="font-serif text-5xl md:text-7xl max-w-3xl">{t("apt.welcome")}</h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85">{t("apt.intro")}</p>
        </div>
      </section>

      <section className="bg-card">
        {sections.map((s, idx) => (
          <RoomSection
            key={s.titleKey}
            reverse={idx % 2 === 1}
            img={s.img}
            title={t(s.titleKey as Parameters<typeof t>[0])}
            body={t(s.bodyKey as Parameters<typeof t>[0])}
          />
        ))}
      </section>

      <section className="py-16 bg-cream border-t border-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          {[
            { icon: BedDouble, key: "key.bedroom" },
            { icon: BedDouble, key: "key.bed" },
            { icon: Users, key: "key.guests" },
            { icon: Building2, key: "key.floor" },
            { icon: Waves, key: "key.beach" },
            { icon: Car, key: "key.parking" },
          ].map(({ icon: Icon, key }) => (
            <div key={key} className="flex flex-col items-center gap-2.5">
              <Icon size={26} className="text-azure" strokeWidth={1.4} />
              <p className="text-sm font-medium">{t(key as Parameters<typeof t>[0])}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function RoomSection({
  reverse, img, title, body,
}: { reverse?: boolean; img: string; title: string; body: string }) {
  return (
    <div className={`grid md:grid-cols-2 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div className="aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center px-6 md:px-16 py-14 md:py-20">
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Inside</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">{title}</h2>
          <p className="text-foreground/75 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}
