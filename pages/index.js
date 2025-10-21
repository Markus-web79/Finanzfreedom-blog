import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../components/Header";
import NewsletterFooter from "../components/NewsletterFooter";
import "../styles/Home.css";

// 🧩 Blogartikel aus dem content/-Ordner laden
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Datum prüfen & in korrektes Format bringen
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
    });
{/* 🌙 Theme Switch Button */}
<button
  className="theme-toggle"
  onClick={() => {
    const html = document.documentElement;
    const newTheme =
      html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }}
  title="Theme wechseln"
>
  🌓
</button>
  // Nach Datum sortieren (neueste zuerst)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // "Willkommen" immer zuerst anzeigen
  const welcomePost = posts.find((post) => post.slug === "willkommen");
  const otherPosts = posts.filter((post) => post.slug !== "willkommen");
  const sortedPosts = welcomePost ? [welcomePost, ...otherPosts] : posts;

  return {
    props: {
      posts: JSON.parse(JSON.stringify(sortedPosts)),
    },
  };
}

// 🏠 Hauptseite des Blogs
export default function Home({ posts }) {
  return (
    <div>
      <Header />

      <main className="container">
        <section className="intro">
          <h2>📚 Neueste Artikel</h2>
          <p>
            Entdecke Strategien, Tipps und echte Erfahrungen rund um Finanzen,
            Vermögensaufbau & passives Einkommen.
          </p>
        </section>

        <section className="grid">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/posts/${post.slug}`} className="read-more">
                Weiterlesen →
              </Link>
            </article>
          ))}
        </section>
      </main>

      <NewsletterFooter />
    </div>
  );
}
