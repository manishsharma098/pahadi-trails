import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About — Pahadi Trails",
  description:
    "We’re a small team of hosts living in Kangra, Kullu and Kinnaur. We plan the journeys we’d take ourselves.",
};

const hosts = [
  {
    valley: "Kullu",
    name: "Kavita Thakur",
    body: "Grew up above Naggar. Knows every orchard path and which cafés still bake their own bread.",
    image: "/about/kavita.jpg",
    alt: "Kavita picking apples in an orchard near Naggar",
    width: 1122,
    height: 1402,
  },
  {
    valley: "Kangra",
    name: "Arjun Rana",
    body: "Former trekking guide. Plans the Kangra and Bir Routes, and the toy-train days.",
    image: "/about/arjun.jpg",
    alt: "Arjun walking through a Palampur tea garden",
    width: 1122,
    height: 1402,
  },
  {
    valley: "Kinnaur",
    name: "Ramesh Negi",
    body: "Runs our Kinnaur and Spiti Routes from Kalpa, and calls ahead before every pass.",
    image: "/about/ramesh.jpg",
    alt: "Ramesh on a carved balcony in Kalpa facing the peaks",
    width: 1024,
    height: 1280,
  },
];

const principles = [
  {
    title: "We sleep there first",
    body: "No stay goes on a Route until one of us has spent a night in it.",
  },
  {
    title: "Registered and fair",
    body: "Homestays registered under Himachal’s Home Stay Rules, 2025, paid on time, every time.",
  },
  {
    title: "Cooked by the family",
    body: "Siddu, madra and chha gosht, not a buffet.",
  },
  {
    title: "Small by design",
    body: "Three to six rooms, so the family has time for you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <article className="about-page">
        <header className="about-header">
          <p className="about-eyebrow">About</p>
          <h1 className="about-title">People of the hills</h1>
          <p className="about-sub">
            We’re a small team of hosts living in Kangra, Kullu and Kinnaur. We
            plan the journeys we’d take ourselves.
          </p>
          <div className="about-photo">
            <img
              src="/about/header.jpg"
              alt="A host walking a stone path between old houses above the Beas valley"
              width={1536}
              height={864}
            />
          </div>
        </header>

        <section className="about-story">
          <h2 className="about-heading">Slow by choice</h2>
          <div className="about-story-body">
            <p>
              Pahadi Trails started in 2019 in a Naggar guesthouse, when friends
              kept asking us where to go past Manali. We sent them to the
              villages we knew, with a host on the phone, and they came back
              with stories instead of photos of traffic.
            </p>
            <p>
              Today a handful of us plan every Route by hand. We drive the
              roads, sleep in the homestays and check the passes ourselves each
              season. If we wouldn’t take our own parents somewhere, we don’t
              send you there.
            </p>
          </div>
        </section>

        <section className="about-hosts">
          <h2 className="about-heading">Your hosts</h2>
          <div className="about-host-grid">
            {hosts.map((host) => (
              <article key={host.name} className="about-host">
                <div className="about-host-photo">
                  <img
                    src={host.image}
                    alt={host.alt}
                    width={host.width}
                    height={host.height}
                  />
                </div>
                <div className="about-host-text">
                  <p className="about-valley">{host.valley}</p>
                  <p className="about-name">{host.name}</p>
                  <p className="about-bio">{host.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-principles">
          <div className="about-principles-inner">
            <h2 className="about-principles-title">How we choose a stay</h2>
            <div className="about-principles-grid">
              {principles.map((item) => (
                <div key={item.title} className="about-principle">
                  <p className="about-principle-title">{item.title}</p>
                  <p className="about-principle-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
