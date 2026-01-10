import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function VersicherungDetail({ frontmatter, content }) {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}>
      <Link href="/versicherungen" style={{ color: "#2dd4bf" }}>
        ← Zurück zu Versicherungen
      </Link>

      <h1 style={{ marginTop: "30px" }}>{frontmatter.title}</h1>

      {frontmatter.description && (
        <p style={{ opacity: 0.8, marginBottom: "30px" }}>
          {frontmatter.description}
        </p>
      )}

      <article
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ lineHeight: "1.7" }}
      />
    </main>
  );
}

export async function getStaticPaths() {
  const dirPath = path.join(process.cwd(), "content/versicherungen");
  const files = fs.readdirSync(dirPath);

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
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
      content,
    },
  };
}
