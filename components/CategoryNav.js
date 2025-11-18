import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import categoriesData from "../config/categories.json";

export default function CategoryNav({ active }) {
  // Kategorien-Array aus der config-Datei
  const categories = Object.values(categoriesData);

  return (
    <nav className={styles.nav}>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/${cat.slug}`}
          className={active === cat.slug ? styles.active : ""}
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}
