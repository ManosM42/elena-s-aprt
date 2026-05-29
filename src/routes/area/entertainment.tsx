import { createFileRoute } from "@tanstack/react-router";
import { PlaceList } from "@/components/PlaceList";
import { placesByCategory } from "@/data/places";

export const Route = createFileRoute("/area/entertainment")({
  head: () => ({
    meta: [
      { title: "Nearby Entertainment — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Entertainment and nightlife near Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: () => <PlaceList places={placesByCategory("entertainment")} accent="terracotta" />,
});