"use client";

import Link from "next/link";
import { useState } from "react";

const travel = [
  { label: "Routes", href: "#" },
  { label: "Seasons", href: "/#seasons" },
  { label: "Homestays", href: "/#homestays" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Plan my journey", href: "/plan" },
  { label: "Questions", href: "#" },
];

const legal = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

const socials = [
  { label: "Pahadi Trails on Instagram", href: "#", icon: InstagramIcon },
  { label: "Pahadi Trails on YouTube", href: "#", icon: YouTubeIcon },
  { label: "Pahadi Trails on WhatsApp", href: "#", icon: WhatsAppIcon },
  { label: "Pahadi Trails on Facebook", href: "#", icon: FacebookIcon },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="footer-logo">
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
      <path d="M3.75 12h9.75" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        d="M12 4.5a7.2 7.2 0 0 0-6.2 10.8L5 19.5l4.3-.9A7.2 7.2 0 1 0 12 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        d="M14 9h2.5V6H14c-2.2 0-3.5 1.4-3.5 3.6V12H8v3h2.5v6h3v-6H16l.5-3h-3v-1.6c0-.6.3-.8.8-.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Newsletter() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return <p className="footer-note">We’ll write next season.</p>;
  }

  return (
    <form
      className="footer-form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = String(data.get("email") ?? "");
        if (email.includes("@")) setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="footer-email">
        Your email
      </label>
      <input
        id="footer-email"
        className="footer-input"
        type="email"
        name="email"
        required
        placeholder="Your email"
        autoComplete="email"
      />
      <button type="submit" className="footer-submit">
        Subscribe
      </button>
    </form>
  );
}

function FooterLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <div className="footer-wrap">
      <section className="footer-sock" aria-label="Plan a journey">
        <div className="footer-sock-row">
          <div className="footer-art" style={{ backgroundImage: 'url("/footer-valley.png")' }}>
            <img
              src="/footer-valley.png"
              alt="Illustration of a traveller with chai looking over a Himalayan valley and winding road"
              width={1024}
              height={1024}
            />
          </div>
          <div className="footer-sock-text">
            <p className="footer-sock-title">Let’s find your valley</p>
            <p className="footer-sock-sub">
              Tell us when you can travel. We’ll send two Routes that fit, within a day.
            </p>
          </div>
          <Link href="/plan" className="group inline-flex items-center gap-1 no-underline">
            <span className="flex h-[52px] items-center rounded-full bg-rose px-[26px] font-sans text-[15px] leading-none font-semibold text-cream">
              Plan my journey
            </span>
            <span className="flex size-[52px] items-center justify-center rounded-full bg-rose text-cream transition-transform duration-300 ease-out group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>

      <div className="footer-shell">
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-intro">
              <div className="footer-brand">
                <LogoMark />
                <p className="footer-wordmark">Pahadi Trails</p>
              </div>
              <p className="footer-tagline">Slow journeys across Himachal Pradesh.</p>
              <div className="footer-news">
                <p className="footer-kicker">One letter a season</p>
                <Newsletter />
              </div>
            </div>

            <div className="footer-links">
              <nav className="footer-col" aria-label="Travel">
                <p className="footer-kicker">Travel</p>
                {travel.map((item) => (
                  <FooterLink key={item.label} href={item.href} className="footer-link">
                    {item.label}
                  </FooterLink>
                ))}
              </nav>
              <nav className="footer-col" aria-label="Company">
                <p className="footer-kicker">Company</p>
                {company.map((item) => (
                  <FooterLink key={item.label} href={item.href} className="footer-link">
                    {item.label}
                  </FooterLink>
                ))}
              </nav>
            </div>
          </div>

          <div className="footer-legal">
            <div className="footer-legal-links">
              <p>© 2026 Pahadi Trails</p>
              {legal.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
            <div className="footer-socials">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="footer-social"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
