import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTestimonialsAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header title: clip-path reveal
      gsap.fromTo(
        ".t-title",
        { clipPath: "inset(0 0 100% 0)", y: 16 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".t-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bento cells: stagger in with fade + y
      gsap.fromTo(
        ".t-one, .t-two, .t-three",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".t-bento",
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
