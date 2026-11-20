import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { JourneyView } from "@/components/journey-view";
import { getJourney, journeys } from "@/lib/journeys";

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return {};
  return {
    title: `${journey.title} — Pahadi Trails`,
    description: journey.lead,
  };
}

export default function JourneyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="journey-hero" aria-hidden="true" />}>
      <JourneyContent params={params} />
    </Suspense>
  );
}

async function JourneyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();
  return <JourneyView journey={journey} />;
}
