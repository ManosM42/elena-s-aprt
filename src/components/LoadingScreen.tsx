import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

interface Props {
  onDone?: () => void;
  duration?: number;
}

export function LoadingScreen({ onDone, duration = 2500 }: Props) {
  const { t } = useI18n();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeT = setTimeout(() => setFading(true), duration - 500);
    const doneT = setTimeout(() => onDone?.(), duration);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(doneT);
    };
  }, [duration, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      <div className="text-center px-6 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl text-foreground tracking-tight">
          Elena's Apartment
        </h1>
        <p className="mt-3 text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
          {t("loader.subtitle")}
        </p>
        <div className="mt-10 mx-auto w-40 h-6 overflow-hidden">
          <svg viewBox="0 0 160 24" className="w-full h-full animate-wave" fill="none">
            <path
              d="M0 12 Q 20 0 40 12 T 80 12 T 120 12 T 160 12"
              stroke="var(--azure)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M0 16 Q 20 4 40 16 T 80 16 T 120 16 T 160 16"
              stroke="var(--terracotta)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
