"use client";

import { useState } from "react";

type Shape = "low" | "mid" | "high";

type District = {
  name: string;
  note: string;
  shape: Shape;
  busy?: boolean;
};

const districts: District[] = [
  { name: "Bilaspur", note: "Gobind Sagar lake", shape: "low" },
  { name: "Chamba", note: "Old temples, Pangi valley", shape: "mid" },
  { name: "Hamirpur", note: "Deotsidh hill temple", shape: "low" },
  { name: "Kangra", note: "Dhauladhar and tea gardens", shape: "high" },
  { name: "Kinnaur", note: "Apple country, Chitkul", shape: "mid" },
  { name: "Kullu", note: "Manali and Kasol, busy", shape: "high", busy: true },
  { name: "Lahaul-Spiti", note: "Cold desert monasteries", shape: "high" },
  { name: "Mandi", note: "Rewalsar and Prashar lakes", shape: "low" },
  { name: "Shimla", note: "The Mall and the Ridge, busy", shape: "mid", busy: true },
  { name: "Sirmaur", note: "Renuka lake", shape: "low" },
  { name: "Solan", note: "Kasauli and Chail", shape: "mid" },
  { name: "Una", note: "Chintpurni temple", shape: "low" },
];

const facts = [
  { value: "55,673\u00a0km²", label: "of hills, orchards and high desert" },
  { value: "4,414\u00a0m", label: "Sach Pass, open roughly July to November" },
  { value: "1864", label: "the year Shimla became the Summer Capital" },
];

function Peak({ shape, busy }: { shape: Shape; busy?: boolean }) {
  const fill = busy ? "#A3304F" : "#FFFDF7";
  const stroke = busy ? "#A3304F" : "#1E2B1C";
  const snow = busy ? "#F8F4EA" : "#FFFDF7";
  const ridge = busy ? "#F8F4EA" : "#1E2B1C";

  const mountains = {
    low: "m4 54 26-34 12 11 16-15 26 38Z",
    mid: "m4 54 22-30 10 11 18-25 30 44Z",
    high: "M4 54 44 8l40 46Z",
  };
  const caps = {
    low: "m24 28 6-8 6 8-3-2-3 3.5-3-3.5Z",
    mid: "m46 21 8-11 8 11-4-2.5-4 4.5-4-4.5Z",
    high: "m35 19 9-11 9 11-4.5-3-4.5 5-4.5-5Z",
  };
  const trails = {
    low: "m63 27 7 9m-3-2 7 9M36 30l4 5",
    mid: "m59 28 7 9m-3-2 7 9M30 33l4 5",
    high: "m50 26 8 9m-4-3 7 8m-3-1 6 7",
  };

  return (
    <svg viewBox="0 0 88 58" className="h-12 w-[72px] md:h-[58px] md:w-[88px]" aria-hidden="true">
      <path
        d={mountains[shape]}
        fill={fill}
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d={caps[shape]}
        fill={snow}
        stroke={busy ? "none" : stroke}
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d={trails[shape]}
        fill="none"
        stroke={ridge}
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path d="M2 55h84" fill="none" stroke="#1E2B1C" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function Problem() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="problem"
      className="problem-section mx-auto flex w-full max-w-[1200px] flex-col items-center bg-cream"
    >
      <div className="problem-intro flex w-full max-w-[1120px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-4 min-[768px]:gap-[18px]">
          <p className="text-center font-sans text-[12px] leading-[1.3] font-medium tracking-[0.14em] text-bark uppercase">
            Himachal Pradesh
          </p>
          <h2 className="problem-title w-full text-center font-serif leading-[1.04] font-normal tracking-[-0.025em] text-balance text-ink">
            Twelve districts.
            <br />
            Most people see two.
          </h2>
          <p className="max-w-none text-center font-sans text-[17px] leading-[1.55] font-normal text-balance text-bark md:max-w-[600px] md:text-[18px] min-[1200px]:max-w-[640px]">
            Shimla and Manali fill up every weekend. Past them sit apple
            orchards, Buddhist valleys and passes above 4,000&nbsp;m that few
            travellers reach.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-5 pt-5 md:pt-9">
          <div className="problem-ridge w-full">
            {districts.map((district) => {
              const isOpen = open === district.name;
              return (
                <button
                  key={district.name}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpen(isOpen ? null : district.name)
                  }
                  className="group flex cursor-pointer flex-col items-center gap-1.5 md:gap-2"
                >
                  <span className="relative flex h-12 w-full items-end justify-center md:h-16">
                    <span className={`peak-lift absolute bottom-0 ${isOpen ? "is-open" : ""}`}>
                      <Peak shape={district.shape} busy={district.busy} />
                    </span>
                  </span>
                  <span
                    className={`text-center font-sans text-[12px] leading-[1.3] font-medium min-[1200px]:text-[13px] ${district.busy ? "text-rose" : "text-bark"}`}
                  >
                    {district.name}
                  </span>
                  <span
                    className={`min-h-[30px] text-center font-sans text-[11.5px] leading-[1.35] font-normal text-balance text-bark transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}
                  >
                    {district.note}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="max-w-[560px] text-center font-sans text-[14px] leading-[1.5] font-normal text-pretty text-bark">
            Most visitors stop at Shimla and Kullu. Ten more districts wait past
            them.
          </p>
        </div>
      </div>

      <div className="problem-facts w-full max-w-[900px] pt-0 md:pt-2">
        {facts.map((fact) => (
          <div
            key={fact.value}
            className="flex flex-1 flex-col items-center gap-1.5 border-t border-line pt-4 text-center md:items-start md:text-left"
          >
            <p className="font-serif text-[28px] leading-[1.1] tracking-[-0.02em] text-ink tabular-nums md:text-[30px]">
              {fact.value}
            </p>
            <p className="font-sans text-[13px] leading-[1.45] font-normal text-bark">
              {fact.label}
            </p>
          </div>
        ))}
      </div>

      <svg
        viewBox="0 0 72 132"
        className="h-[81px] w-11 md:h-[99px] md:w-[54px]"
        aria-hidden="true"
      >
        <path
          d="M35 3c24 5 26 21 2 26s-22 20-1 24c19 4 20 17 1 21-17 4-16 15-1 19 11 3 10 11 1 15-3 4-2 10-1 17"
          fill="none"
          stroke="#1E2B1C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M28.5 117.5c3 2.5 5.5 5 7.5 9 2-4 4.5-7 8-9.5"
          fill="none"
          stroke="#1E2B1C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    </section>
  );
}
