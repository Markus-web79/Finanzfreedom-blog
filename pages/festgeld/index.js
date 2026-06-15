import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/VergleichPage.module.css";

export default function FestgeldVergleich() {
  const affiliateLink =
    "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Ffestgeld%2F";

  return (
    <>
      <Head>
        <title>Festgeld Vergleich 2026 | Sichere Zinsen vergleichen</title>
        <meta
          name="description"
          content="Vergleiche Festgeld-Angebote und sichere dir feste Zinsen für dein Geld. Erfahre, worauf du bei Laufzeit, Einlagensicherung und Rendite achten solltest."
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Festgeld Vergleich</p>
          <h1>Festgeld vergleichen und feste Zinsen sichern</h1>
          <p className={styles.intro}>
            Mit Festgeld legst du dein Geld für eine feste Laufzeit an und
            erhältst dafür planbare Zinsen. Besonders sinnvoll ist Festgeld,
            wenn du dein Geld nicht täglich brauchst und Wert auf Sicherheit und
            klare Konditionen legst.
          </p>

          <a
            href={affiliateLink}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className={styles.primaryButton}
          >
            Jetzt Festgeld vergleichen
          </a>
        </section>

        <section className={styles.content}>
          <h2>Für wen lohnt sich Festgeld?</h2>
          <p>
            Festgeld eignet sich für Geld, das du für mehrere Monate oder Jahre
            nicht benötigst. Im Gegenzug erhältst du meist höhere und feste
            Zinsen als auf einem normalen Girokonto.
          </p>

          <h2>Worauf solltest du achten?</h2>
          <ul>
            <li>Höhe des Zinssatzes</li>
            <li>Laufzeit des Angebots</li>
            <li>Mindestanlagebetrag</li>
            <li>Einlagensicherung</li>
            <li>Land und Bank des Anbieters</li>
          </ul>

          <h2>Festgeld oder Tagesgeld?</h2>
          <p>
            Tagesgeld ist flexibler, weil du jederzeit an dein Geld kommst.
            Festgeld bietet dafür oft planbare Zinsen über eine feste Laufzeit.
            Ideal ist häufig eine Kombination aus beidem: Tagesgeld für den
            Notgroschen, Festgeld für Geld, das du sicher parken möchtest.
          </p>

          <div className={styles.ctaBox}>
            <h2>Festgeld-Angebote vergleichen</h2>
            <p>
              Vergleiche jetzt aktuelle Festgeld-Angebote und prüfe, welche
              Laufzeit und Verzinsung zu deinem Sparziel passt.
            </p>

            <a
              href={affiliateLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className={styles.secondaryButton}
            >
              Zum Festgeldvergleich
            </a>
          </div>

          <p className={styles.disclaimer}>
            Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
            über diesen Link ein Angebot abschließt. Für dich entstehen dadurch
            keine zusätzlichen Kosten.
          </p>

          <Link href="/" className={styles.backLink}>
            Zurück zur Startseite
          </Link>
        </section>
      </main>
    </>
  );
}
