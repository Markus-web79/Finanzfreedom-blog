import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";

/**
 * ZENTRALE AFFILIATE-LINKS
 * Slug = Dateiname der MD-Datei
 */
const AFFILIATE_LINKS = {
  privathaftpflicht:
    "https://www.awin1.com/cread.php?awinmid=121064&awinaffid=2627146&ued=https%3A%2F%2Fwww.burda-vergleicht.de%2Fprivathaftpflicht",

  kfz:
    "https://www.awin1.com/cread.php?awinmid=121064&awinaffid=2627146&ued=https%3A%2F%2Fwww.burda-vergleicht.de%2Fkfz",

  krankenversicherung:
    "https://www.awin1.com/cread.php?awinmid=121064&awinaffid=2627146&ued=https%3A%2F%2Fwww.burda-vergleicht.de%2Fkrankenversicherung",

  hausrat:
    "https://www.awin1.com/cread.php?awinmid=121064&awinaffid=2627146&ued=https%3A%2F%2Fwww.burda-vergleicht.de%2Fhausratversicherung",

  berufsunfaehigkeit:
    "https://www.awin1.com/cread.php?awinmid=121064&awinaffid=2627146&ued=https%3A%2F%2Fwww.burda-vergleicht.de%2Fberufsunfaehigkeit",
};

export default function VersicherungArticle({ frontmatter, content, slug }) {
  const affiliateLink = AFFILIATE_LINKS[slug];

  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || frontmatter.title}
        />
      </Head>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        <Link href="/versicherungen" style={{ color: "#2dd4bf" }}>
          ← Zurück zu Versicherungen
        </Link>

        <h1 style={{ marginTop: "1.5rem" }}>{frontmatter.title}</h1>

        {frontmatter.intro && (
          <p style={{ opacity: 0.85, maxWidth: "800px" }}>
            {frontmatter.intro}
          </p>
        )}

        {/* CONTENT */}
        <div
          style={{
            marginTop: "2.5rem",
            lineHeight: "1.7",
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* AFFILIATE CTA – EINMAL, SAUBER, AUTOMATISCH */}
        {affiliateLink && (
          <section
            style={{
              marginTop: "4rem",
              padding: "2.2rem",
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
              border: "1px solid #1e293b",
            }}
          >
            <h2 style={{ marginBottom: "0.75rem" }}>
              Jetzt Tarif vergleichen
            </h2>

            <p style={{ opacity: 0.85, maxWidth: "720px" }}>
              Kostenlos & unverbindlich vergleichen. In vielen Fällen lassen sich
              mehrere hundert Euro pro Jahr sparen – bei besseren Leistungen.
            </p>

            <a
              href={affiliateLink}
              target="_blank"
              rel="sponsored noopener"
              style={{
                display: "inline-block",
                marginTop: "1.4rem",
                padding: "15px 26px",
                borderRadius: "14px",
                background: "#14b8a6",
                color: "#020617",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              → Jetzt vergleichen
            </a>

            <p style={{ fontSize: "0.8rem", opacity: 0.55, marginTop: "0.9rem" }}>
              * Werbelink / Affiliate-Link
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/versicherungen");
  const files = fs.readdirSync(dir);

  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/versicherungen",
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content: marked.parse(content),
      slug: params.slug,
    },
  };
}
