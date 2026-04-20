"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.scss";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    // Lerp outline to follow with lag
    const tick = () => {
      outlineX += (mouseX - outlineX) * 0.1;
      outlineY += (mouseY - outlineY) * 0.1;
      gsap.set(outline, { x: outlineX, y: outlineY });
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", onMove);

    // Hover states on interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor]");

    const onEnter = () => {
      dot.classList.add("dot--hover");
      outline.classList.add("outline--hover");
    };
    const onLeave = () => {
      dot.classList.remove("dot--hover");
      outline.classList.remove("outline--hover");
    };

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Hide when leaving window
    const onLeaveWindow = () => {
      gsap.to([dot, outline], { opacity: 0, duration: 0.2 });
    };
    const onEnterWindow = () => {
      gsap.to([dot, outline], { opacity: 1, duration: 0.2 });
    };
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      document.documentElement.style.cursor = "";
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-outline" ref={outlineRef} />
    </>
  );
}
