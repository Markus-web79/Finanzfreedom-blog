import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts";

export default function BlogIndex({ posts }: any) {
  return (
    <>
      <Head>
        <title>Blog | FinanzFreedom</title>
      </Head>

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <h1 style={{ marginBottom: "2rem" }}>Blog</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <a
                style={{
                  display: "block",
                  padding: "1.5rem",
                  borderRadius: "14px",
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  textDecoration: "none",
                  color: "inherit",
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
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return {
    props: {
      posts,
    },
  };
};
