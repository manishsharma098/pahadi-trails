"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const routes = [
  {
    href: "/journeys/shimla-kinnaur",
    title: "Shimla & Kinnaur",
    note: "Old summer capital to apple country, 7 days",
    image: "/routes/shimla-cover.jpg",
    alt: "The Baspa valley near Chitkul under the Kinner Kailash peaks",
  },
  {
    href: "/journeys/kangra-dharamshala",
    title: "Kangra & Dharamshala",
    note: "Tea gardens under the Dhauladhar, 6 days",
    image: "/routes/kangra-cover.jpg",
    alt: "Tea gardens below the Dhauladhar range",
  },
  {
    href: "/journeys/kullu-parvati",
    title: "Kullu & Parvati",
    note: "Orchards and river days above the Beas, 6 days",
    image: "/routes/kullu-cover.jpg",
    alt: "The Parvati river through a forested valley",
  },
  {
    href: "/journeys/spiti-circuit",
    title: "Spiti Circuit",
    note: "A high-desert loop over Kunzum Pass, 10 days",
    image: "/routes/spiti-cover.jpg",
    alt: "A hilltop monastery above the Spiti river",
  },
  {
    href: "/journeys/chamba-pangi",
    title: "Chamba & Pangi",
    note: "Over Sach Pass to a remote valley, 9 days",
    image: "/routes/chamba-cover.jpg",
    alt: "A mountain road across a high pass with old snow",
  },
  {
    href: "/journeys/bir-billing",
    title: "Bir Billing",
    note: "Tea estates and a tandem flight, 4 days",
    image: "/routes/bir-cover.jpg",
    alt: "Paragliders over the Kangra valley at sunset",
  },
];

