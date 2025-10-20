import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../components/Header";
import NewsletterFooter from "../components/NewsletterFooter";


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
        excerpt: content.slice(0, 200) + "...",
      };
    });

  // Neueste Artikel zuerst
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}

// 🏠 Startseiten-Komponente
export default function Home({ posts }) {
  return (
    <div>
      <Header />
      <main>
        <h1>📈 FinanzFreedom Blog</h1>
        <p>
          Dein Weg zu finanzieller Freiheit – Strategien, Ideen und echte Tipps
          für passives Einkommen.
        </p>

        <div className="post-list">
          {posts.map((post) => (
            <div key={post.slug} className="post-card">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/${post.slug}`}>Weiterlesen →</Link>
            </div>
          ))}
        </div>
      </main>

      <NewsletterFooter />
    </div>
  );
}
