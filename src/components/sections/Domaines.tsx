import { expertises } from "@/lib/data";
import styles from "./Domaines.module.css";

export default function Domaines() {
  return (
    <section id="domaines" className={`${styles.section} section-domaines`}>
      <div className={styles.secHead}>
        <h2 className={styles.h2}>Domaines</h2>
        <span className={styles.art}>TITRE I — DES COMPÉTENCES DU CABINET</span>
      </div>
      <ul className={styles.list}>
        {expertises.map((e) => (
          <li key={e.num} className={`${styles.domaine} domaine-item`}>
            <span className={styles.num}>{e.num} —</span>
            <h3 className={styles.h3}>{e.title}</h3>
            <p className={styles.note}>{e.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
