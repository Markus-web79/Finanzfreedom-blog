import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // 🔒 Nur serialisierbare Werte
      const dateValue =
        data.date instanceof Date
          ? data.date.toISOString().split("T")[0]
          : typeof data.date === "string"
          ? data.date
          : "";

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Unbenannter Artikel",
        excerpt: data.excerpt || data.description || "",
        date: dateValue,
      };
    });

  const sortedPosts = posts.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  return {
    props: { posts: sortedPosts },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <header>
        <h1>FinanzFreedom Blog</h1>
        <p>Finanzielle Unabhängigkeit beginnt mit Wissen 💡</p>
      </header>

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

      <section className="newsletter">
        <h2>💌 Newsletter</h2>
        <p>
          Erhalte regelmäßig Tipps zu passivem Einkommen, Investments und 
          finanzieller Freiheit.
        </p>

        <form>
          <input
            type="email"
            placeholder="Deine E-Mail-Adresse"
            disabled
          />
          <button type="button" disabled>
            Jetzt anmelden
          </button>
          <p style={{ marginTop: "1rem", color: "#777", fontSize: "0.9rem" }}>
            (Newsletter-Funktion kommt bald)
          </p>
        </form>
      </section>

      <footer>
        © {new Date().getFullYear()} FinanzFreedom. Alle Rechte vorbehalten.
      </footer>
    </>
  );
}
