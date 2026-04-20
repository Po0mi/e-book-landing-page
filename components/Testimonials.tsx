"use client";
import { useTestimonialsAnimation } from "@/hooks/useTestimonialsAnimation";
import "./Testimonials.scss";

const testimonials = [
  {
    index: "01",
    quote:
      "This book restructured how I approach every morning. Clarity isn't found — it's built, one removal at a time.",
    name: "Maren H.",
    role: "Architect, Berlin",
  },
  {
    index: "02",
    quote:
      "The section on digital minimalism alone was worth the price. I've read it three times and act on it daily.",
    name: "Tobias C.",
    role: "Product Designer, London",
  },
  {
    index: "03",
    quote:
      "Rare to find writing that is itself an act of minimalism. Every sentence earns its place on the page.",
    name: "Noa R.",
    role: "Editor, New York",
  },
  {
    index: "04",
    quote:
      "I gifted this to my entire team. The spatial order framework changed how we design our studio environment.",
    name: "Yuki M.",
    role: "Creative Director, Tokyo",
  },
];

const Testimonials = () => {
  const containerRef = useTestimonialsAnimation();

  return (
    <section className="testimonials" id="testimonials" ref={containerRef}>
      <div className="t-bento">
        {/* Header cell */}
        <div className="t-cell t-header">
          <h2 className="t-title">
            What <br />
            readers say
          </h2>
        </div>

        {/* T1 — large dark */}
        <article className="t-cell t-one">
          <span className="t-index">{testimonials[0].index}</span>
          <blockquote className="t-quote">"{testimonials[0].quote}"</blockquote>
          <footer className="t-footer">
            <span className="t-name">{testimonials[0].name}</span>
            <span className="t-role">{testimonials[0].role}</span>
          </footer>
        </article>

        {/* T2 */}
        <article className="t-cell t-two">
          <span className="t-index">{testimonials[1].index}</span>
          <blockquote className="t-quote">"{testimonials[1].quote}"</blockquote>
          <footer className="t-footer">
            <span className="t-name">{testimonials[1].name}</span>
            <span className="t-role">{testimonials[1].role}</span>
          </footer>
        </article>

        {/* T3 */}
        <article className="t-cell t-three">
          <span className="t-index">{testimonials[2].index}</span>
          <blockquote className="t-quote">"{testimonials[2].quote}"</blockquote>
          <footer className="t-footer">
            <span className="t-name">{testimonials[2].name}</span>
            <span className="t-role">{testimonials[2].role}</span>
          </footer>
        </article>

        {/* T4 — dark */}
        <article className="t-cell t-four">
          <span className="t-index">{testimonials[3].index}</span>
          <blockquote className="t-quote">"{testimonials[3].quote}"</blockquote>
          <footer className="t-footer">
            <span className="t-name">{testimonials[3].name}</span>
            <span className="t-role">{testimonials[3].role}</span>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
