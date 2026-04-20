import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useInquiryAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header title: clip-path reveal
      gsap.fromTo(
        ".inquiry-header .header-title",
        { clipPath: "inset(0 0 100% 0)", y: 16 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".inquiry-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Header label: fade in from right
      gsap.fromTo(
        ".inquiry-header .header-label",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".inquiry-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Accordion items: stagger in one by one
      gsap.fromTo(
        ".accordion-item",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".inquiry-accordion",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
