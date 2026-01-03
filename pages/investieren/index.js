import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().filter(
    (post) =>
      post.category === "investieren" ||
      post.category === "etf" ||
      post.category === "aktien"
  );

  return {
    props: {
      posts,
    },
  };
}

export default function InvestierenHub({ posts }) {
  return (
    <>
      <Head>
        <title>Investieren – ETFs, Broker & Tools | FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht gemacht: ETFs, MSCI World, Broker-Vergleiche & Sparplan-Rechner – alles an einem Ort."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1>Investieren</h1>
          <p>
            ETFs, Sparpläne, Broker & Strategien – strukturiert, unabhängig und
            verständlich.
          </p>
        </section>

        {/* TOOLS */}
        <section style={styles.section}>
          <h2>🧮 Tools & Rechner</h2>

          <div style={styles.grid}>
            <Link href="/tools/etf-sparplan-rechner" style={styles.cardPrimary}>
              <h3>ETF-Sparplan-Rechner</h3>
              <p>
                Berechne in Sekunden, wie viel Vermögen du mit ETFs aufbauen
                kannst.
              </p>
            </Link>
          </div>
        </section>

        {/* VERGLEICHE */}
        <section style={styles.section}>
          <h2>🏦 Vergleiche & Entscheidungen</h2>

          <div style={styles.grid}>
            <Link
              href="/investieren/bester-broker-fuer-etf-sparplaene"
              style={styles.card}
            >
              <h3>Bester Broker für ETF-Sparpläne</h3>
              <p>Kosten, Gebühren & Anbieter im Vergleich.</p>
            </Link>

            <Link
              href="/investieren/msci-world-vs-ftse-all-world"
              style={styles.card}
            >
              <h3>MSCI World vs. FTSE All-World</h3>
              <p>Welcher ETF passt besser zu deiner Strategie?</p>
            </Link>
          </div>
        </section>

        {/* WISSEN */}
        <section style={styles.section}>
          <h2>📚 Wissen & Guides</h2>

          <div style={styles.list}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={styles.listItem}
              >
                <strong>{post.title}</strong>
                {post.excerpt && <p>{post.excerpt}</p>}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  hero: {
    marginBottom: "60px",
  },
  section: {
    marginBottom: "70px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  },
  cardPrimary: {
    background: "#020617",
    border: "2px solid #22d3ee",
    borderRadius: "16px",
    padding: "28px",
    color: "#e5e7eb",
    textDecoration: "none",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    color: "#e5e7eb",
    textDecoration: "none",
  },
  list: {
    display: "grid",
    gap: "20px",
    marginTop: "24px",
  },
  listItem: {
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "#e5e7eb",
  },
};
