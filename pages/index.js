import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import CategoryNav from "../components/CategoryNav";
import Hero from "../components/Hero"; // <-- Hero wieder eingebunden

export default function HomePage({ posts = {} }) {
  // Sicherheitsprüfung
  const safePosts = posts && typeof posts === "object" ? posts : {};

  return (
    <>
      <Head>
        <title>FinanzFreedom – Wissen, das dich frei macht</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien, die wirklich funktionieren."
        />
      </Head>

      <Hero /> {/* <-- Das bringt dein Hero-Bild zurück */}

      <CategoryNav />

      <main className={styles.main}>
        {Object.keys(safePosts).map((category) => (
          <section key={category} className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {category.replace(/-/g, " ").toUpperCase()}
            </h2>

            <div className={styles.grid}>
              {safePosts[category].map((post) => (
                <div key={post.slug} className={styles.card}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/${post.slug}`} className={styles.readMore}>
                    Weiterlesen →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Importiere dynamisch, um fs nur im Build zu nutzen
  const fs = await import("fs");
  const path = await import("path");
  const matter = (await import("gray-matter")).default;

  const contentDir = path.resolve("content");
  const posts = {};

  function readPostsRecursively(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        readPostsRecursively(fullPath);
      } else if (entry.name.endsWith(".md")) {
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data, content } = matter(fileContent);
        const category = data.category || "allgemein";
        if (!posts[category]) posts[category] = [];
        posts[category].push({
          ...data,
          slug: entry.name.replace(".md", ""),
          excerpt:
            data.excerpt ||
            content.substring(0, 150).replace(/\n/g, " ") + "...",
        });
      }
    }
  }

  readPostsRecursively(contentDir);

  return {
    props: {
      posts,
    },
  };
}
