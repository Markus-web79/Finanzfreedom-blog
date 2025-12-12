import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Finanzwissen, das dich wirklich weiterbringt</h1>
        <p>
          Moderne Strategien für Vermögensaufbau, ETFs, Versicherungen &
          finanziellen Erfolg – verständlich erklärt.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>

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
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");

  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".md", ""),
        title: data.title || "Ohne Titel",
        description: data.description || "",
      };
    });

  return {
    props: {
      posts,
    },
  };
}
