import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // 🔧 Stelle sicher, dass das Datum ein String ist (verhindert Build-Fehler)
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

  // "Willkommen" an den Anfang setzen
  const welcomePost = posts.find((post) => post.slug === "willkommen");
  const otherPosts = posts.filter((post) => post.slug !== "willkommen");
  const sortedPosts = welcomePost ? [welcomePost, ...otherPosts] : posts;

  return {
    props: {
      // JSON-Serializable machen
      posts: JSON.parse(JSON.stringify(sortedPosts)),
    },
  };
}

export default function Home({ posts }) {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", lineHeight: "1.6" }}>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

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
    </div>
  );
}
