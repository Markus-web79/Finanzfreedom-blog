import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith(".md"));

  const posts = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || file.replace(/\.md$/, ""),
      title: data.title || "Unbenannter Artikel",
      date: data.date || "1970-01-01",
      excerpt: data.excerpt || content.substring(0, 150) + "...",
    };
  });

  // Neueste zuerst
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1.5rem" }}>
            <h2>
              <Link href={`/pages/${post.slug}`} legacyBehavior>
                <a style={{ textDecoration: "none", color: "#0366d6" }}>
                  {post.title}
                </a>
              </Link>
            </h2>
            <small style={{ color: "gray" }}>
              {new Date(post.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
