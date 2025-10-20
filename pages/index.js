import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../components/Header";
import NewsletterFooter from "../components/NewsletterFooter.js";
import "../styles/Home.css"; // Neu: eigenes CSS für modernes Layout

// 🧠 Artikel aus content/-Ordner laden
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

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
        excerpt: data.excerpt || content.slice(0, 150) + "...",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <main className="container">
        <section className="intro">
          <h1>📈 FinanzFreedom Blog</h1>
          <p>Dein Weg zu finanzieller Freiheit – Strategien, Ideen und echte Tipps für passives Einkommen.</p>
        </section>

        <section className="grid">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className="date">{post.date}</p>
              <p className="excerpt">{post.excerpt}</p>
              <Link href={`/posts/${post.slug}`} className="read-more">
                Weiterlesen →
              </Link>
            </article>
          ))}
        </section>
      </main>

      <NewsletterFooter />
    </>
  );
}
