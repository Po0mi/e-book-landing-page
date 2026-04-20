import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFooterAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Brand block: slide up from bottom
      gsap.fromTo(
        ".top-brand",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-top",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Nav columns: stagger in from right
      gsap.fromTo(
        ".nav-col",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-top",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Wordmark: clip-path wipe left-to-right
      gsap.fromTo(
        ".footer-wordmark span",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".footer-wordmark",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bottom bar: fade up
      gsap.fromTo(
        ".footer-bottom",
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-bottom",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
