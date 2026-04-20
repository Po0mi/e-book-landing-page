"use client";
import { useQuoteAnimation } from "@/hooks/useQuoteAnimation";
import "./QuoteBlock.scss";

const QuoteBlock = () => {
  const containerRef = useQuoteAnimation();

  return (
    <section className="quote" id="quote" ref={containerRef}>
      <h1 className="content">
        "Great design is a series of corrections. A great life is a series of
        intentional removals."
      </h1>
    </section>
  );
};

export default QuoteBlock;
