import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";

const AFFILIATE_LINKS = {
  haftpflicht:
    "https://www.awin1.com/cread.php?s=XXXXX&v=121064&r=2627146",
  hausrat:
    "https://www.awin1.com/cread.php?s=XXXXX&v=121064&r=2627146",
  berufsunfaehigkeit:
    "https://www.awin1.com/cread.php?s=XXXXX&v=121064&r=2627146",
  kfz:
    "https://www.awin1.com/cread.php?s=XXXXX&v=121064&r=2627146",
  krankenversicherung:
    "https://www.awin1.com/cread.php?s=XXXXX&v=121064&r=2627146",
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

        <div
          style={{
            marginTop: "2.5rem",
            lineHeight: "1.7",
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* AFFILIATE CTA */}
        {affiliateLink && (
          <section
            style={{
              marginTop: "4rem",
              padding: "2rem",
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.9))",
              border: "1px solid #1e293b",
            }}
          >
            <h2 style={{ marginBottom: "0.75rem" }}>
              Jetzt Versicherung vergleichen
            </h2>

            <p style={{ opacity: 0.85, maxWidth: "700px" }}>
              Kostenlos & unverbindlich vergleichen. In vielen Fällen lassen sich
              mehrere hundert Euro pro Jahr sparen – bei besseren Leistungen.
            </p>

            <a
              href={affiliateLink}
              target="_blank"
              rel="sponsored noopener"
              style={{
                display: "inline-block",
                marginTop: "1.2rem",
                padding: "14px 22px",
                borderRadius: "12px",
                background: "#14b8a6",
                color: "#020617",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              → Jetzt vergleichen
            </a>

            <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.8rem" }}>
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
