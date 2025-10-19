import NewsletterFooter from "../components/NewsletterFooter";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../components/Header"; // 👈 Header einbinden

// 📄 Artikel aus content/-Ordner laden
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Datum absichern
      let dateValue = data.date;
      if (dateValue instanceof Date) {
        dateValue = dateValue.toISOString().split("T")[0];
      } else if (typeof dateValue !== "string") {
        dateValue = "1970-01-01";
      }

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Unbenannter Artikel",
        date: dateValue,
        excerpt:
          data.excerpt ||
          content
            .replace(/[#*_>\[\]\(\)`]/g, "")
            .slice(0, 160)
            .trim() + "...",
      };
    });

  // Sortierung: neueste zuerst, "Willkommen" immer oben
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const welcomePost = posts.find((p) => p.slug === "willkommen");
  const sortedPosts = welcomePost
    ? [welcomePost, ...posts.filter((p) => p.slug !== "willkommen")]
    : posts;

  return { props: { posts: sortedPosts } };
}

// 🏠 Startseite-Komponente
export default function Home({ posts }) {
  return (
    <>
      <Header /> {/* 👆 Header oben */}
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>📈 FinanzFreedom Blog</h1>
          <p style={styles.subtitle}>
            Dein Weg zu finanzieller Freiheit – Strategien, Ideen und echte
            Tipps für passives Einkommen.
          </p>
        </header>

        <main style={styles.grid}>
          {posts.map((post) => (
            <article key={post.slug} style={styles.card}>
              <h2 style={styles.cardTitle}>
                <Link href={`/${post.slug}`} style={styles.link}>
                  {post.title}
                </Link>
              </h2>
              <p style={styles.date}>{post.date}</p>
              <p style={styles.excerpt}>{post.excerpt}</p>
              <Link href={`/${post.slug}`} style={styles.button}>
                Weiterlesen →
              </Link>
            </article>
          ))}
        </main>
      </div>
    </>
  );
}

// 💅 Inline Styles (funktionieren beim static export)
const styles = {
  container: {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "0 1rem",
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.6",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 0.5rem",
  },
  subtitle: {
    color: "#666",
    fontSize: "1.1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },
  card: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardTitle: {
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#0070f3",
  },
  date: {
    fontSize: "0.9rem",
    color: "#999",
    marginBottom: "1rem",
  },
  excerpt: {
    color: "#333",
    marginBottom: "1.5rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};
