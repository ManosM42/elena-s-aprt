import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Wifi, Car, Sun, Utensils, Snowflake, Tv, Flame, Beef, WashingMachine,
  KeyRound, BedDouble, Bath, Wind, Users, Cigarette, Sprout, Waves, Landmark,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { MapEmbed } from "@/components/MapEmbed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "@/assets/hero-1.avif";
import hero2 from "@/assets/hero-2.avif";
import hero3 from "@/assets/hero-3.avif";
import hero4 from "@/assets/hero-4.avif";
import hero5 from "@/assets/hero-5.avif";
import hero6 from "@/assets/hero-6.avif";

gsap.registerPlugin(ScrollTrigger);

const BOOKING_URL = "https://www.booking.com/hotel/gr/elenas-apartment-kokkine-khani.el.html";
const AIRBNB_URL = "#";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elena's Apartment — Sea View Rental in Kokkini Hani, Crete" },
      {
        name: "description",
        content:
          "Boutique sea-view apartment in Kokkini Hani, Crete. 500m from the beach, free parking, warm Greek hospitality.",
      },
    ],
  }),
  component: Index,
});

const SLIDES = [hero1, hero2, hero6, hero4, hero5, hero3];

/* ─── Reusable slide-in hook ─────────────────────────────────────────────── */
function useSlideIn(direction: "left" | "right" = "left") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: direction === "left" ? -80 : 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction]);

  return ref;
}

