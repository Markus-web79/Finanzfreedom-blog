import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");

  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || null,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Aktuelle Artikel</h1>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className={styles.card}
          >
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span>Weiterlesen →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
