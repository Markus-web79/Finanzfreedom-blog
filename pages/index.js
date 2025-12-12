import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(dir);

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
    };
  });

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Aktuelle Artikel</h2>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span>Weiterlesen →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
