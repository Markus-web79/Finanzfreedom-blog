import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().filter((p) => p?.slug && p.slug !== "README");

  const pick = (catList, n) =>
    posts
      .filter((p) => catList.includes((p.category || "").toLowerCase()))
      .slice(0, n);

  // Falls Kategorien noch nicht überall gesetzt sind, zeigen wir einfach die neuesten Artikel als Fallback.
  const fallback = posts.slice(0, 6);

  const basics = pick(["investieren", "grundlagen"], 3);
  const etfs = pick(["etfs", "etf"], 3);
  const strategy = pick(["strategien", "strategie"], 3);

  return {
    props: {
      basics: basics.length ? basics : fallback.slice(0, 3),
      etfs: etfs.length ? etfs : fallback.slice(0, 3),
      strategy: strategy.length ? strategy : fallback.slice(0, 3),
    },
  };
}

export default function Investieren({ basics, etfs, strategy }) {
  return (
    <>
      <Head>
        <title>Investieren | FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren verständlich erklärt: Grundlagen, ETFs, Strategien – strukturiert, unabhängig, Schritt für Schritt."
        />
      </Head>

      <main style={S.page}>
        {/* Breadcrumb */}
        <nav style={S.breadcrumb}>
          <Link href="/">Start</Link> <span style={{ opacity: 0.6 }}>→</span>{" "}
          <span>Investieren</span>
        </nav>

        {/* Header */}
        <header style={S.header}>
          <h1 style={S.h1}>Investieren – verständlich erklärt</h1>
          <p style={S.lead}>
            Kein Hype, kein Bullshit. Hier bekommst du eine klare Struktur, wie
            du langfristig Vermögen aufbaust – vom Einsteiger bis Fortgeschritten.
          </p>

          <div style={S.quickGrid}>
            <a href="#grundlagen" style={S.quickCard}>
              <div style={S.quickTitle}>Grundlagen</div>
              <div style={S.quickText}>Risiko, Zeit, Zinseszins, Mindset.</div>
              <div style={S.quickLink}>Springen →</div>
            </a>

            <a href="#etfs" style={S.quickCard}>
              <div style={S.quickTitle}>ETFs & Sparpläne</div>
              <div style={S.quickText}>Der einfachste Start für die meisten.</div>
              <div style={S.quickLink}>Springen →</div>
            </a>

            <a href="#strategien" style={S.quickCard}>
              <div style={S.quickTitle}>Strategien</div>
              <div style={S.quickText}>Buy & Hold, Rebalancing, Einmalanlage.</div>
              <div style={S.quickLink}>Springen →</div>
            </a>

            <a href="#tools" style={S.quickCard}>
              <div style={S.quickTitle}>Tools & Entscheidungen</div>
              <div style={S.quickText}>Vergleiche, Rechner & Checklisten (kommt).</div>
              <div style={S.quickLink}>Öffnen →</div>
            </a>
          </div>
        </header>

        {/* Section: Grundlagen */}
        <section id="grundlagen" style={S.section}>
          <div style={S.sectionHeader}>
            <h2 style={S.h2}>1) Grundlagen des Investierens</h2>
            <p style={S.sectionText}>
              Wenn du das hier verstanden hast, bist du vielen schon voraus:
              Risiko ist normal, Zeit ist dein Freund, und „dranbleiben“ schlägt
              „perfekt timen“.
            </p>
          </div>

          <div style={S.cards}>
            {basics.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={S.cardLink}>
                <article style={S.card}>
                  <h3 style={S.cardTitle}>{p.title}</h3>
                  <p style={S.cardExcerpt}>{p.excerpt || "Kurzbeschreibung folgt."}</p>
                  <div style={S.cardMeta}>
                    <span style={S.badge}>{p.category || "investieren"}</span>
                    <span style={S.readMore}>Lesen →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: ETFs */}
        <section id="etfs" style={S.section}>
          <div style={S.sectionHeader}>
            <h2 style={S.h2}>2) ETFs & Sparpläne</h2>
            <p style={S.sectionText}>
              Für die meisten ist das der sauberste Einstieg: breit gestreut,
              automatisierbar, langfristig.
            </p>
          </div>

          <div style={S.cards}>
            {etfs.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={S.cardLink}>
                <article style={S.card}>
                  <h3 style={S.cardTitle}>{p.title}</h3>
                  <p style={S.cardExcerpt}>{p.excerpt || "Kurzbeschreibung folgt."}</p>
                  <div style={S.cardMeta}>
                    <span style={S.badge}>{p.category || "etfs"}</span>
                    <span style={S.readMore}>Lesen →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Strategien */}
        <section id="strategien" style={S.section}>
          <div style={S.sectionHeader}>
            <h2 style={S.h2}>3) Strategien & Konzepte</h2>
            <p style={S.sectionText}>
              Hier wird’s „Portfolio-ernst“: Plan, Regeln, und weniger Bauchgefühl.
            </p>
          </div>

          <div style={S.cards}>
            {strategy.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={S.cardLink}>
                <article style={S.card}>
                  <h3 style={S.cardTitle}>{p.title}</h3>
                  <p style={S.cardExcerpt}>{p.excerpt || "Kurzbeschreibung folgt."}</p>
                  <div style={S.cardMeta}>
                    <span style={S.badge}>{p.category || "strategien"}</span>
                    <span style={S.readMore}>Lesen →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Tools */}
        <section id="tools" style={S.section}>
          <div style={S.sectionHeader}>
            <h2 style={S.h2}>4) Tools & Entscheidungen</h2>
            <p style={S.sectionText}>
              Das wird unser Einnahme-Hebel: Vergleiche, Rechner, Checklisten.
              Noch ohne Spam – zuerst sauber aufbauen.
            </p>
          </div>

          <div style={S.toolsBox}>
            <h3 style={{ margin: 0 }}>Kommt als Nächstes</h3>
            <ul style={{ marginTop: "0.8rem", lineHeight: 1.9 }}>
              <li>Broker-Vergleich (Affiliate-ready)</li>
              <li>ETF-Auswahl-Checkliste</li>
              <li>Sparplan-Rechner</li>
              <li>„Erste Schritte“-Funnel (E-Mail später)</li>
            </ul>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/blog" style={S.toolsLink}>
                In der Zwischenzeit: Alle Artikel →
              </Link>
            </div>
          </div>
        </section>

        {/* Back */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/">← Zurück zur Startseite</Link>
        </div>
      </main>
    </>
  );
}

