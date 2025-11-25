import CATEGORY_CONFIG from "../../config/categoryConfig";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

export default function KategorieOverview() {
  const categories = Object.values(CATEGORY_CONFIG);

  return (
    <div className={styles.wrapper}>
      <h1>Kategorien</h1>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/kategorie/${cat.slug}`}
            className={styles.card}
          >
            <div className={styles.icon}>{cat.icon}</div>
            <h2>{cat.label}</h2>
            <p>{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
