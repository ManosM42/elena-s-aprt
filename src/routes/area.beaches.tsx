import { createFileRoute } from "@tanstack/react-router";
import { Waves } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { PlaceList, type PlaceItem } from "@/components/PlaceList";

const BEACHES: PlaceItem[] = [
  { name: "Παραλία Θάλασσα Κονάκι", distance: "600m", desc: "A calm, family-friendly beach steps from the apartment." },
  { name: "Παραλία Τομπρούκ", distance: "800m", desc: "A quiet local beach with clear waters." },
  { name: "Παραλία Κοκκίνη Χάνι", distance: "800m", desc: "The main beach of the village, popular with locals." },
  { name: "Παραλία Βαθειανός Κάμπος", distance: "850m", desc: "A serene stretch of sandy shore." },
  { name: "Παραλία Θέμις", distance: "1.4km", desc: "A well-known beach with organized facilities." },
];

export const Route = createFileRoute("/area/beaches")({
  head: () => ({
    meta: [
      { title: "Nearby Beaches — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Five beautiful beaches within walking distance of Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: () => {
    const { t } = useI18n();
    return <PlaceList title={t("beaches.title")} icon={Waves} items={BEACHES} accent="azure" />;
  },
});
