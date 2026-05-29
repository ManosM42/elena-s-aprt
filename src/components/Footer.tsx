import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const BOOKING_URL = "https://www.booking.com/hotel/gr/elenas-apartment-kokkine-khani.el.html";
const AIRBNB_URL = "#";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#2C2A26] text-cream/85 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-2xl text-cream">Elena's Apartment</h3>
          <p className="mt-3 text-sm text-cream/65 leading-relaxed">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-cream/20 hover:bg-cream/10 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-cream/20 hover:bg-cream/10 transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/55 font-sans font-medium">{t("footer.nav")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cream">{t("nav.home")}</Link></li>
            <li><Link to="/apartment" className="hover:text-cream">{t("nav.apartment")}</Link></li>
            <li><Link to="/area" className="hover:text-cream">{t("nav.area")}</Link></li>
            <li><Link to="/contact" className="hover:text-cream">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/55 font-sans font-medium">{t("footer.area")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/area/beaches" className="hover:text-cream">{t("nav.beaches")}</Link></li>
            <li><Link to="/area/attractions" className="hover:text-cream">{t("nav.attractions")}</Link></li>
            <li><Link to="/area/restaurants" className="hover:text-cream">{t("nav.restaurants")}</Link></li>
            <li><Link to="/area/entertainment" className="hover:text-cream">{t("nav.entertainment")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/55 font-sans font-medium">{t("footer.book")}</h4>
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="text-center text-sm bg-azure text-white px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Booking.com
            </a>
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-center text-sm border border-cream/30 px-4 py-2.5 rounded-full hover:bg-cream/10 transition-colors"
            >
              Airbnb
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-cream/55">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
