import Link from "next/link";
import { NextRoute } from "@/components/next-route";
import { SiteFooter } from "@/components/site-footer";
import type { Journey } from "@/lib/journeys";

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

function PlanButton({ tone }: { tone: "cream" | "rose" }) {
  return (
    <Link href="/plan" className={`journey-cta journey-cta-${tone}`}>
      <span className="journey-cta-label">Plan this Route</span>
      <span className="journey-cta-arrow">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function JourneyView({ journey }: { journey: Journey }) {
  return (
    <>
      <article className="journey">
        <section className="journey-hero">
          <img
            src={journey.cover}
            alt=""
            width={1536}
            height={864}
            className="journey-cover"
          />
          <div className="journey-shade" />
          <div className="journey-copy">
            <Link href="/#routes" className="journey-back">
              ← All Routes
            </Link>
            <p className="journey-region">{journey.region}</p>
            <h1 className="journey-title">{journey.title}</h1>
            <div className="journey-chips">
              {journey.chips.map((chip) => (
                <span key={chip} className="journey-chip">
                  {chip}
                </span>
              ))}
            </div>
            <PlanButton tone="cream" />
          </div>
        </section>

        <section className="journey-facts" aria-label="Route facts">
          <div className="journey-fact">
            <p className="journey-fact-label">Days</p>
            <p className="journey-fact-value">{journey.days}</p>
          </div>
          <div className="journey-fact">
            <p className="journey-fact-label">Highest point</p>
            <p className="journey-fact-value">{journey.altitude}</p>
          </div>
          <div className="journey-fact">
            <p className="journey-fact-label">Best season</p>
            <p className="journey-fact-value">{journey.season}</p>
          </div>
          <div className="journey-fact">
            <p className="journey-fact-label">From</p>
            <p className="journey-fact-value">{journey.price}</p>
            <p className="journey-fact-note">per person, twin share</p>
          </div>
        </section>

        <section className="journey-body">
          <div className="journey-story">
            <p className="journey-lead">{journey.lead}</p>
            <div className="journey-prose">
              <p>{journey.intro}</p>
              <h2>{journey.daysTitle}</h2>
              <ul>
                {journey.itinerary.map((day) => (
                  <li key={day}>{day}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="journey-stay">
            <img
              src={journey.stay}
              alt={`A room on the ${journey.title} route`}
              width={1536}
              height={960}
              className="journey-stay-photo"
            />
            <div className="journey-stay-copy">
              <h2>Where you’ll stay</h2>
              <p>
                Registered homestays and small lodges our hosts know by name.
                Every Route can be slowed down or joined to another.
              </p>
              <p className="journey-price">
                <span>From</span>
                <strong>{journey.price}</strong>
              </p>
              <PlanButton tone="rose" />
            </div>
          </aside>
        </section>
      </article>

      <NextRoute
        href={journey.next.href}
        title={journey.next.title}
        image={journey.next.image}
      />
      <SiteFooter />
    </>
  );
}
