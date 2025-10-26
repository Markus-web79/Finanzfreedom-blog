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
    <article className="post-container fade-in">
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && <p className="post-date">{frontmatter.date}</p>}

      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/" className="back-home">← Zur Übersicht</Link>
      </p>
    </article>
  );
}
