import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Hero from "../components/Hero";
import CategoryNav from "../components/CategoryNav";

export default function HomePage({ posts }) {
  // Sicherheitsprüfung: falls keine Daten vorhanden sind
  const safePosts = posts && typeof posts === "object" ? posts : {};

  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzielle Freiheit beginnt heute</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien, die wirklich funktionieren."
        />
      </Head>

      <Hero />
      <CategoryNav />

      <main className={styles.main}>
        {Object.keys(safePosts).length === 0 ? (
          <p style={{ textAlign: "center", color: "#999" }}>
            Keine Artikel gefunden. Bitte überprüfe den Content-Ordner.
          </p>
        ) : (
          Object.keys(safePosts).map((category) => (
            <section key={category} className={styles.container}>
              <h2 className={styles.sectionTitle}>
                {category.replace("-", " ").toUpperCase()}
              </h2>

              <div className={styles.grid}>
                {safePosts[category].map((post) => (
<div key={post.slug} className={styles.card}>
  <div className={styles.iconWrapper}>
    <img
      src={`/icons/${post.category || 'default'}.svg`}
      alt={post.category}
      className={styles.cardIcon}
    />
  </div>
  <h3>{post.title}</h3>
  <p>{post.excerpt || 'Finanzwissen einfach erklärt.'}</p>
  <Link href={`/${post.category}/${post.slug}`} className={styles.readMore}>
    Weiterlesen
  </Link>
</div>
export async function getStaticProps() {
  const fs = await import("fs");
  const path = await import("path");
  const matter = (await import("gray-matter")).default;

  const contentDir = path.resolve("content");
  let posts = {};

  try {
    const categories = fs.readdirSync(contentDir);

    for (const category of categories) {
      const categoryPath = path.join(contentDir, category);
      const files = fs.readdirSync(categoryPath);

      posts[category] = files.map((file) => {
        const filePath = path.join(categoryPath, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
          title: data.title || file.replace(".md", ""),
          slug: file.replace(".md", ""),
          category,
          excerpt: data.excerpt || "",
        };
      });
    }
  } catch (error) {
    console.error("Fehler beim Lesen des Content-Ordners:", error);
  }

  return { props: { posts } };
}
