import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Left card: wipe up from bottom
      gsap.fromTo(
        ".page-left",
        { clipPath: "inset(100% 0 0 0)", y: 30 },
        {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".page-left",
            start: "top 85%",
          },
        }
      );

      // Image: curtain wipe left-to-right
      gsap.fromTo(
        ".page-image-wrapper",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.3,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".page-image-wrapper",
            start: "top 85%",
          },
        }
      );

      // Quote: fade + slide up after image
      gsap.fromTo(
        ".right-quote",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".right-quote",
            start: "top 90%",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
