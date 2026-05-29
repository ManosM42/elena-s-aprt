import { createFileRoute } from "@tanstack/react-router";
import { PlaceList } from "@/components/PlaceList";
import { placesByCategory } from "@/data/places";

export const Route = createFileRoute("/area/beaches")({
  head: () => ({
    meta: [
      { title: "Nearby Beaches — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Beautiful beaches near Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: () => <PlaceList places={placesByCategory("beaches")} accent="azure" />,
});