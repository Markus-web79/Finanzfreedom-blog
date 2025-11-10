import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="FinanzFreedom: Lerne, investiere und erreiche finanzielle Freiheit mit Wissen, Tools und Strategien rund um Geld, ETFs und Versicherungen."
        />
      </Head>

      <main className={styles.main}>
        <h1>FinanzFreedom – Dein Weg zur finanziellen Freiheit</h1>
        <p style={{ color: "#ccc", maxWidth: "800px", textAlign: "center", marginTop: "0.5rem" }}>
          Praxisnahe Finanzbildung, clevere Strategien und aktuelle Tipps für deinen Vermögensaufbau.
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
              <div className={styles.category}>
                {post.frontmatter.category || "Allgemein"}
              </div>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.description}</p>
              <span className={styles.readMore}>Weiterlesen →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "content");

  function getAllMarkdownFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let files = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(getAllMarkdownFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContent);

        files.push({
          slug: path
            .relative(contentDir, fullPath)
            .replace(/\.md$/, "")
            .split(path.sep)
            .join("/"),
          frontmatter: data,
        });
      }
    }

    return files;
  }

  const posts = getAllMarkdownFiles(contentDir);

  return {
    props: {
      posts,
    },
  };
}
