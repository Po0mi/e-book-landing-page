import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePricingAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header title: clip-path reveal
      gsap.fromTo(
        ".pricing-header .header-title",
        { clipPath: "inset(0 0 100% 0)", y: 16 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".pricing-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Header label: fade in
      gsap.fromTo(
        ".pricing-header .header-label",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards: stagger up with slight scale
      gsap.fromTo(
        ".pricing-card",
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
