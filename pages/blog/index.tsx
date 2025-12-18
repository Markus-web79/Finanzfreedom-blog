import { useRouter } from "next/router";
import { getAllPosts } from "../../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  const router = useRouter();

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => router.push(`/blog/${post.slug}`)}
            style={{
              padding: "1.5rem",
              borderRadius: "12px",
              background: "#0f172a",
              border: "1px solid #1e293b",
              cursor: "pointer",
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
          </div>
        ))}
      </div>
    </main>
  );
}
