import { publications } from "@/lib/data";
import styles from "./Publications.module.css";

export default function Publications() {
  return (
    <section id="publications" className={`${styles.section} section-publications`}>
      <div className={styles.secHead}>
        <h2 className={styles.h2}>Publications</h2>
        <span className={styles.art}>TITRE III — DE LA DOCTRINE</span>
      </div>
      <div className={styles.grid}>
        {publications.map((p) => (
          <a key={p.datetime} className={styles.pub} href="#publications">
            <time dateTime={p.datetime} className={styles.date}>{p.date}</time>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.tags}>
              {p.tags.map((t) => `(${t})`).join(" ")}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
