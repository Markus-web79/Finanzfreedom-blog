import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CATEGORY_CONFIG from "../../../config/categoryConfig";
import Link from "next/link";

export default function ArticlePage({ frontmatter, content, category }) {
  return (
    <div style={{ padding: "2rem" }}>
      <Link href={`/kategorie/${category.slug}`}>← Zurück</Link>

      <h1>{frontmatter.title}</h1>
      {frontmatter.date && <p>{frontmatter.date}</p>}

      <article
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        style={{ marginTop: "2rem" }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const root = path.join(process.cwd(), "content");
  const paths = [];

  Object.values(CATEGORY_CONFIG).forEach((cat) => {
    const folder = path.join(root, cat.slug);
    if (!fs.existsSync(folder)) return;

    fs.readdirSync(folder)
      .filter((f) => f.endsWith(".md"))
      .forEach((file) => {
        paths.push({
          params: {
            kategorie: cat.slug,
            slug: file.replace(".md", "")
          }
        });
      });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content",
    params.kategorie,
    `${params.slug}.md`
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const category = CATEGORY_CONFIG[params.kategorie];

  return {
    props: {
      frontmatter: data,
      content,
      category
    }
  };
}
