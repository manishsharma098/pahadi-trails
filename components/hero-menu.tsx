"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3" aria-hidden="true">
      <path
        d="M4 12h16M12 4v16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const itemClass =
  "inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-sans text-[15px] leading-none font-semibold text-cream no-underline transition-opacity hover:opacity-80";

function emit(detail: { open: boolean; panel?: "routes" | "seasons" }) {
  window.dispatchEvent(new CustomEvent("pahadi-nav", { detail }));
}

function leave(event: MouseEvent) {
  const next = event.relatedTarget;
  if (next instanceof Node && document.querySelector(".site-nav")?.contains(next)) return;
  emit({ open: false });
}

export function HeroMenu() {
  return (
    <nav
      className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
      aria-label="Primary"
    >
      <button
        type="button"
        className={itemClass}
        onMouseEnter={() => emit({ open: true, panel: "routes" })}
        onMouseLeave={leave}
        onClick={() => emit({ open: true, panel: "routes" })}
      >
        Routes
        <PlusIcon />
      </button>
      <button
        type="button"
        className={itemClass}
        onMouseEnter={() => emit({ open: true, panel: "seasons" })}
        onMouseLeave={leave}
        onClick={() => emit({ open: true, panel: "seasons" })}
      >
        Seasons
        <PlusIcon />
      </button>
      <Link href="/about" className={itemClass}>
        About
      </Link>
    </nav>
  );
}
