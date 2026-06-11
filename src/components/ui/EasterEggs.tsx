"use client";

import { useEffect, useRef, useState } from "react";
import { codeCivilArticles } from "@/lib/data";
import styles from "./EasterEggs.module.css";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a",
];

export default function EasterEggs() {
  const [article, setArticle] = useState<{ ref: string; text: string } | null>(null);
  const confRef = useRef<HTMLDivElement>(null);
  const kIndex = useRef(0);

  // Konami code
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (article && e.key === "Escape") {
        setArticle(null);
        return;
      }
      kIndex.current =
        e.key === KONAMI[kIndex.current]
          ? kIndex.current + 1
          : e.key === KONAMI[0] ? 1 : 0;
      if (kIndex.current === KONAMI.length) {
        kIndex.current = 0;
        const a = codeCivilArticles[Math.floor(Math.random() * codeCivilArticles.length)];
        setArticle(a);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [article]);

  // Long-press on logo → CONFIDENTIEL stamp
  useEffect(() => {
    const logo = document.querySelector<HTMLElement>(".logo-link");
    const conf = confRef.current;
    if (!logo || !conf) return;

    let timer: ReturnType<typeof setTimeout>;

    const start = () => {
      timer = setTimeout(() => {
        const r = logo.getBoundingClientRect();
        conf.style.left = r.left + 10 + "px";
        conf.style.top = r.bottom + 14 + "px";
        conf.classList.remove(styles.stamped);
        void conf.offsetWidth;
        conf.classList.add(styles.stamped);
      }, 600);
    };
    const end = () => clearTimeout(timer);

    logo.addEventListener("mousedown", start);
    logo.addEventListener("touchstart", start, { passive: true });
    ["mouseup", "mouseleave", "touchend"].forEach((ev) => logo.addEventListener(ev, end));

    return () => {
      logo.removeEventListener("mousedown", start);
      logo.removeEventListener("touchstart", start);
      ["mouseup", "mouseleave", "touchend"].forEach((ev) => logo.removeEventListener(ev, end));
    };
  }, []);

  return (
    <>
      {/* Code civil overlay */}
      <div
        className={`${styles.overlay} ${article ? styles.open : ""}`}
        onClick={() => setArticle(null)}
        role="dialog"
        aria-modal={!!article}
        aria-label="Article du Code civil"
      >
        <div className={styles.fiche} onClick={(e) => e.stopPropagation()}>
          <p className={styles.artNum}>CODE CIVIL — {article?.ref}</p>
          <p className={styles.artTxt}>{article?.text}</p>
          <p className={styles.closeHint}>ÉCHAP. OU CLIC POUR CLASSER SANS SUITE</p>
        </div>
      </div>

      {/* Confidentiel stamp */}
      <div ref={confRef} className={styles.confidentiel} aria-hidden="true">
        CONFIDENTIEL
      </div>
    </>
  );
}
