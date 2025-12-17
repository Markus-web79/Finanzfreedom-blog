import Link from "next/link";
import { getAllPosts } from "../lib/posts";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
};

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .filter((post) => post.slug && post.slug !== "README")
    .slice(0, 6); // letzte 6 Artikel

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: Props) {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* HERO */}
      <section style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>
          Finanzielle Freiheit aufbauen – Schritt für Schritt
        </h1>
        <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
          Verstehe Geld, Investieren & Versicherungen – einfach erklärt,
          unabhängig und ohne Bullshit.
        </p>
      </section>

      {/* ARTIKEL */}
      <section>
        <h2 style={{ marginBottom: "1.5rem" }}>Neueste Artikel</h2>

        {posts.length === 0 && (
          <p style={{ opacity: 0.7 }}>Noch keine Artikel vorhanden.</p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                background: "#0f172a",
                border: "1px solid #1e293b",
                textDecoration: "none",
                color: "inherit",
                transition: "transform .15s ease, box-shadow .15s ease",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{post.title}</h3>

              {post.excerpt && (
                <p style={{ opacity: 0.8, marginBottom: "0.75rem" }}>
                  {post.excerpt}
                </p>
              )}

              {post.category && (
                <small style={{ color: "#22d3ee" }}>
                  Kategorie: {post.category}
                </small>
              )}
            </Link>
          ))}
        </div>

        {/* MEHR */}
        <div style={{ marginTop: "2.5rem" }}>
          <Link href="/blog" style={{ color: "#22d3ee" }}>
            → Alle Artikel ansehen
          </Link>
        </div>
      </section>
    </main>
  );
}
