import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function GeldAnlegen({ articles }) {
  return (
    <>
      <Head>
        <title>Geld anlegen | FinanzFreedom</title>
        <meta
          name="description"
          content="Die besten Wege, dein Geld langfristig und sicher zu vermehren – einfach erklärt."
        />
      </Head>

      <section style={{ padding: "3rem 20px", maxWidth: "1200px", margin: "0 auto", color: "white" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>Geld anlegen</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "2rem" }}>
          Strategien & Tipps, um dein Geld wachsen zu lassen – Schritt für Schritt erklärt.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}>
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}`}
              style={{
                display: "block",
                padding: "20px",
                background: "#111",
                borderRadius: "12px",
                border: "1px solid #222",
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#00c2b3" }}>{a.title}</h3>
              <p style={{ opacity: 0.7 }}>{a.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content", "geld-anlegen");
  const files = fs.readdirSync(dir);
  const articles = files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        title: data.title || "Ohne Titel",
        description: data.description || "",
        slug: `geld-anlegen/${file.replace(".md", "")}`,
      };
    });

  return { props: { articles } };
}
