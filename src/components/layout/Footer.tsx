import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.name}>BULANZALAWFIRM</p>
          <p className={styles.legal}>
            Société d&apos;exercice libéral à responsabilité limitée d&apos;avocats, enregistrée au barreau de Paris sous le numéro R-217, RCS Paris 882&nbsp;417&nbsp;553. TVA intracommunautaire FR&nbsp;42&nbsp;882417553. Les informations publiées sur ce site ne constituent pas une consultation juridique.
          </p>
        </div>
        <div className={styles.mono}>
          14, RUE DE LA BANQUE<br />
          75002 PARIS<br />
          +33 1 45 00 00 00
        </div>
        <div className={styles.mono}>
          CONTACT@BULANZA.LAW<br />
          LUN–VEN 08:00–20:00<br />
          ASTREINTE 24/7
        </div>
      </div>
      <div className={styles.ref}>
        <span>REF-2026-LANDING-001</span>
        <span>© MMXXVI — TOUS DROITS RÉSERVÉS</span>
      </div>
    </footer>
  );
}
