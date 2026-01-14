import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Overview.module.css";

export default function EtfsIndex() {
  return (
    <>
      <Head>
        <title>ETFs verstehen & investieren | FinanzFreedom</title>
        <meta
          name="description"
          content="ETFs einfach erklärt: MSCI World, Emerging Markets und mehr. Verständlich, langfristig und ohne Verkaufsdruck."
        />
      </Head>

      <div className={styles.wrapper}>
        <Link href="/" className={styles.back}>
          ← Zur Startseite
        </Link>

        <header className={styles.header}>
          <h1>ETFs verstehen & investieren</h1>
          <p className={styles.intro}>
            ETFs (Exchange Traded Funds) sind eine der einfachsten und
            kostengünstigsten Möglichkeiten, langfristig Vermögen aufzubauen.
            Hier findest du einen klaren, strukturierten Einstieg.
          </p>
        </header>

        <section>
          <h2>Grundlagen</h2>

          <div className={styles.grid}>
            {/* MSCI WORLD */}
            <div className={styles.card}>
              <div className={styles.icon}>🌍</div>
              <h3>MSCI World</h3>
              <p>
                Der Klassiker unter den ETFs. Weltweit investieren in über
                1.500 Unternehmen aus Industrieländern – mit nur einem Produkt.
              </p>
              <Link href="/etfs/msci-world" className={styles.link}>
                Zum Artikel →
              </Link>
            </div>

            {/* EMERGING MARKETS */}
            <div className={`${styles.card} ${styles.disabled}`}>
              <div className={styles.icon}>📈</div>
              <h3>MSCI Emerging Markets</h3>
              <p>
                Investieren in Schwellenländer wie China, Indien oder Brasilien.
                Höheres Risiko – aber auch höhere Chancen.
              </p>
              <span className={styles.soon}>Folgt demnächst</span>
            </div>

            {/* MSCI ACWI */}
            <div className={`${styles.card} ${styles.disabled}`}>
              <div className={styles.icon}>🌐</div>
              <h3>MSCI ACWI</h3>
              <p>
                Kombiniert Industrie- und Schwellenländer in einem einzigen ETF.
                Die „Alles-in-einem“-Lösung für viele Anleger.
              </p>
              <span className={styles.soon}>Folgt demnächst</span>
            </div>
          </div>
        </section>

        {/* CTA BOX */}
        <div className={styles.cta}>
          <h3>Du willst direkt sinnvoll starten?</h3>
          <p>
            Beginne mit dem MSCI World. Er ist für viele Anleger die einfachste
            Grundlage für langfristigen Vermögensaufbau.
          </p>
          <Link href="/etfs/msci-world" className={styles.ctaButton}>
            👉 Zum MSCI-World-Guide
          </Link>
        </div>
      </div>
    </>
  );
}
