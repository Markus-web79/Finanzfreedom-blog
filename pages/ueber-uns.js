import Head from 'next/head';
import styles from '../styles/ueber-uns.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Über FinanzFreedom – Erfahre mehr über uns</title>
        <meta
          name="description"
          content="Erfahre, warum FinanzFreedom gegründet wurde. Unser Ziel: Finanzwissen einfach, ehrlich und unabhängig zu vermitteln."
        />
      </Head>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.aboutTitle}>Über FinanzFreedom</h1>
          <div className={styles.divider}></div>

          <p className={styles.aboutText}>
            <strong>FinanzFreedom</strong> wurde gegründet, um dir zu zeigen, wie du dein Geld klug verwalten
            und investieren kannst. Wir glauben, dass jeder Mensch das Potenzial hat, finanzielle Freiheit zu
            erreichen – mit dem richtigen Wissen und den passenden Tools.
          </p>

          <p className={styles.aboutText}>
            Unser Ziel ist es, komplexe Finanzthemen einfach, ehrlich und verständlich zu erklären – 
            ohne Fachjargon oder Verkaufsdruck.
          </p>

          <p className={styles.aboutText}>
            Wir arbeiten unabhängig und transparent, damit du echte Entscheidungen treffen kannst, 
            die dich deinem Ziel näherbringen: einem freien, selbstbestimmten Leben.
          </p>
        </div>
      </section>
    </>
  );
}
