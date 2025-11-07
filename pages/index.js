import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HomePage({ posts }) {
  return (
    <main className={styles.main}>
      <section>
        <h2 className={styles.sectionTitle}>Neueste Artikel</h2>

        <div className={styles.cardsContainer}>
          {Object.entries(posts)
            .flatMap(([category, articles]) => articles.slice(0, 3))
            .map((article) => (
              <div className={styles.card} key={article.slug}>
                <h2>{article.title}</h2>
                <p>{article.excerpt || "Finanzwissen einfach erklärt."}</p>
                <Link href={`/${article.category}/${article.slug}`} className={styles.readMore}>
                  Weiterlesen →
                </Link>
              </div>
            ))}
        </div>
      </section>

      {Object.entries(posts).map(([category, articles]) => (
        <section key={category}>
          <h2 className={styles.sectionTitle}>{category.toUpperCase()}</h2>
          <div className={styles.cardsContainer}>
            {articles.map((post) => (
              <div className={styles.card} key={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.excerpt || "Finanzwissen einfach erklärt."}</p>
                <Link href={`/${category}/${post.slug}`} className={styles.readMore}>
                  Weiterlesen →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
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
