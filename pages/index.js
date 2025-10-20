import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../components/Header";
import NewsletterFooter from "../components/NewsletterFooter.js"; // <— exakt dieser Name!


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
        excerpt: content.substring(0, 180) + "...",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <Header />
      <section className="intro">
        <h1>📈 FinanzFreedom Blog</h1>
        <p>Dein Weg zu finanzieller Freiheit – Strategien, Ideen und echte Tipps für passives Einkommen.</p>
      </section>

      <div className="grid">
        {posts.map((post) => (
          <div key={post.slug} className="card">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/${post.slug}`} className="read-more">
              Weiterlesen →
            </Link>
          </div>
        ))}
      </div>

      <NewsletterFooter />
    </div>
  );
}
