import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "content");
  console.log("🔍 postsDirectory:", postsDirectory);

  if (!fs.existsSync(postsDirectory)) {
    console.log("❌ content folder not found!");
    return { paths: [], fallback: false };
  }

  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"));

  console.log("✅ Found Markdown files:", filenames);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));

  console.log("✅ Paths generated for Next.js:", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), "content");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    props: {
      title: data.title || "Unbenannter Artikel",
      date: data.date || "1970-01-01",
      htmlContent: marked.parse(content),
    },
  };
}

export default function Post({ title, date, htmlContent }) {
  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        lineHeight: "1.8",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>{title}</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}

