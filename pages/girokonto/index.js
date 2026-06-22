import Link from "next/link";

const GIROKONTO_AFFILIATE_LINK =
  "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Fgirokontovergleich%2F";

export default function GirokontoIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Girokonto Vergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Girokonten, vermeide unnötige Gebühren und finde ein Konto,
          das zu deinem Alltag passt.
        </p>

        <a
          href={GIROKONTO_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Girokonto vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Girokonto-Vergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Viele Menschen zahlen unnötige Kontoführungsgebühren oder nutzen ein
          Girokonto, das nicht optimal zu ihren Bedürfnissen passt.
        </p>

        <p style={styles.p}>
          Ein Vergleich hilft dir dabei, kostenlose Konten, attraktive
          Zusatzleistungen und moderne Banking-Angebote zu finden.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim Girokonto achten solltest</h2
