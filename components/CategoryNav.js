// components/CategoryNav.js
import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import CATEGORY_CONFIG from "../config/categoryConfig.js";

export default function CategoryNav({ active }) {
  const categories = Object.values(CATEGORY_CONFIG);

  return (
    <nav className={styles.nav}>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/kategorie/${cat.slug}`}
          className={active === cat.slug ? styles.active : ""}
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}
