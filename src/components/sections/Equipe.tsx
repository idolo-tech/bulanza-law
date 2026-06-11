import Image from "next/image";
import { team } from "@/lib/data";
import styles from "./Equipe.module.css";

export default function Equipe() {
  return (
    <div className={styles.wrap}>
      <section id="equipe" className={styles.section}>
        <div className={styles.secHead}>
          <h2 className={styles.h2}>L&apos;Équipe</h2>
          <span className={styles.art}>TITRE II — DES ASSOCIÉS</span>
        </div>
        <div className={styles.grid}>
          {team.map((m) => (
            <div
              key={m.name}
              className={`${styles.member} ${
                m.size === "lg" ? styles.lg : m.size === "sm" ? styles.sm : ""
              }`}
            >
              <div className={styles.portrait}>
                <Image
                  src={m.photo}
                  alt={`Portrait de ${m.name}`}
                  fill
                  sizes="(max-width: 860px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority={m.size === "lg"}
                />
              </div>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
