import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
};

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Blog</h1>
      <p style={{ color: "#9ca3af", marginBottom: "2.5rem" }}>
        Praxisnahe Artikel zu Geldanlage, ETFs und finanzieller Freiheit.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              {post.title}
            </h2>

            {post.excerpt && (
              <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                {post.excerpt}
              </p>
            )}

            <Link
              href={`/blog/${post.slug}`}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                color: "#22c55e",
                fontWeight: 500,
              }}
            >
              Lesen →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
