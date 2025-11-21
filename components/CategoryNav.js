import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import { CATEGORY_CONFIG } from "../config/categoriesConfig";

export default function CategoryNav({ active }) {
  // Kategorien aus der Config extrahieren
  const categories = Object.values(CATEGORY_CONFIG).map(cat => ({
    slug: cat.slug,
    label: cat.label
  }));

  return (
    <nav className={styles.nav}>
      {categories.map(cat => (
        <Link 
          key={cat.slug} 
          href={`/category/${cat.slug}`} 
          className={active === cat.slug ? styles.active : ""}
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}
