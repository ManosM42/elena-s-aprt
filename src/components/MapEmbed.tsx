interface Props {
  height?: number;
  label?: string;
}

export function MapEmbed({ height = 400, label }: Props) {
  return (
    <section className="w-full">
      {label && (
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">{label}</h2>
        </div>
      )}
      <div style={{ height }} className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.1569693989904!2d25.24868777516296!3d35.32692337270376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5dc77512fe69%3A0xdc4de8ad4ef29702!2sElena&#39;s%20Apartment!5e0!3m2!1sel!2sgr!4v1780077097317!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Elena's Apartment on Google Maps"
        />
      </div>
    </section>
  );
}