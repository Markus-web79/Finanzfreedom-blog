import Head from "next/head";
import styles from "../styles/Page.module.css";

export default function Willkommen() {
  return (
    <>
      <Head>
        <title>Willkommen – FinanzFreedom</title>
        <meta
          name="description"
          content="Willkommen bei FinanzFreedom – dein Startpunkt für finanzielle Bildung, Freiheit und Vermögensaufbau."
        />
      </Head>

      <main className={styles.page}>
        <h1>Willkommen bei FinanzFreedom</h1>
        <p>
          Schön, dass du hier bist! 🎉  
          FinanzFreedom ist dein digitaler Begleiter auf dem Weg zu mehr
          Unabhängigkeit, Wohlstand und Sicherheit.
        </p>
        <p>
          Unser Ziel ist es, dir die besten Strategien, Tipps und Tools zu
          zeigen, mit denen du dein Geld für dich arbeiten lassen kannst.
        </p>
        <p>
          Starte jetzt mit unseren beliebtesten Artikeln oder entdecke den{" "}
          <a href="/ueber-uns">Hintergrund zu unserer Mission</a>.
        </p>
      </main>
    </>
  );
}
