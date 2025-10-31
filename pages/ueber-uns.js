import Head from "next/head";
import styles from "../styles/page.module.css";

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über uns – FinanzFreedom</title>
        <meta
          name="description"
          content="Erfahre mehr über FinanzFreedom – unsere Mission ist es, dir den Weg in die finanzielle Freiheit einfach und verständlich zu machen."
        />
      </Head>

      <main className={styles.page}>
        <h1>Über FinanzFreedom</h1>
        <p>
          FinanzFreedom wurde gegründet, um dir zu zeigen, wie du dein Geld klug
          verwalten und investieren kannst. Wir glauben, dass jeder Mensch das
          Potenzial hat, finanzielle Freiheit zu erreichen – mit dem richtigen
          Wissen und den passenden Tools.
        </p>
        <p>
          Unser Ziel ist es, komplexe Finanzthemen einfach, ehrlich und
          verständlich zu erklären – ohne Fachjargon oder Verkaufsdruck.
        </p>
        <p>
          Wir arbeiten unabhängig und transparent, damit du echte Entscheidungen
          treffen kannst, die dich deinem Ziel näherbringen: einem freien,
          selbstbestimmten Leben.
        </p>
      </main>
    </>
  );
}
