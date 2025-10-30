import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({ allPosts }) {
  return (
    <main className={styles.main}>
      {/* 🌟 Hero-Bereich */}
      <section className={styles.hero}>
        <h1>Finanzielle Freiheit beginnt mit Wissen</h1>
        <p>
          Lerne, wie du dein Geld verstehst, clever anlegst und Schritt für Schritt
          finanzielle Unabhängigkeit erreichst – ehrlich, einfach und seriös.
        </p>
        <a href="#themen">Jetzt starten 🚀</a>
      </section>

      {/* 📚 Blog-Artikel */}
      <section id="themen" className={styles.container}>
        <h2 className={styles.sectionTitle}>Aktuelle Themen</h2>
        <div className={styles.grid}>
          {allPosts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span>Weiterlesen →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ⚙️ Footer */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} FinanzFreedom – Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}

export async function getStaticProps() {
  // Beispielhafte Daten (du kannst das später mit echten Blogdaten ersetzen)
  const allPosts = [
    {
      slug: 'etf-broker-vergleich-2025',
      title: 'ETF Broker Vergleich 2025',
      excerpt: 'Finde den besten Anbieter für deine ETF-Investitionen – günstig, sicher und transparent.',
    },
    {
      slug: 'versicherung-check-2025',
      title: 'Diese Versicherungen brauchst du wirklich',
      excerpt: 'Welche Policen sind sinnvoll – und welche kannst du dir sparen? Wir klären auf.',
    },
    {
      slug: 'finanzielle-freiheit',
      title: 'Dein Weg zur finanziellen Freiheit',
      excerpt: 'Schritt für Schritt zu mehr Unabhängigkeit – lerne, wie du dein Geld für dich arbeiten lässt.',
    },
  ];

  return { props: { allPosts } };
}
