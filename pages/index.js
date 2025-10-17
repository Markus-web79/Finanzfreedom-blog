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

      let dateValue = data?.date;
      if (dateValue instanceof Date) {
        dateValue = dateValue.toISOString().split("T")[0];
      } else if (typeof dateValue !== "string") {
        dateValue = "1970-01-01";
      }

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data?.title || "Unbenannter Artikel",
        date: dateValue,
        excerpt: data?.excerpt || content.slice(0, 150) + "...",
      };
    });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const welcomePost = posts.find((p) => p.slug === "willkommen");
  const otherPosts = posts.filter((p) => p.slug !== "willkommen");
  const sorted = welcomePost ? [welcomePost, ...otherPosts] : posts;

  return { props: { posts: JSON.parse(JSON.stringify(sorted)) } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1rem" }}>
            {/* ⬇️ WICHTIG: richtiger Pfad */}
            <Link href={`/${post.slug}`}>
              <h2 style={{ margin: 0 }}>{post.title}</h2>
            </Link>
            <p style={{ margin: "0.25rem 0", color: "#555" }}>{post.date}</p>
            <p style={{ margin: 0 }}>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
