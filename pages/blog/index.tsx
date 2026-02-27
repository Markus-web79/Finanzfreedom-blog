import Link from "next/link";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllPosts } from "../../lib/posts";

type Post = {
  slug: string; // normalisiert auf string
  title: string;
  excerpt?: string;
  category?: string;
};

function normalizeSlug(slug: unknown): string | null {
  if (typeof slug === "string") return slug;
  if (Array.isArray(slug) && slug.every((s) => typeof s === "string")) {
    return slug.join("/");
  }
  return null;
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const rawPosts = getAllPosts();

  const posts: Post[] = rawPosts
    .map((p: any) => {
      const slug = normalizeSlug(p?.slug);
      if (!slug) return null;

      return {
        slug,
        title: typeof p?.title === "string" && p.title.trim() ? p.title : slug,
        excerpt: typeof p?.excerpt === "string" ? p.excerpt : "",
        category: typeof p?.category === "string" ? p.category : "",
      } as Post;
    })
    .filter((p): p is Post => Boolean(p))
    .filter((p) => p.slug.toLowerCase() !== "readme");

  return {
    props: { posts },
  };
};

export default function BlogIndex({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post) => (
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

              {!!post.excerpt && <p style={{ opacity: 0.8 }}>{post.excerpt}</p>}

              {!!post.category && (
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
