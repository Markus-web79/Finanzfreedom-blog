import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

export default function CategoryPage({ category, articles }) {
  return (
    <>
      <Head>
        <title>
          {category.charAt(0).toUpperCase() + category.slice(1)} – FinanzFreedom
        </title>
        <meta
          name="description"
          content={`Artikel und Tipps zum Thema ${category} auf FinanzFreedom.`}
        />
      </Head>

      <main style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1rem" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#00bfa5",
            marginBottom: "2rem",
            textTransform: "capitalize",
          }}
        >
          {category.replace("-", " ")}
        </h1>

        {articles.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            Noch keine Artikel in dieser Kategorie.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {articles.map((article) => (
              <div
                key={article.slug}
                style={{
                  background: "#0f2027",
                  border: "1px solid #00bfa5",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "260px",
                }}
              >
                <div>
                  <h2 style={{ marginTop: 0 }}>{article.title}</h2>
                  <p style={{ opacity: 0.8 }}>
                    {article.description.slice(0, 120)}...
                  </p>
                </div>

                <Link
                  href={`/${article.slug}`}
                  style={{
                    color: "#00bfa5",
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginTop: "1rem",
                  }}
                >
                  Weiterlesen →
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs
    .readdirSync(contentDir)
    .filter((dir) => fs.statSync(path.join(contentDir, dir)).isDirectory());

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const categoryDir = path.join(process.cwd(), "content", category);
  const articles = [];

  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir);
    for (const file of files) {
      if (file.endsWith(".md")) {
        const raw = fs.readFileSync(path.join(categoryDir, file), "utf-8");
        const { data } = matter(raw);

        articles.push({
          title: data.title || file.replace(".md", ""),
          description:
            data.metaDescription ||
            data.description ||
            "Finanzwissen einfach erklärt.",
          slug: `${category}/${file.replace(".md", "")}`,
        });
      }
    }
  }

  return { props: { category, articles } };
}
