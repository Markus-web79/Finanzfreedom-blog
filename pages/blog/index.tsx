import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              padding: "1.5rem",
              borderRadius: "12px",
              background: "#0f172a",
              border: "1px solid #1e293b",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h2>{post.title}</h2>
            {post.excerpt && <p>{post.excerpt}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
}
