import { useEffect, useRef } from "react";

interface Props {
  height?: number;
  label?: string;
}

export function MapEmbed({ height = 400, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!ref.current || mapRef.current) return;
      const L = await import("leaflet");
      if (cancelled || !ref.current) return;

      const coords: [number, number] = [35.3597, 25.2785];
      const map = L.map(ref.current, { scrollWheelZoom: false, zoomControl: true }).setView(coords, 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `<div style="background:var(--azure);width:32px;height:32px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 4px 12px rgba(0,0,0,.3);border:3px solid white"></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });
      L.marker(coords, { icon })
        .addTo(map)
        .bindPopup("<b>Elena's Apartment</b><br/>Kokkini Hani, Crete");

      mapRef.current = map;
    })();
    return () => {
      cancelled = true;
      const m = mapRef.current as { remove?: () => void } | null;
      if (m?.remove) m.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section className="w-full">
      {label && (
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">{label}</h2>
        </div>
      )}
      <div ref={ref} style={{ height }} className="w-full bg-muted" />
    </section>
  );
}
