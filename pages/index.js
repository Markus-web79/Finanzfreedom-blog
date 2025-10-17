import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  try {
    const postsDirectory = path.join(process.cwd(), "content");
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        let dateValue = data.date;
        if (dateValue instanceof Date) {
          dateValue = dateValue.toISOString().split("T")[0];
        } else if (typeof dateValue !== "string") {
          dateValue = "1970-01-01";
        }

        return {
          slug: filename.replace(/\.md$/, ""),
          title: data.title || "Unbenannter Artikel",
          date: dateValue,
          excerpt: data.excerpt || content.slice(0, 150) + "...",
        };
      });

    // Sortiere nach Datum (neueste zuerst)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    console.error("❌ Fehler beim Lesen der Inhalte:", error);
    return { props: { posts: [] } };
  }
}

export default function Home({ posts }) {
  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", lineHeight: "1.6" }}>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      {posts.length === 0 ? (
        <p>⚠️ Keine Artikel gefunden.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: "2rem" }}>
              <Link href={`/${post.slug}`}>
                <h2 style={{ color: "#0070f3", cursor: "pointer" }}>{post.title}</h2>
              </Link>
              <p style={{ color: "#555" }}>{post.date}</p>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
