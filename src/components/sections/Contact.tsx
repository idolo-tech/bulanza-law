"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [ref, setRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = new Date();
    setRef(`CONS-${d.getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.secHead}>
        <h2 className={styles.h2}>L&apos;Approche</h2>
        <span className={styles.art}>TITRE IV — DES VOIES DE RECOURS</span>
      </div>

      <div className={styles.voies}>
        {/* Voie 1 */}
        <div className={styles.voie}>
          <span className={styles.vNum}>VOIE N°1</span>
          <h3 className={styles.vTitle}>Première consultation</h3>
          <p className={styles.vDesc}>
            Exposez la situation en quelques lignes. Le cabinet répond sous 48&nbsp;heures ouvrées.
          </p>
          {submitted ? (
            <p className={styles.formOk}>
              Demande enregistrée. Réf. {ref} — le cabinet répond sous 48 h ouvrées.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="nom"
                placeholder="NOM / SOCIÉTÉ"
                required
                className={styles.field}
              />
              <input
                type="email"
                name="email"
                placeholder="COURRIEL"
                required
                className={styles.field}
              />
              <textarea
                name="objet"
                rows={3}
                placeholder="OBJET DU DIFFÉREND"
                required
                className={styles.field}
              />
              <button type="submit" className={styles.btn}>
                Saisir le cabinet
              </button>
            </form>
          )}
        </div>

        {/* Voie 2 */}
        <div className={styles.voie}>
          <span className={styles.vNum}>VOIE N°2</span>
          <h3 className={styles.vTitle}>Demande urgente</h3>
          <p className={styles.vDesc}>
            Référé, saisie, garde à vue d&apos;un dirigeant&nbsp;: une ligne directe, sans standard.
          </p>
          <a className={styles.tel} href="tel:+33145000000">+33 1 45 00 00 00</a>
          <p className={`${styles.hours} ${styles.push}`}>
            LUN–VEN — 08:00–20:00<br />
            ASTREINTE CONTENTIEUSE — 24/7<br />
            RÉPONSE GARANTIE &lt; 2 H
          </p>
        </div>

        {/* Voie 3 */}
        <div className={styles.voie}>
          <span className={styles.vNum}>VOIE N°3</span>
          <h3 className={styles.vTitle}>Carrières</h3>
          <p className={styles.vDesc}>
            Le cabinet recrute des collaborateurs et des stagiaires qui écrivent avant de plaider. Lettre, pas de formulaire.
          </p>
          <a className={`${styles.vAction} ${styles.push}`} href="#contact">
            Espace carrières
          </a>
        </div>
      </div>

      <div className={styles.adresseBloc}>
        <div className={styles.tampon}>
          BULANZALAWFIRM<br />
          SELARL D&apos;AVOCATS AU BARREAU DE PARIS<br />
          14, RUE DE LA BANQUE — 75002 PARIS<br />
          48.8675° N — 2.3399° E<br />
          TOQUE R-217
        </div>
        <div className={styles.plan} role="img" aria-label="Plan d'accès stylisé, monochrome">
          <span className={styles.axeA} />
          <span className={styles.axeB} />
          <span className={styles.pin} />
          <span className={styles.pinLabel}>14 RUE DE LA BANQUE</span>
        </div>
      </div>
    </section>
  );
}
