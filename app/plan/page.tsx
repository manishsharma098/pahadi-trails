import type { Metadata } from "next";
import { PlanForm } from "@/components/plan-form";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Plan my journey — Pahadi Trails",
  description: "A few details and a host will write back within a day.",
};

const steps = [
  {
    number: "01",
    title: "A host reads it",
    body: "Within a day, someone who lives along your Route reads your note.",
  },
  {
    number: "02",
    title: "Two Routes come back",
    body: "We suggest two Routes that fit your dates, your pace and the season.",
  },
  {
    number: "03",
    title: "We shape it together",
    body: "Change the days, stays and roads until it feels right. Nothing to pay until then.",
  },
];

export default function PlanPage() {
  return (
    <>
      <section className="plan-page">
        <div className="plan-intro">
          <p className="plan-eyebrow">Plan my journey</p>
          <h1 className="plan-title">Tell us how you travel</h1>
          <p className="plan-sub">
            A few details and a host will write back within a day.
          </p>
          <ol className="plan-steps">
            {steps.map((step) => (
              <li key={step.number} className="plan-step">
                <span className="plan-step-number">{step.number}</span>
                <span className="plan-step-text">
                  <span className="plan-step-title">{step.title}</span>
                  <span className="plan-step-body">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <PlanForm />
      </section>
      <SiteFooter />
    </>
  );
}