const seasons = [
  {
    title: "Spring",
    note: "Mar–May · Rhododendron in bloom, tea plucking in Kangra",
    image: "/seasons/spring.jpg?v=2",
    alt: "Red rhododendron blossoms in spring",
  },
  {
    title: "Summer",
    note: "Jun–Aug · High passes open into Spiti, Lahaul and Pangi",
    image: "/seasons/summer.jpg?v=2",
    alt: "A high-altitude lake in summer",
  },
  {
    title: "Autumn",
    note: "Sep–Nov · Clear skies, apple harvest, Kullu Dussehra",
    image: "/seasons/autumn.jpg?v=2",
    alt: "Crates of freshly picked apples in autumn",
  },
  {
    title: "Winter",
    note: "Dec–Feb · Snow at Chanshal and Solang, quiet villages",
    image: "/seasons/winter.jpg?v=2",
    alt: "A village under fresh winter snow",
  },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="site-nav-mark">
      <g fill="#a3304f">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            d="M50 48 C 38 42, 36 28, 44 18 L50 9 L56 18 C 64 28, 62 42, 50 48 Z"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="9" fill="#1e2b1c" />
      <g fill="#f8f4ea">
        <circle cx="50" cy="45.5" r="1.7" />
        <circle cx="54.3" cy="48.6" r="1.7" />
        <circle cx="52.6" cy="53.6" r="1.7" />
        <circle cx="47.4" cy="53.6" r="1.7" />
        <circle cx="45.7" cy="48.6" r="1.7" />
      </g>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="site-nav-plus" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteList({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="site-nav-block">
      <p className="site-nav-kicker">Six tested Routes, each one a starting point</p>
      <div className="site-nav-grid site-nav-grid-routes">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="site-nav-item site-nav-item-route"
            onClick={onNavigate}
          >
            <span className="site-nav-tile site-nav-tile-route">
              <img src={route.image} alt={route.alt} />
            </span>
            <span className="site-nav-copy">
              <span className="site-nav-title">{route.title}</span>
              <span className="site-nav-note">{route.note}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SeasonList({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="site-nav-block">
      <p className="site-nav-kicker">Every month opens a valley</p>
      <div className="site-nav-grid site-nav-grid-seasons">
        {seasons.map((season) => (
          <Link
            key={season.title}
            href="/#seasons"
            className="site-nav-item site-nav-item-season"
            onClick={onNavigate}
          >
            <span className="site-nav-tile site-nav-tile-season">
              <img src={season.image} alt={season.alt} />
            </span>
            <span className="site-nav-copy">
              <span className="site-nav-title">{season.title}</span>
              <span className="site-nav-note">{season.note}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteNav() {
  const [shown, setShown] = useState(false);
  const [panel, setPanel] = useState<"routes" | "seasons" | null>(null);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const dockedRef = useRef(false);
  const holdRef = useRef(false);
  const panelRef = useRef(panel);
  const cancelCloseRef = useRef<() => void>(() => {});
  const scheduleCloseRef = useRef<() => void>(() => {});
  dockedRef.current = pathname !== "/";
  holdRef.current = panel !== null || menu;
  panelRef.current = panel;

  useLayoutEffect(() => {
    if (pathname !== "/") {
      setShown(true);
      return;
    }
    if (window.scrollY < 80) {
      setShown(false);
      setPanel(null);
    }
  }, [pathname]);

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (dockedRef.current) {
        setShown(true);
        if (holdRef.current && y > last + 12) {
          setPanel(null);
          setMenu(false);
        }
        last = y;
        return;
      }
      if (holdRef.current) {
        if (y > last + 12) {
          setShown(y >= 80);
          setPanel(null);
          setMenu(false);
        }
      } else if (y < 80) {
        setShown(false);
        setPanel(null);
        setMenu(false);
      } else if (y < last - 4) {
        setShown(true);
      } else if (y > last + 4) {
        setShown(false);
        setPanel(null);
        setMenu(false);
      }
      last = y;
    };

    let closeTimer: number | null = null;
    let pointerX = -1;
    let pointerY = -1;
    const onPointer = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };
    const pointerInside = () => {
      const nav = document.querySelector(".site-nav");
      const heroNav = document.querySelector(".hero-header nav");
      if (nav?.matches(":hover") || heroNav?.matches(":hover")) return true;
      if (pointerX < 0) return false;
      const hit = document.elementFromPoint(pointerX, pointerY);
      return Boolean(hit?.closest(".site-nav") || hit?.closest(".hero-header nav"));
    };
    const cancelClose = () => {
      if (closeTimer !== null) window.clearTimeout(closeTimer);
      closeTimer = null;
    };
    const finishClose = () => {
      if (pointerInside()) return;
      setPanel(null);
      setMenu(false);
      if (!dockedRef.current && window.scrollY < 80) setShown(false);
    };
    const scheduleClose = () => {
      cancelClose();
      closeTimer = window.setTimeout(finishClose, 160);
    };
    cancelCloseRef.current = cancelClose;
    scheduleCloseRef.current = scheduleClose;

    const onOpen = (event: Event) => {
      const detail = (
        event as CustomEvent<{ open: boolean; panel?: "routes" | "seasons" }>
      ).detail;
      if (!detail?.open || !detail.panel) {
        scheduleClose();
        return;
      }
      cancelClose();
      panelRef.current = detail.panel;
      setMenu(false);
      setPanel(detail.panel);
      setShown(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pahadi-nav", onOpen);
    return () => {
      cancelClose();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pahadi-nav", onOpen);
    };
  }, []);

  const docked = pathname !== "/";
  const visible = docked || shown;

  useEffect(() => {
    document.documentElement.toggleAttribute("data-solid-nav", visible);
    return () => document.documentElement.removeAttribute("data-solid-nav");
  }, [visible]);

  const close = () => {
    setPanel(null);
    setMenu(false);
    if (!dockedRef.current && window.scrollY < 80) setShown(false);
  };

  const hoverOpen = (next: "routes" | "seasons") => {
    cancelCloseRef.current();
    setPanel(next);
    setMenu(false);
    setShown(true);
  };

  useEffect(() => {
    if (!panel && !menu) return;

    const onPointerDown = (event: MouseEvent) => {
      const nav = document.querySelector(".site-nav");
      if (nav && !nav.contains(event.target as Node)) close();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [panel, menu]);

  return (
    <header
      className={`site-nav${visible ? " is-shown" : ""}`}
      inert={!visible}
      onMouseEnter={() => cancelCloseRef.current()}
      onMouseLeave={() => scheduleCloseRef.current()}
    >
      <div className="site-nav-sheet" style={{ maxHeight: "100dvh", overflowY: "auto" }}>
        <div className="site-nav-bar">
          <Link href="/" className="site-nav-brand" onClick={close}>
            <LogoMark />
            <span className="site-nav-word">Pahadi Trails</span>
          </Link>

          <nav className="site-nav-links" aria-label="Primary">
            <button
              type="button"
              className={`site-nav-link${panel === "routes" ? " is-open" : ""}`}
              aria-expanded={panel === "routes"}
              onMouseEnter={() => hoverOpen("routes")}
              onFocus={() => hoverOpen("routes")}
            >
              Routes
              <PlusIcon />
            </button>
            <button
              type="button"
              className={`site-nav-link${panel === "seasons" ? " is-open" : ""}`}
              aria-expanded={panel === "seasons"}
              onMouseEnter={() => hoverOpen("seasons")}
              onFocus={() => hoverOpen("seasons")}
            >
              Seasons
              <PlusIcon />
            </button>
            <Link
              href="/about"
              className="site-nav-link"
              onMouseEnter={() => setPanel(null)}
              onClick={close}
            >
              About
            </Link>
          </nav>

          <div className="site-nav-end">
            <button
              type="button"
              className="site-nav-menu"
              aria-expanded={menu}
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => {
                setShown(true);
                setMenu((open) => !open);
              }}
            >
              <PlusIcon />
            </button>
            <Link href="/plan" className="site-nav-cta" aria-label="Plan my journey" onClick={close}>
              <span className="site-nav-cta-label">Plan my journey</span>
              <span className="site-nav-cta-arrow">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        <div className={`site-nav-desktop${panel === "routes" ? " is-open" : ""}`}>
          <RouteList onNavigate={close} />
        </div>
        <div className={`site-nav-desktop${panel === "seasons" ? " is-open" : ""}`}>
          <SeasonList onNavigate={close} />
        </div>

        {menu ? (
          <div className="site-nav-drawer">
            <RouteList onNavigate={close} />
            <SeasonList onNavigate={close} />
            <Link href="/about" className="site-nav-link" onClick={close}>
              About
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
