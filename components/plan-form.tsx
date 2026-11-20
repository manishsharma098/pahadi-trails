"use client";

import { FormEvent, useState } from "react";

const months = [
  "Not sure yet",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOptions = ["4–5 days", "6–7 days", "8–10 days", "More than 10"];
const travellerOptions = ["1", "2", "3–4", "5–8", "More than 8"];
const routes = [
  "Not sure yet",
  "Shimla & Kinnaur",
  "Kangra & Dharamshala",
  "Kullu & the Parvati valley",
  "Spiti Circuit",
  "Chamba & Pangi",
  "Bir Billing",
];

export function PlanForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("company") || "").trim()) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="plan-card">
        <p className="plan-thanks-title">Note sent</p>
        <p className="plan-thanks">
          A host will write back within a day. We never share your details.
        </p>
      </div>
    );
  }

  return (
    <div className="plan-card">
      <form className="plan-form" onSubmit={onSubmit}>
        <label className="plan-field">
          <span className="plan-label-row">
            <span className="plan-label">Name</span>
          </span>
          <input
            className="plan-input"
            type="text"
            name="name"
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </label>

        <label className="plan-field">
          <span className="plan-label-row">
            <span className="plan-label">Email</span>
          </span>
          <input
            className="plan-input"
            type="email"
            name="email"
            placeholder="you@email.com"
            required
            autoComplete="email"
          />
        </label>

        <label className="plan-field">
          <span className="plan-label-row">
            <span className="plan-label">Phone</span>
            <span className="plan-optional">optional</span>
          </span>
          <input
            className="plan-input"
            type="tel"
            name="phone"
            placeholder="+91"
            autoComplete="tel"
          />
        </label>

        <label className="plan-field">
          <span className="plan-label-row">
            <span className="plan-label">Travel month</span>
          </span>
          <select className="plan-input plan-select" name="month" defaultValue="Not sure yet">
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>

        <label className="plan-field">
          <span className="plan-label-row">
            <span className="plan-label">Days</span>
          </span>
          <select className="plan-input plan-select" name="days" defaultValue="4–5 days">
            {dayOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="plan-field">
          <span className="plan-label-row">
            <span className="plan-label">Travellers</span>
          </span>
          <select className="plan-input plan-select" name="travellers" defaultValue="1">
            {travellerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="plan-field plan-field-wide">
          <span className="plan-label-row">
            <span className="plan-label">Route you like</span>
            <span className="plan-optional">optional</span>
          </span>
          <select className="plan-input plan-select" name="route" defaultValue="Not sure yet">
            {routes.map((route) => (
              <option key={route} value={route}>
                {route}
              </option>
            ))}
          </select>
        </label>

        <label className="plan-field plan-field-wide">
          <span className="plan-label-row">
            <span className="plan-label">Anything we should know</span>
            <span className="plan-optional">optional</span>
          </span>
          <textarea
            className="plan-input plan-notes"
            name="notes"
            placeholder="Pace, interests, who’s coming, anything to avoid"
          />
        </label>

        <div className="plan-submit">
          <button className="plan-button" type="submit">
            Send to a host
          </button>
        </div>

        <input
          className="plan-honeypot"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </form>
      <p className="plan-privacy">We reply within a day and never share your details.</p>
    </div>
  );
}
