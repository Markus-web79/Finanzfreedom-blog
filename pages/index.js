import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du deine Finanzen aufbaust, sparst, investierst und finanzielle Freiheit erreichst – einfach und verständlich erklärt."
        />
      </Head>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>FinanzFreedom</h1>
          <p>Dein Weg zur finanziellen Freiheit – einfach, sicher und seriös.</p>
          <Link href="/willkommen" className={styles.cta}>
            Jetzt durchstarten 🚀
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Aktuelle Themen</h2>
          <div className={styles.grid}>
            {allPosts?.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Warum FinanzFreedom?</h2>
          <p>
            Wir zeigen dir, wie du dein Geld verstehst, sinnvoll anlegst und Schritt für Schritt
            finanzielle Freiheit erreichst – ohne Fachchinesisch oder unrealistische Versprechen.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} FinanzFreedom – Wissen. Freiheit. Zukunft.</p>
      </footer>
    </>
  );
}

// Optional: Beispiel-Props entfernen, wenn du getStaticProps nutzt
export async function getStaticProps() {
  return { props: { allPosts: [] } };
}
