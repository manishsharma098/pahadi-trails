import Link from "next/link";

const photos = [
  {
    src: "/homestays/blankets.jpg",
    alt: "A homestay guest room with checked wool blankets",
    className: "stay-photo stay-photo-back",
  },
  {
    src: "/homestays/siddu.jpg",
    alt: "Siddu buns steaming by a wood stove",
    className: "stay-photo stay-photo-mid",
  },
  {
    src: "/homestays/balcony.jpg",
    alt: "A Kath-Kuni homestay with a carved wooden balcony",
    className: "stay-photo stay-photo-front",
  },
];

const points = [
  {
    title: "Registered and checked",
    body: "Homestays registered under Himachal’s Home Stay Rules, 2025.",
    icon: SealIcon,
  },
  {
    title: "Local food",
    body: "Siddu, madra and chha gosht, cooked by the family.",
    icon: FoodIcon,
  },
  {
    title: "Small by design",
    body: "Most stays have three to six rooms.",
    icon: HouseIcon,
  },
  {
    title: "Heated in winter",
    body: "Wood stoves and hot water, checked before every booking.",
    icon: FlameIcon,
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

function SealIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 text-ink" aria-hidden="true">
      <path
        d="M12 2.4 14.05 4.3l2.65-.28.88 2.5 2.35 1.32-.28 2.66L21.6 12l-1.95 1.5.28 2.66-2.35 1.32-.88 2.5-2.65-.28L12 21.6l-2.05-1.9-2.65.28-.88-2.5-2.35-1.32.28-2.66L2.4 12l1.95-1.5-.28-2.66 2.35-1.32.88-2.5 2.65.28Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 12.75 10.5 15l5.25-5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 text-ink" aria-hidden="true">
      <path
        d="M3.75 7.5h16.5v9.75a2.25 2.25 0 0 1-2.25 2.25h-12A2.25 2.25 0 0 1 3.75 17.25Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 1.5v3M12 1.5v3M15 1.5v3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20.25 9 23.25 11.25M3.75 9 .75 11.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 text-ink" aria-hidden="true">
      <path
        d="M2.25 12.44 11.47 3.22a1.06 1.06 0 0 1 1.5 0l9.22 9.22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 11.25v9h5.25v-6h4.5v6H19.5v-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M1.5 20.25h21" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 text-ink" aria-hidden="true">
      <path
        d="M10.5 9 12.96 2.25C15 3.93 19.5 8.26 19.5 13.5a7.5 7.5 0 0 1-15 0c0-2.87 1.35-5.46 2.9-7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 18c1.88-.32 3.43-1.88 3.75-3.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Homestays() {
  return (
    <section id="homestays" className="stay-section">
      <div className="stay-block">
        <div className="stay-stack">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={photo.className}
              style={{ backgroundImage: `url("${photo.src}")` }}
            >
              <img src={photo.src} alt={photo.alt} width={1024} height={1280} />
            </div>
          ))}
        </div>

        <div className="stay-copy">
          <div className="stay-intro">
            <p className="stay-eyebrow">Where you stay</p>
            <h2 className="stay-title">Stay in homes, not hotels</h2>
            <p className="stay-sub">
              Every stay is a registered homestay or small lodge we’ve slept in ourselves.
            </p>
          </div>

          <ul className="stay-items">
            {points.map((point) => (
              <li key={point.title} className="stay-item">
                <point.icon />
                <p className="stay-item-title">{point.title}</p>
                <p className="stay-item-body">{point.body}</p>
              </li>
            ))}
          </ul>

          <Link href="/plan" className="group inline-flex items-center gap-1 no-underline">
            <span className="flex h-[52px] items-center rounded-full border border-ink bg-transparent px-[26px] font-sans text-[15px] leading-none font-semibold text-ink">
              Plan my journey
            </span>
            <span className="flex size-[52px] items-center justify-center rounded-full border border-ink text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
