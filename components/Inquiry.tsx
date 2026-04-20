"use client";
import { useState } from "react";
import { useInquiryAnimation } from "@/hooks/useInquiryAnimation";
import "./Inquiry.scss";

const items = [
  {
    q: "What format is the book delivered in?",
    a: "The edition is delivered as a high-resolution PDF, optimised for both screen reading and print. You will receive an instant download link upon purchase.",
  },
  {
    q: "Is there a print edition available?",
    a: "Not at this time. The digital edition is formatted to print-ready standards — A4, with generous margins — so you may print it yourself at any professional print shop.",
  },
  {
    q: "Does the Complete edition include future chapters?",
    a: "Yes. The Complete and Studio editions include all future updates to the text at no additional cost. New chapters, revised frameworks, and supplementary assets are distributed through the same download link.",
  },
  {
    q: "Can I share the book with my team?",
    a: "The Essential and Complete editions are single-user licenses. The Studio edition includes five named licenses. For larger teams or institutional use, contact us directly for a custom arrangement.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a full refund within 14 days of purchase, no questions asked. Digital goods returned under this policy are permanently revoked from your account.",
  },
  {
    q: "How do I get in touch for a bulk or institutional order?",
    a: "Send a brief note to the address listed in the footer. We respond to all institutional enquiries within two business days.",
  },
];

const Inquiry = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useInquiryAnimation();

  return (
    <section className="inquiry" id="inquiry" ref={containerRef}>
      <div className="inquiry-header">
        <h2 className="header-title">Product inquiry</h2>
      </div>

      <div className="inquiry-accordion">
        {items.map((item, i) => (
          <div
            className={`accordion-item ${open === i ? "accordion-item--open" : ""}`}
            key={i}
          >
            <button
              className="item-trigger"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="trigger-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="trigger-question">{item.q}</span>
              <span className="trigger-icon" aria-hidden="true">
                {open === i ? "−" : "+"}
              </span>
            </button>
            <div className="item-body">
              <p className="item-answer">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inquiry;
