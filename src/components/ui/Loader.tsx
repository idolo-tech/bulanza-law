"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`${styles.loader} ${done ? styles.done : ""}`} aria-hidden="true">
      <div className={styles.stamp}>BULANZALAWFIRM</div>
    </div>
  );
}
