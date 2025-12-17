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
          maxWidth: "780px",
          margin: "0 auto",
          padding: "3.5rem 1.25rem",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Arial, sans-serif',
          color: "#111",
          lineHeight: 1.75,
        }}
      >
        <article>
          {/* Kategorie / Breadcrumb – später */}
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "0.75rem",
            }}
          >
            FinanzFreedom · Artikel
          </div>

          {/* Titel */}
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              fontWeight: 700,
            }}
          >
            {title}
          </h1>

          {/* Content */}
          <div
            style={{
              fontSize: "1.05rem",
            }}
          >
            {children}
          </div>
        </article>
      </main>
    </>
  );
}
