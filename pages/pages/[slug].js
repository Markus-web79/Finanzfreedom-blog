import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      title: data.title || "Unbenannter Artikel",
      date: data.date || null,
      content: marked(content),
    },
  };
}

export default function Post({ title, date, content }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>{title}</h1>
      <p><small>{date ? new Date(date).toLocaleDateString("de-DE") : ""}</small></p>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
