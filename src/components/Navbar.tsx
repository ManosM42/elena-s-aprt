import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subLinks = [
    { to: "/area/beaches", label: t("nav.beaches") },
    { to: "/area/attractions", label: t("nav.attractions") },
    { to: "/area/restaurants", label: t("nav.restaurants") },
    { to: "/area/entertainment", label: t("nav.entertainment") },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-sand shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl md:text-[26px] tracking-tight text-foreground">
          Elena's <span className="text-azure italic">Apartment</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-[15px]">
          <NavLink to="/">{t("nav.home")}</NavLink>
          <NavLink to="/apartment">{t("nav.apartment")}</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setAreaOpen(true)}
            onMouseLeave={() => setAreaOpen(false)}
          >
            <button
              onClick={() => setAreaOpen((v) => !v)}
              className="flex items-center gap-1 text-foreground/80 hover:text-azure transition-colors"
            >
              {t("nav.area")} <ChevronDown size={14} />
            </button>
            {areaOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-card rounded-xl border border-sand shadow-xl py-2 min-w-[240px] animate-fade-in">
                  <Link
                    to="/area"
                    className="block px-5 py-2.5 text-sm hover:bg-cream transition-colors font-medium"
                  >
                    {t("nav.area")}
                  </Link>
                  <div className="my-1 h-px bg-sand" />
                  {subLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-5 py-2.5 text-sm text-foreground/80 hover:bg-cream hover:text-azure transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "el" : "en")}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-sand bg-card/60 hover:bg-card transition-colors text-sm"
            aria-label="Switch language"
          >
            <span>{lang === "en" ? "🇬🇧" : "🇬🇷"}</span>
            <span className="font-medium">{lang === "en" ? "EN" : "ΕΛ"}</span>
          </button>
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-sand animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setMobileOpen(false)}>{t("nav.home")}</MobileLink>
            <MobileLink to="/apartment" onClick={() => setMobileOpen(false)}>{t("nav.apartment")}</MobileLink>
            <MobileLink to="/area" onClick={() => setMobileOpen(false)}>{t("nav.area")}</MobileLink>
            {subLinks.map((s) => (
              <MobileLink key={s.to} to={s.to} onClick={() => setMobileOpen(false)} indent>
                {s.label}
              </MobileLink>
            ))}
            <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</MobileLink>
            <button
              onClick={() => setLang(lang === "en" ? "el" : "en")}
              className="mt-3 self-start flex items-center gap-2 px-3 py-1.5 rounded-full border border-sand text-sm"
            >
              {lang === "en" ? "🇬🇧 EN" : "🇬🇷 ΕΛ"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-foreground/80 hover:text-azure transition-colors"
      activeProps={{ className: "text-azure" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  children,
  onClick,
  indent,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  indent?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`py-2.5 text-[15px] text-foreground/85 hover:text-azure ${indent ? "pl-4 text-sm text-foreground/70" : ""}`}
    >
      {children}
    </Link>
  );
}
