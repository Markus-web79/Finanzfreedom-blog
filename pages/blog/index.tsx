import Link from "next/link";
import { useRouter } from "next/router";
import { getAllPosts, PostMeta } from "../../lib/posts";

type Props = {
  posts: PostMeta[];
  categories: string[];
};

export default function BlogIndex({ posts, categories }: Props) {
  const router = useRouter();
  const activeCategory =
    typeof router.query.category === "string" ? router.query.category : "all";

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter(
          (p) => (p.category ?? "").toLowerCase() === activeCategory.toLowerCase()
        );

  function setCategory(category: string) {
    const query = category === "all" ? {} : { category };
    router.push({ pathname: "/blog", query }, undefined, { shallow: true });
  }

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Blog</h1>

      {/* Kategorie-Filter */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1.5rem",
        }}
      >
        <button
          onClick={() => setCategory("all")}
          style={pillStyle(activeCategory === "all")}
        >
          Alle
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={pillStyle(activeCategory.toLowerCase() === cat.toLowerCase())}
          >
            {prettyCategory(cat)}
          </button>
        ))}
      </div>

      {/* Karten-Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: "1rem",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ marginBottom: "0.6rem", opacity: 0.85, fontSize: 13 }}>
              {post.category ? prettyCategory(post.category) : "Allgemein"}
            </div>

            <h2 style={{ margin: 0, fontSize: 20, lineHeight: 1.2 }}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                {post.title}
              </Link>
            </h2>

            {post.excerpt ? (
              <p style={{ marginTop: "0.7rem", opacity: 0.85, lineHeight: 1.5 }}>
                {post.excerpt}
              </p>
            ) : null}

            <div style={{ marginTop: "1rem" }}>
              <Link href={`/blog/${post.slug}`} style={{ fontWeight: 600 }}>
                Weiterlesen →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {filteredPosts.length === 0 ? (
        <p style={{ marginTop: "2rem", opacity: 0.8 }}>
          Keine Artikel in dieser Kategorie gefunden.
        </p>
      ) : null}
    </main>
  );
}

function pillStyle(active: boolean): React.CSSProperties {
  return {
    padding: "0.45rem 0.75rem",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: active ? "rgba(0, 200, 180, 0.18)" : "rgba(255,255,255,0.03)",
    cursor: "pointer",
    fontWeight: active ? 700 : 600,
  };
}

function prettyCategory(cat: string) {
  return cat
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export async function getStaticProps() {
  const posts = getAllPosts();

  const categories = Array.from(
    new Set(
      posts
        .map((p) => (p.category ?? "").trim())
        .filter((c) => c.length > 0)
    )
  );

  return {
    props: {
      posts,
      categories,
    },
  };
}
