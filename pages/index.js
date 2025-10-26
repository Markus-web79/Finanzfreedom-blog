import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // META & Markdown-Symbole entfernen
      const cleanedContent = content
        .replace(/META:.*?#/s, "")
        .replace(/\*\*/g, "")
        .trim();

      const excerpt =
        data.excerpt ||
        data.description ||
        cleanedContent.substring(0, 160) + "...";

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Unbenannter Artikel",
        excerpt,
      };
    });

  // "Willkommen" Artikel nicht anzeigen
  const filteredPosts = posts.filter(
    (post) =>
      !post.slug.toLowerCase().includes("willkommen") &&
      !post.title.toLowerCase().includes("willkommen")
  );

  return {
    props: { posts: filteredPosts },
  };
}

export default function Home({ posts }) {
  return (
    <>
      {/* Header */}
      <header className="header-fade">
        <h1 className="logo">FinanzFreedom</h1>
        <p className="slogan">Finanzielle Freiheit beginnt mit Wissen</p>
        <p className="intro">
          Du brauchst keine Millionen, um anzufangen — jeder Euro kann für dich arbeiten.
        </p>
      </header>

      {/* Artikel-Grid */}
      <main className="main">
        <div className="articles-grid">
          {posts.map((post) => (
            <article key={post.slug} className="article-card fade-in">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href={`/${post.slug}`}>Weiterlesen</Link>
            </article>
          ))}
        </div>
      </main>

      {/* Newsletter Abschnitt */}
      <section className="newsletter fade-in">
        <h2>📩 Newsletter</h2>
        <p>
          Erhalte regelmäßig Tipps zu passivem Einkommen, Investments und finanzieller Freiheit.
        </p>
        <p style={{ color: "#777", fontSize: "0.85rem" }}>
          (Newsletter-Funktion kommt bald)
        </p>
      </section>

      {/* Footer */}
      <footer>
        © 2025 FinanzFreedom. Alle Rechte vorbehalten.
      </footer>
    </>
  );
}
