"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./IntroAnimation.scss";

export default function IntroAnimation() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    const label = labelRef.current;
    if (!top || !bottom || !label) return;

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
      },
    });

    tl
      // Label clips in from bottom
      .fromTo(
        label,
        { clipPath: "inset(0 0 100% 0)", y: 12 },
        { clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.9, ease: "expo.out" },
        0.2
      )
      // Hold briefly
      .to({}, { duration: 0.6 })
      // Label fades out
      .to(label, { opacity: 0, duration: 0.3, ease: "power2.in" })
      // Panels split open
      .to(
        top,
        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
        "-=0.15"
      )
      .to(
        bottom,
        { yPercent: 100, duration: 0.9, ease: "power4.inOut" },
        "<"
      );
  }, []);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-top" ref={topRef}>
        <span className="intro-label" ref={labelRef}>
          Curator Editions
        </span>
      </div>
      <div className="intro-panel intro-bottom" ref={bottomRef} />
    </div>
  );
}
