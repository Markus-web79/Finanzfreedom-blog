import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import CATEGORY_CONFIG from "../config/categoriesConfig";

export default function CategoryNav({ active }) {

  // Alle Kategorien aus dem Config-File holen
  const categories = Object.keys(CATEGORY_CONFIG).map((key) => ({
    slug: CATEGORY_CONFIG[key].slug,
    label: CATEGORY_CONFIG[key].shortLabel || CATEGORY_CONFIG[key].label,
  }));

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
