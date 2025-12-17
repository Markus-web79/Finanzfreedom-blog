import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }) {
  const router = useRouter();
  const { cat } = router.query;

  const categories = [
    "Alle",
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))),
  ];

  const [activeCategory, setActiveCategory] = useState("Alle");

  // 🔄 Sync URL → State
  useEffect(() => {
    if (typeof cat === "string") {
      const match = categories.find(
        (c) => c.toLowerCase() === cat.toLowerCase()
      );
      if (match) setActiveCategory(match);
    } else {
      setActiveCategory("Alle");
    }
  }, [cat]);

  // 🔗 State → URL
  function selectCategory(category: string) {
    setActiveCategory(category);

    if (category === "Alle") {
      router.push("/blog", undefined, { shallow: true });
    } else {
      router.push(
        `/blog?cat=${encodeURIComponent(category)}`,
        undefined,
        { shallow: true }
      );
    }
  }

  const filteredPosts =
    activeCategory === "Alle"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const [featuredPost, ...restPosts] = filteredPosts;

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Blog</h1>

      {/* CATEGORY TABS */}
      <div style={styles.tabs}>
        {categories.map((catName) => (
          <button
            key={catName}
            onClick={() => selectCategory(catName)}
            style={{
              ...styles.tab,
              ...(activeCategory === catName ? styles.tabActive : {}),
            }}
          >
            {catName}
          </button>
        ))}
      </div>

      {/* FEATURED */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} style={styles.featured}>
          <span style={styles.featuredLabel}>
            {featuredPost.category || "Featured"}
          </span>
          <h2 style={styles.featuredTitle}>{featuredPost.title}</h2>
          {featuredPost.excerpt && (
            <p style={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
          )}
          <span style={styles.readMore}>Artikel lesen →</span>
        </Link>
      )}

      {/* GRID */}
      <div style={styles.grid}>
        {restPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={styles.card}
          >
            <div>
              {post.category && (
                <span style={styles.category}>{post.category}</span>
              )}
              <h2 style={styles.cardTitle}>{post.title}</h2>
              {post.excerpt && (
                <p style={styles.excerpt}>{post.excerpt}</p>
              )}
            </div>
            <span style={styles.readMore}>Weiterlesen →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

/* STYLES */
const styles: any = {
  page: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
  },

  title: {
    fontSize: "2.4rem",
    marginBottom: "1.5rem",
  },

  tabs: {
    display: "flex",
    gap: "0.75rem",
    marginBottom: "2.5rem",
    flexWrap: "wrap",
  },

  tab: {
    padding: "0.45rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#94a3b8",
    fontSize: "0.8rem",
    cursor: "pointer",
  },

  tabActive: {
    background: "#22d3ee",
    color: "#020617",
    borderColor: "#22d3ee",
  },

  featured: {
    display: "block",
    padding: "2.5rem",
    marginBottom: "3rem",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    border: "1px solid #22d3ee",
    textDecoration: "none",
    color: "inherit",
  },

  featuredLabel: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: "#22d3ee",
  },

  featuredTitle: {
    fontSize: "1.8rem",
    margin: "1rem 0",
  },

  featuredExcerpt: {
    fontSize: "1.05rem",
    opacity: 0.85,
    maxWidth: "700px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.5rem",
    borderRadius: "16px",
    background: "#0f172a",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "inherit",
  },

  category: {
    display: "inline-block",
    marginBottom: "0.75rem",
    fontSize: "0.75rem",
    color: "#22d3ee",
    textTransform: "uppercase",
  },

  cardTitle: {
    fontSize: "1.15rem",
    marginBottom: "0.75rem",
  },

  excerpt: {
    fontSize: "0.95rem",
    opacity: 0.8,
    lineHeight: 1.5,
  },

  readMore: {
    marginTop: "1.25rem",
    fontSize: "0.85rem",
    color: "#22d3ee",
  },
};
