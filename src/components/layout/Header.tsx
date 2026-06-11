"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <a
          className={`${styles.logo} logo-link`}
          href="#hero"
          title="Clic long : à vos risques et périls"
        >
          BULANZA
        </a>
        <button
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={menuOpen ? styles.line1Open : styles.line1} />
          <span className={menuOpen ? styles.line2Open : styles.line2} />
          <span className={menuOpen ? styles.line3Open : styles.line3} />
        </button>
      </header>

      <nav
        className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
        aria-label="Navigation principale"
      >
        <ol className={styles.menuList}>
          {[
            ["01", "Domaines", "#domaines"],
            ["02", "L'Équipe", "#equipe"],
            ["03", "Publications", "#publications"],
            ["04", "Contact", "#contact"],
          ].map(([num, label, href]) => (
            <li key={num}>
              <a href={href} onClick={close} className={styles.menuLink}>
                <span className={styles.menuNum}>{num}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
        <div className={styles.menuFoot}>
          <span>BULANZALAWFIRM — SELARL D&apos;AVOCATS</span>
          <span>PARIS · 48.8721 N, 2.3110 E</span>
        </div>
      </nav>
    </>
  );
}
