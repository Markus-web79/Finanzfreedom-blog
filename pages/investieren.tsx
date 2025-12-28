import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().filter(
    (post) => post.category === "etfs" || post.category === "investieren"
  );

  return {
    props: { posts },
  };
};

export default function Investieren({ posts }: any) {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1>Investieren</h1>
      <p style={{ opacity: 0.8, maxWidth: "700px" }}>
        Grundlagen, Strategien und praktische Anleitungen rund ums Investieren –
        verständlich erklärt und unabhängig recherchiert.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "2.5rem",
        }}
      >
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                background: "#0f172a",
                border: "1px solid #1e293b",
                transition: "transform 0.15s ease",
              }}
            >
              <h3>{post.title}</h3>
              {post.excerpt && (
                <p style={{ opacity: 0.75 }}>{post.excerpt}</p>
              )}
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
