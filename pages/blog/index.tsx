import Link from "next/link";
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
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Blog</h1>

      <div style={styles.grid}>
        {posts.map((post) => (
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

const styles: any = {
  page: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
  },

  title: {
    fontSize: "2.4rem",
    marginBottom: "2rem",
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
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  category: {
    display: "inline-block",
    marginBottom: "0.75rem",
    fontSize: "0.75rem",
    color: "#22d3ee",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.75rem",
    lineHeight: 1.3,
  },

  excerpt: {
    fontSize: "0.95rem",
    opacity: 0.85,
    lineHeight: 1.5,
  },

  readMore: {
    marginTop: "1.25rem",
    fontSize: "0.85rem",
    color: "#22d3ee",
  },
};
