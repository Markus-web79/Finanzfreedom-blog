import Link from "next/link";
import { ReactNode } from "react";

type ArticleLayoutProps = {
  title: string;
  intro?: string;
  backLink?: string;
  children: ReactNode;
};

export default function ArticleLayout({
  title,
  intro,
  backLink,
  children,
}: ArticleLayoutProps) {
  return (
    <main
      style={{
        maxWidth: "820px",
        margin: "0 auto",
        padding: "3.5rem 1.5rem",
      }}
    >
      {/* Back link */}
      {backLink && (
        <div style={{ marginBottom: "1.5rem" }}>
          <Link href={backLink} style={{ color: "#2dd4bf" }}>
            ← Zur Sparen-Übersicht
          </Link>
        </div>
      )}

      {/* Title */}
      <h1 style={{ fontSize: "2.3rem", lineHeight: 1.2 }}>{title}</h1>

      {/* Intro */}
      {intro && (
        <p
          style={{
            marginTop: "1.2rem",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            opacity: 0.9,
          }}
        >
          {intro}
        </p>
      )}

      {/* Content */}
      <article className="article-content">{children}</article>

      {/* Styles */}
      <style jsx>{`
        .article-content {
          margin-top: 3rem;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .article-content h2 {
          margin-top: 3.2rem;
          margin-bottom: 1rem;
          font-size: 1.55rem;
        }

        .article-content p {
          margin: 1rem 0;
        }

        .article-content ul,
        .article-content ol {
          margin: 1.2rem 0;
          padding-left: 1.4rem;
        }

        .article-content li {
          margin-bottom: 0.6rem;
        }

        /* Highlight Box (z. B. Regeln, Definitionen) */
        .box {
          background: linear-gradient(180deg, #0f172a, #020617);
          border-left: 4px solid #2dd4bf;
          padding: 1.3rem 1.5rem;
          border-radius: 14px;
          margin: 2.2rem 0;
        }

        /* Positive lists */
        .check li {
          color: #a7f3d0;
        }

        /* Error lists */
        .error li {
          color: #f87171;
        }
      `}</style>
    </main>
  );
}
