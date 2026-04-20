import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useChaptersAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header: left title clips up, right text slides in from right
      gsap.fromTo(
        ".header-left",
        { clipPath: "inset(0 0 100% 0)", y: 20 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".chapters-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".header-right",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".chapters-header",
            start: "top 80%",
          },
        }
      );

      // Body columns: stagger in with skew
      gsap.fromTo(
        ".body-left, .body-middle, .body-right",
        { y: 50, opacity: 0, skewY: 2 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".chapters-body",
            start: "top 80%",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
