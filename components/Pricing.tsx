"use client";
import { usePricingAnimation } from "@/hooks/usePricingAnimation";
import "./Pricing.scss";

const plans = [
  {
    label: "Essential",
    price: "$19",
    description: "The complete text, formatted for focused reading.",
    features: ["342-page digital PDF", "Lifetime access", "Print-ready format"],
    cta: "Purchase Edition",
    highlighted: false,
  },
  {
    label: "Complete",
    price: "$39",
    description: "The full edition with all supplementary materials included.",
    features: [
      "342-page digital PDF",
      "15+ asset bundle",
      "Workbook & templates",
      "Lifetime access",
      "Free future updates",
    ],
    cta: "Purchase Complete",
    highlighted: true,
  },
  {
    label: "Studio",
    price: "$89",
    description: "For teams and studios applying the principles at scale.",
    features: [
      "Everything in Complete",
      "5 team licenses",
      "Workshop slide deck",
      "Priority support",
    ],
    cta: "Purchase Studio",
    highlighted: false,
  },
];

const Pricing = () => {
  const containerRef = usePricingAnimation();

  return (
    <section className="pricing" id="pricing" ref={containerRef}>
      <div className="pricing-header">
        <h2 className="header-title">Choose your edition</h2>
        <span className="header-label">
          SELECT YOUR EDITION FOR INSTANT DOWNLOAD
        </span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.highlighted ? "pricing-card--highlighted" : ""}`}
            key={plan.label}
          >
            <div className="card-top">
              <span className="card-label">{plan.label}</span>
              <p className="card-description">{plan.description}</p>
            </div>

            <div className="card-price">
              <span className="price-amount">{plan.price}</span>
              <span className="price-note">one-time</span>
            </div>

            <ul className="card-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="feature-tick">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#" className="card-cta">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
