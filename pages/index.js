import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts()
    .filter((p) => p?.slug && p.slug !== "README")
    .slice(0, 9); // nur die neuesten 9 auf der Startseite

  return { props: { posts } };
}

export default function Home({ posts }) {
  const topics = [
    {
      title: "Investieren",
      desc: "ETFs, Depots, Strategie – klar & praxisnah.",
      href: "/blog?cat=investieren",
    },
    {
      title: "ETFs",
      desc: "Grundlagen, Sparpläne, Broker, Vergleiche.",
      href: "/blog?cat=etfs",
    },
    {
      title: "Versicherungen",
      desc: "Welche brauchst du wirklich – und welche nicht?",
      href: "/blog?cat=versicherungen",
    },
    {
      title: "Familie & Kinder",
      desc: "Kindersparpläne, Depots, Absicherung.",
      href: "/blog?cat=familie-kinder",
    },
  ];

  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom: Investieren, ETFs, Versicherungen – verständlich, unabhängig, portalartig."
        />
      </Head>

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Finanzportal statt Blog</p>
            <h1 className={styles.heroTitle}>
              Bau dir ein System für finanzielle Freiheit – Schritt für Schritt.
            </h1>
            <p className={styles.heroText}>
              Klare Anleitungen, Vergleiche und Tools rund um Investieren, ETFs und
              Versicherungen – ohne Bullshit, ohne Fachchinesisch.
            </p>

            <div className={styles.heroCtas}>
              <Link className={styles.primaryCta} href="/blog">
                Zum Portal starten →
              </Link>
              <Link className={styles.secondaryCta} href="/ueber-uns">
                Warum FinanzFreedom?
              </Link>
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Themen</h2>
          <div className={styles.grid}>
            {topics.map((t) => (
              <Link key={t.title} href={t.href} className={styles.card}>
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={styles.cardText}>{t.desc}</p>
                <span className={styles.cardLink}>Öffnen →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* LATEST */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Neu im Portal</h2>
            <Link href="/blog" className={styles.sectionAction}>
              Alle Artikel →
            </Link>
          </div>

          <div className={styles.articlesGrid}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.articleCard}>
                <div className={styles.articleTop}>
                  <h3 className={styles.articleTitle}>{post.title}</h3>
                  {post.category ? (
                    <span className={styles.badge}>{post.category}</span>
                  ) : null}
                </div>

                {post.excerpt ? (
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                ) : (
                  <p className={styles.articleExcerpt}>
                    Kurzbeschreibung folgt – Inhalt ist bereits verfügbar.
                  </p>
                )}

                <div className={styles.articleFooter}>
                  <span className={styles.readMore}>Lesen →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
