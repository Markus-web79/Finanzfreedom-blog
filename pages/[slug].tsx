import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllArticles, Article } from "../lib/content";

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  const title = article.title?.trim() || "Artikel";
  const description = article.description?.trim() || "";
  const canonicalPath = `/${article.slug.split("/").pop()}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <link rel="canonical" href={canonicalPath} />
      </Head>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "32px 16px" }}>
        <header style={{ marginBottom: 18 }}>
          <p style={{ opacity: 0.7, margin: 0 }}>
            {article.category ? article.category.toUpperCase() : ""}
            {article.date ? ` • ${article.date}` : ""}
          </p>
          <h1 style={{ margin: "10px 0 0" }}>{title}</h1>
          {description ? (
            <p style={{ marginTop: 10, fontSize: 18, opacity: 0.9 }}>
              {description}
            </p>
          ) : null}
        </header>

        {/* ✅ Robust: erstmal als Text rendern, damit es NIE am Markdown scheitert */}
        <article
          style={{
            lineHeight: 1.7,
            fontSize: 16,
            whiteSpace: "pre-wrap",
          }}
        >
          {article.content}
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles();

  const paths = articles.map((a) => {
    // content.ts kann Pfade enthalten; wir nehmen als Route immer das letzte Segment
    const last = a.slug.split("/").filter(Boolean).pop() || a.slug;
    return { params: { slug: last } };
  });

  // Wichtig: fallback false => nur bekannte Seiten werden gebaut
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slugParam = String(ctx.params?.slug || "");

  const articles = getAllArticles();

  // Wir matchen robust gegen das letzte Segment (Dateiname/Slug)
  const article =
    articles.find((a) => (a.slug.split("/").pop() || a.slug) === slugParam) ||
    null;

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
  };
};
