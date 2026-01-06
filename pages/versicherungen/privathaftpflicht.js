import BackLink from "../../components/BackLink";
import styles from "../../styles/ArticlePage.module.css";

export default function Privathaftpflicht() {
  return (
    <div className={styles.page}>
      <BackLink
        href="/versicherungen"
        label="Zur Versicherungsübersicht"
      />

      <h1>Privathaftpflichtversicherung</h1>

      <p>
        Die Privathaftpflichtversicherung schützt dich vor den finanziellen
        Folgen von Schäden, die du anderen zufügst – oft in existenzieller Höhe.
      </p>

      <h2>Warum ist sie so wichtig?</h2>
      <p>
        Schon kleine Unachtsamkeiten können Schäden in sechsstelliger Höhe
        verursachen. Ohne Haftpflicht haftest du mit deinem gesamten Vermögen.
      </p>

      <h2>Worauf solltest du achten?</h2>
      <ul>
        <li>Deckungssumme mindestens 10 Mio. €</li>
        <li>Forderungsausfalldeckung</li>
        <li>Mitversicherung von Schlüsselverlust</li>
      </ul>
    </div>
  );
}
