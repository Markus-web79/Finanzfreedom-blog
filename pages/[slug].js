import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Pfad zum content-Ordner
const postsDirectory = path.join(process.cwd(), "content");

// Alle möglichen Slugs generieren
export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(/\.md$/, "") },
    }));

  return {
    paths,
    fallback: false, // keine dynamischen Routen zur Laufzeit
  };
}

// Daten für jede Seite bereitstellen
export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  // Sicherheits-Check: existiert Datei?
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const dateValue =
    typeof data.date === "string"
      ? data.date
      : data.date instanceof Date
      ? data.date.toISOString().split("T")[0]
      : "";

  // Markdown in HTML konvertieren
  const htmlContent = marked.parse(content || "");

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

// React-Komponente für den Artikel
export default function Post({ frontmatter, content }) {
  if (!frontmatter) return <p>Artikel nicht gefunden.</p>;

  return (
    <article style={{ maxWidth: "800px", margin: "2rem auto", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        {frontmatter.title}
      </h1>
      {frontmatter.date && (
        <p style={{ color: "#666", marginBottom: "2rem" }}>{frontmatter.date}</p>
      )}
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
