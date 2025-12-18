import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts";

export default function BlogIndex({ posts }: any) {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
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
              <h2>{post.title}</h2>
              {post.excerpt && <p>{post.excerpt}</p>}
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
