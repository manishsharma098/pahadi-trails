import Link from "next/link";

const routes = [
  {
    region: "Shimla, Kinnaur",
    title: "Shimla & Kinnaur",
    href: "/journeys/shimla-kinnaur",
    cover: "/routes/shimla-cover.jpg",
    stay: "/routes/shimla-stay.jpg",
    chips: ["7 days", "3,450 m (Chitkul)", "Apr–Jun, Sep–Oct", "from ₹68,000"],
  },
  {
    region: "Lahaul & Spiti, Kinnaur",
    title: "Spiti Circuit",
    href: "/journeys/spiti-circuit",
    cover: "/routes/spiti-cover.jpg",
    stay: "/routes/spiti-stay.jpg",
    chips: ["10 days", "4,551 m (Kunzum Pass)", "Jun–Oct", "from ₹96,000"],
  },
  {
    region: "Chamba",
    title: "Chamba & Pangi",
    href: "/journeys/chamba-pangi",
    cover: "/routes/chamba-cover.jpg",
    stay: "/routes/chamba-stay.jpg",
    chips: ["9 days", "4,414 m (Sach Pass)", "Jul–Oct", "from ₹88,000"],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        d="M3.75 12h9.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M13.5 5.25 20.25 12 13.5 18.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteLink({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: string;
  outline?: boolean;
}) {
  const face = outline
    ? "border border-ink bg-transparent text-ink"
    : "bg-cream text-ink";

  const className = "group inline-flex items-center gap-1 no-underline";
  const inner = (
    <>
      <span
        className={`flex h-[52px] items-center rounded-full px-[26px] font-sans text-[15px] leading-none font-semibold ${face}`}
      >
        {children}
      </span>
      <span
        className={`flex size-[52px] items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:translate-x-1 ${face}`}
      >
        <ArrowIcon />
      </span>
    </>
  );

  if (!href.startsWith("/")) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function Routes() {
  return (
    <section id="routes" className="routes-section relative flex w-full flex-col items-center">
      <header className="routes-header flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="routes-title w-full text-center font-serif leading-[1.05] font-normal text-balance text-ink">
          It all starts with our Routes
        </h2>
        <p className="routes-sub max-w-[560px] text-center font-sans leading-[1.5] font-normal text-balance text-bark">
          Six tested journeys. Each one is a starting point, not a package.
        </p>
      </header>

      <div className="relative w-full">
        {routes.map((route, index) => (
          <article
            key={route.title}
            className="route-panel sticky top-0 flex h-screen w-full flex-col justify-end overflow-hidden bg-[linear-gradient(160deg,#465640_0%,#1e2b1c_100%)]"
            style={{ zIndex: index + 1 }}
          >
            <img
              src={route.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#0e140c1a_0%,#0e140c00_40%,#0e140c9e_100%)]" />
            <div className="route-content relative z-10 flex w-full max-w-[1312px]">
              <div className="flex w-full flex-col items-start gap-4 md:min-w-0 md:flex-1 md:gap-5">
                <p className="font-sans text-[12px] leading-[1.3] font-medium tracking-[0.14em] text-[rgba(248,244,234,0.78)] uppercase">
                  {route.region}
                </p>
                <h3 className="route-title max-w-[640px] font-serif leading-none font-normal tracking-[-0.025em] text-balance text-cream [text-shadow:0_2px_24px_#0a0e0859]">
                  {route.title}
                </h3>
                <ul className="flex max-w-[640px] flex-wrap gap-1.5 md:gap-2">
                  {route.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-[#f8f4ea3d] bg-[#0e140c6b] px-3.5 py-2 font-sans text-[13px] leading-none font-medium tracking-[0.01em] text-cream"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <RouteLink href={route.href}>See the Route</RouteLink>
              </div>
              <div className="route-stay relative shrink-0 overflow-hidden rounded-2xl shadow-[0_24px_48px_#0a0e0847]">
                <img
                  src={route.stay}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="routes-footer flex w-full max-w-[1200px] justify-center">
        <RouteLink href="#" outline>
          See all six Routes
        </RouteLink>
      </div>
    </section>
  );
}
