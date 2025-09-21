import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Alle verfügbaren Artikel finden (statische Routen)
export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

// Einzelnen Artikel laden
export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, `${params.slug}.md`);
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

// Komponente zum Anzeigen eines Artikels
export default function Post({ title, date, content }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>{title}</h1>
      {date && <p><i>{date}</i></p>}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
