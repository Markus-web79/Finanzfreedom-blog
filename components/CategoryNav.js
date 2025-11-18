import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import categories from "../config/categories.json";

export default function CategoryNav({ active }) {
  // Dynamische Liste generieren
  const categoryList = Object.values(categories).map(cat => ({
    slug: cat.slug,
    label: cat.label
  }));

  return (
    <nav className={styles.nav}>
      {categoryList.map(cat => (
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
