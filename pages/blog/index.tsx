import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
};

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const posts = getAllPosts().filter(
    (post: Post) => post.slug && post.slug !== "README"
  );

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // 🔹 Kategorien sauber aus Posts generieren
  const categories: string[] = Array.from(
    new Set(
      posts
        .map((p) => p.category)
        .filter((c): c is string => typeof c === "string")
    )
  );

  // 🔹 Posts nach Kategorie filtern
  const filteredPosts = activeCategory
    ? posts.filter(
        (p) =>
          p.category &&
          p.category.toLowerCase() === activeCategory.toLowerCase()
      )
    : posts;

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      {/* Kategorien */}
      {categories.length > 0 && (
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "1px solid #334155",
              background: activeCategory ? "#020617" : "#22d3ee",
              color: activeCategory ? "#e5e7eb" : "#020617",
              cursor: "pointer",
            }}
          >
            Alle
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "1px solid #334155",
                background:
                  activeCategory === cat ? "#22d3ee" : "#020617",
                color:
                  activeCategory === cat ? "#020617" : "#e5e7eb",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Artikel */}
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              padding: "1.5rem",
              borderRadius: "12px",
              background: "#0f172a",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #1e293b",
            }}
          >
            <h2 style={{ marginBottom: "0.5rem" }}>{post.title}</h2>

            {post.excerpt && (
              <p style={{ opacity: 0.8 }}>{post.excerpt}</p>
            )}

            {post.category && (
              <small style={{ color: "#22d3ee" }}>
                Kategorie: {post.category}
              </small>
            )}
          </Link>
        ))}

        {filteredPosts.length === 0 && (
          <p style={{ opacity: 0.7 }}>Keine Artikel gefunden.</p>
        )}
      </div>
    </main>
  );
}
