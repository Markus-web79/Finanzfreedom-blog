import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="FinanzFreedom zeigt dir Strategien, Vergleiche und Tipps für deinen Weg zu finanzieller Freiheit. Starte noch heute!"
        />
      </Head>

      <header className="header">
        <div className="container">
          <h1 className="logo">FinanzFreedom</h1>
          <nav>
            <Link href="/">Startseite</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Finanzielle Freiheit beginnt mit Wissen</h2>
          <p>
            Strategien, Vergleiche und Tipps für deinen Weg zu mehr Wohlstand
            und Unabhängigkeit.
          </p>
          <Link href="/willkommen" className="btn">
            Jetzt starten
          </Link>
        </div>
      </section>

      <main className="main-content">
        <h2 className="section-title">Aktuelle Themen</h2>
        <div className="articles-grid">
          <div className="card">
            <h3>ETF Broker Vergleich 2025</h3>
            <p>
              Finde den besten Anbieter für deine ETF-Investitionen – günstig,
              sicher und transparent.
            </p>
            <Link href="/etf-broker-vergleich-2025">Weiterlesen →</Link>
          </div>

          <div className="card">
            <h3>Diese Versicherungen brauchst du wirklich</h3>
            <p>
              Welche Policen sind sinnvoll – und welche kannst du dir sparen?
              Wir klären auf.
            </p>
            <Link href="/versicherungen-die-du-wirklich-brauchst">
              Weiterlesen →
            </Link>
          </div>

          <div className="card">
            <h3>Dein Weg zur finanziellen Freiheit</h3>
            <p>
              Schritt für Schritt zu mehr Unabhängigkeit – lerne, wie du dein
              Geld für dich arbeiten lässt.
            </p>
            <Link href="/finanzielle-freiheit">Weiterlesen →</Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} FinanzFreedom – Alle Rechte vorbehalten.</p>
      </footer>
    </>
  );
}
