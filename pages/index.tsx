import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts();

  const featured = posts.slice(0, 3);

  const categories = Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean))
  );

  return {
    props: {
      featured,
      categories,
    },
  };
}

export default function Home({ featured, categories }) {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Finanzielle Freiheit verstehen & aufbauen
        </h1>
        <p style={styles.heroText}>
          Klare Erklärungen zu ETFs, Versicherungen & Geldanlage.
          Ohne Bullshit. Ohne Verkaufstricks.
        </p>

        <Link href="/blog" style={styles.heroButton}>
          Zum Blog →
        </Link>
      </section>

      {/* KATEGORIEN */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Themen</h2>

        <div style={styles.categories}>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?cat=${encodeURIComponent(cat)}`}
              style={styles.categoryCard}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED ARTIKEL */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Empfohlene Artikel</h2>

        <div style={styles.grid}>
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={styles.card}
            >
              {post.category && (
                <span style={styles.cardCategory}>{post.category}</span>
              )}
              <h3 style={styles.cardTitle}>{post.title}</h3>
              {post.excerpt && (
                <p style={styles.cardExcerpt}>{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

/* STYLES */
const styles: any = {
  page: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1.5rem 4rem",
  },

  /* HERO */
  hero: {
    marginBottom: "4rem",
    padding: "3rem",
    borderRadius: "24px",
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
    border: "1px solid #1e293b",
  },

  heroTitle: {
    fontSize: "2.6rem",
    marginBottom: "1rem",
    lineHeight: 1.2,
  },

  heroText: {
    fontSize: "1.1rem",
    opacity: 0.85,
    maxWidth: "700px",
    marginBottom: "1.5rem",
  },

  heroButton: {
    display: "inline-block",
    padding: "0.7rem 1.4rem",
    borderRadius: "10px",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: 600,
    textDecoration: "none",
  },

  /* SECTIONS */
  section: {
    marginBottom: "4rem",
  },

  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
  },

  /* CATEGORIES */
  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "1rem",
  },

  categoryCard: {
    padding: "1.2rem",
    borderRadius: "14px",
    border: "1px solid #1e293b",
    background: "#020617",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: 600,
  },

  /* FEATURED GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },

  card: {
    padding: "1.5rem",
    borderRadius: "16px",
    background: "#0f172a",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "inherit",
  },

  cardCategory: {
    fontSize: "0.75rem",
    color: "#22d3ee",
    textTransform: "uppercase",
  },

  cardTitle: {
    fontSize: "1.15rem",
    margin: "0.75rem 0",
  },

  cardExcerpt: {
    fontSize: "0.95rem",
    opacity: 0.8,
  },
};
