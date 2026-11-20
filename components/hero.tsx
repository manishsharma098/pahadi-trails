import Image from "next/image";
import Link from "next/link";
import { HeroMenu } from "@/components/hero-menu";

const headline = ["The Himalaya,", "at a walking pace"];

function letters() {
  let index = 0;

  return headline.map((line) =>
    line.split(" ").map((word) =>
      word.split("").map((char) => ({
        char,
        delay: index++ * 28,
      })),
    ),
  );
}

function LogoMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="block shrink-0"
    >
      <g fill="#a3304f">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            d="M50 48 C 38 42, 36 28, 44 18 L50 9 L56 18 C 64 28, 62 42, 50 48 Z"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="9" fill="#f8f4ea" />
      <g fill="#1e2b1c">
        <circle cx="50" cy="45.5" r="1.7" />
        <circle cx="54.3" cy="48.6" r="1.7" />
        <circle cx="52.6" cy="53.6" r="1.7" />
        <circle cx="47.4" cy="53.6" r="1.7" />
        <circle cx="45.7" cy="48.6" r="1.7" />
      </g>
    </svg>
  );
}

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

function JourneyButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/plan"
      className={`group inline-flex items-center gap-1 no-underline ${className}`}
    >
      <span className="flex h-[52px] items-center rounded-full bg-cream px-[26px] font-sans text-[15px] font-semibold leading-none text-ink">
        Plan my journey
      </span>
      <span className="flex size-[52px] items-center justify-center rounded-full bg-cream text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function Hero() {
  const lines = letters();

  return (
    <section
      id="hero"
      className="hero-section relative flex h-screen w-full flex-col items-center overflow-hidden"
    >
      <Image
        src="/hero-kinnaur.jpg"
        alt="Morning mist over a deodar ridge in Kinnaur"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#0e140c9e_0%,#0e140c47_26%,#0e140c61_55%,#0e140c9e_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52%_42%_at_50%_54%,#0e140c80_0%,#0e140c00_100%)]" />

      <header className="hero-header absolute inset-x-0 top-0 z-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-cream no-underline"
          aria-label="Pahadi Trails"
        >
          <LogoMark />
          <span
            className="font-serif text-[22px] leading-none font-semibold tracking-[-0.015em] text-cream [text-shadow:0_1px_12px_rgba(10,14,8,0.35)] md:text-[28px]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "wght" 600' }}
          >
            Pahadi Trails
          </span>
        </Link>

        <HeroMenu />

        <JourneyButton className="max-[420px]:[&>span:first-child]:hidden max-[420px]:[&>span:first-child]:px-0" />
      </header>

      <div className="relative z-10 flex w-full max-w-[900px] flex-col items-center gap-7">
        <h1
          aria-label="The Himalaya, at a walking pace"
          className="hero-title w-full text-center font-serif leading-[1.02] font-normal tracking-[-0.025em] text-balance text-cream [text-shadow:0_2px_28px_#0a0e0873]"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "wght" 460' }}
        >
          {lines.map((words, lineIndex) => (
            <span key={headline[lineIndex]} className="block">
              {words.map((word, wordIndex) => (
                <span key={`${lineIndex}-${wordIndex}`} className="whitespace-nowrap">
                  {wordIndex > 0 ? " " : null}
                  {word.map((letter) => (
                    <span
                      key={letter.delay}
                      className="hero-letter inline-block"
                      style={{ animationDelay: `${letter.delay}ms` }}
                    >
                      {letter.char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p
          className="hero-sub hero-rise max-w-[560px] text-center font-sans leading-[1.45] font-medium text-balance text-[rgba(248,244,234,0.96)] [text-shadow:0_1px_14px_#0a0e0880]"
          style={{ animationDelay: "280ms" }}
        >
          Private journeys through Himachal’s quieter valleys, planned by
          people who live there.
        </p>

        <div className="hero-rise" style={{ animationDelay: "420ms" }}>
          <JourneyButton />
        </div>
      </div>
    </section>
  );
}
