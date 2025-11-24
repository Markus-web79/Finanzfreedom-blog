// pages/kategorie/[kategorie]/index.js
import Head from "next/head";
import Link from "next/link";
import CATEGORY_CONFIG from "../../../config/categoryConfig.js";
import CATEGORY_CONFIG from "../../../../config/categoryConfig.js";

export default function CategoryPage({ categoryInfo, articles }) {
  return (
    <main style={{ padding: "2rem" }}>
      <Head>
        <title>{categoryInfo.label} | FinanzFreedom</title>
        <meta name="description" content={categoryInfo.heroSubtitle} />
      </Head>

      <header style={{ marginBottom: "2rem" }}>
        <h1>{categoryInfo.label}</h1>
        <p>{categoryInfo.heroSubtitle}</p>
      </header>

      <section>
        <h2>Artikel</h2>
        {articles.length === 0 && <p>Keine Artikel in dieser Kategorie.</p>}

        <ul style={{ listStyle: "none", padding: 0 }}>
          {articles.map((article) => (
            <li key={article.slug} style={{ marginBottom: "1rem" }}>
              <Link href={`/kategorie/${categoryInfo.slug}/${article.slug}`}>
                {article.title}
              </Link>
              {article.date && (
                <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                  {article.date}
                  {article.readingTime && ` · ca. ${article.readingTime} Min. Lesezeit`}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <br />
      <Link href="/">Zurück zur Startseite</Link>
    </main>
  );
}

export async function getStaticPaths() {
  const categories = Object.keys(CATEGORY_CONFIG);

  const paths = categories.map((key) => ({
    params: { kategorie: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { kategorie } = params;

  const categoryInfo = CATEGORY_CONFIG[kategorie];

  if (!categoryInfo) {
    return { notFound: true };
  }

  const articles = getArticlesByCategory(kategorie).sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return a.date < b.date ? 1 : -1;
  });

  return {
    props: {
      categoryInfo,
      articles,
    },
  };
}
