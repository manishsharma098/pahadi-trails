import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { TripTypes } from "@/components/trip-types";
import { Routes } from "@/components/routes";
import { Seasons } from "@/components/seasons";
import { Homestays } from "@/components/homestays";
import { NextRoute } from "@/components/next-route";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <TripTypes />
      <Routes />
      <Seasons />
      <Homestays />
      <NextRoute />
      <SiteFooter />
    </>
  );
}
