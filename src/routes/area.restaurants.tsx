import { createFileRoute } from "@tanstack/react-router";
import { Utensils } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { PlaceList, type PlaceItem } from "@/components/PlaceList";

const RESTAURANTS: PlaceItem[] = [
  { name: "Taverna Arkadi", distance: "550m", desc: "A beloved local taverna serving traditional Cretan cuisine just a short walk away." },
  { name: "The Whisky Bar", distance: "1.2km", desc: "A cozy bar with a wide selection of whiskies and cocktails, perfect for evening drinks." },
  { name: "Cicada Suites Elegant Beach Living", distance: "4.7km", desc: "A stylish beachside venue offering food, drinks, and stunning sea views." },
];

export const Route = createFileRoute("/area/restaurants")({
  head: () => ({
    meta: [
      { title: "Nearby Restaurants — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Restaurants and bars near Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: RestaurantsPage,
});

function RestaurantsPage() {
  const { t } = useI18n();
  return (
    <>
      <PlaceList title={t("restaurants.title")} icon={Utensils} items={RESTAURANTS} accent="azure" />
      <div className="max-w-3xl mx-auto px-6 pb-24 -mt-10 text-center">
        <p className="text-sm italic text-muted-foreground bg-card border border-sand rounded-xl px-6 py-5">
          {t("restaurants.more")}
        </p>
      </div>
    </>
  );
}
