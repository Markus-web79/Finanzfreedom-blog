import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return {
    props: { posts },
  };
};

export default function BlogIndex({ posts }: any) {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
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
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
