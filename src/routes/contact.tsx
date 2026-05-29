import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { MapEmbed } from "@/components/MapEmbed";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elena's Apartment, Kokkini Hani Crete" },
      { name: "description", content: "Get in touch with Elena's Apartment in Kokkini Hani, Crete." },
      { property: "og:title", content: "Contact Elena's Apartment" },
      { property: "og:description", content: "Phone, email and location of Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const items = [
    { icon: Phone, label: t("contact.phone"), value: t("contact.phoneValue"), href: `tel:${t("contact.phoneValue").replace(/\s/g, "")}` },
    { icon: Mail, label: t("contact.email"), value: t("contact.emailValue"), href: `mailto:${t("contact.emailValue")}` },
    { icon: MapPin, label: t("contact.address"), value: t("contact.addressValue") },
  ];

  return (
    <>
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl">{t("contact.title")}</h1>
          <p className="mt-4 text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-card border border-sand rounded-2xl p-8 md:p-12 shadow-sm divide-y divide-sand">
            {items.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-5 py-5 first:pt-0 last:pb-0">
                <div className="p-3 rounded-xl bg-cream shrink-0">
                  <Icon size={20} className="text-azure" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="text-lg mt-1 hover:text-azure transition-colors block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg mt-1">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center">{t("map.our")}</h2>
        </div>
        <MapEmbed height={350} />
      </section>
    </>
  );
}
