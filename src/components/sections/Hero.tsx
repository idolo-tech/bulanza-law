"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import RevealText from "@/components/ui/RevealText";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = window.innerHeight;
        const p = Math.min(y / h, 1);
        if (bgRef.current) bgRef.current.style.transform = `scale(${1 + p * 0.1})`;
        if (innerRef.current) innerRef.current.style.transform = `translateX(${p * -60}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div ref={bgRef} className={styles.bg} aria-hidden="true" />
      <span className={styles.ref}>REF-2026-LANDING-001</span>
      <div ref={innerRef} className={styles.inner}>
        <RevealText>
          <h1 className={styles.h1}>BULANZALAWFIRM</h1>
        </RevealText>
        <RevealText delay={100}>
          <p className={styles.baseline}>Droit des affaires &amp; contentieux complexe</p>
        </RevealText>
      </div>
      <div className={styles.scrollHint} aria-hidden="true" />
    </section>
  );
}
