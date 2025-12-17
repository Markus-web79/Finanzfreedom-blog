import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts();

  const filteredPosts = posts.filter(
    (post) => post.slug && post.slug !== "README"
  );

  return {
    props: {
      posts: filteredPosts,
    },
  };
}

export default function BlogIndex({ posts }) {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post) => (
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
      </div>
    </main>
  );
}
