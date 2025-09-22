import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

  const posts = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Fallbacks für fehlende Felder
    const slug = data.slug || file.replace(/\.md$/, "");
    const title = data.title || slug.replace(/-/g, " ");
    const date = data.date || new Date().toISOString().split("T")[0];
    const excerpt =
      data.excerpt ||
      (content.includes("META:")
        ? content.split("\n")[0].replace("META:", "").trim()
        : content.substring(0, 160) + "...");

    return { slug, title, date, excerpt };
  });

  // Willkommen immer nach oben
  posts.sort((a, b) => {
    if (a.slug === "willkommen") return -1;
    if (b.slug === "willkommen") return 1;
    return new Date(b.date) - new Date(a.date); // sonst nach Datum
  });

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ margin: "0" }}>
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
