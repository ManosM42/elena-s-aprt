import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    if (pathname !== key) {
      setLoading(true);
      setKey(pathname);
    }
  }, [pathname, key]);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className={loading ? "invisible" : "visible animate-fade-in"}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
}
