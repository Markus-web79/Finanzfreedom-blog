import BackLink from "../../components/BackLink";
import styles from "../../styles/Article.module.css";

export default function Privathaftpflicht() {
  return (
    <div className={styles.article}>
      <BackLink href="/versicherungen" label="Zurück zu Versicherungen" />

      <h1>Privathaftpflichtversicherung</h1>

      <p>
        Die Privathaftpflicht schützt dich vor finanziellen Folgen von Schäden,
        die du anderen zufügst.
      </p>

      <h2>Warum ist sie so wichtig?</h2>
      <p>
        Schon kleine Unachtsamkeiten können Schäden in existenzieller Höhe verursachen.
      </p>

      <h2>Worauf solltest du achten?</h2>
      <ul>
        <li>Deckungssumme mindestens 10 Mio. €</li>
        <li>Forderungsausfalldeckung</li>
        <li>Schlüsselverlust mitversichert</li>
      </ul>
    </div>
  );
}
