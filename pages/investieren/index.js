import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content/investieren");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));

  const articles = files
    .map((file) => {
      const slug = file.replace(".md", "");

      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? String(data.date) : "2000-01-01",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      articles,
    },
  };
}

export default function InvestierenIndex({ articles }) {
  return (
    <main style={styles.page}>

      {/* HEADER */}
      <section style={styles.header}>
        <Link href="/">
          <span style={styles.back}>← Zur Startseite</span>
        </Link>

        <h1 style={styles.title}>Investieren verstehen</h1>

        <p style={styles.subtitle}>
          Investieren bedeutet, dein Geld gezielt für dich arbeiten zu lassen.
          Wichtig ist nicht Perfektion – sondern ein klarer, einfacher Start.
        </p>
      </section>

      {/* START GUIDE */}
      <section style={styles.guide}>
        <h2 style={styles.h2}>So startest du sinnvoll mit dem Investieren</h2>

        <p style={styles.p}>
          Gerade am Anfang zählt Struktur. Diese Reihenfolge hat sich für viele Anleger bewährt.
        </p>

        <ul style={styles.list}>
          <li>① Grundlagen verstehen</li>
          <li>② ETFs und Anlageformen kennenlernen</li>
          <li>③ Broker auswählen und starten</li>
        </ul>
      </section>

      {/* GUIDE KARTEN */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Einstieg</h2>

        <div style={styles.grid}>
          <Link href="/investieren/etfs">
            <div style={styles.card}>
              <div style={styles.cardBar} />
              <h3 style={styles.cardTitle}>ETFs verstehen</h3>
              <p style={styles.cardText}>
                Warum ETFs für viele Anleger der einfachste Einstieg in den Vermögensaufbau sind.
              </p>
            </div>
          </Link>

          <Link href="/sparen">
            <div style={styles.card}>
              <div style={styles.cardBar} />
              <h3 style={styles.cardTitle}>Sparen & Rücklagen</h3>
              <p style={styles.cardText}>
                Bevor du investierst, solltest du eine stabile finanzielle Basis aufbauen.
              </p>
            </div>
          </Link>

          <Link href="/broker">
            <div style={styles.card}>
              <div style={styles.cardBar} />
              <h3 style={styles.cardTitle}>Broker vergleichen</h3>
              <p style={styles.cardText}>
                Finde den passenden Broker für ETF-Sparpläne und langfristiges Investieren.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* TOOLS */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Tools</h2>

        <div style={styles.grid}>
          <Link href="/tools/etf-sparplan-rechner">
            <div style={styles.card}>
              <div style={styles.cardBar} />
              <h3 style={styles.cardTitle}>ETF Sparplan Rechner</h3>
              <p style={styles.cardText}>
                Berechne, wie sich dein Vermögen mit einem ETF-Sparplan entwickeln kann.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ARTIKEL */}
      <section style={styles.articles}>
        <h2 style={styles.h2}>Weitere Artikel</h2>

        <div style={styles.grid}>
          {articles.map((article) => (
            <Link key={article.slug} href={`/investieren/${article.slug}`}>
              <div style={styles.card}>
                <div style={styles.cardBar} />

                <h3 style={styles.cardTitle}>
                  {article.title}
                </h3>

                <p style={styles.cardText}>
                  {article.description}
                </p>

                <span style={styles.cta}>
                  Artikel lesen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  header: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    textAlign: "center",
  },

  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    fontWeight: 600,
    cursor: "pointer",
  },

  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    opacity: 0.9,
  },

  guide: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    background: "rgba(2, 6, 23, 0.5)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },

  section: {
    maxWidth: "1100px",
    margin: "40px auto",
  },

  articles: {
    maxWidth: "1100px",
    margin: "60px auto",
  },

  h2: {
    fontSize: "1.4rem",
    marginBottom: "20px",
    color: "#ffffff",
  },

  p: {
    marginBottom: "12px",
    lineHeight: 1.7,
  },

  list: {
    paddingLeft: "18px",
    lineHeight: 1.8,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
    minHeight: "180px",
    color: "#e5e7eb",
    cursor: "pointer",
  },

  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#2dd4bf",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },

  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "8px",
    color: "#ffffff",
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.9,
  },

  cta: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    fontWeight: 600,
  },
};
