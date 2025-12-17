import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import { getCategories } from "../config/categoryConfig";

export async function getStaticProps() {
  const posts = getAllPosts();
  const categories = getCategories();

  return {
    props: {
      posts,
      categories,
    },
  };
}

export default function Home({ posts, categories }) {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      
      {/* HERO */}
      <section style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
          Finanzielle Freiheit aufbauen – Schritt für Schritt
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: 700, color: "#555" }}>
          Verstehe Geld, Investieren & Versicherungen – einfach erklärt, ohne Bullshit.
        </p>
      </section>

      {/* KATEGORIEN */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Themen</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              style={{
                padding: "0.75rem 1.2rem",
                border: "1px solid #ddd",
                borderRadius: 6,
                textDecoration: "none",
                color: "#000",
                background: "#f9f9f9",
              }}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </section>

      {/* ARTIKEL */}
      <section>
        <h2 style={{ marginBottom: "1.5rem" }}>Neueste Artikel</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: 8,
                padding: "1.2rem",
                textDecoration: "none",
                color: "#000",
                background: "#fff",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{post.title}</h3>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>
                {post.excerpt || "Artikel lesen →"}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
