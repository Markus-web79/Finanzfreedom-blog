import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllArticles, Article } from "../../lib/content";

type Props = {
  articles: Article[];
};

export default function Blog({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Alle Artikel – FinanzFreedom</title>
        <meta
          name="description"
          content="Alle Artikel zu ETFs, Geldanlage und finanzieller Freiheit auf FinanzFreedom."
        />
      </Head>

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 16px" }}>
        <h1>Alle Artikel</h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {articles.map((a) => {
            const slug = a.slug.split("/").pop();
            return (
              <li key={a.slug} style={{ marginBottom: 22 }}>
                <Link href={`/${slug}`}>
                  <strong>{a.title}</strong>
                </Link>
                <div style={{ opacity: 0.8 }}>{a.description}</div>
                <small style={{ opacity: 0.6 }}>
                  Kategorie: {a.category}
                </small>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      articles: getAllArticles(),
    },
  };
};
