"use client";

import { useLayoutEffect, useRef } from "react";

const trips = [
  {
    title: "Snow and winter",
    image: "/trips/snow.png",
    alt: "Illustration of a skier among snowy deodar trees",
  },
  {
    title: "Valleys and orchards",
    image: "/trips/orchards.png",
    alt: "Illustration of an orchard keeper picking apples into a kilta basket",
  },
  {
    title: "Spiritual",
    image: "/trips/spiritual.png",
    alt: "Illustration of a monk walking up to a hilltop monastery",
  },
  {
    title: "Adventure",
    image: "/trips/adventure.png",
    alt: "Illustration of a paraglider over terraced hills and a hiker",
  },
  {
    title: "Culture and heritage",
    image: "/trips/culture.png",
    alt: "Illustration of a folk dance in front of a pagoda-style wooden temple",
  },
  {
    title: "Unexplored",
    image: "/trips/unexplored.png",
    alt: "Illustration of a trekker climbing to a remote pass",
  },
];

function TripCard({
  title,
  image,
  alt,
  hidden = false,
}: {
  title: string;
  image: string;
  alt: string;
  hidden?: boolean;
}) {
  return (
    <article className="trip-card" aria-hidden={hidden || undefined}>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[14px] bg-[#fffdf7]">
        <img
          src={image}
          alt={alt}
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <h3 className="px-4 pt-[22px] pb-3 text-center font-serif text-[28px] leading-[1.08] font-normal tracking-[-0.02em] text-balance text-ink md:pt-[26px] md:pb-[14px] md:text-[36px]">
        {title}
      </h3>
    </article>
  );
}

export function TripTypes() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const shift = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + shift}px`;
      const top = section.getBoundingClientRect().top + window.scrollY;
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, (window.scrollY - top) / scrollable));
      track.style.transform = `translate3d(${-progress * shift}px, 0, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduced.addEventListener("change", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduced.removeEventListener("change", onScroll);
      section.style.height = "";
      track.style.transform = "";
    };
  }, []);

  return (
    <section id="trip-types" ref={sectionRef} className="trip-section bg-cream">
      <div className="trip-pin">
        <div className="trip-heading">
          <h2 className="trip-title font-serif leading-[1.05] font-normal text-balance text-ink">
            Whatever trip you have in mind
          </h2>
        </div>
        <div className="trip-scroller" aria-label="Trip types">
          <div ref={trackRef} className="trip-track">
            {trips.map((trip) => (
              <TripCard key={trip.title} {...trip} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
