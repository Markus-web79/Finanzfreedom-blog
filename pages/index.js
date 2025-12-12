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
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      title: data.title || "Ohne Titel",
      excerpt: data.description || "",
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
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Finanzwissen, das dich wirklich weiterbringt</h1>
        <p>
          Moderne Strategien für Vermögensaufbau, ETFs, Versicherungen &
          finanziellen Erfolg – verständlich erklärt.
        </p>
        <Link href="#artikel" className={styles.heroButton}>
          Jetzt starten →
        </Link>
      </section>

      {/* ARTIKEL */}
      <section id="artikel" className={styles.articles}>
        <h2>Aktuelle Artikel</h2>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className={styles.card}
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className={styles.readMore}>Weiterlesen →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
