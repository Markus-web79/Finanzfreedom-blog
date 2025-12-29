import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom: Investieren, Versicherungen, Sparen & Finanzwissen – verständlich, unabhängig und portalartig."
        />
      </Head>

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>FinanzFreedom</h1>
          <p>
            Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau
            und finanzielle Freiheit.
          </p>
        </section>

        {/* PORTAL-KARTEN */}
        <section className={styles.cards}>

          <Link href="/investieren" className={styles.card}>
            <h3>Investieren</h3>
            <p>
              ETFs, Aktien, Sparpläne & Strategien für langfristigen Vermögensaufbau.
            </p>
          </Link>

          <Link href="/versicherungen" className={styles.card}>
            <h3>Versicherungen</h3>
            <p>
              Welche Versicherungen wirklich sinnvoll sind – klar & unabhängig erklärt.
            </p>
          </Link>

          <Link href="/sparen-haushalt" className={styles.card}>
            <h3>Sparen & Haushalt</h3>
            <p>
              Mehr Geld behalten, Ausgaben optimieren und finanzielle Kontrolle gewinnen.
            </p>
          </Link>

          <Link href="/wissen" className={styles.card}>
            <h3>Wissen</h3>
            <p>
              Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt.
            </p>
          </Link>

        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <p>Du willst tiefer einsteigen?</p>
          <Link href="/blog" className={styles.blogLink}>
            → Zum Blog
          </Link>
        </section>

      </main>
    </>
  );
}