const S = {
  page: { maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" },

  breadcrumb: { fontSize: "0.85rem", opacity: 0.75, marginBottom: "1.5rem" },

  header: { marginBottom: "3rem" },
  h1: { fontSize: "2.4rem", lineHeight: 1.15, marginBottom: "1rem" },
  lead: { maxWidth: "760px", fontSize: "1.1rem", opacity: 0.85, lineHeight: 1.6 },

  quickGrid: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.25rem",
  },
  quickCard: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    padding: "1.25rem",
    borderRadius: "14px",
    background: "#0f172a",
    border: "1px solid #1e293b",
  },
  quickTitle: { fontWeight: 700, marginBottom: "0.4rem" },
  quickText: { opacity: 0.8, lineHeight: 1.5 },
  quickLink: { marginTop: "0.9rem", color: "#22d3ee", fontWeight: 600 },

  section: { marginTop: "3.5rem" },
  sectionHeader: { marginBottom: "1.2rem" },
  h2: { fontSize: "1.6rem", marginBottom: "0.4rem" },
  sectionText: { maxWidth: "860px", opacity: 0.8, lineHeight: 1.6 },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
  },
  cardLink: { textDecoration: "none", color: "inherit" },
  card: {
    padding: "1.25rem",
    borderRadius: "14px",
    background: "#020617",
    border: "1px solid #1e293b",
  },
  cardTitle: { margin: 0, marginBottom: "0.6rem" },
  cardExcerpt: { margin: 0, opacity: 0.78, lineHeight: 1.6 },

  cardMeta: { marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: {
    fontSize: "0.75rem",
    padding: "0.2rem 0.55rem",
    borderRadius: "999px",
    background: "#0f172a",
    border: "1px solid #1e293b",
    color: "#22d3ee",
  },
  readMore: { color: "#22d3ee", fontWeight: 600 },

  toolsBox: {
    padding: "1.6rem",
    borderRadius: "16px",
    background: "#0f172a",
    border: "1px solid #1e293b",
  },
  toolsLink: { color: "#22d3ee", fontWeight: 700, textDecoration: "none" },
};
