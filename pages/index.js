import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  const posts = files.map((file) => {
    const fp = path.join(contentDir, file);
    const raw = fs.readFileSync(fp, "utf8");
    const { data } = matter(raw);

    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || "Unbenannter Artikel",
      date: data.date || "",
      excerpt: data.excerpt || "",
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
              {/* ✅ Hier wird jetzt "/pages/slug" verlinkt */}
              <Link href={`/pages/${post.slug}`}>{post.title}</Link>
            </h2>
            <small>{post.date}</small>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