/* ─── Stagger children slide-in ─────────────────────────────────────────── */
function useStaggerSlideIn(direction: "left" | "right" = "left") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        {
          opacity: 0,
          x: direction === "left" ? -60 : 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction]);

  return ref;
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
function Index() {
  const { t } = useI18n();
  return (
    // Full page gradient flow background
    <div className="relative">
      {/* Continuous gradient flow behind all sections */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #f0ebe0 0%, #e8f4f8 25%, #f7f3ec 50%, #fdf6ee 75%, #e8f4f8 100%)",
        }}
      />
      <HeroSlider />
      <BookingSection />
      <GradientDivider from="#fdf8f2" to="#e8f4f8" />
      <Facilities />
      <GradientDivider from="#e8f4f8" to="#fdf8f2" />
      <NearbyPreview />
      <GradientDivider from="#fdf8f2" to="#e8f4f8" />
      <section className="py-20" style={{ background: "transparent" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center">
            {t("map.find")}
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
            35.3597° N, 25.2785° E — Kokkini Hani, Heraklion, Crete.
          </p>
        </div>
        <MapEmbed height={420} />
      </section>
    </div>
  );
}

/* ─── Gradient Divider ───────────────────────────────────────────────────── */
function GradientDivider({ from, to }: { from: string; to: string }) {
  return (
    <div
      style={{
        height: 120,
        background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
        marginTop: -1,
        marginBottom: -1,
      }}
    />
  );
}

/* ─── Hero Slider ────────────────────────────────────────────────────────── */
function HeroSlider() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP Curtain wipe on mount
  useEffect(() => {
    const curtain = curtainRef.current;
    const content = contentRef.current;
    if (!curtain || !content) return;

    // Start: curtain covers everything, content invisible
    gsap.set(curtain, { scaleY: 1, transformOrigin: "top center" });
    gsap.set(content, { opacity: 0, y: 30 });

    const tl = gsap.timeline({ delay: 0.2 });

    // Curtain wipes up (reveals the hero)
    tl.to(curtain, {
      scaleY: 0,
      duration: 1.2,
      ease: "expo.inOut",
      transformOrigin: "top center",
    });

    // Content fades+rises in
    tl.to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % SLIDES.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  const go = (n: number) => setCurrent((n + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative -mt-20 h-[100vh] min-h-[600px] w-full overflow-hidden">
      {/* Curtain overlay */}
      <div
        ref={curtainRef}
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ background: "#2c2a26" }}
      />

      {/* Slides */}
      {SLIDES.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === idx ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className={`w-full h-full object-cover ${current === idx ? "animate-slow-zoom" : ""}`}
            width={1920}
            height={1088}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Gradient overlay — blends hero into next section smoothly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.18) 55%, rgba(240,235,224,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/90 mb-6">
          Crete · Greece
        </p>
        <h1 className="font-serif text-4xl md:text-7xl max-w-4xl leading-tight">
          {t("hero.title")}
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/90 max-w-xl">
          {t("hero.subtitle")}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-full bg-azure text-white font-medium hover:opacity-90 transition shadow-lg"
          >
            {t("cta.booking")}
          </a>
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-full bg-terracotta text-white font-medium hover:opacity-90 transition shadow-lg"
          >
            {t("cta.airbnb")}
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur transition"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              current === idx ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Booking Section ────────────────────────────────────────────────────── */
function BookingSection() {
  const { t } = useI18n();
  const ref = useSlideIn("left");

  return (
    <section className="py-20 md:py-28" style={{ background: "transparent" }}>
      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          {t("cta.ready")}
        </p>
       <h2>
  Book your stay directly
</h2>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

  
   <a href="https://www.booking.com/hotel/gr/elenas-apartment-kokkine-khani.el.html?chal_t=1779983456451&force_referer=https%3A%2F%2Fwww.google.com%2F#tab-main"
    target="_blank"
    rel="noreferrer"
    className="px-8 py-4 rounded-full bg-azure text-white font-medium text-base hover:opacity-90 transition shadow-md"
  >
    {t("cta.booking")}
  </a>

  
   <a href="https://www.airbnb.com/rooms/817077896387150229"
    target="_blank"
    rel="noreferrer"
    className="px-8 py-4 rounded-full bg-terracotta text-white font-medium text-base hover:opacity-90 transition shadow-md"
  >
    {t("cta.airbnb")}
  </a>

</div>
      </div>
    </section>
  );
}

/* ─── Facilities ─────────────────────────────────────────────────────────── */
const FACILITIES = [
  { icon: Wifi, key: "fac.wifi" },
  { icon: Car, key: "fac.parking" },
  { icon: Sun, key: "fac.balcony" },
  { icon: Utensils, key: "fac.kitchen" },
  { icon: Snowflake, key: "fac.ac" },
  { icon: Tv, key: "fac.tv" },
  { icon: Flame, key: "fac.fire" },
  { icon: Beef, key: "fac.bbq" },
  { icon: WashingMachine, key: "fac.wash" },
  { icon: KeyRound, key: "fac.checkin" },
  { icon: BedDouble, key: "fac.linens" },
  { icon: Sprout, key: "fac.garden" },
  { icon: BedDouble, key: "fac.bedroom" },
  { icon: Bath, key: "fac.bath" },
  { icon: Wind, key: "fac.hair" },
  { icon: Users, key: "fac.family" },
  { icon: Cigarette, key: "fac.nosmoke" },
] as const;

function Facilities() {
  const { t } = useI18n();
  const titleRef = useSlideIn("left");
  const gridRef = useStaggerSlideIn("right");

  return (
    <section className="py-24" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-azure mb-3">
            Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            {t("facilities.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("facilities.subtitle")}</p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {FACILITIES.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="bg-card border border-sand rounded-xl p-5 flex flex-col items-start gap-3 hover:border-azure/40 hover:shadow-md transition-all"
            >
              <div className="p-2.5 rounded-lg bg-cream">
                <Icon size={20} className="text-azure" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium leading-tight">
                {t(key as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Nearby Preview ─────────────────────────────────────────────────────── */
function NearbyPreview() {
  const { t } = useI18n();
  const titleRef = useSlideIn("right");
  const cardsRef = useStaggerSlideIn("left");

  const cards = [
    {
      to: "/area/beaches",
      icon: Waves,
      label: t("nav.beaches"),
      teaser: t("preview.beaches.teaser"),
    },
    {
      to: "/area/attractions",
      icon: Landmark,
      label: t("nav.attractions"),
      teaser: t("preview.attractions.teaser"),
    },
    {
      to: "/area/restaurants",
      icon: Utensils,
      label: t("nav.restaurants"),
      teaser: t("preview.restaurants.teaser"),
    },
  ] as const;

  return (
    <section className="py-24" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-3">
            Nearby
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            {t("preview.title")}
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-5"
        >
          {cards.map(({ to, icon: Icon, label, teaser }) => (
            <Link
              key={to}
              to={to}
              className="group bg-card border border-sand rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <Icon size={32} className="text-azure mb-5" strokeWidth={1.4} />
              <h3 className="font-serif text-2xl">{label}</h3>
              <p className="text-sm text-muted-foreground mt-2">{teaser}</p>
              <span className="inline-block mt-6 text-sm text-terracotta group-hover:translate-x-1 transition-transform">
                {t("cta.exploreMore")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}