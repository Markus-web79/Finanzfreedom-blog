// components/ArticleLayout.tsx
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function ArticleLayout({
  title,
  description,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title} | FinanzFreedom</title>
        {description && (
          <meta name="description" content={description} />
        )}
      </Head>

      <main
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        <article>
          <h1
            style={{
              fontSize: "2.2rem",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}
          >
            {title}
          </h1>

          {children}
        </article>
      </main>
    </>
  );
}
