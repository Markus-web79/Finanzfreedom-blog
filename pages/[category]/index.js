// ✅ FinanzFreedom Kategorie-Seite (mit Ausschluss von "vergleiche")
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

export default function CategoryPage({ category, posts }) {
  return (
    <>
      <Head>
        <title>{category} | FinanzFreedom</title>
        <meta
          name="description"
          content={`Alle Artikel aus der Kategorie ${category} – rund um Finanzen, ETFs, Versicherungen, Geldanlage und finanzielle Freiheit.`}
        />
        <link
          rel="canonical"
          href={`https://finanzfreedom.de/${category}`}
        />
      </Head>

      <main className="category-wrapper">
        <h1>📂 Kategorie: {category}</h1>
        {posts.length === 0 ? (
          <p>In dieser Kategorie sind noch keine Artikel vorhanden.</p>
        ) : (
          <div className="grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${category}/${post.slug}`}
                className="card"
              >
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </main>

      <style jsx>{`
        .category-wrapper {
          max-width: 1100px;
          margin: 60px auto;
          padding: 20px;
          color: #fff;
          text-align: center;
        }
        h1 {
          color: #00e5cf;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .card {
          background: #0a0a0a;
          border: 1px solid #00e5cf33;
          border-radius: 10px;
          padding: 25px;
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          border-color: #00e5cf;
          transform: translateY(-3px);
        }
        .card h2 {
          color: #00e5cf;
          font-size: 1.2rem;
        }
        .card p {
          color: #ccc;
          font-size: 0.95rem;
        }
      `}</style>
    </>
  );
}

// ===================================================
// 🔧 getStaticPaths – erzeugt alle Kategorie-Seiten
// ===================================================
export async function getStaticPaths() {
  const categories = fs
    .readdirSync(path.join(process.cwd(), "content"))
    // ❌ "vergleiche" ausschließen, um Build-Konflikte zu vermeiden
    .filter((cat) => cat !== "vergleiche");

  const paths = categories.map((cat) => ({
    params: { category: cat },
  }));

  return { paths, fallback: false };
}

// ===================================================
// 📂 getStaticProps – lädt Artikel für jeweilige Kategorie
// ===================================================
export async function getStaticProps({ params }) {
  const category = params.category;
  const dir = path.join(process.cwd(), "content", category);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(content);
      return {
        slug: file.replace(".md", ""),
        title: data.title || "Unbenannter Artikel",
        description:
          data.description ||
          "Ein informativer Artikel rund um Finanzen und Geldanlage.",
      };
    });

  return {
    props: {
      category,
      posts,
    },
  };
}
