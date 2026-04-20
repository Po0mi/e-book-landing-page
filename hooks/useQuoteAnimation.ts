import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useQuoteAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Quote: one-shot clip-path reveal when section enters viewport
      gsap.fromTo(
        ".content",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".quote",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtle scale-up on enter
      gsap.fromTo(
        ".content",
        { scale: 0.97, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".quote",
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
