import { createFileRoute } from "@tanstack/react-router";
import { PlaceList } from "@/components/PlaceList";
import { placesByCategory } from "@/data/places";

export const Route = createFileRoute("/area/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Cultural and historical attractions near Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: () => <PlaceList places={placesByCategory("attractions")} accent="terracotta" />,
});