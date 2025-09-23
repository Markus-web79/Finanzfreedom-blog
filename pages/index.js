import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "Unbenannter Artikel",
      date: data.date || "1970-01-01",
      excerpt: data.excerpt || content.slice(0, 150) + "...",
    };
  });

  // sortiere nach Datum (neueste zuerst)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // "Willkommen" an den Anfang setzen
  const welcomePost = posts.find((post) => post.slug === "willkommen");
  const otherPosts = posts.filter((post) => post.slug !== "willkommen");
  const sortedPosts = welcomePost ? [welcomePost, ...otherPosts] : posts;

  return {
    props: {
      posts: sortedPosts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>📈 FinanzFreedom Blog</h1>
      <p>Automatisch generierte Artikel über Finanzen & passives Einkommen.</p>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/pages/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
