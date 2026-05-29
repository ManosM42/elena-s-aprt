import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { PlaceList, type PlaceItem } from "@/components/PlaceList";

const ATTRACTIONS: PlaceItem[] = [
  { name: "Cretaquarium (Θαλασσόκοσμος)", distance: "3.7km", desc: "One of the largest aquariums in the Mediterranean, home to 2,500+ sea creatures." },
  { name: "Heraklion Archaeological Museum", distance: "13km", desc: "World-class museum housing treasures from Minoan civilization." },
  { name: "Palace of Knossos", distance: "15km", desc: "The legendary Bronze Age Minoan palace, one of Europe's oldest cities." },
  { name: "Loggia", distance: "13km", desc: "A stunning Venetian loggia in the heart of Heraklion's old town." },
  { name: "Morosini Fountain", distance: "13km", desc: "The iconic 17th-century Venetian fountain at Heraklion's Lion Square." },
  { name: "Historical Museum of Crete", distance: "13km", desc: "Chronicles Cretan history from early Christian times to the present." },
  { name: "Natural History Museum of Crete", distance: "13km", desc: "Interactive exhibits on the Eastern Mediterranean's natural world." },
  { name: "Aquaworld Aquarium", distance: "14km", desc: "A reptile and wildlife rescue centre with crocodiles, snakes, and more." },
  { name: "Nikos Kazantzakis Museum", distance: "14km", desc: "Dedicated to Crete's most celebrated writer, author of Zorba the Greek." },
  { name: "Venetian Walls of Heraklion", distance: "14km", desc: "Impressive 16th-century fortifications encircling the old city." },
];

export const Route = createFileRoute("/area/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Ten cultural and historical attractions near Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: () => {
    const { t } = useI18n();
    return <PlaceList title={t("attractions.title")} icon={Landmark} items={ATTRACTIONS} accent="terracotta" />;
  },
});
