import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect } from "react";
import Header from "../components/Header";
import NewsletterFooter from "../components/NewsletterFooter";
import "../styles/Home.css";

// 📂 Alle Blogartikel aus content/-Ordner laden
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
    });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const welcomePost = posts.find((post) => post.slug === "willkommen");
  const otherPosts = posts.filter((post) => post.slug !== "willkommen");
  const sortedPosts = welcomePost ? [welcomePost, ...otherPosts] : posts;

  return {
    props: {
      posts: JSON.parse(JSON.stringify(sortedPosts)),
    },
  };
}

// 🏠 Startseite
export default function Home({ posts }) {
  // 🌙 Dark-/Lightmode merken & laden
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div>
      <Header />

      <main className="container">
        <section className="intro">
          <h1>📈 FinanzFreedom Blog</h1>
          <p>
            Dein Weg zu finanzieller Freiheit – Strategien, Ideen und echte Tipps
            für passives Einkommen.
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

      {/* 🌗 Theme Switch Button */}
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
    </div>
  );
}
