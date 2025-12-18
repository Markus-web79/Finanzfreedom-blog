import { GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return {
    props: {
      posts,
    },
  };
};

export default function BlogIndex({ posts }: Props) {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

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
              display: "block",
              padding: "1.5rem",
              borderRadius: "14px",
              background: "#0f172a",
              border: "1px solid #1e293b",
              textDecoration: "none",
              color: "inherit",
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
          </Link>
        ))}
      </div>
    </main>
  );
}
