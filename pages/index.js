import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  const posts = files.map(file => {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: data.slug || file.replace(/\.md$/, ""),
      title: data.title || "Unbenannter Artikel",
      date: data.date || "1970-01-01",
      excerpt: data.excerpt || "",
    };
  });

  // "Willkommen" finden
  const welcome = posts.find(p => p.slug === "willkommen");

  // Rest nach Datum sortieren
  const others = posts
    .filter(p => p.slug !== "willkommen")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const orderedPosts = welcome ? [welcome, ...others] : others;

  return { props: { posts: orderedPosts } };
}

export default function Home({ posts }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(post => (
          <li key={post.slug} style={{ marginBottom: "1.5rem" }}>
            <h2>
              <Link href={`/pages/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p><em>{post.date}</em></p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
