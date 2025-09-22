import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/pages/${post.slug}`}>
              <strong>{post.title || "Unbenannter Artikel"}</strong>
            </Link>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Artikel beim Build laden
export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const posts = files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Unbenannter Artikel",
      date: data.date || "1970-01-01",
      excerpt: data.excerpt || content.slice(0, 120) + "...",
    };
  });

  // Nach Datum sortieren
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}
