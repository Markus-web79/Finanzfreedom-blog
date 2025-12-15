import Head from "next/head";
import Link from "next/link";
import { getAllArticles, Article } from "../lib/content";
import { GetStaticProps } from "next";

type Props = {
  latest: Article[];
};

export default function Home({ latest }: Props) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Geld verstehen. Vermögen aufbauen.</title>
        <meta
          name="description"
          content="FinanzFreedom ist dein unabhängiges Finanzportal für ETFs, Geldanlage und finanzielle Freiheit."
        />
      </Head>

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 16px" }}>
        <h1>FinanzFreedom</h1>
        <p style={{ fontSize: 18, opacity: 0.9 }}>
          Verständliche Guides zu ETFs, Geldanlage und finanzieller Freiheit.
        </p>

        <h2 style={{ marginTop: 32 }}>Neueste Artikel</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {latest.map((a) => {
            const slug = a.slug.split("/").pop();
            return (
              <li key={a.slug} style={{ marginBottom: 18 }}>
                <Link href={`/${slug}`}>
                  <strong>{a.title}</strong>
                </Link>
                <div style={{ opacity: 0.8 }}>{a.description}</div>
              </li>
            );
          })}
        </ul>

        <Link href="/blog">→ Alle Artikel ansehen</Link>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = getAllArticles();
  return {
    props: {
      latest: articles.slice(0, 6),
    },
  };
};
