import { createFileRoute } from "@tanstack/react-router";
import { PlaceList } from "@/components/PlaceList";
import { placesByCategory } from "@/data/places";

export const Route = createFileRoute("/area/restaurants")({
  head: () => ({
    meta: [
      { title: "Nearby Restaurants — Elena's Apartment, Kokkini Hani" },
      { name: "description", content: "Restaurants and bars near Elena's Apartment in Kokkini Hani, Crete." },
    ],
  }),
  component: () => <PlaceList places={placesByCategory("restaurants")} accent="azure" />,
});