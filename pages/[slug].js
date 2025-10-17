import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content");

export function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(/\.md$/, "") },
    }));

  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const dateValue =
    data.date instanceof Date
      ? data.date.toISOString().split("T")[0]
      : typeof data.date === "string"
      ? data.date
      : "1970-01-01";

  // 👇 Wichtig: marked(content) synchron aufrufen, nicht marked.parse()
  const htmlContent = marked(content || "");

  return {
    props: {
      frontmatter: {
        title: data.title || "Unbenannter Artikel",
        date: dateValue,
      },
      content: htmlContent,
    },
  };
}

export default function Post({ frontmatter, content }) {
  return (
    <article style={{ maxWidth: "800px", margin: "2rem auto", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        {frontmatter.title}
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>{frontmatter.date}</p>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
