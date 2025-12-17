import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "../../lib/posts";

export default function BlogPost({ post }) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | FinanzFreedom</title>
        {post.excerpt && (
          <meta name="description" content={post.excerpt} />
        )}
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> ›{" "}
          <Link href="/blog">Blog</Link>
          {post.category && <> › {post.category}</>}
        </nav>

        {/* Header */}
        <header style={styles.header}>
          {post.category && (
            <span style={styles.category}>{post.category}</span>
          )}
          <h1 style={styles.title}>{post.title}</h1>
          {post.excerpt && (
            <p style={styles.excerpt}>{post.excerpt}</p>
          )}
        </header>

        {/* CONTENT */}
        <article
          style={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA / Affiliate Placeholder */}
        <aside style={styles.cta}>
          <h3>Nächster Schritt</h3>
          <p>
            Vergleiche jetzt passende Anbieter oder starte direkt
            mit einer einfachen Lösung.
          </p>
          <button style={styles.ctaButton}>
            Zum Vergleich →
          </button>
        </aside>

        {/* Back */}
        <div style={styles.back}>
          <Link href="/blog">← Zurück zum Blog</Link>
        </div>
      </main>
    </>
  );
}

/* DATA */
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};

/* STYLES */
const styles: any = {
  page: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    lineHeight: 1.75,
  },

  breadcrumb: {
    fontSize: "0.8rem",
    opacity: 0.7,
    marginBottom: "1.5rem",
  },

  header: {
    marginBottom: "2.5rem",
  },

  category: {
    display: "inline-block",
    fontSize: "0.75rem",
    color: "#22d3ee",
    textTransform: "uppercase",
    marginBottom: "0.75rem",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: "1rem",
    lineHeight: 1.3,
  },

  excerpt: {
    fontSize: "1.05rem",
    opacity: 0.85,
  },

  content: {
    fontSize: "1.05rem",
  },

  cta: {
    marginTop: "4rem",
    padding: "2rem",
    borderRadius: "16px",
    background: "#0f172a",
    border: "1px solid #1e293b",
  },

  ctaButton: {
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    border: "none",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: 600,
    cursor: "pointer",
  },

  back: {
    marginTop: "3rem",
    fontSize: "0.9rem",
  },
};
