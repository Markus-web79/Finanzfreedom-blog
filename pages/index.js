import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../components/Header";
import NewsletterFooter from "../components/NewsletterFooterFixed";

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
        excerpt: data.excerpt || content.slice(0, 160) + "...",
      };
    });

  // 🔧 Nach Datum sortieren
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // "Willkommen"-Artikel immer zuerst
  const welcomePost = posts.find((p) => p.slug === "willkommen");
  const otherPosts = posts.filter((p) => p.slug !== "willkommen");
  const sortedPosts = welcomePost ? [welcomePost, ...otherPosts] : posts;

  return {
    props: {
      posts: JSON.parse(JSON.stringify(sortedPosts)),
    },
  };
}

// 🧱 React-Komponente: Startseite
export default function Home({ posts }) {
  return (
    <>
      <Header />
      <main style={{ maxWidth: "800px", margin: "2rem auto", lineHeight: "1.6" }}>
        <h1>📈 FinanzFreedom Blog</h1>
        <p>Dein Weg zu finanzieller Freiheit – Strategien, Ideen und echte Tipps für passives Einkommen.</p>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: "2rem" }}>
              <Link href={`/${post.slug}`}>
                <h2 style={{ color: "#0070f3", cursor: "pointer" }}>{post.title}</h2>
              </Link>
              <p style={{ color: "#555", margin: "0.5rem 0" }}>{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/${post.slug}`}>
                <span style={{
                  color: "#0070f3",
                  textDecoration: "underline",
                  cursor: "pointer"
                }}>Weiterlesen →</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <NewsletterFooter />
    </>
  );
}
