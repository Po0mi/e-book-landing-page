"use client";
import Image from "next/image";
import bookPage from "@/assets/book-page.png";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import "./Page.scss";

const Page = () => {
  const containerRef = usePageAnimation();

  return (
    <section className="page" id="page" ref={containerRef}>
      <div className="page-cotent">
        <div className="page-left">
          <span className="left-number">320</span>
          <span className="left-label">Pages</span>
          <h1 className="left-title">What's Inside</h1>
          <ul className="left-content">
            <li>15 clinical case studies on focus and productivity</li>
            <li>20 printable worksheets for spatial auditing</li>
            <li>Daily habit trackers for the first 90 days</li>
            <li>3 custom-designed meditation scripts</li>
            <li>Exclusive interview with a Bauhaus architect</li>
          </ul>
        </div>
        <div className="page-right">
          <div className="page-image-wrapper">
            <Image src={bookPage} alt="Book page" fill className="page-image" />
          </div>
          <span className="right-quote">
            "The curator edition isn't just a book; it's a blueprint for a life
            lived with intent."
          </span>
        </div>
      </div>
    </section>
  );
};

export default Page;
