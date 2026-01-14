import Link from "next/link";
import styles from "../../styles/Overview.module.css";

export default function EtfsIndex() {
  const etfs = [
    {
      title: "MSCI World",
      description:
        "Der Klassiker unter den ETFs – weltweit investieren mit nur einem Produkt.",
      slug: "msci-world",
      icon: "🌍",
    },
    {
      title: "MSCI Emerging Markets",
      description:
        "Schwellenländer-ETF – höhere Chancen, höhere Schwankungen.",
      slug: "msci-emerging-markets",
      icon: "🚀",
      disabled: true,
    },
    {
      title: "MSCI ACWI",
      description:
        "Industrie- und Schwellenländer kombiniert in einem ETF.",
      slug: "msci-acwi",
      icon: "🌐",
      disabled: true,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.back}>
        ← Zur Startseite
      </Link>

      <header className={styles.header}>
        <h1>ETFs verstehen & investieren</h1>
        <p>
          ETFs (Exchange Traded Funds) sind eine der einfachsten und
          kostengünstigsten Möglichkeiten, langfristig Vermögen aufzubauen.
          Hier findest du einen strukturierten Überblick.
        </p>
      </header>

      <section className={styles.grid}>
        {etfs.map((etf) => (
          <div
            key={etf.slug}
            className={`${styles.card} ${
              etf.disabled ? styles.disabled : ""
            }`}
          >
            <div className={styles.icon}>{etf.icon}</div>
            <h3>{etf.title}</h3>
            <p>{etf.description}</p>

            {!etf.disabled ? (
              <Link href={`/etfs/${etf.slug}`} className={styles.link}>
                Zum Artikel →
              </Link>
            ) : (
              <span className={styles.soon}>Folgt demnächst</span>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
