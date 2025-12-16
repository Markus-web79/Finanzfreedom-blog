// components/ArticleLayout.tsx
import Head from "next/head";
import React from "react";

type ArticleLayoutProps = {
  title: string;
  excerpt?: string;
  category?: string;
  children: React.ReactNode;
};

export default function ArticleLayout({
  title,
  excerpt,
  category,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | FinanzFreedom</title>
        {excerpt && <meta name="description" content={excerpt} />}
      </Head>

      <article
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
        }}
      >
        {category && (
          <div
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              opacity: 0.6,
              marginBottom: "0.5rem",
            }}
          >
            {category}
          </div>
        )}

        <h1
          style={{
            fontSize: "2.2rem",
            lineHeight: 1.25,
            marginBottom: "1rem",
          }}
        >
          {title}
        </h1>

        {excerpt && (
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.8,
              marginBottom: "2rem",
            }}
          >
            {excerpt}
          </p>
        )}

        <section>{children}</section>
      </article>
    </>
  );
}
