import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type ArticleLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function ArticleLayout({
  title,
  description,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | FinanzFreedom</title>
        {description && (
          <meta name="description" content={description} />
        )}
      </Head>

      <Header />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          lineHeight: 1.7,
        }}
      >
        <article>
          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>

          <div>{children}</div>
        </article>
      </main>

      <Footer />
    </>
  );
}
