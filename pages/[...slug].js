import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { marked } from "marked";

export default function PostPage({ frontmatter, html, categorySlug }) {
  if (!frontmatter) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "4rem",
        }}
      >
        <h1>404 – Artikel nicht gefunden</h1>
        <Link href="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  const categoryLabels = {
    etfs: "ETFs",
    "geld-anlegen": "Geld anlegen",
    "geld-vermehren": "Geld vermehren",
    tools: "Tools",
    versicherungen: "Versicherungen",
  };

  const label =
    (categorySlug && categoryLabels[categorySlug]) || "Kategorie";

  const categoryHref = categorySlug ? `/${categorySlug}` : "/";

  return (
  <>
    <Head>
      <title>{frontmatter.title} | FinanzFreedom</title>
      <meta
        name="description"
        content={
          frontmatter.description ||
          "Artikel auf FinanzFreedom – Finanzen einfach erklärt."
        }
      />
    </Head>

    <main style={{ maxWidth: "800px", margin: "2rem auto", color: "white" }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
        <Link href="/" style={{ color: "#00bfa5", textDecoration: "none" }}>
          Startseite
        </Link>{" "}
        › {frontmatter.category || "Allgemein"} › {frontmatter.title}
      </div>

      {/* Kategorie-Leiste */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
          borderBottom: "1px solid rgba(0,194,179,0.3)",
          paddingBottom: "0.8rem",
        }}
      >
        {[
          { name: "ETFs", path: "/etfs" },
          { name: "Geld anlegen", path: "/geld-anlegen" },
          { name: "Geld vermehren", path: "/geld-vermehren" },
          { name: "Versicherungen", path: "/versicherungen" },
          { name: "Tools", path: "/tools" },
        ].map((cat) => (
          <Link
            key={cat.path}
            href={cat.path}
            style={{
              color:
                frontmatter.category?.toLowerCase() ===
                cat.name.toLowerCase()
                  ? "#00e5cf"
                  : "#d0d0d0",
              fontWeight: "500",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {cat.name}
          </Link>
        ))}
      </nav>

      {/* Artikel */}
      <h1 style={{ marginBottom: "1rem" }}>{frontmatter.title}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ lineHeight: "1.7" }}
      />

      {/* Themen-Box unten */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          borderTop: "1px solid rgba(0,194,179,0.3)",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#00bfa5", marginBottom: "1rem" }}>
          🧭 Mehr Themen entdecken:
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {[
            { name: "ETFs", path: "/etfs" },
            { name: "Geld anlegen", path: "/geld-anlegen" },
            { name: "Versicherungen", path: "/versicherungen" },
            { name: "Tools", path: "/tools" },
          ].map((cat) => (
            <Link
              key={cat.path}
              href={cat.path}
              style={{
                color: "#d0d0d0",
                textDecoration: "none",
                border: "1px solid rgba(0,194,179,0.4)",
                padding: "0.4rem 1rem",
                borderRadius: "5px",
                transition: "0.2s",
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  </>
);
}
