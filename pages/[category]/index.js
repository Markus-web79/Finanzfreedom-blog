import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

export default function CategoryPage({ category, posts }) {
  return (
    <>
      <Head>
        <title>{category.toUpperCase()} | FinanzFreedom</title>
        <meta
          name="description"
          content={`Artikel und Tipps aus der Kategorie ${category} auf FinanzFreedom – Finanzen einfach erklärt.`}
        />
      </Head>

      <main
        style={{
          maxWidth: "1000px",
          margin: "2rem auto",
          padding: "0 1rem",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "2rem",
            color: "#00bfa5",
            textTransform: "uppercase",
          }}
        >
          {category}
        </h1>

        {posts.length === 0 ? (
          <p>Keine Artikel in dieser Kategorie gefunden.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {posts.map((post) => (
              <div
                key={post.slug}
                style={{
                  background: "#111",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                }}
              >
                <h2 style={{ color: "#00bfa5", marginBottom: "0.5rem" }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
                  {post.excerpt}
                </p>
                <Link
                  href={`/${category}/${post.slug}`}
                  style={{
                    color: "#00bfa5",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Weiterlesen →
                </Link>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <Link
            href="/"
            style={{
              background: "#00bfa5",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              transition: "background 0.3s ease",
            }}
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs
    .readdirSync(contentDir)
    .filter((dir) =>
      fs.statSync(path.join(contentDir, dir)).isDirectory()
    );

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const categoryDir = path.join(process.cwd(), "content", category);

  let posts = [];

  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir);
    posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(categoryDir, file);
        const raw = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(raw);
        const slug = file.replace(".md", "");
        return { ...data, slug };
      });
  }

  return { props: { category, posts } };
}
