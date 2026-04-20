"use client";
import { useChaptersAnimation } from "@/hooks/useChaptersAnimation";
import "./Chapters.scss";

const Chapters = () => {
  const containerRef = useChaptersAnimation();

  return (
    <section className="chapters" id="chapters" ref={containerRef}>
      <div className="chapters-header">
        <h1 className="header-left">Rethinking the container</h1>
        <p className="header-right">
          Our philosophy rests upon the belief that simplicity isn't the absence
          of things, but the precision of selection. We explore the neurobiology
          of focus through three fundamental architectural pillars.
        </p>
      </div>
      <div className="chapters-body">
        <div className="body-left">
          <span className="label">01</span>
          <h1 className="body-title">Mental Clarity</h1>
          <p className="body-content">
            Understanding the cognitive load of decision fatigue. We provide
            psychological protocols to clear the internal workspace before
            addressing the physical.
          </p>
        </div>
        <div className="body-middle">
          <span className="label">02</span>
          <h1 className="body-title">Spatial Order</h1>
          <p className="body-content">
            Applying Euclidean geometry to personal environments. Transform
            chaotic living spaces into functional extensions of your thought
            process.
          </p>
        </div>
        <div className="body-right">
          <span className="label">03</span>
          <h1 className="body-title">Digital Minimalism</h1>
          <p className="body-content">
            Reclaiming the attention economy. A ruthless audit of digital intake
            to ensure technology serves the user, rather than the reverse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chapters;
