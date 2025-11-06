import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home({ posts = {} }) {
  if (!posts || Object.keys(posts).length === 0) {
    return (
      <div style={{ color: "#fff", textAlign: "center", padding: "4rem" }}>
        <h1>📉 Keine Artikel gefunden</h1>
        <p>Bitte überprüfe die Verbindung oder den Content-Ordner.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie dein Geld für dich arbeiten lässt – einfach, ehrlich und unabhängig. Finanzielle Freiheit beginnt mit Wissen."
        />
      </Head>

      <Hero />

      <main className={styles.main}>
        {Object.keys(posts).map((category) => (
          <section key={category} className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {category.replace("-", " ").toUpperCase()}
            </h2>

            <div className={styles.grid}>
              {posts[category].map((post) => (
                <div key={post.slug} className={styles.card}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link
                    href={`/${post.category}/${post.slug}`}
                    className={styles.readMore}
                  >
                    Weiterlesen →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");
  const posts = {};

  // Funktion liest alle Markdown-Dateien rekursiv ein
  function readMarkdownFiles(dir, category) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        readMarkdownFiles(fullPath, entry.name);
      } else if (entry.name.endsWith(".md")) {
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContent);

        if (!posts[category]) posts[category] = [];

        posts[category].push({
          title: data.title || entry.name.replace(".md", ""),
          excerpt:
            data.excerpt ||
            "Keine Zusammenfassung vorhanden. (Bitte in Markdown-Datei ergänzen)",
          category,
          slug: entry.name.replace(".md", ""),
        });
      }
    }
  }

  // Hauptverzeichnis "content" durchgehen
  const categories = fs.readdirSync(contentDir, { withFileTypes: true });

  for (const entry of categories) {
    const fullPath = path.join(contentDir, entry.name);

    if (entry.isDirectory()) {
      readMarkdownFiles(fullPath, entry.name);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContent);

      if (!posts["allgemein"]) posts["allgemein"] = [];

      posts["allgemein"].push({
        title: data.title || entry.name.replace(".md", ""),
        excerpt:
          data.excerpt ||
          "Keine Zusammenfassung vorhanden. (Bitte in Markdown-Datei ergänzen)",
        category: "allgemein",
        slug: entry.name.replace(".md", ""),
      });
    }
  }

  // ⚙️ Ungewünschte rechtliche Seiten (Impressum, Kontakt, Datenschutz) ausfiltern
  for (const category in posts) {
    posts[category] = posts[category].filter(
      (p) =>
        !["impressum", "kontakt", "datenschutz"].includes(
          p.slug.toLowerCase()
        )
    );
  }

  return { props: { posts } };
}
